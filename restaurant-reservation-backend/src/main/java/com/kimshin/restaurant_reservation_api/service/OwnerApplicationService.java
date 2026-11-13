
package com.kimshin.restaurant_reservation_api.service;

import com.kimshin.restaurant_reservation_api.DTO.OwnerApplicationRequest;
import com.kimshin.restaurant_reservation_api.DTO.OwnerApplicationResponse;
import com.kimshin.restaurant_reservation_api.domain.Member;
import com.kimshin.restaurant_reservation_api.domain.OwnerApplication;
import com.kimshin.restaurant_reservation_api.domain.Role;
import com.kimshin.restaurant_reservation_api.repository.MemberRepository;
import com.kimshin.restaurant_reservation_api.repository.OwnerApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OwnerApplicationService {

    private final OwnerApplicationRepository ownerApplicationRepository;
    private final MemberRepository memberRepository;

    // 식당 등록 신청 저장
    public void createOwnerApplication(
            OwnerApplicationRequest request,
            Long memberId
    ) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IllegalArgumentException("회원을 찾을 수 없습니다."));

        OwnerApplication application = new OwnerApplication(
                request.getRestaurantName(),
                request.getRestaurantPhone(),
                request.getRestaurantAddress(),
                member
        );

        ownerApplicationRepository.save(application);
    }

    // 식당 등록 신청 목록 조회
    @Transactional(readOnly = true)
    public List<OwnerApplicationResponse> getOwnerApplications() {
        return ownerApplicationRepository.findAll().stream()
                .map(application -> new OwnerApplicationResponse(application))
                .collect(Collectors.toList());
    }

    // 식당 등록 신청 승인 및 거절
    @Transactional
    public void updateOwnerApplicationStatus(
            Long applicationId,
            OwnerApplication.ApplicationStatus status
    ) {
        // 신청 내역 조회
        OwnerApplication application = ownerApplicationRepository.findById(applicationId)
                .orElseThrow(() -> new IllegalArgumentException("신청 내역을 찾을 수 없습니다."));

        // 이미 처리된 신청인지 확인
        if (application.getStatus() != OwnerApplication.ApplicationStatus.PENDING) {
            throw new IllegalStateException("이미 처리된 신청입니다.");
        }

        // 승인 처리
        if (status == OwnerApplication.ApplicationStatus.APPROVED) {
            application.changeStatus(status);
            application.getMember().changeRole(Role.OWNER);

            // 거절 처리
        } else if (status == OwnerApplication.ApplicationStatus.REJECTED) {
            application.changeStatus(status);

        } else {
            throw new IllegalArgumentException("잘못된 신청 상태입니다.");
        }
    }
}

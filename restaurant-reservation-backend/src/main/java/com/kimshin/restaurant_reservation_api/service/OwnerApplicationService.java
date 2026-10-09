package com.kimshin.restaurant_reservation_api.service;


import com.kimshin.restaurant_reservation_api.DTO.OwnerApplicationRequest;
import com.kimshin.restaurant_reservation_api.domain.Member;
import com.kimshin.restaurant_reservation_api.domain.OwnerApplication;
import com.kimshin.restaurant_reservation_api.repository.MemberRepository;
import com.kimshin.restaurant_reservation_api.repository.OwnerApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OwnerApplicationService {

    private final OwnerApplicationRepository ownerApplicationRepository;
    private final MemberRepository memberRepository;


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


}

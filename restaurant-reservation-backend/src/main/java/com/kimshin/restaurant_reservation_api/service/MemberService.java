package com.kimshin.restaurant_reservation_api.service;

import com.kimshin.restaurant_reservation_api.DTO.MemberRequest;
import com.kimshin.restaurant_reservation_api.repository.MemberRepository;
import com.kimshin.restaurant_reservation_api.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    // 회원가입
    public Member join(MemberRequest request) {
        validateDuplicateMember(request.getEmail());

        String encodedPassword = passwordEncoder.encode(request.getPassword());

        Member member = new Member(request.getName(),request.getEmail(),encodedPassword);

        return memberRepository.save(member);
    }

    // 이메일 중복 검증
    private void validateDuplicateMember(String email){
        if (findMemberByEmail(email) != null){
            throw new IllegalStateException("이미 존재하는 이메일입니다.");
        }
    }
    // 이메일로 회원 조회
    public Member findMemberByEmail(String email) {
        return memberRepository.findByEmail(email);
    }

    // 전체 회원 조회
    public List<Member> findAllMembers() {
        return memberRepository.findAll();
    }

    // 회원 Id 조회
    public Member findById(Long memberId){
        return memberRepository.findById(memberId)
                .orElseThrow(()-> new IllegalArgumentException("회원을 찾을 수 없습니다."));

    }
}
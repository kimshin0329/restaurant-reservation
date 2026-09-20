package com.kimshin.restaurant_reservation_api.service;

import com.kimshin.restaurant_reservation_api.repository.MemberRepository;
import com.kimshin.restaurant_reservation_api.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    // 회원가입
    public Member join(String name, String email,String password) {
        validateDuplicateMember(email);

        String encodedPassword = passwordEncoder.encode(password);

        Member member = new Member(name,email,encodedPassword);

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
}
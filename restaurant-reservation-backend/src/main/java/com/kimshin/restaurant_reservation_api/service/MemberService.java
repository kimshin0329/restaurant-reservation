package com.kimshin.restaurant_reservation_api.service;

import com.kimshin.restaurant_reservation_api.repository.MemberRepository;
import com.kimshin.restaurant_reservation_api.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public Member join(String name, String email) {
        validateDuplicateMember(email);
        Member member = new Member(name, email);
        return memberRepository.save(member);
    }

    private void validateDuplicateMember(String email){
        if (findMemberByEmail(email) != null){
            throw new IllegalStateException("이미 존재하는 이메일입니다.");
        }
    }

    public Member findMemberByEmail(String email) {
        return memberRepository.findByEmail(email);
    }


    public List<Member> findAllMembers() {
        return memberRepository.findAll();
    }
}
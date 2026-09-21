package com.kimshin.restaurant_reservation_api.controller;

import com.kimshin.restaurant_reservation_api.DTO.MemberRequest;
import com.kimshin.restaurant_reservation_api.DTO.MemberResponse;
import com.kimshin.restaurant_reservation_api.domain.Member;
import com.kimshin.restaurant_reservation_api.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor

public class MemberController {
    private final MemberService memberService;


    //회원가입 요청
    @PostMapping
    public MemberResponse join(@RequestBody MemberRequest request) {
        Member member = memberService.join(request);
        return new MemberResponse(member);
    }

    @GetMapping("/me")
    public MemberResponse getMyInfo(Authentication authentication) {
        Long memberId = Long.parseLong(authentication.getName());
        Member member = memberService.findById(memberId);
        return new MemberResponse(member);
    }


}





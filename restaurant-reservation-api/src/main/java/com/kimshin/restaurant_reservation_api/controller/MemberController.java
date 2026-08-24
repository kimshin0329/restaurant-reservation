package com.kimshin.restaurant_reservation_api.controller;

import com.kimshin.restaurant_reservation_api.DTO.MemberRequest;
import com.kimshin.restaurant_reservation_api.domain.Member;
import com.kimshin.restaurant_reservation_api.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor

public class MemberController {
    private final MemberService memberService;

    @PostMapping
    public Member join(@RequestBody MemberRequest request) {
        return memberService.join(request.getName(), request.getEmail());
    }
}



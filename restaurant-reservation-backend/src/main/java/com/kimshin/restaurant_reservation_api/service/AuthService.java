package com.kimshin.restaurant_reservation_api.service;

import com.kimshin.restaurant_reservation_api.DTO.LoginRequest;
import com.kimshin.restaurant_reservation_api.DTO.LoginResponse;
import com.kimshin.restaurant_reservation_api.domain.Member;
import com.kimshin.restaurant_reservation_api.repository.MemberRepository;
import com.kimshin.restaurant_reservation_api.security.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.List;
@Service
@RequiredArgsConstructor
public class AuthService {

    private final PasswordEncoder passwordEncoder;
    private final MemberService memberService;
    private final JwtProvider jwtProvider;





    // 로그인 (accessToken 발급)
    public LoginResponse login (LoginRequest request){
       Member member =  validateLogin(request);
       String accessToken = jwtProvider.createAccessToken(member);


    return new LoginResponse(accessToken);
    }

    // 이메일, 비밀번호 검증
    private Member validateLogin(LoginRequest request){

        Member member = memberService.findMemberByEmail(request.getEmail());
        if (member == null || !passwordEncoder.matches(request.getPassword(), member.getPassword())){
            throw new IllegalStateException("이메일 또는 비밀번호가 일치하지 않습니다.");
        }

        return member;
    }













}


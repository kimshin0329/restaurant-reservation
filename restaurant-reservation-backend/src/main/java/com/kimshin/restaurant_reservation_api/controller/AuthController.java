package com.kimshin.restaurant_reservation_api.controller;

import com.kimshin.restaurant_reservation_api.DTO.LoginRequest;
import com.kimshin.restaurant_reservation_api.DTO.LoginResponse;
import com.kimshin.restaurant_reservation_api.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;


    // 로그인 요청
    @PostMapping("/login")
    public LoginResponse Login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }

}

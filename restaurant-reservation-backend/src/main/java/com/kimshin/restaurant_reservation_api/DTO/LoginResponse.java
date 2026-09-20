package com.kimshin.restaurant_reservation_api.DTO;

public class LoginResponse {

    private String accessToken;

    public LoginResponse (String accessToken){
        this.accessToken = accessToken;
    }

    // accessToken 불러오기
    public String getAccessToken(){
        return accessToken;
    }
}

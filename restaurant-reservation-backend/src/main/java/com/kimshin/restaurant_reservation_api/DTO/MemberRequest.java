package com.kimshin.restaurant_reservation_api.DTO;

import lombok.Getter;


// 회원정보 반환(비밀번호 포함)
@Getter
public class MemberRequest {

    private String name;
    private String email;
    private String password;

}

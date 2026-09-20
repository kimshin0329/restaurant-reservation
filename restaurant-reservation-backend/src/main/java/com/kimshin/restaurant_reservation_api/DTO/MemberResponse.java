package com.kimshin.restaurant_reservation_api.DTO;

import com.kimshin.restaurant_reservation_api.domain.Member;
import lombok.Getter;



// 비밀번호를 제외하고 회원정보 반환
@Getter
public class MemberResponse {

    private Long id;
    private String name;
    private String email;

    public MemberResponse(Member member) {
        this.id = member.getId();
        this.name = member.getName();
        this.email = member.getEmail();
    }
}
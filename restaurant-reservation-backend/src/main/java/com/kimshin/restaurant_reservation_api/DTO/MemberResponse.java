package com.kimshin.restaurant_reservation_api.DTO;

import com.kimshin.restaurant_reservation_api.domain.Member;
import lombok.Getter;

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
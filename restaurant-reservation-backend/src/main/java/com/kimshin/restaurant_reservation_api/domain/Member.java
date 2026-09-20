package com.kimshin.restaurant_reservation_api.domain;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
public class Member {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String password;

    // 권한 (기본값 CUSTOMER)
    @Enumerated(EnumType.STRING)
    private Role role = Role.CUSTOMER;


    //JPA 엔티티 생성을 위한 기본 생성자
    protected Member() {}


    //회원 정보를 저장하는 엔티티
    public Member(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

}

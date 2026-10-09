package com.kimshin.restaurant_reservation_api.domain;


import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Getter
public class OwnerApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String restaurantName;
    private String restaurantPhone;
    private String restaurantAddress;



    // 신청 상태 기본값
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ApplicationStatus status = ApplicationStatus.PENDING;

    // 한 사용자가 여러 개의 신청 가능
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;


    // 신청 상태 정의
    public enum ApplicationStatus {
        PENDING, // 관리자 검토 대기
        APPROVED, // 승인 완료
        REJECTED // 승인 거절
    }


    //신청 날짜
    private LocalDateTime createdAt;

    @PrePersist
    @Column(nullable = false, updatable = false)
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    //JPA 엔티티 생성을 위한 기본 생성자
    protected OwnerApplication() {}





    public OwnerApplication(String restaurantName, String restaurantPhone , String restaurantAddress,Member member) {
        this.restaurantName = restaurantName;
        this.restaurantPhone = restaurantPhone;
        this.restaurantAddress = restaurantAddress;
        this.member =  member;
    }
}

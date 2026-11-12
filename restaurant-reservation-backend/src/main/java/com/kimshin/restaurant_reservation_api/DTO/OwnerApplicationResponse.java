package com.kimshin.restaurant_reservation_api.DTO;

import com.kimshin.restaurant_reservation_api.domain.OwnerApplication;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class OwnerApplicationResponse {

    private Long id;
    private String restaurantName;
    private String restaurantPhone;
    private String restaurantAddress;
    private OwnerApplication.ApplicationStatus status;
    private LocalDateTime createdAt;

    private Long memberId;
    private String representativeName;

    public OwnerApplicationResponse(OwnerApplication application) {
        this.id = application.getId();
        this.restaurantName = application.getRestaurantName();
        this.restaurantPhone = application.getRestaurantPhone();
        this.restaurantAddress = application.getRestaurantAddress();
        this.status = application.getStatus();
        this.createdAt = application.getCreatedAt();

        this.memberId = application.getMember().getId();
        this.representativeName = application.getMember().getName();
    }
}
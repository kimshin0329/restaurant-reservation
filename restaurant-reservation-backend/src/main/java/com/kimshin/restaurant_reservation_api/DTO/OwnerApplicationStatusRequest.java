package com.kimshin.restaurant_reservation_api.DTO;

import com.kimshin.restaurant_reservation_api.domain.OwnerApplication;
import lombok.Getter;

@Getter
public class OwnerApplicationStatusRequest {

    private OwnerApplication.ApplicationStatus status;
}
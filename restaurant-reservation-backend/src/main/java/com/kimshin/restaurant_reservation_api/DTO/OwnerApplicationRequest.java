package com.kimshin.restaurant_reservation_api.DTO;


import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
// 식당 등록 신청시 DTO
public class OwnerApplicationRequest {
    @NotBlank(message = "식당 이름을 입력해주세요.")
    private String restaurantName;
    @NotBlank(message = "식당 연락처를 입력해주세요.")
    private String restaurantPhone;
    @NotBlank(message = "식당 주소를 입력해주세요.")
    private String restaurantAddress;
}

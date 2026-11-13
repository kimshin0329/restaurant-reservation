package com.kimshin.restaurant_reservation_api.controller;


import com.kimshin.restaurant_reservation_api.DTO.OwnerApplicationResponse;
import com.kimshin.restaurant_reservation_api.DTO.OwnerApplicationStatusRequest;
import com.kimshin.restaurant_reservation_api.service.OwnerApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final OwnerApplicationService ownerApplicationService;


    // 식당 등록 신청 정보 불러오기
    @GetMapping("/owner-applications")
    public List<OwnerApplicationResponse> getOwnerApplications(){
        return ownerApplicationService.getOwnerApplications();

    }

    // 식당 등록 신청 상태 변경하기
    @PatchMapping("/owner-applications/{id}")
    public void updateOwnerApplicationStatus(
            @PathVariable Long id,
            @RequestBody OwnerApplicationStatusRequest request
    ) {
        ownerApplicationService.updateOwnerApplicationStatus(
                id,
                request.getStatus()
        );
    }
}

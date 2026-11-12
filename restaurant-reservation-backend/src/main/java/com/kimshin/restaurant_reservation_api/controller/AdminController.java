package com.kimshin.restaurant_reservation_api.controller;


import com.kimshin.restaurant_reservation_api.DTO.MemberRequest;
import com.kimshin.restaurant_reservation_api.DTO.OwnerApplicationResponse;
import com.kimshin.restaurant_reservation_api.service.OwnerApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final OwnerApplicationService ownerApplicationService;


    @GetMapping("/owner-applications")
    public List<OwnerApplicationResponse> getOwnerApplicaions(){
        return ownerApplicationService.getOwnerApplications();

    }
}

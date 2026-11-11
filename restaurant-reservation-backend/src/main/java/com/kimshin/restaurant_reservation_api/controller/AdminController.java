package com.kimshin.restaurant_reservation_api.controller;


import com.kimshin.restaurant_reservation_api.service.OwnerApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {


    private final OwnerApplicationService ownerApplicationService;
}

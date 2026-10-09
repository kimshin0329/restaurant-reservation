package com.kimshin.restaurant_reservation_api.controller;

import com.kimshin.restaurant_reservation_api.DTO.OwnerApplicationRequest;
import com.kimshin.restaurant_reservation_api.domain.OwnerApplication;
import com.kimshin.restaurant_reservation_api.service.OwnerApplicationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/owner-applications")
@RequiredArgsConstructor
public class OwnerApplicationController {

    private final OwnerApplicationService ownerApplicationService;



    @PostMapping
    public ResponseEntity<Void> createOwnerApplication(@Valid @RequestBody OwnerApplicationRequest request) {
        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        Long memberId = Long.valueOf(authentication.getName());

        ownerApplicationService.createOwnerApplication(request, memberId);
        return ResponseEntity.status(HttpStatus.CREATED).build();

    }



}

package com.kimshin.restaurant_reservation_api.repository;

import com.kimshin.restaurant_reservation_api.domain.OwnerApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnerApplicationRepository extends JpaRepository<OwnerApplication, Long> {

}
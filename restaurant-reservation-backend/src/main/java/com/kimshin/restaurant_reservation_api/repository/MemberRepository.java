package com.kimshin.restaurant_reservation_api.repository;

import com.kimshin.restaurant_reservation_api.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Member findByEmail(String email);
}
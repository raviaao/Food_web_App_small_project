package com.order.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.order.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
	
    Admin findByEmail(String email);
}
package com.order.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.order.entity.Order;
import com.order.service.OrderService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/orders")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.saveOrder(order);
        return ResponseEntity.ok(savedOrder);
    }

    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }
}
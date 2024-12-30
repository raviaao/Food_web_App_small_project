package com.order.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.order.entity.Order;
import com.order.repositories.OrderRepository;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}

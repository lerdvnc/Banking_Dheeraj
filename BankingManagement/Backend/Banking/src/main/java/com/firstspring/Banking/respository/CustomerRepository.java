package com.firstspring.Banking.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.firstspring.Banking.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long>   {

	Customer findByEmailAndPassword(String email, String password);

	Customer findByaccountno(String accountNum);


}

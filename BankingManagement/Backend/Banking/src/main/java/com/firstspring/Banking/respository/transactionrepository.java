package com.firstspring.Banking.respository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.firstspring.Banking.entity.transaction;

@Repository
public interface transactionrepository extends JpaRepository<transaction, Long> {

	List<transaction> findAllByaccountno(String Accountno);


	}


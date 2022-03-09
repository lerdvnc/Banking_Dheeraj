package com.firstspring.Banking.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.firstspring.Banking.entity.Customer;
import com.firstspring.Banking.entity.login;
import com.firstspring.Banking.respository.CustomerRepository;
@Service
//service class contains business logic 
public class customerservices {
	@Autowired
	private CustomerRepository cr;
	public Customer Save (Customer c)
	{
		Random rand =new Random();
		String accountnumber =String.valueOf(rand.nextInt(1000000));
		c.setAccountno(accountnumber);
		return cr.save(c);
	}
	
	public Customer Update (Customer c)
	{
		return cr.save(c);//its the same 'save' method for both save and update
	}

	
	public void Delete (@PathVariable Long id)
	{
		cr.deleteById(id);
	}

	public Optional<Customer> getone (@PathVariable Long id)
	{
		return cr.findById(id);
	}
	
	public List<Customer> getall ()
	{
		return cr.findAll();
	}

	public Customer authenticate(login l) {
		return cr.findByEmailAndPassword(l.getEmail(), l.getPassword());
		//it will return null if no values are entered.
	}

	public Customer getbalance(String accountNum) {
		return cr.findByaccountno(accountNum);
	}

//	public Customer passwordchng(login l) {
//		
//		return cr.passwordchng();
//	}

}

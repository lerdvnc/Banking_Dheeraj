package com.firstspring.Banking.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.firstspring.Banking.entity.Customer;
import com.firstspring.Banking.entity.fundtransfer;
import com.firstspring.Banking.entity.login;
import com.firstspring.Banking.entity.transaction;
import com.firstspring.Banking.service.customerservices;
import com.firstspring.Banking.service.transactionservices;


@RestController
@CrossOrigin(origins = {"http://localhost:8080/","http://localhost:8090/"})
public class CustomerController {
	
	@Autowired
	private customerservices cs;//because controller depends on service layer
	
	@Autowired
	private transactionservices ts;//because controller depends on service layer
	
	

	@PostMapping("/customer")
public Customer Save (@RequestBody Customer c)
{
	return cs.Save(c);
}

@PutMapping("/customer")//dont ever have same mapping with same parameters passed.
public Customer Update (@RequestBody Customer c)
{
	return cs.Update(c);
}

@DeleteMapping("/customer/{id}")
public void Delete (@PathVariable Long id)//pathvariable annotation is used whenever you pass nmber in url
{
cs.Delete(id);
}


@GetMapping("/customer/{id}")
public Optional<Customer> getone (@PathVariable Long id)
{
	return  cs.getone(id);
}

@GetMapping("/customer")
public List<Customer> getall ()
{
	return cs.getall();
}
@PostMapping("/login")
public Customer authentication (@RequestBody login l)
{
	return cs.authenticate(l);
}

@PostMapping("/deposite")
public String deposite (@RequestBody transaction t)
{
	return ts.deposite(t);
}

@PostMapping("/withdraw")
public String withdraw (@RequestBody transaction t)
{
	return ts.withdraw(t);
}

@PostMapping("/fundtransfers")
public String fundtransfer(@RequestBody fundtransfer trans) {
	return ts.fundtransfer(trans.getTransactions());
}

@GetMapping("/transaction/{accountNum}")
public List<transaction> getAllTransactions(@PathVariable String accountNum) {
	return ts.getAll(accountNum);
}

@GetMapping("/balance/{accountNum}")
public Customer getbalance(@PathVariable String accountNum) {
	return cs.getbalance(accountNum);
}

//@PostMapping("/passwordchng")
//public String passwordchng (@RequestBody login l)
//{
//	return cs.passwordchng(l);
//}

}


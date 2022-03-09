package com.firstspring.Banking.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // its a persistence entity
public class Customer {
	@Id // primary key
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long Id;
	// for auto increment of the primary key
	private String firstname;
	private String secondname;
	private String email;
	private String phone;
	private String password;
	private String dob;
	private String accountno;
	private String accounttype;
	private double balance;

	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getSecondname() {
		return secondname;
	}

	public void setSecondname(String secondname) {
		this.secondname = secondname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getAccountno() {
		return accountno;
	}

	public void setAccountno(String accountno) {
		this.accountno = accountno;
	}

	public String getAccounttype() {
		return accounttype;
	}

	public void setAccounttype(String accounttype) {
		this.accounttype = accounttype;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	@Override
	public String toString() {
		return "customer [Id=" + Id + ", firstname=" + firstname + ", secondname=" + secondname + ", email=" + email
				+ ", phone=" + phone + ", password=" + password + ", dob=" + dob + ", accountno=" + accountno
				+ ", accounttype=" + accounttype + ", balance=" + balance + "]";
	}

}

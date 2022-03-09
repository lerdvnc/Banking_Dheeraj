package com.firstspring.Banking.entity;

public class login {
private String email;
private String password;
private String passwordchng;

public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getPasswordchng() {
	return passwordchng;
}
public void setPasswordchng(String passwordchng) {
	this.passwordchng = passwordchng;
}
@Override
public String toString() {
	return "login [email=" + email + ", password=" + password + ", passwordchng=" + passwordchng + "]";
}



}

package com.firstspring.Banking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class controller {

	@GetMapping("/hello")
	@ResponseBody
	public String getHello()
	{
		return "Hello from controller";
	}
	
//	@GetMapping("/login")
//	public String getLogin()
//	{
//		return "login";
//	}
}

package com.firstspring.Banking.entity;

import java.util.List;

public class fundtransfer {

	private List<transaction> trans;

	public List<transaction> getTransactions() {
		return trans;
	}

	public void setTransactions(List<transaction> trans) {
		this.trans = trans;
	}

}
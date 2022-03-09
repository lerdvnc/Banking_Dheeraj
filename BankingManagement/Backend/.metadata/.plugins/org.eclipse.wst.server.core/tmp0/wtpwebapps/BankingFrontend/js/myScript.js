/**
 * 
 */
const BASE_URL ="http://localhost:8090";
const UI_URL ="http://localhost:8080/BankingFrontend";

function validate()
{
	alert('Register Successful');
	const firstname=document.getElementById('firstName').value;
	const lastname=document.getElementById('lastName').value;
	const email=document.getElementById('email').value;
	const dob=document.getElementById('dob').value;
	const phone=document.getElementById('phone').value;
	const password=document.getElementById('pass').value;
	const accountType=document.getElementById('accountType').value;

const customerObj = {};
customerObj.firstname=firstname;
customerObj.secondname=lastname;
customerObj.email=email;
customerObj.dob=dob;
customerObj.password=password;
customerObj.phone=phone;
customerObj.accounttype=accountType;

/** Hardcore passinf=g of the value
const customerObj={
	
        "accountno": "1122",
        "accounttype": "saving",
        "dob": "14-05-199",
        "firstname": "dheeraj",
        "secondname": "hetty",
        "phone": "8970187835",
        "email": "draz@gmail.com",
    
} */
addCustomer(customerObj)
async function addCustomer(customerObj) {
	const url = 'http://localhost:8090/customer';

	const data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(customerObj)
	};
	const rawResponse = await fetch(url, data);
	const customer = await rawResponse.json();
	if(customer)
	{
		alert('Registration Succesful');
		
		        window.location.href =UI_URL + '/login.html'; 
	}
	else{
		alert('404 error occured :(');
	}
	}
	console.log(customer);
}






function doLogin()
{
	const email=document.getElementById('email').value;
	const pass=document.getElementById('pass').value;
	const loginObj = {};
	loginObj.email=email;
	loginObj.password=pass;
	checkLogin(loginObj)
	}
async function checkLogin(loginObj) {
	//const url = 'http://localhost:8090/login';
	const url = BASE_URL + '/login';

	const data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			
		},
		body: JSON.stringify(loginObj)
	};
	const rawResponse = await fetch(url, data);
	const customer = await rawResponse.json();
	if(customer)
	{
		alert('Login Successful');
		console.log(customer.Account_no);
		localStorage.setItem("ACC_NUM" , customer.accountno);
		localStorage.setItem("F_NME" , customer.firstname);
		window.location.href = UI_URL + '/dashBoard.html';
		
	}
	else{
		alert('Login failed due to incorrect credentials');
	}
	console.log(customer);
	
	}
	
	function fetchAccountNum()
	{
	const span=document.getElementById('accountNum');
	const accountNumber= localStorage.getItem("ACC_NUM");
	span.innerHTML = accountNumber;
	}
	
	function fetchfirstname()
	{
	const fn=document.getElementById('fstname');
	const first= localStorage.getItem("F_NME");
	fn.innerHTML = first;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function deposite() {

	const accountNum = document.getElementById('accNum').value;
	const amount = document.getElementById('amount').value;
	const source = document.getElementById('source').value;
	const remark = document.getElementById('remark').value;

	const transactionObj = {}
	transactionObj.accountno = accountNum;
	transactionObj.amount = amount;
	transactionObj.source = source;
	transactionObj.remark = remark;
	transactionObj.type = "CREDIT";

	callDepositeAPI(transactionObj);

}

async function callDepositeAPI(transactionObj) {
	const url = BASE_URL + '/deposite';

	const data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(transactionObj)
	};
	const rawResponse = await fetch(url, data);
	const message = await rawResponse.text();
	alert(message);

	alert(message);
	window.location.href = UI_URL + '/dashBoard.html';
	console.log(message);
}

/************************** WithDraw MONEY************************************* */

function withdraw() {

	const accountNum = document.getElementById('accNum').value;
	const amount = document.getElementById('amount').value;
	const source = document.getElementById('source').value;
	const remark = document.getElementById('remark').value;

	const transactionObj = {}
	transactionObj.accountno = accountNum;
	transactionObj.amount = amount;
	transactionObj.source = source;
	transactionObj.remark = remark;
	transactionObj.type = "DEBIT";

	callWithdrawAPI(transactionObj);

}

async function callWithdrawAPI(transactionObj) {
	const url = BASE_URL + '/withdraw';

	const data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(transactionObj)
	};
	const rawResponse = await fetch(url, data);
	const message = await rawResponse.text();
	alert(message);
	window.location.href = UI_URL + '/dashBoard.html';
	console.log(message);
}


/************************** SHOW STATEMENTs************************************* */

function fetchTransactionData() {

	const accountNum = localStorage.getItem("ACC_NUM");

	callTransactionDataAPI(accountNum);

}

async function callTransactionDataAPI(accountNum) {

	const url = BASE_URL + '/transaction/' + accountNum;

	const data = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	};
	const rawResponse = await fetch(url, data);
	const allTransactions = await rawResponse.json();

	fillStatementTable(allTransactions)

	console.log(allTransactions);
}

function fillStatementTable(allTransactions) {

	const tbody = document.getElementById('statements');
	for (transaction of allTransactions) {


		let row = document.createElement('tr');

		/**let idCol = document.createElement('td');
		idCol.innerHTML = transaction.id; */

		let accountNumCol = document.createElement('td');
		accountNumCol.innerHTML = transaction.accountno;

		let amountCol = document.createElement('td');
		amountCol.innerHTML = transaction.amount;

		let typeCol = document.createElement('td');
		typeCol.innerHTML = transaction.type;

		let sourceCol = document.createElement('td');
		sourceCol.innerHTML = transaction.source;

		let dateCol = document.createElement('td');
		dateCol.innerHTML = transaction.date;

		let remarksCol = document.createElement('td');
		remarksCol.innerHTML = transaction.remark;

		//row.append(idCol);
		row.append(accountNumCol);
		row.append(amountCol);
		row.append(typeCol);
		row.append(sourceCol);
		row.append(dateCol);
		row.append(remarksCol);

		tbody.append(row);
	}
}

/************************** FUND TRANSFER************************************* */
function fundTransfer() {

	const payerAccNum = document.getElementById('payerAccNum').value;
	const payeeAccNum = document.getElementById('payeeAccNum').value;
	const amount = document.getElementById('amount').value;
	const source = document.getElementById('source').value;
	const remark = document.getElementById('remark').value;


	const transactionCreditObj = {}
	transactionCreditObj.accountno = payeeAccNum;
	transactionCreditObj.amount = amount;
	transactionCreditObj.source = source;
	transactionCreditObj.remark = remark;
	transactionCreditObj.type = "CREDIT";

	const transactionDebitObj = {}
	transactionDebitObj.accountno = payerAccNum;
	transactionDebitObj.amount = amount;
	transactionDebitObj.source = source;
	transactionDebitObj.remark = remark;
	transactionDebitObj.type = "DEBIT";

	const transactionArr = [];
	transactionArr.push(transactionDebitObj);
	transactionArr.push(transactionCreditObj);
	
	const transactionObj={transactions: transactionArr};

	callFundTransferAPI(transactionObj);

}

async function callFundTransferAPI(transactionObj) {
	const url = BASE_URL + '/fundtransfers';

	const data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(transactionObj)
	};
	 console.log(data); 
	const rawResponse = await fetch(url, data);
	const message = await rawResponse.text();
    alert(message);
	window.location.href = UI_URL + '/dashBoard.html';
	console.log(message);
}


function fetchbalance()
{

const accountNum = localStorage.getItem("ACC_NUM");

	balanceaPi(accountNum);


async function balanceaPi(accountNum) 
{
	const url = BASE_URL + '/balance/' + accountNum;

	const data = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
	};
	 console.log(data); 
	const rawResponse = await fetch(url, data);
	const msg = await rawResponse.json();
	
	if(msg)
	{
	console.log(msg);
	document.getElementById('firstname').innerHTML=msg.firstname;
	document.getElementById('secondname').innerHTML=msg.secondname;
	document.getElementById('email').innerHTML=msg.email;
	document.getElementById('phone').innerHTML=msg.phone;
	document.getElementById('dob').innerHTML=msg.dob;
	document.getElementById('accounttype').innerHTML=msg.accounttype;
	document.getElementById('balance').innerHTML=msg.balance;
	}
	else
	{
	alert('error');
	}
	
	
	
}






}

/**
 * 
 */
const BASE_URL ="http://localhost:8090";
function validate()
{
	alert('Working');
	const firstname=document.getElementById('firstName').value;
	const lastname=document.getElementById('lastName').value;
	const email=document.getElementById('email').value;
	const dob=document.getElementById('dob').value;
	const phone=document.getElementById('phone').value;
	const password=document.getElementById('pass').value;
	const accountType=document.getElementById('accountType').value;

const customerObj = {};
customerObj.first_name=firstname;
customerObj.second_name=lastname;
customerObj.email=email;
customerObj.dob=dob;
customerObj.password=password;
customerObj.phone=phone;
customerObj.account_type=accountType;

/** Hardcore passinf=g of the value
const customerObj={
	
        "account_no": "1122",
        "account_type": "saving",
        "dob": "14-05-199",
        "first_name": "dheeraj",
        "second_name": "hetty",
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
	const content = await rawResponse.json();
	console.log(content);
	window.location.href =BASE_URL + '/login.html';
	}
}
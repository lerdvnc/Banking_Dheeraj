/**
 * 
 */
const BASE_URL="http://localhost:8090";
function doLogin()
{
	alert('working');
	const email=document.getElementById('email').value;
	const pass=document.getElementById('pass').value;
	const loginObj = {};
	loginObj.email=email;
	loginObj.password=pass;
	checkLogin(loginObj)
	alert('yolo');
async function checkLogin(loginObj) {
	//const url = 'http://localhost:8090/login';
	const url = BASE_URL + '/login';

	const data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(loginObj)
	};
	const rawResponse = await fetch(url, data);
	const content = await rawResponse.json();
	window.location.href = 'http://localhost:8080/BankingFrontend/dashBoard.html';
	console.log(content);
	}
	

}
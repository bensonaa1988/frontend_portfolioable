import { Link } from "react-router-dom";


const message = document.getElementById('message');
const param = new URLSearchParams(window.location.search);
const username = param.get('username');
const pw = param.get('pw');

if(username.toLowerCase() === 'portfolio1' && pw === 'ilovehouses'){
    message.innerHTML = 'Sign In Successful';
} else if(!username || !pw){
    message.innerHTML = 'Please verify the username and password are correct';
} else {
    message.innerHTML = 'Hurray for client-side validation!';
}


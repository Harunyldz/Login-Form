
function Login(){
    document.getElementById('join').style.display='none';
    document.getElementById('login').style.display='flex';  
    document.getElementById('body').style.background='url(/images/background5.jpg)';
    document.getElementById('body').style.backgroundSize='cover';    
}
function Logined(){
    let username=document.getElementById('login-user').value;
    let password=document.getElementById('login-pass').value;
    alert('Username: '+username +'\n' + 'Password : '+password);
}


function Enter(){
let username=document.getElementById('sign-user').value;
let password=document.getElementById('sign-pass').value;
let passwordControl=document.getElementById('sign-pass-control').value;
if (password==passwordControl) {
    alert('Username: '+username +'\n' + 'Password : '+password+'\n'+ 'Welcome to the Team');
}
else{
    alert('Check your password please!');
}

}


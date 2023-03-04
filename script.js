
function Login(){
    document.getElementById('join').style.display='none';
    document.getElementById('login').style.display='flex';  
    document.getElementById('body').style.background='url(/images/background5.jpg)';
    document.getElementById('body').style.backgroundSize='cover';    
}
function Enter(){
let username=document.getElementById('input-user').value;
let password=document.getElementById('input-pass').value;
alert('Username: '+username +'\n' + 'Password : '+password);
}
const menubutton=document.querySelector('.menu')
const navitem=document.querySelector('.nav-item')
const navopen=document.querySelector('.menu-close');
const navlink=document.querySelectorAll('.nav-link');


menubutton.addEventListener('click',()=>{
    navitem.classList.toggle('showme');
})
function linkAction(){
    navlink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')
    navitem.classList.toggle('showme')
}

navlink.forEach(n=>n.addEventListener('click',linkAction))

function send(){
    let email=document.getElementById('email').value;
    let fristname=document.getElementById('firstname').value;
    let lastname=document.getElementById('lastname').value;
    let phone=document.getElementById('telephone').value;
    let message=document.getElementById('message').value;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kamaleshponmani0703@gmail.com",
        Password : "3C43434C4645384283BC9181C25AF9D8AC56",
        To : "ponmanikamalesh@gmail.com"  ,
        From : "kamaleshponmani0703@gmail.com",
        Subject : "New client Contact",
        Body : "Name:"+fristname+" "+lastname+"<br/> Phone:"+phone+"<br/> Message:"+message+"<br/>Email:"+email
    }).then(
      message => alert(message)
    );
}

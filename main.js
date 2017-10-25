window.onload = function(){
console.log("hello world");
var myName = "张雪松";
console.log(myName);
alert(myName);
var Name = document.querySelector('.name');
Name.onclick = function namechange(){
    var text = this.innerHTML;
    if(this.innerHTML ==="Xuesong Zhang"){
    this.innerHTML="张雪松";
}   else{
    this.innerHTML="Xuesong Zhang";
}
}
var myImage=document.querySelector('img');
    myImage.onmouseover=function mover(){
        var ghlink= document.getElementById('github');
        ghlink.style.display='block';
    }
    myImage.onmouseout=function mout(){
        var ghlink= document.getElementById('github');
        ghlink.style.display='none';
    }

var AboutMe = document.getElementById('buttonme');
AboutMe.onclick = function contact(){
    var x = document.getElementById('aboutme');
    if (x.style.display==='none'){
        x.style.display = 'block';
    } else{
        x.style.display = 'none';
    }
}
var submitButton = document.getElementById('submit');
submitButton.onclick = function submit(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    console.log(name);
    console.log(email);
    console.log(message);
}
}

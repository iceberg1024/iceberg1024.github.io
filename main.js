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
}

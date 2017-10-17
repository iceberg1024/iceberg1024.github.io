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
var showlink = document.querySelector('.img-wrapper');
var git = document.querySelector('.github');
    showlink.onmouseover=function show(){
        git.style.display= inline;
    }
    showlink.onmouseout=function hide(){
        git.style.display= hide;
    }
}

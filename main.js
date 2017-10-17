console.log("hello world");
var myName = "张雪松";
console.log(myName);
alert(myName);
var Name = document.querySelector('.name');
Name.onclick = function(){
    Name.innerHTML=myName;
}

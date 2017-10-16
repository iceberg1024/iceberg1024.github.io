var myImage = document.querySelector('img');
myImage.onClick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === './img/photo.png'){
        myImage.setAttribut('src','./img/profilephoto.jpg');
    } else {
        myImage.setAttribute('src','./img/photo.png');
    }
}

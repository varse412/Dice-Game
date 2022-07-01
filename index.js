var randomnumber1=(Math.random()*6);
randomnumber1=Math.floor(randomnumber1)+1;
if(randomnumber1==1){
    document.querySelector(".container .dice .img1").setAttribute("src","/images/dice1.png");
}else if(randomnumber1==2){
    document.querySelector(".container .dice .img1").setAttribute("src","/images/dice2.png");
}else if(randomnumber1==3){
    document.querySelector(".container .dice .img1").setAttribute("src","/images/dice3.png");
}else if(randomnumber1==4){
    document.querySelector(".container .dice .img1").setAttribute("src","/images/dice4.png");
}else if(randomnumber1==5){
    document.querySelector(".container .dice .img1").setAttribute("src","/images/dice5.png");
}else{
    document.querySelector(".container .dice .img1").setAttribute("src","/images/dice6.png");
}
var randomnumber2=(Math.random()*6);
randomnumber2=Math.floor(randomnumber2)+1;
if(randomnumber2==1){
    document.querySelector(".container .dice .img2").setAttribute("src","/images/dice1.png");
}else if(randomnumber2==2){
    document.querySelector(".container .dice .img2").setAttribute("src","/images/dice2.png");
}else if(randomnumber2==3){
    document.querySelector(".container .dice .img2").setAttribute("src","/images/dice3.png");
}else if(randomnumber2==4){
    document.querySelector(".container .dice .img2").setAttribute("src","/images/dice4.png");
}else if(randomnumber2==5){
    document.querySelector(".container .dice .img2").setAttribute("src","/images/dice5.png");
}else{
    document.querySelector(".container .dice .img2").setAttribute("src","/images/dice6.png");
}
if(randomnumber1>randomnumber2){
    //1 wins
    document.querySelector(".container h1").textContent="🚩Player1 Wins!";
}else if(randomnumber1<randomnumber2){
    //2 wins
    document.querySelector(".container h1").textContent="🚩Player2 Wins!";
}else if(randomnumber1==randomnumber2){
    //draw
    document.querySelector(".container h1").textContent="Draw!";
}
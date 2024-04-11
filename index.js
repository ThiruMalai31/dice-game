var set=0;
var set2=0;
var b1=document.querySelector(".img1");
var randomNumber;
 b1.addEventListener('click',function(){
    if(set==0){
randomNumber=Math.floor(Math.random()*6)+1;

    var randomText="images/dice"+randomNumber+".png";
    // var randompic="images/"+randomText;
    b1.setAttribute("src",randomText); 
    set++; 
    console.log(randomText);
    }
    else{
        alert("click One Time");
        set=1;
    }
 });
 var randomNumber2;
 
 var b2=document.querySelector(".img2");
 b2.addEventListener('click',function(){
   if(set==1){
randomNumber2=Math.floor(Math.random()*6)+1;

    var randomText="images/dice"+randomNumber2+".png";
    // var randompic="images/"+randomText;
    b2.setAttribute("src",randomText);  
    set2++;
    console.log(randomText);
    result();
   }
   else{
    console.log(set);
    alert("Player 1 First");
    set=0;
}
 });



 function result(){
 console.log(set);
 console.log(set2);
if(set==1 && set2==1){
    
    var head=document.querySelector("h1");
    if(randomNumber>randomNumber2){
    head.textContent="player 1 Wins";
    console.log(head);
    }
    else if(randomNumber<randomNumber2){
        head.textContent="player 2 Wins";
    }
    else{
        console.log(head);
        head.textContent="Draw";
    }
    set=0;
    set2=0;
}
 };
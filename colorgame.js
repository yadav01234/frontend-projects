nos=6;
var colors = generaterandomcolor(nos);
var pickedcolor= pickcolor();
console.log(pickedcolor);
var dismsg = document.querySelector("#tryagain");
var colordisplay = document.querySelector("#colordisplay");
colordisplay.textContent=pickedcolor;
var divs = document.querySelectorAll(".square1");
var reset = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easyBtn");
var hard = document.querySelector("#hardBtn");
easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    nos =3;
    colors = generaterandomcolor(nos);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i =0 ;i<divs.length;i++){
        if(colors[i]){
            divs[i].style.background=colors[i];
        }
        
        else
        {divs[i].style.display="none";}
        
    }
    h1.style.background="#4682b4";
})
hard.addEventListener("click",function(){
    
    easy.classList.remove("selected");
    hard.classList.add("selected");
    nos =6;
    colors = generaterandomcolor(nos);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i =0 ;i<divs.length;i++){
        if(colors[i]){
            divs[i].style.background=colors[i];
            divs[i].style.display="block";
        }
        h1.style.background="#4682b4";
        
       
        
    }
    

})
reset.addEventListener("click",function(){
    //to genrate new colors 
    
     colors = generaterandomcolor(nos);
    console.log(colors.length);
    for(var i =0 ;i<colors.length;i++){
        console.log(i);
        console.log(colors[i]);
    }
    //to pick a new color
    pickedcolor= pickcolor();
    console.log(pickedcolor);
    //to change the color display
    colordisplay.textContent=pickedcolor;
    //to change all the divs
    for(var i=0;i<divs.length;i++){
        divs[i].style.background=colors[i];
        

    }
    reset.textContent="New colors";
    h1.style.background="#4682b4";
    dismsg.textContent="Start !!"
 })
console.log(divs);
for(var i =0 ;i<colors.length;++i){
divs[i].style.background = colors[i];
divs[i].addEventListener("click",function(){
   // console.log("clicked");
   // console.log(pickedcolor);
    var clickedcolor = this.style.background;
    console.log(clickedcolor);
    if(pickedcolor===clickedcolor){
        dismsg.textContent = "Correct"
        reset.textContent="Play Again?"
        h1.style.background=clickedcolor;
        setcolor(clickedcolor);
    }
   
    else
    {
        this.style.background = "#223322";
        dismsg.textContent="Try again!";
    }

    
})
}
function setcolor(clickedcolor){
    for(var i =0;i<divs.length;++i){
        divs[i].style.background = clickedcolor;
    }
}
function pickcolor(){
  var selects = Math.floor(Math.random() * colors.length) ;
 // console.log(Math.floor(Math.random()* colors.length));
 console.log(colors[selects]+"selected color");
 console.log(selects);
  return colors[selects];
}
function generaterandomcolor(num){
    var arr=[];
    for(var i =0;i<num;i++){
            arr.push(randomcolor());
    }
    return arr;

}
function randomcolor(){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    var color = "rgb("+r+", "+g+", "+b+")";
    //console.log(color);
    return color;
}
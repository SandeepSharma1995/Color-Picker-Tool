var c =document.getElementById("mycanvas1");
var ctx=c.getContext("2d");
var grd=ctx.createLinearGradient(0,0,300,0);
grd.addColorStop(0,"white");
grd.addColorStop(.1,"violet");
grd.addColorStop(.2,"indigo");
grd.addColorStop(.3,"blue");
grd.addColorStop(.4,"green");
grd.addColorStop(.5,"yellow");
grd.addColorStop(.6,"orange");
grd.addColorStop(.7,"red");
grd.addColorStop(.8,"pink");
grd.addColorStop(.85,"brown");
grd.addColorStop(.9,"grey");
grd.addColorStop(1,"black");

ctx.fillStyle=grd;
ctx.fillRect(0,0,300,300);

 mycanvas1.onmouseup=function(e){
 var mousex=e.offsetX;
 var mousey=e.offsetY;
 var c=ctx.getImageData(mousex,mousey,1,1).data;
 var r=c[0];
 var g=c[1];
 var b=c[2];
 
 document.getElementById("color").style.backgroundColor="rgb("+r+" , "+g+" , "+b+")";
document.getElementById("i1").value=r;
document.getElementById("i2").value=g;
document.getElementById("i3").value=b;
document.getElementById("hex").value=rgbToHex(r,g,b);
move();
history();
document.getElementById("a2").value="1";
 }

function show(){
document.getElementById("color").style.backgroundColor=document.getElementById("hex").value;
document.getElementById("i1").value= hexToR(document.getElementById("hex").value);
document.getElementById("i2").value= hexToG(document.getElementById("hex").value);
document.getElementById("i3").value= hexToB(document.getElementById("hex").value);

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
move();
history();
document.getElementById("a2").value="1";
}

function display(){
var a=document.getElementById("i1").value;
var b =document.getElementById("i2").value;
var c =document.getElementById("i3").value;
move();
document.getElementById("color").style.backgroundColor="rgb("+a+" , "+b+" , "+c+")";
document.getElementById("hex").value=rgbToHex(a,b,c);
history();
document.getElementById("a2").value="1";
}

function move() {
document.getElementById("x1").value=document.getElementById("i1").value;
document.getElementById("x2").value=document.getElementById("i2").value;
document.getElementById("x3").value=document.getElementById("i3").value;
}
function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}


var history1=["rgb(0,0,0)" ];
function history(){
document.getElementById("hist").innerHTML="";
if (history1.length <= 10){
history1.reverse();
history1[history1.length]= "<br>" + document.getElementById("color").style.backgroundColor + "<br>";
history1.reverse();
 
 var table=document.getElementById("mytable");
 var row=table.insertRow(0);
var cell1=row.insertCell(0);
var cell2=row.insertCell(1); 
cell1.style.backgroundColor=document.getElementById("color").style.backgroundColor;
cell1.style.width="25px";
cell2.innerHTML=history1[0];
}else{history1.pop();
document.getElementById("mytable").deleteRow(9);
 history();}

}

function change1(){
var a=document.getElementById("x1").value;
var b =document.getElementById("x2").value;
var c =document.getElementById("x3").value;
document.getElementById("i1").value=a;
document.getElementById("i2").value=b;
document.getElementById("i3").value=c;
display();
}

function adjust(){
var m=document.getElementById("a2").value;
var a=document.getElementById("i1").value;
var b =document.getElementById("i2").value;
var c =document.getElementById("i3").value;
document.getElementById("color").style.background="rgba("+a+" , "+b+" , "+c+" , "+m+")";
}

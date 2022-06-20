var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";

var color="black";
var Width_of_line=1;

canvas.addEventListener("mouseup",my_mouseup);

 function my_mouseup(e){
     mouseEvent="mouseUp";
 }

 canvas.addEventListener("mousedown", my_mousedown);

 function my_mousedown(e){

     mouseEvent="mouseDown";
 }

 canvas.addEventListener("mouseleave",my_mouseleave);

 function my_mouseleave(e){
     mouseEvent="mouseleave";
 }

 canvas.addEventListener("mousemove", my_mousemove);

 function my_mousemove(e){
     current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
     current_position_of_mouse_y=e.clientY-canvas.offsetTop;

     if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=Width_of_line;
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,20,0,2*Math.PI)
    ctx.stroke();
     }
      
 }
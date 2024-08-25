const canvas=document.getElementById("canva");
console.log(canvas);
const clear=document.getElementById("clo");
console.log(clear);
const background=document.getElementById("leng")
console.log(background);
const colorpicker=document.getElementById("colo")
console.log(colorpicker);
const ctx=canvas.getContext('2d');
console.log(ctx);


colorpicker.addEventListener('change',(e)=>{
    ctx.fillStyle=e.target.value;
    ctx.strokeStyle=e.target.value;
})
canvas.addEventListener('mousedown', (e)=>{
      wrm= true;
      lastx=e.offsetX;
      lasty=e.offsetY;
      console.log(lastx,lasty);
})
canvas.addEventListener('mouseup', (e)=>{
    if(wrm){
        ctx.beginPath();
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke();
        lastx =e.offsetX;
        lasty =e.offsetY;

        
    }
})



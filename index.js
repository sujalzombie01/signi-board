const canvas=document.getElementById("canva");
console.log(canvas);
const clear=document.getElementById("clo");
console.log(clear);
const background=document.getElementById("leng")
console.log(background);
const colorpicker=document.getElementById("colo")
console.log(colorpicker);
const fontsize=document.getElementById('out0');
const save=document.getElementById("save")
const ctx=canvas.getContext('2d');
wrm=false;
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
canvas.addEventListener('mousemove', (event)=>{
    if(wrm){
        ctx.beginPath();
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(event.offsetX,event.offsetY);
        ctx.stroke();
        lastx =event.offsetX;
        lasty =event.offsetY;
    }
})
canvas.addEventListener('mouseup', (event)=>{
 wrm=false;

});

background.addEventListener('change', (e)=>{
    ctx.fillStyle=e.target.value;
    ctx.fillRect(0,0,800,500)
})
fontsize.addEventListener('change', (s)=>{
    ctx.lineWidth=s.target.value;
    ctx.stroke();
})
clear.addEventListener('click', ()=>{
    ctx.clearRect(0,0,800,500)
})
save.addEventListener("click", ()=>{
    localStorage.setItem('canvasContents', canvas.toDataURL());
            let link = document.createElement('a');
            link.download = 'my-canvas.png';
            link.href = canvas.toDataURL();
            link.click();
})
window.addEventListener('beforeunload', (e)=>{
    e.preventDefault();
    e.returnValue=""

})
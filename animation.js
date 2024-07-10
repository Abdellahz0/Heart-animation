const bodyEl=document.querySelector("body");

bodyEl.addEventListener("mousemove",(event)=> {
    const xPos=event.offsetX;
    const yPos=event.offsetY;
    const spanEl=document.createElement("span");
    spanEl.style.left=xPos+"px";
    spanEl.style.top=yPos+"px";
    const size=Math.random()*100;
    spanEl.style.width=size+"px";
    spanEl.style.height=size+"px"
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();  // if we don't remove them 
    }, 3000);             //  the animation will happend but spans will stand in the body
})


/* so the time to delete the html span is 3<6 which
   is the time of the animation so the element will
   be deleted before the html element return to its position.*/
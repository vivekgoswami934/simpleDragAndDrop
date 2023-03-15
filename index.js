

const whiteBoxes = document.getElementsByClassName("whiteBox");
const imgBox = document.querySelector(".imgBox");


imgBox.addEventListener("dragstart",dragStartFunction)
imgBox.addEventListener("dragend",dragEndFunction)


function dragStartFunction(e){
  console.log("this is dragStart")
    e.target.className += " onHold"
    setTimeout(()=>{
        e.target.className += " hide"
    },0)
}

function dragEndFunction(e){
    console.log("this is dragEnd")
    e.target.className = "imgBox";
}

for( div of whiteBoxes){
    div.addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log("dragover had been started")
    })

    div.addEventListener('dragenter',()=>{
        console.log("dragenter had been started")
        
    })

    div.addEventListener('dragleave',()=>{
        console.log("dragleave had been started")
        
    })
    
    div.addEventListener('drop',(e)=>{
        console.log("drop had been started")
        e.target.append(imgBox)
    })
}
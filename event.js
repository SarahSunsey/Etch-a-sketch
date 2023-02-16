const board = document.getElementById("board")



const colorpick=document.getElementById("colorpick")
colorpick.style.backgroundColor='grey'

function getcolor(){
    

const rgba=document.getElementById("rgba")
const colorpick=document.getElementById("colorpick")
const fade = document.getElementById("fade").value
const red= document.getElementById("red").value;
const blue= document.getElementById("blue").value;
const green= document.getElementById("green").value;
rgba.innerHTML='rgba('+red +','+green +','+blue +','+fade +')'
colorpick.style.backgroundColor='rgba('+red +','+green +','+blue +','+fade +')'

}
const earasor=document.getElementById("earasor")
    earasor.addEventListener('click',()=> {
        
    colorpick.style.backgroundColor='white'
    colorpick.style.backgroundColor='white'
    
        });



const reset=document.getElementById("reset")
const taille=document.getElementById("taille");

function populateBoard(size) {
    
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      let square = document.createElement("div")
      square.addEventListener('mouseover',() => {
        square.style.backgroundColor=colorpick.style.backgroundColor
    }
    )
      square.classList.add("square")
      board.appendChild(square)

    }
    taille.innerHTML=size+"x"+size;
    
  }

  reset.addEventListener('click', ()=>{
    for (let i = 0; i < board.children.length; i++) {
        const square = board.children[i];
        square.style.backgroundColor = "white";
      }
    });



    function randomColor(){
        
        let red = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        let gree = Math.floor(Math.random()*256);
        colorpick.style.backgroundColor='rgba('+red +','+green +','+blue +','+fade +')'
    }


const random=document.getElementById("random");
    random.addEventListener('click',()=>{
        const rgba=document.getElementById("rgba")
        const colorpick=document.getElementById("colorpick")
        let fade=Math.random().toFixed(1);
        let red = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        rgba.innerHTML='rgba('+red +','+green +','+blue +','+fade +')'
        colorpick.style.backgroundColor='rgba('+red +','+green +','+blue +','+fade +')'
    })
 

const rainbow = document.getElementById("rainbow");

rainbow.addEventListener('click',()=>{
    
    board.addEventListener("mouseover", handleMouseOver);
});


function handleMouseOver(event) {
    if (event.target.classList.contains("square")) {
      const randomColor = getRandomColor();
      event.target.style.backgroundColor = randomColor;
      colorpick.style.backgroundColor= randomColor;
      rgba.innerHTML=hexToRgb(randomColor);
    }
  }
  function hexToRgb(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b},${0})`;
  }
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
populateBoard(16)
function changeSize(input){
populateBoard(input)
}

document.querySelectorAll("button:not(#rainbow)").forEach(button => {
    button.addEventListener("click", () => {
    
      board.removeEventListener("mouseover", handleMouseOver);
    });
  });





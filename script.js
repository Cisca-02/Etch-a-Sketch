//16x16 sono uguali a 256 boxes. Posso fare un unico ciclo for in cui faccio l'append di 256 boxes.
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "purple";
//setto le caratteristiche del container della griglia 16x16
const container = document.querySelector(".container");

let createBoxes = n => {
    for(let i=0; i<n*n; i++){
        //creo l'elemento <div> riga
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.flexBasis = `calc(100%/${n})`;
        box.style.height = `calc(100%/${n})`;
        container.appendChild(box);
    }
}

//funzione che cambia il colore alle boxes
let addFeature = color => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mousemove", () =>{
            box.style.backgroundColor = color;
        });
    });
}


let randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);

    return `rgb(${r},${g}, ${b})`;
}



//seleziono il button ".size"
const sizeBtn = document.querySelector(".size");

//aggiungo un eventListener al button "size" per cambiare la size
sizeBtn.addEventListener("click", () => {

    let n = 0;
    let i = 0;

    do{
        if(i>0){
            alert("Errore: inserire un numero compreso nel range indicato");
        }
        alert(n = prompt("Inserisci una risoluzione da 1 a 100"));
        i++;
    }while(n<1 || n>100);
    
    
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.remove();
    });

    createBoxes(n);
    addFeature();
});

//seleziono il button "color"
const colorBtn = document.querySelector(".color");

//aggiungo un eventListener al button "color" per cambiare colore
colorBtn.addEventListener("click", () => {
    addFeature(randomColor());
})

//seleziono il button "multicolor"
const multiBtn = document.querySelector(".multicolor");

//aggiungo un eventListener al button "multicolor" per impostare il colore a multi-color
multiBtn.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mousemove", () =>{
            box.style.backgroundColor = randomColor();
        });
    });
});

//seleziono il button "clear"
const clearBtn = document.querySelector(".clear");

//aggiungo un eventListener al button "clear" impostare il background color bianco
clearBtn.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
});

//creo la griglia 16x16 di default
createBoxes(DEFAULT_SIZE);
addFeature(DEFAULT_COLOR);

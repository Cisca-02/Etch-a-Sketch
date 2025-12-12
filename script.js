//16x16 sono uguali a 256 boxes. Posso fare un unico ciclo for in cui faccio l'append di 256 boxes.
const DEFAULT = 16;
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

//aggiungo un eventListener che applica la classe "highlight" al div
let addFeature = () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mousemove", () =>{
            box.classList.add("highlight");
        });
    });
}



//seleziono il button ".size"
const sizeBtn = document.querySelector(".size");

//aggiungo un eventListener
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


//creo la griglia 16x16 di default
createBoxes(DEFAULT);
addFeature();

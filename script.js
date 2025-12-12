//16x16 sono uguali a 256 boxes. Posso fare un unico ciclo for in cui faccio l'append di 256 boxes.
//setto le caratteristiche del container della griglia 16x16
const container = document.querySelector(".container");


for(let i=0; i<256; i++){
    //creo l'elemento <div> riga
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
}

//aggiungo un eventListener che applica la classe "highlight" al div
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("mousemove", () =>{
        box.classList.add("highlight");
    });
});
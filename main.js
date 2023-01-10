var index = 0

function next(aprendi) {
    var lista = document.querySelectorAll(".moto1")

    index = index+aprendi;
    index = Math.min(Math.max(index,0),lista.length - 1)

    lista[index].scrollIntoView({behavior:"smooth"})
}

var motos = [
    {
        titulo:"Scooter Elétrica Voltz EV1",
        descricao:"casa propria",
        imagem:"./moto1.svg"
    }, 
    {
        titulo:"Honda CB 500X",
        descricao:"motoka",
        imagem:"./moto2.svg"
    }
]

var modaljs = document.querySelector(".modal");

function saiba(modalopen) {
    if (modalopen == 0) {
        modaljs.style.visibility = "visible"

     modalopen = 1

     modaljs.innerHTML = 
     
     `     
        <div class="card">
            <button onclick="saiba(1)">fechar</button>
            <h2>${motos[index].titulo}</h2>
            <p>${motos[index].descricao}</p>
            <img src="${motos[index].imagem}" alt="">
            <button>Quero assinar</button>
        </div>
    `
    } else if ( modalopen == 1) {
        modaljs.style.visibility = "hidden" 
        modalopen = 0
    }
}
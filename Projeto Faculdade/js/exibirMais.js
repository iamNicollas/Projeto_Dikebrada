const ExibirMais = document.querySelector("#container-ver-mais");


const Exibir = () =>{
    document.querySelector(".pedido-oculto").style.display = "flex"
}

ExibirMais.addEventListener("click", () => Exibir());
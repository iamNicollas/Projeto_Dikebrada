const OpenModal = document.querySelector("#carrinho");
const Modal = document.querySelector("#modal-carrinho");
const Fade = document.querySelector("#fade");
var imgCarrinho = "img/shopping-cart.png";
var imgX ="img/close.png";

const VerificarEstadoModal = () => {
    Modal.classList.toggle("hide");
    Fade.classList.toggle("hide");
    document.getElementById("img-carrinho").src = imgX;
    let troca = imgX;
    imgX = imgCarrinho;
    imgCarrinho = troca;
}

const TrocaImg = () => {
    
}

[OpenModal, Fade].forEach((el) => {
    el.addEventListener("click", () => VerificarEstadoModal());
});

OpenModal.addEventListener("click", () => TrocaImg());
const checkbox = document.getElementById("myCheckbox");

const Checar = () =>{
    if (!checkbox.checked) {
        document.getElementById('cpf').placeholder='Informe seu CPF';
      
      } else {
        document.getElementById('cpf').placeholder='Informe seu CNPJ';
      }
}


checkbox.addEventListener("click", () => Checar())
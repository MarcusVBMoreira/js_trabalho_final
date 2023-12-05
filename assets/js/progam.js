// Seleciona o elemento com id main-image (imagem que vai ficar no topo)
const mainImage = document.getElementById("main-image");

// Seleciona todos os elementos que tem a classe "bottom-image"
const bottomImages = document.querySelectorAll(".bottom-image");

// Roda um lalo de repetição pata cada elemento do bottomImages
bottomImages.forEach((image, index) => {
    // Escuta o clique encima de um dos elementos, com o objeto image
  image.addEventListener("click", () => {
    // Obtém o caminho da imagem atual na linha superior
    const currentImageSrc = mainImage.getAttribute("src");
    // Define o caminho da imagem na linha superior como o caminho da imagem clicada na linha inferior
    mainImage.setAttribute("src", image.getAttribute("src"));
    //// Define o caminho da imagem clicada na linha inferior como o caminho da imagem anterior da linha superior
    image.setAttribute("src", currentImageSrc);
  });
});


const $campoCPF = document.querySelector('#cpf')

 $campoCPF.addEventListener('focusin', (event) => {
   $valorDoCPF = event.target.value;
   $campoCPF.value = $valorDoCPF.replace(/[.-]/g, "")
 })
  
 $campoCPF.addEventListener('focusout', () => {
   $valorDoCPF = event.target.value;
   $campoCPF.value = $valorDoCPF.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
 })

 const $campoDATA = document.querySelector('data')

 const data = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) =>{
  if (!value) return ""

  value = value.replace(/\D/g, "")
  value = value.replace(/(\d{2})(\d)/, "$1/$2")
  value = value.replace(/(\d{2})(\d)/, "$1/$2")
  value = value.replace(/(\d{4})(\d)/, "$1")


  return value
}
// Obtém referências aos elementos HTML
const cartTable = document.getElementById('cart');
const cartBody = cartTable.querySelector('tbody');
const totalCell = document.getElementById('total');
const addProductForm = document.getElementById('add-product-form');

// Array para armazenar os itens do carrinho
let cartItems = [];

// Função para adicionar um novo produto ao carrinho
function addProduct(event) {
  event.preventDefault();

  const productNameInput = document.getElementById('product-name');
  const productPriceInput = document.getElementById('product-price');
  const productQuantityInput = document.getElementById('product-quantity');

  const productName = productNameInput.value;
  const productPrice = parseFloat(productPriceInput.value);
  const productQuantity = parseInt(productQuantityInput.value);

  if (!productName || !productPrice || !productQuantity) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const itemTotal = productPrice * productQuantity;

  const newItem = {
    name: productName,
    price: productPrice,
    quantity: productQuantity,
    total: itemTotal
  };

  cartItems.push(newItem);

  // Limpa os campos do formulário
  productNameInput.value = '';
  productPriceInput.value = '';
  productQuantityInput.value = '';

  // Atualiza a exibição do carrinho
  displayCartItems();
}

// Função para exibir os itens do carrinho na tabela
function displayCartItems() {
  cartBody.innerHTML =

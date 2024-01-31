const menuEmail = document.querySelector('.menu__email');
const menuDesktop = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.menu__shopping-cart');
const shoppingCart = document.querySelector('#shopping-cart');
const productDetail = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail__close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
   if(!shoppingCart.classList.contains('inactive')) {
      shoppingCart.classList.add('inactive');
   }
   if(!productDetail.classList.contains('inactive')) {
      closeProductDetail();
   }
   menuDesktop.classList.toggle('inactive');
}
function toggleMobileMenu() {
   if(!shoppingCart.classList.contains('inactive')) {
      shoppingCart.classList.add('inactive');
   }
   if(!productDetail.classList.contains('inactive')) {
      closeProductDetail();
   }
   mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart() {
   if(!menuDesktop.classList.contains('inactive')) {
      menuDesktop.classList.add('inactive');
   }
   if(!mobileMenu.classList.contains('inactive')) {
      mobileMenu.classList.add('inactive');
   }
   if(!productDetail.classList.contains('inactive')) {
      closeProductDetail();
   }
   shoppingCart.classList.toggle('inactive');
}
function openProductDetail() {
   if(!menuDesktop.classList.contains('inactive')) {
      menuDesktop.classList.add('inactive');
   }
   if(!mobileMenu.classList.contains('inactive')) {
      mobileMenu.classList.add('inactive');
   }
   if(!shoppingCart.classList.contains('inactive')) {
      shoppingCart.classList.add('inactive');
   }
   productDetail.classList.remove('inactive');
}
function closeProductDetail() {
   productDetail.classList.add('inactive');
}

const mainContainerCards = document.querySelector('.main-container__cards');

const productList = [];
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
   name: 'Pantalla',
   price: 220,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
   name: 'Compu',
   price: 620,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(array) {
   for(product of array) {
      const productCard = document.createElement('article');
      productCard.classList.add('card');
   
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.classList.add('card__img');
      productImg.addEventListener('click', openProductDetail);
   
      const productInfo = document.createElement('div');
      productInfo.classList.add('card__info');
   
      const productInfoDiv = document.createElement('div');
   
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
   
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
   
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
      productInfoFigure.appendChild(productImgCart);
   
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
   
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
   
      mainContainerCards.appendChild(productCard);
   }
}

renderProducts(productList);
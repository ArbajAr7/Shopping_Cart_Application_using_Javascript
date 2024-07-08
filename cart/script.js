let cartArray = JSON.parse(localStorage.getItem("cart"));
let products = JSON.parse(localStorage.getItem("products"));
let total_price = 0;
// console.log(cartArray[0]);
// console.log(products);

const filteredProducts = products.filter(product => cartArray.includes(product.id));
// console.log(filteredProducts);
document.getElementById("logout").addEventListener("click",()=>{
  localStorage.removeItem("currUser");
  window.location.href = "../index.html";
});
document.getElementById("btn").addEventListener("click", () => {
  localStorage.setItem("totalamount", total_price);
  window.location.href = "../razorpay/index.html";
})
filteredProducts.forEach((item,index) => {
    document.getElementById("div1").innerHTML += `<div class="items">
            <div class="item">
              <img src="${item.image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">$${item.price}</div>
                  <div class="sized">${(item.sizes).join(', ')}</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                  </div>
                </div>
                <div class="row rating">Rating: ${item.rating.rate}</div>
                <button id="addBtn" onclick="Removefromcart(${item.id})">Remove from Cart</button>
              </div>
              
            </div>
          </div>`;
    
    document.getElementById("name_price_div").innerHTML += `<div id="name_price">
              <p id="product_name">${index+1}. ${item.title}</p>
              <p id="product_price">$ ${item.price}</p>
            </div>`;
    total_price += parseFloat(item.price);
});

document.getElementById("total_amount").innerHTML = `$ ${total_price}`;


function Removefromcart(id) {
    let newCartArray = cartArray.filter(item => item !== id);
    localStorage.setItem('cart',JSON.stringify(newCartArray));
    window.location.href = "../cart/index.html";
}
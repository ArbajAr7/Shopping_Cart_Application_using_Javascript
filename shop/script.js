let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);
let currUser = localStorage.getItem('currUser'); 
let mens = "";
let women = "";
let jewelery = "";
let electronics = "";
let menstab = 0;
let womentab = 0;
let jewelerytab = 0;
let electronicstab = 0;
let alltab = 0;
if(currUser) {
  function Addtocart(id) {
    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  function alltype(a, b, c, d){
    alltab = 1;
    menstab = 0;
    womentab = 0;
    jewelerytab = 0;
    electronicstab = 0;
    if(a == undefined ){
      document.getElementById("category").innerHTML = `<div id="all_type" class="filter active" onclick="alltype()">All</div>
            <div id="mens_type" class="filter" onclick="menstype()">Mens</div>
            <div id="womens_type" class="filter" onclick="womentype()">Womens</div>
            <div id="jewellery_type" class="filter" onclick="Jewellerytype()">Jewellery</div>
            <div id="electronics_type" class="filter" onclick="electronicstype()">Electronics</div>`;
            document.getElementById("products_display").innerHTML = `<section>
            <title>Men's Clothing</title>
            <div class="items" id="mens_items">
            </div>
          </section>

          <section>
            <title>Women's Clothing</title>
            <div class="items" id="womens_items">
            </div>
          </section>
          <section>
            <title>Jewellery</title>
            <div class="items" id="jewellery_items">
            </div>
          </section>
          <section>
            <title>Electronics</title>
            <div class="items" id="electronics_items">
            </div>
          </section>`;
            mens.forEach((item) => {
              document.getElementById("mens_items").innerHTML += `<div class="item">
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
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row rating">Rating: ${item.rating.rate}</div>
                  <button id="addBtn" onclick="Addtocart(${item.id})">Add to Cart</button>
                </div>
                
              </div>`;

            })
            women.forEach((item) => {
              document.getElementById("womens_items").innerHTML += `<div class="item">
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
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row rating">Rating: ${item.rating.rate}</div>
                  <button id="addBtn" onclick="Addtocart(${item.id})">Add to Cart</button>
                </div>
                
              </div>`;
            })


            jewelery.forEach((item) => {
              document.getElementById("jewellery_items").innerHTML += `<div class="item">
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
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row rating">Rating: ${item.rating.rate}</div>
                  <button id="addBtn" onclick="Addtocart(${item.id})">Add to Cart</button>
                </div>
                
              </div>`;
            })

            
            electronics.forEach((item) => {
              document.getElementById("electronics_items").innerHTML += `<div class="item">
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
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row rating">Rating: ${item.rating.rate}</div>
                  <button id="addBtn" onclick="Addtocart(${item.id})">Add to Cart</button>
                </div>
                
              </div>`;
            })

    } else{

      document.getElementById("category").innerHTML = `<div id="all_type" class="filter active" onclick="alltype()">All</div>
            <div id="mens_type" class="filter" onclick="menstype()">Mens</div>
            <div id="womens_type" class="filter" onclick="womentype()">Womens</div>
            <div id="jewellery_type" class="filter" onclick="Jewellerytype()">Jewellery</div>
            <div id="electronics_type" class="filter" onclick="electronicstype()">Electronics</div>`;
            document.getElementById("products_display").innerHTML = `<section>
            <title>Men's Clothing</title>
            <div class="items" id="mens_items">
            </div>
          </section>

          <section>
            <title>Women's Clothing</title>
            <div class="items" id="womens_items">
            </div>
          </section>
          <section>
            <title>Jewellery</title>
            <div class="items" id="jewellery_items">
            </div>
          </section>
          <section>
            <title>Electronics</title>
            <div class="items" id="electronics_items">
            </div>
          </section>`;
            a.forEach((item) => {
              document.getElementById("mens_items").innerHTML += `<div class="item">
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
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row rating">Rating: ${item.rating.rate}</div>
                  <button id="addBtn" onclick="Addtocart(${item.id})">Add to Cart</button>
                </div>
                
              </div>`;

            })
            b.forEach((item) => {
              document.getElementById("womens_items").innerHTML += `<div class="item">
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
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row rating">Rating: ${item.rating.rate}</div>
                  <button id="addBtn" onclick="Addtocart(${item.id})">Add to Cart</button>
                </div>
                
              </div>`;
            })


            c.forEach((item) => {
              document.getElementById("jewellery_items").innerHTML += `<div class="item">
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
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row rating">Rating: ${item.rating.rate}</div>
                  <button id="addBtn" onclick="Addtocart(${item.id})">Add to Cart</button>
                </div>
                
              </div>`;
            })

            
            d.forEach((item) => {
              document.getElementById("electronics_items").innerHTML += `<div class="item">
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
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row rating">Rating: ${item.rating.rate}</div>
                  <button id="addBtn" onclick="Addtocart(${item.id})">Add to Cart</button>
                </div>
                
              </div>`;
            })

    }
    
    


  }
  function menstype(a){
    menstab = 1;
    alltab = 0;
    womentab = 0;
    jewelerytab = 0;
    electronicstab = 0;
    document.getElementById("category").innerHTML = `<div id="all_type" class="filter" onclick="alltype()">All</div>
            <div id="mens_type" class="filter active" onclick="menstype()">Mens</div>
            <div id="womens_type" class="filter" onclick="womentype()">Womens</div>
            <div id="jewellery_type" class="filter" onclick="Jewellerytype()">Jewellery</div>
            <div id="electronics_type" class="filter" onclick="electronicstype()">Electronics</div>`;
            document.getElementById("products_display").innerHTML =`<section>
            <title>Men's Clothing</title>
            <div class="items" id="mens_items">
            </div>
          </section>`;
          mens.forEach((item) => {
            document.getElementById("mens_items").innerHTML += `<div class="item">
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
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row rating">Rating: ${item.rating.rate}</div>
                <button id="addBtn" onclick="Addtocart(${item.id})">Add to Cart</button>
              </div>
              
            </div>`;

          })
  }
  function womentype(a){
    womentab = 1;
    alltab = 0;
    menstab = 0;
    jewelerytab = 0;
    electronicstab = 0;
    document.getElementById("category").innerHTML = `<div id="all_type" class="filter" onclick="alltype()">All</div>
            <div id="mens_type" class="filter" onclick="menstype()">Mens</div>
            <div id="womens_type" class="filter active" onclick="womentype()">Womens</div>
            <div id="jewellery_type" class="filter" onclick="Jewellerytype()">Jewellery</div>
            <div id="electronics_type" class="filter" onclick="electronicstype()">Electronics</div>`;
            document.getElementById("products_display").innerHTML =`<section>
            <title>Women's Clothing</title>
            <div class="items" id="womens_items">
            </div>
          </section>`;
          women.forEach((item) => {
            document.getElementById("womens_items").innerHTML += `<div class="item">
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
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row rating">Rating: ${item.rating.rate}</div>
                <button id="addBtn" onclick="Addtocart(${item.id})">Add to Cart</button>
              </div>
              
            </div>`;
          })
  }
  
  function Jewellerytype(a){
    jewelerytab = 1;
    alltab = 0;
    menstab = 0;
    womentab = 0;
    electronicstab = 0;
    document.getElementById("category").innerHTML = `<div id="all_type" class="filter" onclick="alltype()">All</div>
            <div id="mens_type" class="filter" onclick="menstype()">Mens</div>
            <div id="womens_type" class="filter" onclick="womentype()">Womens</div>
            <div id="jewellery_type" class="filter active" onclick="Jewellerytype()">Jewellery</div>
            <div id="electronics_type" class="filter" onclick="electronicstype()">Electronics</div>`;
            document.getElementById("products_display").innerHTML =`<section>
            <title>Jewellery</title>
            <div class="items" id="jewellery_items">
            </div>
          </section>`;
          jewelery.forEach((item) => {
            document.getElementById("jewellery_items").innerHTML += `<div class="item">
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
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row rating">Rating: ${item.rating.rate}</div>
                <button id="addBtn" onclick="Addtocart(${item.id})">Add to Cart</button>
              </div>
              
            </div>`;
          })
  }
  
  function electronicstype(a){
    electronicstab = 1;
    alltab = 0;
    menstab = 0;
    womentab = 0;
    jewelerytab = 0;
    document.getElementById("category").innerHTML = `<div id="all_type" class="filter" onclick="alltype()">All</div>
            <div id="mens_type" class="filter" onclick="menstype()">Mens</div>
            <div id="womens_type" class="filter" onclick="womentype()">Womens</div>
            <div id="jewellery_type" class="filter" onclick="Jewellerytype()">Jewellery</div>
            <div id="electronics_type" class="filter active" onclick="electronicstype()">Electronics</div>`;
            document.getElementById("products_display").innerHTML = `<section>
            <title>Electronics</title>
            <div class="items" id="electronics_items">
            </div>
          </section>`;
          electronics.forEach((item) => {
            document.getElementById("electronics_items").innerHTML += `<div class="item">
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
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row rating">Rating: ${item.rating.rate}</div>
                <button id="addBtn" onclick="Addtocart(${item.id})">Add to Cart</button>
              </div>
              
            </div>`;
          })

  }



  // const produtc = {
  //   id: 1,
  //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   price: 109.95,
  //   description:
  //     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   category: "men's clothing",
  //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   rating: { rate: 3.9, count: 120 },
  // };

  let colors =["Red", "Black", "Blue", "Green", "White"];
  let sizes = ["S", "M", "L", "XL"];
  if(localStorage.getItem("products")) {
    let products = JSON.parse(localStorage.getItem("products"));

    mens = products.filter((item) => item.category == "men's clothing");
    localStorage.setItem("mens", JSON.stringify(mens));

    women = products.filter((item) => item.category == "women's clothing");
    localStorage.setItem("women", JSON.stringify(women));

    jewelery = products.filter((item) => item.category == "jewelery");
    localStorage.setItem("jewelery", JSON.stringify(jewelery));

    electronics = products.filter((item) => item.category == "electronics");
    localStorage.setItem("electronics", JSON.stringify(electronics));
    console.log(mens[0]);
    console.log(women);
    console.log(jewelery);
    console.log(electronics);
   } else {
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data) => {
      // console.log("dataa", data);
      let newData = data.map((item) => {
        item.colors = colors.slice(Math.floor(Math.random() * 5));
        item.sizes = sizes.slice(Math.floor(Math.random() * 4));
        return item;
      });
      console.log("new Datta", newData);
      localStorage.setItem("products", JSON.stringify(newData));
      let products = JSON.parse(localStorage.getItem("products"));

      mens = products.filter((item) => item.category == "men's clothing");
      localStorage.setItem("mens", JSON.stringify(mens));

      women = products.filter((item) => item.category == "women's clothing");
      localStorage.setItem("women", JSON.stringify(women));

      jewelery = products.filter((item) => item.category == "jewelery");
      localStorage.setItem("jewelery", JSON.stringify(jewelery));

      electronics = products.filter((item) => item.category == "electronics");
      localStorage.setItem("electronics", JSON.stringify(electronics));

      alltype(mens, women, jewelery, electronics);
    });
  }
  document.getElementById("logout").addEventListener("click",()=>{
    localStorage.removeItem("currUser");
  });

  let mens1 = JSON.parse(localStorage.getItem("mens"));
  let womens1 = JSON.parse(localStorage.getItem("women"));
  let jewelery1 = JSON.parse(localStorage.getItem("jewelery"));
  let electronics1 = JSON.parse(localStorage.getItem("electronics"));
  
  document.getElementById('red').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('blue').checked = false;
      document.getElementById('green').checked = false;
      document.getElementById('black').checked = false;
      document.getElementById('white').checked = false;
    }
    let filteredmens = mens1.filter((item) => item.colors.includes("Red"));
    let filteredwomens = womens1.filter((item) => item.colors.includes("Red"));
    let filteredjewelery = jewelery1.filter((item) => item.colors.includes("Red"));
    let filteredelectronics = electronics1.filter((item) => item.colors.includes("Red"));
    alltype(filteredmens, filteredwomens, filteredjewelery, filteredelectronics);
  });


  document.getElementById('blue').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('red').checked = false;
      document.getElementById('green').checked = false;
      document.getElementById('black').checked = false;
      document.getElementById('white').checked = false;
    }
    let filteredmens = mens1.filter((item) => item.colors.includes("Blue"));
    let filteredwomens = womens1.filter((item) => item.colors.includes("Blue"));
    let filteredjewelery = jewelery1.filter((item) => item.colors.includes("Blue"));
    let filteredelectronics = electronics1.filter((item) => item.colors.includes("Blue"));
    alltype(filteredmens, filteredwomens, filteredjewelery, filteredelectronics);
  });


  document.getElementById('green').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('blue').checked = false;
      document.getElementById('red').checked = false;
      document.getElementById('black').checked = false;
      document.getElementById('white').checked = false;
    }
    let filteredmens = mens1.filter((item) => item.colors.includes("Green"));
    let filteredwomens = womens1.filter((item) => item.colors.includes("Green"));
    let filteredjewelery = jewelery1.filter((item) => item.colors.includes("Green"));
    let filteredelectronics = electronics1.filter((item) => item.colors.includes("Green"));
    alltype(filteredmens, filteredwomens, filteredjewelery, filteredelectronics);

  });


  document.getElementById('black').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('blue').checked = false;
      document.getElementById('green').checked = false;
      document.getElementById('red').checked = false;
      document.getElementById('white').checked = false;
    }
    
    let filteredmens = mens1.filter((item) => item.colors.includes("Black"));
    let filteredwomens = womens1.filter((item) => item.colors.includes("Black"));
    let filteredjewelery = jewelery1.filter((item) => item.colors.includes("Black"));
    let filteredelectronics = electronics1.filter((item) => item.colors.includes("Black"));
    alltype(filteredmens, filteredwomens, filteredjewelery, filteredelectronics);

  });


  document.getElementById('white').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('blue').checked = false;
      document.getElementById('green').checked = false;
      document.getElementById('black').checked = false;
      document.getElementById('red').checked = false;
    }
    let filteredmens = mens1.filter((item) => item.colors.includes("White"));
    let filteredwomens = womens1.filter((item) => item.colors.includes("White"));
    let filteredjewelery = jewelery1.filter((item) => item.colors.includes("White"));
    let filteredelectronics = electronics1.filter((item) => item.colors.includes("White"));
    alltype(filteredmens, filteredwomens, filteredjewelery, filteredelectronics);
  });

  document.getElementById('s').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('m').checked = false;
      document.getElementById('l').checked = false;
      document.getElementById('xl').checked = false;
    }

    let filteredmens = mens1.filter((item) => item.sizes.includes("S"));
    let filteredwomens = womens1.filter((item) => item.sizes.includes("S"));
    let filteredjewelery = jewelery1.filter((item) => item.sizes.includes("S"));
    let filteredelectronics = electronics1.filter((item) => item.sizes.includes("S"));
    alltype(filteredmens, filteredwomens, filteredjewelery, filteredelectronics);

  });


  document.getElementById('m').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('s').checked = false;
      document.getElementById('l').checked = false;
      document.getElementById('xl').checked = false;
    }
    let filteredmens = mens1.filter((item) => item.sizes.includes("M"));
    let filteredwomens = womens1.filter((item) => item.sizes.includes("M"));
    let filteredjewelery = jewelery1.filter((item) => item.sizes.includes("M"));
    let filteredelectronics = electronics1.filter((item) => item.sizes.includes("M"));
    alltype(filteredmens, filteredwomens, filteredjewelery, filteredelectronics);
  });


  document.getElementById('l').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('s').checked = false;
      document.getElementById('m').checked = false;
      document.getElementById('xl').checked = false;
    }
    let filteredmens = mens1.filter((item) => item.sizes.includes("L"));
    let filteredwomens = womens1.filter((item) => item.sizes.includes("L"));
    let filteredjewelery = jewelery1.filter((item) => item.sizes.includes("L"));
    let filteredelectronics = electronics1.filter((item) => item.sizes.includes("L"));
    alltype(filteredmens, filteredwomens, filteredjewelery, filteredelectronics);

  });


  document.getElementById('xl').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('s').checked = false;
      document.getElementById('m').checked = false;
      document.getElementById('l').checked = false;
    }

    let filteredmens = mens1.filter((item) => item.sizes.includes("XL"));
    let filteredwomens = womens1.filter((item) => item.sizes.includes("XL"));
    let filteredjewelery = jewelery1.filter((item) => item.sizes.includes("XL"));
    let filteredelectronics = electronics1.filter((item) => item.sizes.includes("XL"));
    alltype(filteredmens, filteredwomens, filteredjewelery, filteredelectronics);

  });


  alltype(mens, women, jewelery, electronics);

} else {
    //take user back to login!
    window.location.href = "../index.html"
}
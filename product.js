let arr=[]

let API = "https://63c66b68d307b7696738a8cf.mockapi.io/products"
async function FetchData() {
  try {
    let request = await fetch(API);
    let data = await request.json();
    console.log(data);
    arr=data
    FilterData(data)
  } catch (err) {
    console.log(err)
  }
}
FetchData()
let filterBy = document.getElementById("filter");
filterBy.addEventListener("change", () => {
  FetchData()
})
function FilterData(data) {
  let filterValue = filterBy.value;
  if (filterValue === "") {
    DisplayProduct(data)
  } else {
    data = data.filter((product) => {
      return product.category == filterValue;
    })
    DisplayProduct(data)
  }
}

let CartArr = JSON.parse(localStorage.getItem("cart")) || [];

let Container = document.getElementById("product-container")

function DisplayProduct(data) {


  Container.innerHTML = "";
  data.forEach((product, i) => {
    let card = document.createElement("div");
    let image = document.createElement("img");
    let brand = document.createElement("h3");
    let category = document.createElement("p");
    let details = document.createElement("p");
    let price = document.createElement("h4");
    let add_to_cart = document.createElement("button");


    image.src = product.image;
    brand.textContent = product.name;
    category.textContent = product.category;
    price.textContent = `₹${product.price}`;
    details.textContent = product.title;
    add_to_cart.textContent = "Add to Cart";

    add_to_cart.addEventListener("click", () => {
      if (checkDuplicate(product)) {
        alert("Product Already in Cart")
      } else {
        CartArr.push({ ...product, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(CartArr));
        alert("Product Added To Cart")
        window.location.href = "./product.html"
      }
    })


    card.append(image, brand, price, details, category, add_to_cart);
    Container.append(card);

  });



}

function checkDuplicate(product) {
  for (let i = 0; i < CartArr.length; i++) {

    if (CartArr[i].id === product.id) {
      return true;

    }
  }
  return false;
}




let qtyel = document.getElementById("qty")
let Cart = JSON.parse(localStorage.getItem("cart")) || [];
let count = 0;
for (let i = 0; i < Cart.length; i++) {
  count += Cart[i].quantity;
}

qtyel.textContent = count;



// let FetchData=[]

  // let inpbox=document.getElementById("scr_button")
  let inpbox=document.getElementById("sform")
  

  inpbox.addEventListener("submit", (e) => {
      e.preventDefault();
      // let searchParams = document.getElementById("search").value;
      let searchParams = inpbox.search.value;

      let filtered =  arr.filter((element) => {
        if (
          element.name.toUpperCase().includes(searchParams.toUpperCase()) ===
          true
        ) {
          return true;
        } else {
          return false;
        }
      });
      DisplayProduct(filtered);
    });



 // Write all necessery JS here 
 let Cart= JSON.parse(localStorage.getItem("cart"))||[];
 let Container = document.getElementById("cart-container");
 
     function DisplayProduct(data){
       let total = document.getElementById("cart-total")
       const totalPro = document.getElementById("top")
 Container.innerHTML = "";
 Cart.forEach((product) => {
   let card = document.createElement("div");
   let image = document.createElement("img");
   let brand = document.createElement("h3");
   let category = document.createElement("p");
   let details = document.createElement("p");
   let quantity= document.createElement("p");
 
   let price = document.createElement("h4");
   let Remove = document.createElement("button");
   let Increment = document.createElement("button");
   let Decrement = document.createElement("button");
 
   quantity.textContent= product.quantity;
   image.src = product.image;
   brand.textContent = product.name;
   category.textContent = product.category;
   price.textContent = `₹${product.price}`;
   details.textContent = product.title;
   Remove.textContent="Remove";
   Increment.textContent="+";
   Decrement.textContent="-";
 
   Remove.addEventListener("click",()=>{
      Cart=Cart.filter((ele)=>{
       return ele.id!==product.id;
      })
      localStorage.setItem("cart",JSON.stringify(Cart));
      DisplayProduct();
   })
   Increment.addEventListener("click",()=>{
      product=product.quantity++;
      localStorage.setItem("cart",JSON.stringify(Cart));
      DisplayProduct();
     })
     Decrement.addEventListener("click",()=>{
      if(product.quantity>1){
       product=product.quantity--;
      localStorage.setItem("cart",JSON.stringify(Cart));
      DisplayProduct();
      }
     })
 
     Container.append(card);
   card.append(image,brand,price,details,category,Remove,Increment,Decrement,quantity);
 
 
 });
 let qtyel=document.getElementById("qty")
 let sum=0;
 let count=0;
 for(let i=0;i<Cart.length;i++)
 {
   sum+=Cart[i].price*Cart[i].quantity;
   count+=Cart[i].quantity;
 }
 total.textContent=sum;
 qtyel.textContent=count;
 
 }
 DisplayProduct();
 
 
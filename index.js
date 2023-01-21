
   
   
    let qtyel=document.getElementById("qty")
    let Cart= JSON.parse(localStorage.getItem("cart"))||[];
      let count=0;
  for(let i=0;i<Cart.length;i++)
  {
    count+=Cart[i].quantity;
  }
  
  qtyel.textContent=count;
   
   // sliding part
    let imgtag = document.createElement("img");
    let slidediv = document.getElementById("slideshow");
    slidediv.append(imgtag);
    let currentIndex = 0;

    var slideImages = [
        "//static3.industrybuying.com/homepage/1673953632Desktop-524xx334-Green-Soul-new.jpg",
        "//static3.industrybuying.com/homepage/1674019851Desktop-524xx334-Auto-oprema.jpg", "//static3.industrybuying.com/homepage/1667890944Industrial-buying-524x334-4.jpg",
        "//static3.industrybuying.com/homepage/1650877078AGRIPRO.png", "//static3.industrybuying.com/homepage/1671432246CP-PLUS-DESKTOP-(524X334).png", "//static3.industrybuying.com/homepage/1672383942Air-Purifier-Desktop-banner-524x334-2.png"
    ]
    slideshowFun(slideImages);

    function slideshowFun(images) {
        imgtag.setAttribute("src", images[currentIndex]);
        if (currentIndex == images.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
    }
    window.addEventListener("load", function () {
        setInterval(slideshowFun, 2000, slideImages);
    });

// data append in cart

    let api=(" https://63c66b68d307b7696738a8cf.mockapi.io/products")
    fectheddata()
    async function fectheddata(){
        try{
            let request=await fetch(api)
            let data= await request.json()
            console.log(data);
            Display(data)
            // FilterData(data)
        }catch(err){
            console.log(err)
        }
    }
   
 
      let div1 = document.querySelector("#product1");

    function Display(data) {
      div1.innerHTML= "";
      data.forEach((element) => {
        if(element.category==="IB POWER BRAND"){
            
            let indiv = document.createElement("div");
            indiv.setAttribute("class","card1")
            let img=document.createElement("img")
            img.setAttribute("src",element.image)

            let para1 = document.createElement("p");
            para1.setAttribute("id","detail")
            para1.innerText=element.Description

            let para2 = document.createElement("p");
            para2.setAttribute("id","des")
            para2.innerText=element.title

            let hed3 = document.createElement("h3");

            hed3.innerText=element.price
            
            indiv.append(img, para1, para2,hed3);
            div1.append(indiv);

        }
        

        else if(element.category==="  Best Sellers"){
            let div2 = document.querySelector("#main3");
            let indiv = document.createElement("div");
            indiv.setAttribute("class","card1")
            let img=document.createElement("img")
            img.setAttribute("src",element.image)

            let para1 = document.createElement("p");
            para1.setAttribute("id","detail")
            para1.innerText=element.Description

            let para2 = document.createElement("p");
            para2.setAttribute("id","des")
            para2.innerText=element.title

            let hed3 = document.createElement("h3");
            hed3.innerText=element.price
            
            indiv.append(img, para1, para2,hed3);
            div2.append(indiv);

        }

        else if(element.category===" NEW ARRIVALS"){
            let div3 = document.querySelector("#main4");
            let indiv = document.createElement("div");
            indiv.setAttribute("class","card1")
            let img=document.createElement("img")
            img.setAttribute("src",element.image)

            let para1 = document.createElement("p");
            para1.setAttribute("id","detail")
            para1.innerText=element.Description

            let para2 = document.createElement("p");
            para2.setAttribute("id","des")
            para2.innerText=element.title

            let hed3 = document.createElement("h3");
            hed3.innerText=element.price
            
            indiv.append(img, para1, para2,hed3);
            div3.append(indiv);

        }
       

        else if(element.category==="Office Supplies"){
            let div4 = document.querySelector("#main5");
            let indiv = document.createElement("div");
            indiv.setAttribute("class","card1")
            let img=document.createElement("img")
            img.setAttribute("src",element.image)

            let para1 = document.createElement("p");
            para1.setAttribute("id","detail")
            para1.innerText=element.Description

            let para2 = document.createElement("p");
            para2.setAttribute("id","des")
            para2.innerText=element.title

            let hed3 = document.createElement("h3");
            hed3.innerText=element.price
            
            indiv.append(img, para1, para2,hed3);
            div4.append(indiv);

        }
       
      }); 
    }

    
    

    // function Display(data) {
    //   data.forEach((element) => {
        
       
    //   }); 
    // }

//  below both function are for searching



    // let inpbox=document.getElementById("search")

    // inpbox.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     let searchParams = searchForm.search.value;
  
    //     let filtered = fetchedData.filter((element) => {
    //       if (
    //         element.name.toUpperCase().includes(inpbox.toUpperCase()) ===
    //         true
    //       ) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     });
    //     Display(filtered);
    //   });


    //   let formel=document.getElementById("sform")
    // let inpel=document.getElementById("search")

    // formel.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     let inpel = formel.search.value;
    //     console.log("hello1")
  
    //     let filtered = fectheddata.filter((element,i) => {
    //       if (
    //         element[i].name.toUpperCase().includes(inpel.toUpperCase()) ===
    //         true
    //       ) {
    //         console.log("hello2")
    //         return true;
    //       } else {
    //         console.log("hello3")
    //         return false;
    //       }
    //     });
    //     console.log("hello4")
    //     Display(filtered);
    //   });


// filter part

      // let filterBy = document.getElementById("filter");
      // filterBy.addEventListener("change",()=>{
      //   fectheddata()
      // })
      // function FilterData(data){
      //   let filterValue = filterBy.value;
      //   if(filterValue===""){
      //     Display(data)
      //   }else{
      //     data=data.filter((product)=>{
      //       return product.category == filterValue;
      //     })
      //     Display(data)
      //   }
      // }




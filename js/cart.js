const addToCart=document.querySelectorAll(".add-to-cart");
const counter=document.getElementById("counter")
const cartPreview=document.getElementById("cart-preview")
console.log(counter)
const cartItems=[ ]

console.log(addToCart);

addToCart.forEach(function(btn){
btn.addEventListener("click",function(e){


    if(e.target.textContent==="add to cart"){

        console.log()
        const pizzaImage = e.target.parentElement.children[0].getAttribute("src")
        const pizzaName=(e.target.parentElement.children[1].textContent)
        console.log(pizzaName)
        const pizzaFilling=(e.target.parentElement.children[2].textContent)
        console.log(pizzaFilling)
        const pizzaPrice=  parseInt((e.target.parentElement.children[3].dataset.price))
        console.log(pizzaPrice)
        
        const pizzaItem={
            pizzaImage:pizzaImage,
            pizzaName:pizzaName,
            pizzaFilling:pizzaFilling,
            pizzaPrice:pizzaPrice
        }
        console.log(pizzaItem)
        cartItems.push(pizzaItem)
        counter.textContent=cartItems.length
        console.log(cartItems)
    e.target.textContent="Added to Cart"
    }
// Update Cart Preview
const cartPreviewItem=document.createElement("div")
console.log(cartPreviewItem)

cartItems.map(item=>{
    console.log(item)
  
    cartPreviewItem.innerHTML = `
    <div class="cart-items">
<i class="fa-solid fa-xmark"></i>
<img src=${item.pizzaImage}
<p>${item.pizzaName}</p>
<p>${item.pizzaFilling}</p>
<p>${item.pizzaPrice}</p>
<input type=number placeholder=number width=30/>
    <div>
    `;
    cartPreview.appendChild(cartPreviewItem)
    console.log(item);
})
})
}
)




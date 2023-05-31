const pizzaItems = document.querySelectorAll(".menu__items");
const filterButtons = document.querySelectorAll(".select");
console.log(pizzaItems);

pizzaItems.forEach(function(pizza){
  if (pizza.classList.contains("chicken")) {
    pizza.style.display="flex"
   }
   else{
    pizza.style.display="none"
   }
})



filterButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    filterButtons.forEach(function(btn){
      btn.classList.remove("active")
    })
    item.classList.add("active")
    const filterName = item.innerHTML;
    console.log(filterName)
    if (filterName.toLowerCase() === "chicken pizza") {
      pizzaItems.forEach(function (item) {
        if (item.classList.contains("chicken")) {
         item.style.display="flex"
        }
        else{
          item.style.display="none"
        }
      });
    }

    else if (filterName.toLowerCase() === "peperoni") {
      pizzaItems.forEach(function (item) {
        if (item.classList.contains("Peperoni")) {
         item.style.display="flex"
        }
        else{
          item.style.display="none"
console.log("im not a chicken")
        }
      });
    } 
    
    else if (filterName.toLowerCase() === "margherita") {
      pizzaItems.forEach(function (item) {
        if (item.classList.contains("magherita")) {
         item.style.display="flex"
        }
        else{
          item.style.display="none"
console.log("im not a chicken")
        }
      });
    }
    
    else if (filterName.toLowerCase() === "hawaian") {
      pizzaItems.forEach(function (item) {
        if (item.classList.contains("Hawaian")) {
         item.style.display="flex"
        }
        else{
          item.style.display="none"
console.log("im not a chicken")
        }
      });
    }
    
    else if (filterName.toLowerCase() === "meat lovers pizza") {
      pizzaItems.forEach(function (item) {
        if (item.classList.contains("meatlovers")) {
         item.style.display="flex"
        }
        else{
          item.style.display="none"
console.log("im not a chicken")
        }
      });
    }
  });
});

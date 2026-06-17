const products = [

{
name:"Laptop",
category:"Electronics",
price:50000,
rating:4.5
},

{
name:"Mobile",
category:"Electronics",
price:20000,
rating:4.2
},

{
name:"T-Shirt",
category:"Clothing",
price:800,
rating:4.8
},

{
name:"Jeans",
category:"Clothing",
price:1500,
rating:4.1
}

];

const productDiv = document.getElementById("products");

function displayProducts(data){

productDiv.innerHTML="";

data.forEach(product=>{

productDiv.innerHTML += `
<div class="card">
<h3>${product.name}</h3>
<p>Category: ${product.category}</p>
<p>Price: ₹${product.price}</p>
<p>Rating: ${product.rating}</p>
</div>
`;

});

}

document.getElementById("filter").addEventListener("change", update);

document.getElementById("sort").addEventListener("change", update);

function update(){

let filtered = [...products];

const filterValue =
document.getElementById("filter").value;

const sortValue =
document.getElementById("sort").value;

if(filterValue !== "all"){

filtered = filtered.filter(
p => p.category === filterValue
);

}

if(sortValue === "rating"){

filtered.sort(
(a,b)=>b.rating-a.rating
);

}

if(sortValue === "price"){

filtered.sort(
(a,b)=>a.price-b.price
);

}

displayProducts(filtered);

}

displayProducts(products);
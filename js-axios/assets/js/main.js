import { BASE_URL } from "./constant.js";
// console.log(BASE_URL);

const productCard = document.querySelector(".row");

let products = null;

async function GetData(){
  
    const res = await axios.get(`${BASE_URL}/products`)
    products = res.data;
    console.log(res.data);
    drawCard(res.data)
}
GetData()

function drawCard(products){
    productCard.innerHTML="";
    products.forEach(product => {
        productCard.innerHTML+=`
        <div class="col-12 col-md-6 col-lg-4 allproducts">
        <div class="card" style="width: 18rem;">
        <img src="${product.image}"
            <div class="card-body">
              <h5 class="card-name">${product.name}</h5>
              <p class="card-desc">${product.description}</p>
              <p> $${product.price}</p>
            </div>
          </div>
    </div>
        `;
        
    });
}

const searchInput = document.querySelector(".search");
searchInput.addEventListener("input", (e) => {
  let searchValue = e.target.value.toLowerCase().trim();

  const filteredProducts = products.filter((b) =>
    b.name.toLowerCase().includes(searchValue)
  );
  drawCard(filteredProducts);
});
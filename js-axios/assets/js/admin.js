import { BASE_URL } from "./constant.js";

async function getData() {
    const res = await axios.get(`${BASE_URL}/products`);
   
    //  console.log(res.data);
    drawTable(res.data);
  }
  getData();

  const tBody = document.querySelector("tbody");

  function drawTable(array){
    tBody.innerHTML = "";
    array.forEach((product) => {
        tBody.innerHTML += `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td><img src="${product.image}"</td>
        <td><button class="btn btn-outline-danger delete" data-id=${product.id}>Delete</button></td>
        <td><button class="btn btn-outline-warning edit">Edit</button></td>
      </tr>
    `;
    });


    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((btn) =>{
        btn.addEventListener("click", function(){
            const id = this.getAttribute("data-id");
            deleteProducts(id)
        });
    });


  }
  async function deleteProducts(id){
    await axios.delete(`${BASE_URL}/products/${id}`)
    getData();
  }     
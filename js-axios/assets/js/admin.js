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
  const adminForm = document.querySelector(".admin-form");
  const name = document.querySelector("#name");
  const description = document.querySelector("#description");
  const email = document.querySelector("#email");
  const image = document.querySelector("#picture");

  adminForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    let newData = {
      name: name.value.trim(),
      description: description.value.trim(),
      email: email.value.trim(),
      picture: image.value.trim(), 

    }
    try{
      const res = await axios.post(`${BASE_URL}/products `,newData);
      console.log(res.data);
      addnewData();  
    }catch(error) {
    console.log(error)};
    adminForm.reset;
    
  });

  function addnewData(data){
    const row = document.createElement("tr");
    row.innerHTML=`
    <td>${data.name}</td>
    <td>${data.description}</td>
    <td>${data.email}</td>
    <td><img src"${data.picture}" style="width:200px;"/></td>
    `;
    tBody.appendChild(row); 
  }
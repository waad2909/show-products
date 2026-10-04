const btn = document.querySelector('.btn');
const loading = document.querySelector('#loading');
const div = document.querySelector(".products");
async function showProducts() {
    loading.classList.remove('d-none');
   try{ let result =await fetch('https://dummyjson.com/products');
    let data = await result.json();
    div.innerHTML=data.products.map((product) => 
        `<div class="col-md-4 col-lg-3 mb-3 col-sm-6">
        <div class="card h-card h-100 shadow-sm">
        <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
            <p class="card-text text-secondary">${product.description}</p>
            <p class="fw-bold">${product.category}</p>
            <h5 class="text-success">$${product.price}</h5>
            <button class="btn btn-primary w-100">View product</button>
        </div>
        </div>
        </div>`)
        .join('');
    } catch(error) {
            div.innerHTML = `<h1 class="text-danger">Error: ${error.message}</h1>`;
        }
        finally {
            loading.classList.add('d-none');
        }
};
btn.addEventListener('click', showProducts);

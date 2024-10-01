let h1 = document.querySelector("h1");
h1.innerText = 'Productos';

let array = [];

function cards() {
  for (let i = 1; i < 10; i++) {
    array.push(`
        <div class="col-md-4 col-sm-6 col-12"> 
          <div class="card"> 
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">Card ${i}</h5> 
              <p class="card-text">Esta es la card numero ${i}.</p>
              <a href="./producto.html"><button>Ver más...</button></a>
            </div>
          </div>
        </div>
    `);
  }

  document.querySelector(".row").innerHTML = array.join("");
}

document.addEventListener("DOMContentLoaded", cards);

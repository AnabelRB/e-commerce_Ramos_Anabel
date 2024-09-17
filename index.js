let h1 = document.querySelector("h1");
h1.innerText ='Productos';

let array = [];

function cards (){

for (let i = 1; i < 10; i++) {
    array.push(`
        <div class="col-md-4 col-sm-6 col-12">
        <div class="card" style="width: 18rem;">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg">
            <div>
                <h4>Card ${i}</h4>
                <p>Esta es la card numero ${i}</p>
           </div>
        </div>
        </div>
    `);

}

document.querySelector("section").innerHTML = array.join().replaceAll(",", "");
}
cards();
// const product=[
//     {
//         id: 0,
//         image:'image/gg-1,jpg',
//         title:'z Flip Foldable Mobile',
//         price:120
//     },
//     {
//         id:1,
//         Image:'image/hh-2.jpg',
//         title:'Air pods Pro',
//         price:60
//     },
//     {
//     id: 2,
//     image: 'image/ee-3.jpg',
//     title: '250D DSLR Camera',
//     price: 230
//     },

//     {
//     id: 3,
//     image: 'image/aa-1.jpg',
//     title: 'Headphones',
//     price:100
//     },

//     {
//     id: 4,
//     image: 'image/bb-1.jpg',
//     title: 'Audio Microphone',
//     price:230
//     },
//     {
//     id: 5,
//     image: 'image/cc-1.jpg',
//     title: 'Smart Watch',
//     price:100
//     },
    
// ]
// const categories = [...new setInterval(product.map((item)=> {return item}))]

// document.getElementById('searchBar').addEventListener('keyup', (e)=>{
//     const searchData = e.target.Value.toLowerCase();
//     const filterData = categories.filter((item)=>{
//         return(
//             item.title.toLocaleLowerCase().includes(searchData)
//         )
//     })
//     displayItem(filterData)
// });

// const displayItem = (items) => {
//     document.getElementById('root').innerHTML=items.map((item)=>{
//         var {image, title, price} = item;
//         return(
//             '<div class='box'>
//                 <div class='img-box'>
//                     <img class='images' src=${image}></img>
//                 </div>
//                 <div class='bottom'>
//                     <p>${title}</p>
//                     <h2>$ ${price}.00</h2>
//                     <button>Add to cart</button>
//                 </div>
//             </div>'
//         )
//     }).join('')
// }
// displayItem(categories);

 let cart = [];

        function addToCart(productName, price) {
            cart.push({ name: productName, price: price });
            renderCart();
        }

        function renderCart() {
            let cartElement = document.getElementById('cart');
            cartElement.innerHTML = '<h2>Shopping Cart</h2>';
            let total = 0;
            cart.forEach(item => {
                cartElement.innerHTML += `<p>${item.name} - $${item.price}</p>`;
                total += item.price;
            });
            cartElement.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
        }

        // JavaScript for filtering products based on search input
        document.getElementById('searchInput').addEventListener('input', function() {
            let searchValue = this.value.toLowerCase();
            let products = document.querySelectorAll('.product');
            products.forEach(product => {
                let productName = product.dataset.name.toLowerCase();
                if (productName.includes(searchValue)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
        

        // dark mode
        const checkbox = document.getElementById("checkbox")
        checkbox.addEventListener("change", () => {
          document.body.classList.toggle("dark")
        })

        // sideBar toggle harmbuger
         const menu_toggle = document.querySelector('.menu-toggle');
        const sidebar =document.querySelector('.sidebar');

        menu_toggle.addEventListener ('click', () =>{
            menu_toggle.classList.toggle('is-active');
            sidebar.classList.toggle('is-active');
        })
 
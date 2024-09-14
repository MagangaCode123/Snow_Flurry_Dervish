
let categoryToggle = false;
let countryToggle = false
let deliveryToggle = false
let cartNumber = 1


const shopbtn = document.getElementById('shopnow');
shopbtn.addEventListener('click', function(){
     alert('shop now')
});

const seebtn = document.getElementById('seeall');
seebtn.addEventListener('click', function(){
    alert('see all')
});


//ADD TO CART
const badgeNo = document.getElementById('badge')


const addcartbtn = document.querySelectorAll('#addcart');
addcartbtn.forEach(function(addcartbtn){
    addcartbtn.addEventListener('click', function(){

        badgeNo.innerHTML = cartNumber++ 
    });
});


//ADD TO PRICING
const price = document.getElementById('pricing') 
const totalPrice = document.getElementById('totalPrice')
addcartbtn.forEach(function(addcartbtn){
    addcartbtn.addEventListener('click', function(){
    //     console.log('text-->',price.innerHTML.split('$'))
        const result = parseFloat(price.innerHTML.split('$')[1])
       const totalPriceNum = parseFloat(totalPrice.innerHTML)

       return totalPrice.innerHTML = result + totalPriceNum


    
    });
});


//TOGGLE FOR CATEGORIES
const categoryButton = document.getElementById('openCategory')
const categoryList = document.getElementById('categoryList')

    categoryButton.addEventListener('click', ()=>{
        if(!categoryToggle){
            categoryList.setAttribute('class', 'block')
          
            categoryToggle = true
        
        }
        else{
            categoryList.setAttribute('class', 'hidden')
         
            categoryToggle = false
        
        }   

    })

//TOGGLE FOR COUNTRIES
const countryButton = document.getElementById('countries')
const countryList = document.getElementById('countryList')

countryButton.addEventListener('click', ()=>{
        if(!countryToggle){
            countryList.setAttribute('class', 'block')
          
            countryToggle = true
        
        }
        else{
            countryList.setAttribute('class', 'hidden')
         
            countryToggle = false
        
        }   

    })

//TOGGLE FOR DELIVERIES
const delivery = document.getElementById('delivery')
const deliveryOptions = document.getElementById('deliveryOptions')

delivery.addEventListener('click', ()=>{
        if(!deliveryToggle){
            deliveryOptions.setAttribute('class', 'block')
          
            deliveryToggle = true
        
        }
        else{
            deliveryOptions.setAttribute('class', 'hidden')
         
            deliveryToggle  = false
        
        }   

    })
    



const shopbtn = document.getElementById('shopnow');
shopbtn.addEventListener('click', function(){
     alert('shop now')
});

const seebtn = document.getElementById('seeall');
seebtn.addEventListener('click', function(){
    alert('see all')
});


const addcartbtn = document.querySelectorAll('#addcart');
addcartbtn.forEach(function(addcartbtn){
    addcartbtn.addEventListener('click', function(){
        alert('add cart')
    });
});


let $=document
window.onscroll=function (){ stickyMenu()}
let styckyMenu= $.getElementById('sticky-Menu');
let pageScroll=styckyMenu.offsetTop;
function stickyMenu(){
    if(window.pageYOffset>=pageScroll){
        styckyMenu.classList.add('sticky')
    }else{
        styckyMenu.classList.remove('sticky')
    }
}



let foodArray=[
    { id:1,foodName:"pizza peperoni",price:12,imageUrl:"img/foods/1.jpg"},
    { id:2,foodName:"Amazing salad",price:5.4,imageUrl:"img/foods/2.jpg"},
    { id:3,foodName:"Rice and Chiken",price:15.5,imageUrl:"img/foods/3.jpg"},
    { id:4,foodName:"hamburger",price:8,imageUrl:"img/foods/4.jpg"},
    { id:5,foodName:"coffe",price:1.5,imageUrl:"img/foods/5.jpg"},
    { id:6,foodName:"Black tea",price:1.5,imageUrl:"img/foods/6.jpg"},
    { id:7,foodName:"Kabab",price:18,imageUrl:"img/foods/7.jpg"},
    { id:8,foodName:"Special pizza",price:14,imageUrl:"img/foods/8.jpg"},
    { id:8,foodName:"Special pizza",price:14,imageUrl:"img/foods/8.jpg"}
]
let orderQnty=$.getElementById('order-qnty');
let showFoodMenu=$.getElementById('content-menu');
let cardShow=$.getElementById('card-show')
let totalPrice=$.querySelector('#total-price');
let ordersArray=[]
function foodMenuGenerator(foodarr){
    foodarr.forEach(function(foods){
        showFoodMenu.insertAdjacentHTML('beforeend','<div class="col-md-3"><div class="card" style="width: 100%;"><img src="'+foods.imageUrl+'"class="w-100 card-img-top" alt="..."><div class="card-body text-center"><h5 class="card-title">'+foods.foodName+'</h5><p class="card-text"><span>'+foods.price+'</span><span>$</span></p><a href="#" class="add-card btn btn-dark">Add to card</a></div></div></div>')
    })
    let addBtn=$.querySelectorAll('.add-card');
    let sum=0;
    function addFoodToCard(addBtn){
        let qnty=0;
        addBtn.forEach(function(add){
            add.addEventListener('click',(e)=>{
                let foodImgOrder=e.target.parentElement.parentElement.firstChild.src;
                let foodOrderTitle=e.target.parentElement.firstChild.innerHTML;
                let foodOrderPrice=Number(e.target.parentElement.firstChild.nextSibling.firstChild.innerHTML);
                let arrayFororders={
                    orderName:foodOrderTitle,
                    orderPrice:foodOrderPrice,
                    orderImage:foodImgOrder
                }
                ordersArray.push(arrayFororders);
                cardShow.insertAdjacentHTML('beforeend','<div class="row my-3 d-flex justify-content-center"><div class="text-center col-md-4 align-self-center"><img style="border-radius: 10px;" src="'+ordersArray[qnty].orderImage+'" width="100" height="100" alt=""></div><div class="text-center col-md-4 align-self-center">'+ordersArray[qnty].orderName+'</div><div class="text-center col-md-4 align-self-center"><span>'+ordersArray[qnty].orderPrice+'</span><span>$</span></div></div>')
                let firstNum=ordersArray[qnty].orderPrice;
                sum=sum+firstNum;
                totalPrice.innerHTML=sum

                qnty++
                orderQnty.innerHTML=qnty
            })
        })
    }
    
    addFoodToCard(addBtn)
}
foodMenuGenerator(foodArray)

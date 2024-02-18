const selectSeats = document.querySelectorAll('.seat');
let count = 0;
for(const selectSeat of selectSeats){
    count = count + 1;
   selectSeat.addEventListener('click',function(){
    // Creating Price and Class of seat
        const addPrice = document.createElement('p');
        addPrice.innerText = 550;
        
        const classType = document.createElement('p');
        classType.innerText = 'Economic';

        const seatName = selectSeat.innerText;
        const seatNameElement = document.createElement('p');
        seatNameElement.textContent = seatName;

        const cartName = document.getElementById('cart-name');
        const cartPrice = document.getElementById('cart-price');
        const cartType  = document.getElementById('cart-class');
        cartType.appendChild(classType);
        cartPrice.appendChild(addPrice);
        cartName.appendChild(seatNameElement);

   })
   
}

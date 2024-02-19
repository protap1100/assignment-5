const selectSeats = document.querySelectorAll(".seat");
const cartName = document.getElementById("cart-name");
const cartPrice = document.getElementById("cart-price");
const cartType = document.getElementById("cart-class");
const setSelected = document.getElementById("selected-seat");
const totalDisplay = document.getElementById("total-price");
const displayRemainingSeats = document.getElementById("seats-left");
const grandTotal = document.getElementById("grand-total");

let seats = 0;
let totalPrice = 0;
let totalSets = 0;
let withoutDiscount = 0;

for (const selectSeat of selectSeats) {
  totalSets++;

  selectSeat.addEventListener("click", function () {
    if (!selectSeat.classList.contains("selected")) {
      if (seats < 4) {
        // adding const value for seats because all sets price is same
        const seatPrice = 550;

        // Updating Total Price
        totalPrice += seatPrice;
        totalDisplay.innerText = totalPrice;

        // Updating Grand Total
        withoutDiscount += seatPrice;
        grandTotal.innerText = withoutDiscount;

        // add price and class elements
        const addPrice = document.createElement("p");
        addPrice.innerText = seatPrice;

        const classType = document.createElement("p");
        classType.innerText = "Economic";

        const seatName = selectSeat.innerText;
        const seatNameElement = document.createElement("p");
        seatNameElement.textContent = seatName;
        // appending card and element
        cartType.appendChild(classType);
        cartPrice.appendChild(addPrice);
        cartName.appendChild(seatNameElement);

        // selecting backgroundColor
        selectSeat.classList.add("selected");
        selectSeat.style.backgroundColor = "#1DD100";
        setSelected.innerText = ++seats;

        // updating the total remaining seats
        const remainingSeats = --totalSets;
        displayRemainingSeats.innerHTML = remainingSeats;

        // Apply Coupon Validation Function
        if (seats == 4) {
          const applyCoupon2 = document.getElementById("apply-coupon");
          const disableButton = document.getElementById("applycode");
          disableButton.removeAttribute("disabled");
          applyCoupon2.addEventListener("keyup", function (event) {
            const text = event.target.value;
            // console.log(text);
            const coupon1 = document.getElementById("coupon-1").innerText;
            const coupon2 = document.getElementById("coupon-2").innerText;
            // Checking if Coupon Code Matched or Not
            if (text === coupon1 || text === coupon2) {
              disableButton.removeAttribute("disabled");
            }
          });
        }
      } else {
        alert("You can only select up to 4 seats");
      }
    } else {
      selectSeat.classList.remove("selected");
      selectSeat.style.backgroundColor = "";

      const cartElements = cartName.getElementsByTagName("p");
      setSelected.innerText = --seats;

      const remainingSeats = ++totalSets;
      displayRemainingSeats.innerHTML = remainingSeats;

      for (let i = 0; i < cartElements.length; i++) {
        if (cartElements[i].textContent === selectSeat.innerText) {
          const removedPrice = parseInt(cartPrice.children[i].innerText);

          totalPrice -= removedPrice;
          totalDisplay.innerText = totalPrice;

          withoutDiscount -= removedPrice;
          grandTotal.innerText = withoutDiscount;

          cartElements[i].remove();
          cartPrice.removeChild(cartPrice.children[i]);
          cartType.removeChild(cartType.children[i]);

          break;
        }
      }
    }
  });
}

function applyCoupon() {
  const getCouponValueById = document.getElementById("apply-coupon").value;

  const couponOne = document.getElementById("coupon-1").innerText;
  const couponTwo = document.getElementById("coupon-2").innerText;

  if (getCouponValueById === couponOne) {
    const totalDiscount = (totalPrice * 15) / 100;
    const grandTotal2 = withoutDiscount - totalDiscount;
    grandTotal.innerText = grandTotal2;
    // Showing Discount
    const discount = document.getElementById("discount");
    const p = document.createElement("p");
    p.innerText = "Discount " + "Total:" + totalDiscount.toFixed(2) + "Taka";
    discount.appendChild(p);
    console.log(grandTotal2);

    document.getElementById("remove-coupon").remove();
  } else if (getCouponValueById === couponTwo) {
    const totalDiscount = (totalPrice * 20) / 100;
    const grandTotal2 = withoutDiscount - totalDiscount;
    grandTotal.innerText = grandTotal2;  

    // Showing Discount
    const discount = document.getElementById("discount");
    const p = document.createElement("p");
    p.innerText ="Discount " + "Total:" + totalDiscount.toFixed(2) + "Taka";
    discount.appendChild(p);
    console.log(grandTotal2);
    document.getElementById("applycode").disabled = true;
    document.getElementById("remove-coupon").remove(); 
  } else {
    alert("Please Enter a valid Coupon Code");
  }
}

function handleOnClick() {
  my_modal_5.showModal();
}

// validation

const inputValue = document.querySelectorAll(".input-val");
const modal = document.getElementById("modal");

for (const inputValues of inputValue) {
  inputValues.addEventListener("keyup", function (event) {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const text = event.target.value;

    const isNameValid = typeof name === "string" && name.trim() !== "";

    const isPhoneNumber = !isNaN(Number(phone)) && phone.trim() !== "";

    if (isNameValid && isPhoneNumber) {
      modal.removeAttribute("disabled");
    } else {
    }
  });
}

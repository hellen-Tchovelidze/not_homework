let age = prompt("enter your age");
let type = prompt(" regular or 3D");
let time = prompt("enter time of day(matinee or evening)");
let hasCoupon = prompt("Do you have a coupon for 25% off? (yes or no)");

let price = 0;
function AgeControl(age) {
  switch (true) {
    case age < 10:
      return (price += 5);
      break;
    case age >= 10 && age < 65:
      return (price += 15);
      break;
    case age <= 65:
      return (price += 10);
    default:
      return (price += 15);
      break;
  }
}

AgeControl(age);

function TypeControl(type) {
  if (type === "3D") {
    return (price += 5);
  } else {
  }
}

TypeControl(type)

function TimeControl(time) {
    if (time === "evening") {
        return price += 5
    } else {
        
    }
}

TimeControl(time)

function hasCouponControl(hasCoupon) {
    if (hasCoupon === "yes") {
        return price -= 5
    } else {
        
    }
}

hasCouponControl(hasCoupon)

alert("your tiket cost " + price + " GEL")

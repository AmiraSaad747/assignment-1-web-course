let customername=prompt("Enter your name");
let category=prompt("Enter product category clothes,foods,drinks");
let price=Number(prompt("Enter the price"));
let quantity=Number(prompt("Enter the quantity"));
let coupon=prompt("Enter coupon code");
let payment=prompt("Enter payment method visa,cash");

let subtotal=price*quantity;
let categorydiscount=0;

switch(category.toLowerCase()){
    case "clothes":
        categorydiscount=subtotal*0.20;
        break;
    case "foods":
        categorydiscount=subtotal*0.10;
        break;
    case "drinks":
        categorydiscount=subtotal*0.05;
        break;
        default:
           categorydiscount=0;
}
let total=subtotal-categorydiscount;
let coupondiscount=0;
if(coupon===10){
   coupondiscount=total*0.10;
}
total-=coupondiscount;
let paymentdiscount=0;
if(payment.toLowerCase()==="visa"){
  paymentdiscount=total*0.05;
}
total-=paymentdiscount;
if(total<0){
    total=0;
}
let vat = total * 0.14;
let finalprice = total + vat;
console.log("========== Invoice ==========");
console.log("Customer Name: " + customername);
console.log("Category: " +  category);
console.log("Price: " + price);
console.log("Quantity: " + quantity);
console.log("Subtotal: " + subtotal);
console.log("Category Discount: " + categorydiscount);
console.log("Coupon Discount: " + coupondiscount);
console.log("Payment Discount: " + paymentdiscount);
console.log("VAT: " + vat);
console.log("Final Price: " + finalprice);




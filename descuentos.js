const coupons = [
    {
        name: "10%off",
        discount: 10,
    }, 
    {
        name: "20%off",
        discount: 20,
    },
    {
        name: "30%off",
        discount: 30,
    }, 
    {
        name: "40%off",
        discount: 40,
    }, 
    {
        name: "50%off",
        discount: 50,
    },
];
function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
    return precioConDescuento;
  
  }

  function onClickButtonPriceDiscount() {
           const inputPrice = document.getElementById("InputPrice");
           const priceValue = inputPrice.value;
          
           const inputCoupon = document.getElementById("InputCoupon");
           const couponValue = inputCoupon.value;
      

           const isCouponValueValid = function (coupon) {
            return coupon.name === couponValue;
        };
        
        const userCoupon = coupons.find(isCouponValueValid);
        
        if (!userCoupon) {
            alert("El cupón " + couponValue + " no es válido");
        } else {
            const descuento = userCoupon.discount;
            const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
            const resultP = document.getElementById("ResultP");
            resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
        }

    }   





// function calcularPrecioConDescuento(precio,descuento) {
    
//     const porcentajePrecioConDescuento = 100 - descuento;

//     const precioConDescuento = (precio * porcentajePrecioConDescuento)/ 100;

//     return precioConDescuento;

   
//}

// function precioDescuento() {
//     const inputPrice= document.getElementById("InputPrice");
//     const priceValue= inputPrice.value;
//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue= inputDiscount.value;

//     const precioConDescuentos = calcularPrecioConDescuento(priceValue,discountValue);


//     const result = document.getElementById("ResultP");

//     result.innerText = "El precio con descuento son: $" + precioConDescuentos;
// }


 //

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

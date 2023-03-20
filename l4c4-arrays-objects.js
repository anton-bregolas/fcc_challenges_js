// What does result evaluate to? -> true

const myObj = {
    nestedObject1: {
      price: 100,
      quantity: 5
    },
    nestedObject2: {
      price: 150,
      quantity: 2
    }
  };
  
  const myArray = [myObj.nestedObject1, myObj.nestedObject2];
  
  const resultArray = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 
  
  // result = true (500 > 300)
  
  console.log((myArray[0].price * myArray[0].quantity), (myArray[1].price * myArray[1].quantity), resultArray);
let groceries ={
    Apples: {stock: 150,price:  2},
    Oranges: {stock: 80, price: 1},
    Bananas: { stock: 100, price: 3},
}

let totalQuantitySold = 0;
let totalRevenue = 0;


function sellItem(item,quantity,buyerName){
    if(!groceries[item]){
    console.log(`item ${item} does not exist in groceries. `);
        return; 
    }
    if(groceries[item].stock < quantity){
        console.log(`Not enough stock of ${item}. Available: ${groceries[item].stock}`);
        return;
    }
    
    
    
    groceries[item].stock -= quantity;
    const total = quantity * groceries[item].price

    totalQuantitySold += quantity;
    totalRevenue += total;

    console.log(`---Sale summary
        ---`)
        console.log(`Buyer: ${buyerName}`)
    console.log(`item: ${item}`);
    console.log(`Quantity Sold: ${quantity}`);
    console.log(`Price per item: GHC${groceries[item].price}`);
    console.log(`Total Price: GHC${total.toFixed(2)}`);
    console.log(`Stock left: ${groceries[item].stock}`);
    console.log(`---------------------\n`);
    

    
}

sellItem("Apples",10,"John Nii Armah");
sellItem("Bananas",50,"Ama Mcbrown");
sellItem("Oranges",100,"Yaw Antwi");
sellItem("Mangoes",5,"Kwame Appiah");

console.log(`===End of Day Summary ===`);
console.log(`Total Quantity Sold: ${totalQuantitySold}`)
console.log(`Total Revenue: GHC ${totalRevenue.toFixed(2)}`)
console.log(`=====================`);


let books = {
    Educated: {stock: 100, price:25,
    discount: 5
    },
    Becoming: {stock: 200, price:30,
    discount: 0 
    },
    Sapiens: {stock: 50, price:15,
    discount: 10
    },
}

let totalquantitySold = 0;
let totalrevenue = 0;


function sell(item,quantity,buyerName){
    if(!books[item]){
    console.log(`item ${item} does not exist in books. `);
        return; 
    }
    if(books[item].stock < quantity){
        console.log(`Not enough stock of ${item}. Available: ${books[item].stock}`);
        return;
    }
    
   books[item].stock -= quantity;
    
    let pricePerItem = books[item].price;
    let discountRate = books[item].discount/100;
    let discountAmount = pricePerItem * discountRate;
    let finalPrice = pricePerItem - discountAmount;
    let total = finalPrice * quantity;
    
    totalquantitySold += quantity;
    totalrevenue += total; 
    
    console.log(`---Sale summary
            ---`)
    console.log(`Buyer: ${buyerName}`)
    console.log(`item: ${item}`);
    console.log(`Quantity Sold: ${quantity}`);
    console.log(`Original Price: GHC${pricePerItem}`);
    console.log(`Discount: ${books[item].discount}% (-GHC${discountAmount.toFixed(2)} per item)`);
    console.log(`Final Price per item: GHC${finalPrice.toFixed(2)}`);
    console.log(`Total: GHC${total.toFixed(2)}`);
    console.log(`Stock left: ${books[item].stock}`);
    console.log(`---------------------\n`);
 }
        

sell("Educated",10,"Dan Mensah");
sell("Becoming",50,"Kwaku Brown");
sell("Sapiens",100,"Kofi Ntim");
sell("Bigbook",5,"Kwame Nkrumah");
    
console.log(`===End of Day Summary ===`);
console.log(`Total Quantity Sold: ${totalquantitySold}`)
console.log(`Total Revenue: GHC ${totalrevenue.toFixed(2)}`)
console.log(`=====================`);
    
      

    



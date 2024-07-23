async function addItem(userCart, item){
    userCart.push(item); 
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        console.log(`Item: '${name} deleted.'`);
        userCart.splice(index, 1);
        displayCart(userCart);
    }
}

async function removeItem(userCart, item){

    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    if(indexFound == -1){
        console.log("Item não encontrado.");
        return;
    }

    if(userCart[indexFound].quantity> 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity == 1){
        await userCart.splice(indexFound, 1);
        return;
    }

}

async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("\nShopee Cart total IS: ");
    console.log(`Total: R$ ${result}`);
}

async function displayCart(userCart){
    console.log("\nShopee cart list: \n");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal R$ ${item.subtotal()}`);
    });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart }
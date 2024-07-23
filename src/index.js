import { addItem, calculateTotal, deleteItem, displayCart, removeItem } from "./services/cart.js";
import createItem from "./services/item.js";

const cart = [];

console.log("Bem vindo ao seu carrinho Shopee");

const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);

addItem(cart, item1);
addItem(cart, item2);

await displayCart(cart);

await removeItem(cart, item2);
await removeItem(cart, item2);
await removeItem(cart, item2);

//await deleteItem(cart, item2.name);
await deleteItem(cart, item1.name);


await calculateTotal(cart);

import { cart } from "../../data/cart.js"

export function renderHeaderSummary() {
    document.querySelector('.js-item-quantity').innerHTML = `${cart.length} items`;
}
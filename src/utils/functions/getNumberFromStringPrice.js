
/**
 * @param {string} price - String price "₹19,522"
 * @returns {number} price in number = 19522 
 * 
 */
// regex
const getNumberFromStringPrice = (price) => {
    return Number(price.replace(/\D/g, ""))
}

export {getNumberFromStringPrice}

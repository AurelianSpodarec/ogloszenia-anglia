import carListing from "./../../json/carListing.json";

// TEMPORARY
const files = {
    "car": carListing
}
// TEMPORARY

const fetchProducts = (productName) => {
    const product = files[productName];
    return product
}

const fetchProduct = (productName, productId) => {
    const a = files[productName]
    const b = a.find((item) => item.id === productId)
    console.log("fetch product", b)
    return b;
}


export {
    fetchProducts,
    fetchProduct
}
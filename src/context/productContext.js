import {createContext} from 'react'

const ProductContext = createContext({
    productlist:[],
    addToCart: (product) => {}
})

export default ProductContext

import React,{useReducer} from 'react'
import { View,StyleSheet } from 'react-native';

import Header from './header'
import List from './list'

import ProductReducer from '../../context/productReducer';
import ProductContext from '../../context/productContext';
import {ADD_TO_CART} from '../../context/types';

const ProductList = () => {

    const initialState = {
        productList:[
            {
                id:'0',
                name:'Coke',
                count:0
            },
            {
                id: '1',
                name: 'Pepsi',
                count: 0
            },
            {
                id: '2',
                name: 'Sprite',
                count: 0
            }
        ]
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const addToCart = (productId) => {
        dispatch({
            type: ADD_TO_CART,
            payload: productId
        })
        
    }
    return (
        <ProductContext.Provider value={{productList:state.productList,addToCart}}>
            <View style={styles.container}>
                <Header/>
                <List addTocart={addToCart} />
            </View>
        </ProductContext.Provider>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default ProductList

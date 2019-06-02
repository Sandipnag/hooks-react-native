import React,{useContext} from 'react';
import ProductContext from '../../context/productContext';
import { View, Text,StyleSheet,Dimensions } from 'react-native';
const Header = () => {
    const context = useContext(ProductContext)
    const cartObject = context.productList.filter((single)=>{return single.count>0});
    return (
        <View style={[styles.header,styles.makeCenter]}>
                <Text>Cart Count: {cartObject.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: Dimensions.get('screen').height *.1,
        backgroundColor:'#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },
    makeCenter:{
        alignContent: 'center',
        alignItems: 'center',
        justifyContent:'center'
    }
})

export default Header


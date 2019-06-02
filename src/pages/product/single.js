import React from 'react'
import { View, Text,StyleSheet,Button  } from 'react-native';
const Single = (props) => {
    return (
        <View style={styles.container}>
            <View style={[styles.productname,styles.makeCenter]}>
                <Text style={styles.textColor}>{props.singleData.name}</Text>
            </View>
            <View style={[styles.productcount,styles.makeCenter]}>
                <Text style={styles.textColor}>{props.singleData.count}</Text>
            </View>
            <View style={[styles.buttonsection,styles.makeCenter]}>
                <Button
                    onPress={props.addTocart}
                    title = "Add"
                    color="#841584"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        margin: 10,
        backgroundColor: '#f44242',
        flexDirection: 'row',
    },
    textColor:{
        color:'#ffffff'
    },
    productname:{
        flex:2,
    },
    productcount:{
        flex:1,
    },
    buttonsection:{
        flex:1
    },
    makeCenter:{
        alignContent: 'center',
        alignItems: 'center',
        justifyContent:'center'
    }
})

export default Single

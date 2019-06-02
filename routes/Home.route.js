import { createStackNavigator } from "react-navigation";
import ProductList from '../src/pages/product';

const HomeStack = createStackNavigator({
        Add:{
            screen: ProductList
        }
    },{
        headerMode:'none'
    })

export default HomeStack;
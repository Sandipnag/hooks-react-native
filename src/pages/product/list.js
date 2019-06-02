import React,{useContext} from 'react';
import ProductContext from '../../context/productContext';
import { FlatList} from 'react-native';
import Single from './single';
const List = (props) => {
    const context = useContext(ProductContext)
    return (
       <FlatList
            data={context.productList}
            showsVerticalScrollIndicator={false}
            renderItem={(info) => (
                <Single
                    addTocart={()=>props.addTocart(info.item.id)}
                    key={"" + info.item.id}
                    singleData={info.item} 
                />
            )}
            keyExtractor={(info, index) => info.id.toString()}
        />
    )
}

export default List

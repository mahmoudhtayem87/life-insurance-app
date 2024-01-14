import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import StoreStyle from './store.screen.style';
import {getProductsAll, getProductsByCategory} from "../../services/products.service";
import Config from "../../services/config.service";
import {Badge, Button, Card, Icon, Skeleton} from "@rneui/base";
import themeVariables from "../../theme/theme.variables";
import {getAccountCarts, getOpenCarts} from "../../services/cart.service";
import LayoutComponent from "../../shared/layout/layout.component";
import {getData} from "../../services/storage.service";

const StoreScreen = ({navigation, route}) => {
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [loadingPlans, setLoadingPlans] = useState(false);

    const [plans, setPlans] = useState(null);

    const onProductClick = (product,optionsTitle)=>{
        navigation.navigate('Product',
            {
                productId:product.productId,
                productName:product.name,
                product:product,
                optionsTitle:optionsTitle
            }
        );
    }

    useEffect(() => {
        const loadPlans = async () => {
            setLoadingPlans(true);
            let data = await getProductsAll(await getData('username'), await getData('password'), Config.ChannelId);
            setPlans(data.items)
            setLoadingPlans(false);
        }
        loadPlans().then(result => {
        });
    }, [])

    return (
        <LayoutComponent navigation={navigation} route={route} showBottomNav={true} showCart={true} title={'Insurance Market'}
                         pageContent={
                             <View>
                                 {loadingPlans && (
                                     <View style={StoreStyle.stack}>
                                         <Skeleton style={StoreStyle.stackItem} width={StoreStyle.stackItem.width}
                                                   height={StoreStyle.stackItem.height}/>
                                         <Skeleton style={StoreStyle.stackItem} width={StoreStyle.stackItem.width}
                                                   height={StoreStyle.stackItem.height}/>
                                         <Skeleton style={StoreStyle.stackItem} width={StoreStyle.stackItem.width}
                                                   height={StoreStyle.stackItem.height}/>
                                     </View>
                                 )}
                                 {!loadingPlans && plans && (
                                     <View style={StoreStyle.stack}>
                                         {plans.map(item => (
                                             <TouchableOpacity key={item.id + 'btn'} onPress={()=>{onProductClick(item,'Design your plan')}}>
                                                 <Card key={item.id}
                                                       wrapperStyle={{elevation: themeVariables.shadow.big}}
                                                       containerStyle={StoreStyle.stackItem}>
                                                     <Card.Title>{item.name}</Card.Title>
                                                     <Card.Divider/>
                                                     <Card.Image
                                                         style={{padding: 0}}
                                                         source={{
                                                             uri: item.urlImage.replace(':8080', ''),
                                                         }}
                                                     />

                                                 </Card>
                                             </TouchableOpacity>
                                         ))}
                                     </View>
                                 )}
                             </View>
                         }
        ></LayoutComponent>

    );

}

export default StoreScreen;

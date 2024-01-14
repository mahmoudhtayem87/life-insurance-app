import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import HeaderComponent from "../../shared/header/header.component";
import React, {useEffect, useState} from "react";
import HomeStyle from "./home.screen.style";
import {getProductsAll, getProductsByCategory} from "../../services/products.service";
import Config from "../../services/config.service";
import {Badge, Button, Card, Icon, Skeleton} from "@rneui/base";
import themeVariables from "../../theme/theme.variables";
import HomeScreenStyle from "./home.screen.style";
import {getAccountCarts, getOpenCarts} from "../../services/cart.service";
import LayoutComponent from "../../shared/layout/layout.component";
import {getData} from "../../services/storage.service";

const HomeScreen = ({navigation, route}) => {
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [loadingPlans, setLoadingPlans] = useState(false);

    const [plans, setPlans] = useState(null);
    const [products, setProducts] = useState(null);


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

        const loadDevices = async () => {
            setLoadingProducts(true);
            let data = await getProductsByCategory(await getData('username'), await getData('password'), Config.ChannelId, 'device');
            setProducts(data.items)
            setLoadingProducts(false);
        }
        loadDevices().then(result => {
        });

    }, [])

    return (
        <LayoutComponent navigation={navigation} route={route} showBottomNav={true} showCart={false} title={'Home'}
                         pageContent={
                             <View>
                                 <View>
                                     <Text style={HomeStyle.title}>Choose your plans</Text>
                                     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={HomeStyle.mainContainer} contentContainerStyle={HomeScreenStyle.mainContainerContent}>
                                         <View>
                                             {loadingPlans && (
                                                 <View style={HomeStyle.stack}>
                                                     <Skeleton style={HomeStyle.stackItem} width={HomeStyle.stackItem.width}
                                                               height={HomeStyle.stackItem.height}/>
                                                     <Skeleton style={HomeStyle.stackItem} width={HomeStyle.stackItem.width}
                                                               height={HomeStyle.stackItem.height}/>
                                                     <Skeleton style={HomeStyle.stackItem} width={HomeStyle.stackItem.width}
                                                               height={HomeStyle.stackItem.height}/>
                                                 </View>
                                             )}
                                             {!loadingPlans && plans && (
                                                 <View style={HomeStyle.stack}>
                                                     {plans.map(item => (
                                                         <TouchableOpacity key={item.id + 'btn'} onPress={()=>{onProductClick(item,'Design your plan')}}>
                                                             <Card key={item.id}
                                                                   wrapperStyle={{elevation: themeVariables.shadow.big}}
                                                                   containerStyle={HomeStyle.stackItem}>
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
                                     </ScrollView>
                                 </View>
                                 <View>
                                     <Text style={HomeStyle.title}>Choose your device</Text>
                                     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={HomeStyle.mainContainer}>
                                         <View>
                                             {loadingProducts && (
                                                 <View style={HomeStyle.stack}>
                                                     <Skeleton style={HomeStyle.stackItem} width={HomeStyle.stackItem.width}
                                                               height={HomeStyle.stackItem.height}/>
                                                     <Skeleton style={HomeStyle.stackItem} width={HomeStyle.stackItem.width}
                                                               height={HomeStyle.stackItem.height}/>
                                                     <Skeleton style={HomeStyle.stackItem} width={HomeStyle.stackItem.width}
                                                               height={HomeStyle.stackItem.height}/>
                                                 </View>
                                             )}
                                             {!loadingPlans && products && (
                                                 <View style={HomeStyle.stack}>
                                                     {products.map(item => (
                                                         <TouchableOpacity key={item.id + 'btn'} onPress={()=>{onProductClick(item,'Configure your device')}}>
                                                             <Card key={item.id}
                                                                   containerStyle={HomeStyle.stackItem}>
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
                                     </ScrollView>
                                 </View>
                                 <View style={HomeStyle.space}>

                                 </View>
                             </View>
                         }
        ></LayoutComponent>

    );

}

export default HomeScreen;

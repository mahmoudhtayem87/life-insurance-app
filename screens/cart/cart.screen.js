import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import HeaderComponent from "../../shared/header/header.component";
import React, {useCallback, useEffect, useState} from "react";
import HomeStyle from "../home/home.screen.style";
import {Avatar, Button, Card, Dialog, Divider, ListItem, Skeleton} from "@rneui/base";
import CartStyle from "./cart.screen.style";
import {deleteCartItem, getCartById, getCartItemsById} from "../../services/cart.service";
import Config from "../../services/config.service";


const CartScreen = ({navigation, route}) => {

    const {cartId} = route.params;

    const [isLoading, setIsLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [cart, setCart] = useState(null);
    const [cartItems, setCartItems] = useState(null);

    const loadCart = async () => {
        setIsLoading(true);
        let cart = await getCartById(cartId);
        setCart(cart);
        let cartItems = await getCartItemsById(cartId);
        setCartItems(cartItems);
        setIsLoading(false);
    }
    const onDeleteCartItem = useCallback((cartItemId)=>{
        const deleteAsync = async ()=>{
            setIsDeleting(true);
            if (await deleteCartItem(cartItemId))
            {
                loadCart();
            }
            setIsDeleting(false);
        }
        deleteAsync();
    },[])
    useEffect(() => {

        loadCart();

    }, [])

    return (<View>
        <HeaderComponent navigation={navigation} showBack={true} showCart={false} title={'Cart'}></HeaderComponent>
        {isLoading && (
            <View>
                <View style={CartStyle.loadingBox}>
                    <Skeleton width={CartStyle.loadingBox.width} height={CartStyle.loadingBox.height}/>
                </View>
                <View style={CartStyle.loadingBox2}>
                    <Skeleton width={CartStyle.loadingBox2.width} height={CartStyle.loadingBox2.height}/>
                </View>
                <View style={CartStyle.loadingBox2}>
                    <Skeleton width={CartStyle.loadingBox2.width} height={CartStyle.loadingBox2.height}/>
                </View>
            </View>
        )}
        {!isLoading &&(
            <Card style={CartStyle.cartMainContainer}>
                <ScrollView style={CartStyle.cartItemsContainer} horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    {cartItems && (
                        cartItems.items.map(item=>(
                            <ListItem.Swipeable
                                key={item.id}
                                leftWidth={0}
                                rightWidth={90}
                                minSlideWidth={0}
                                rightContent={(action) => (
                                    <Button
                                        containerStyle={{
                                            flex: 1,
                                            justifyContent: "center",
                                            backgroundColor: "#f4f4f4",
                                        }}
                                        type="clear"
                                        icon={{ name: "delete-outline" }}
                                        onPress={()=>{
                                            onDeleteCartItem(item.id)
                                        }}
                                    />
                                )}
                            >
                                <Avatar
                                    rounded
                                    source={{ uri: Config.APIHost+'/'+item.thumbnail }}
                                />
                                <ListItem.Content>
                                    <ListItem.Title>{item.name} * {item.quantity}</ListItem.Title>
                                    <ListItem.Subtitle>{item.price.priceFormatted}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem.Swipeable>
                        ))
                    )}
                </ScrollView>
                {cart && (
                    <View>
                        <Text style={CartStyle.CartTotal}>
                            {cart.summary.totalFormatted}
                        </Text>
                    </View>
                )}
            </Card>
        )}
        <Dialog  isVisible={isDeleting}>
            <Dialog.Loading />
        </Dialog>
    </View>);
};

export default CartScreen;

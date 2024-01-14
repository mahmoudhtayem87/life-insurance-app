import {ActivityIndicator, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useCallback, useEffect, useState} from "react";
import {BottomSheet, Button, Icon, ListItem, Skeleton} from "@rneui/base";
import {getAccountCarts} from "../../services/cart.service";
import CartFabStyle from './cart-fab.component.style';
import ProductViewStyle from "../../screens/product-view/product-view.screen.style";



const CartFab = ({navigation, route}) => {

    const [isLoading,setIsLoading] = useState(false);
    const [showCartSelector,setShowCartSelector] = useState(false);
    const [carts,setCarts] = useState(null);

    const selectOptionValue = useCallback((cart)=>{
        navigation.navigate('Cart', {cartId:cart.id,});
        setShowCartSelector(false);
    },[]);
    const openCart = useCallback(()=>{
        if (carts.length > 1)
            setShowCartSelector(true);
        else {
            navigation.navigate('Cart', {cartId:carts[0].id,});
        }

    },[carts])

    useEffect(()=>{

        const loadCart = async ()=>{
            setIsLoading(true);
            let data = await getAccountCarts();
            setCarts(data.items);
            setIsLoading(false);
        }
        loadCart();

    },[])

    return (
        <>
            <TouchableOpacity radius={"sm"} disabled={isLoading} type="outline" onPress={()=>{openCart()}} buttonStyle={CartFabStyle.cartButtonStyle} titleStyle={CartFabStyle.cartButtonStyle.buttonTitleStyle}>
                {isLoading ? (<ActivityIndicator size={'small'} color={CartFabStyle.cartButtonStyle.buttonTitleStyle.color}></ActivityIndicator>):<Icon name="cart-outline" type={'ionicon'} color={CartFabStyle.cartButtonStyle.buttonTitleStyle.color} />}
            </TouchableOpacity>
            <BottomSheet modalProps={{}} isVisible={showCartSelector}>
                {carts && carts.map((value) => (
                    <ListItem
                        key={value.id}
                        onPress={() => {
                            selectOptionValue(value)
                        }}
                    >
                        <ListItem.Content>
                            <ListItem.Title>{value.id}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
                <ListItem
                    containerStyle={CartFabStyle.sheetCancelButtonContainer}
                    onPress={() => {
                        setShowCartSelector(false)
                    }}
                >
                    <ListItem.Content>
                        <ListItem.Title style={CartFabStyle.sheetCancelButton}>Cancel</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </BottomSheet>
        </>
    );
};

export default CartFab;

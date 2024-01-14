import {ScrollView, View, Text, ActivityIndicator} from "react-native";
import HeaderComponent from "../../shared/header/header.component";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {
    getProductOptions,
    getProductSKU,
    getProductSKUs,
    getProductSpecifications
} from "../../services/products.service";
import configService from "../../services/config.service";
import {BottomSheet, Button, Card, Icon, ListItem, Skeleton, Tab, TabView} from "@rneui/base";
import SharedStyle from "../../theme/shared.style";
import ProductViewStyle from "./product-view.screen.style";
import ConfigService from "../../services/config.service";
import ThemeVariables from "../../theme/theme.variables";
import {AddToCart, getAccountCarts} from "../../services/cart.service";
import {getData} from "../../services/storage.service";


const ProductViewScreen = ({navigation, route}) => {

    const { productId, productName, product,optionsTitle} = route.params;
    const [sku, setSKU] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAddingToCart,setIsAddingToCart] = useState(false);
    const [options, setOptions] = useState(null);
    const [option, setOption] = useState(null);
    const [specifications,setSpecifications] = useState()
    const [sheetVisible, setSheetVisible] = useState(false);
    const [loadingSKU,setLoadingSKU] = useState(false);
    const showOptionMenu = useCallback((item) => {
        setOption(item);
        setSheetVisible(true);
    }, [options])

    const [isCartsVisible,setIsCartsVisible] = useState(false);
    const [carts,setCarts] = useState(null);

    const checkIfAllSelected = () => {
        for (let i = 0; i < options.length; i++) {
            if (!options[i].selectedValueKey)
                return false;
        }
        return true;
    }
    const addToCart = useCallback(()=>{
        if (carts.length>1)
        {
            setIsCartsVisible(true);
        }
        let cartId = carts[0].id;
        const addToCartAsync = async ()=>{
            setIsAddingToCart(true);
            await AddToCart(cartId,sku.id,1);
            setIsAddingToCart(false);
        }
        addToCartAsync();

    },[carts,sku])

    const selectCartAndAddItem = useCallback((cart)=>{


    },[sku])
    const getSKU = useCallback(() => {
        const getSKUAsync = async () => {
            setLoadingSKU(true);
            let _sku = await getProductSKU(await getData('username'), await getData('password'), options, ConfigService.ChannelId, productId);
            setSKU(_sku);
            setLoadingSKU(false);
        }
        if (checkIfAllSelected()) {
            getSKUAsync();
        }

    }, [options])

    const selectOptionValue = useCallback((item) => {
        for (let i = 0; i < options.length; i++) {
            if (options[i].id == option.id) {
                options[i].visible = false;
                options[i].selectedValueKey = item.key;
                options[i].selectedValueId = item.id;
                options[i].selectedValueName = item.name;
            }
        }
        setOptions((prev) => options);
        setSheetVisible(false);
        getSKU();
    }, [options, option])

    useEffect(() => {

        const loadOpenCarts = async ()=>{
            setIsLoading(true);
            let data = await getAccountCarts();
            setCarts(data.items);
            setIsLoading(false);
        }
        loadOpenCarts();
        const getSpecifications = async ()=>{
            setIsLoading(true);
            let _specifications = await getProductSpecifications(await getData('username'), await getData('password'),configService.ChannelId, productId);
            setSpecifications(_specifications.items);
            setIsLoading(false);
        }
        const fixOptions = (optionsList) => {
            for (let i = 0; i < optionsList.length; i++) {
                if (optionsList[i].fieldType == "select") {
                    optionsList[i].selectedValueKey = null;
                    optionsList[i].selectedValueId = null;
                    optionsList[i].selectedValueName = 'Select a value';
                }
            }
            setOptions(optionsList);
        }
        const loadOptions = async () => {
            setIsLoading(true);
            let data = await getProductOptions(await getData('username'), await getData('password'), configService.ChannelId, productId);
            data.items = data.items.filter(item=> item.skuContributor)
            fixOptions(data.items);
            if (data.items.length == 0)
            {
                let productSKU = await getProductSKUs(await getData('username'), await getData('password'),configService.ChannelId,productId);
                setSKU(productSKU.items[0]);
            }
            setIsLoading(false);
        }
        getSpecifications();
        loadOptions();

    }, [])

    return (
        <View>
            <HeaderComponent showBack={true} navigation={navigation} title={productName}></HeaderComponent>
            {isLoading && (
                <View>
                    <View style={ProductViewStyle.loadingBox}>
                        <Skeleton width={'100%'} height={ProductViewStyle.loadingMainBox.height}/>
                    </View>
                </View>
            )}
            {!isLoading && (
                <View>
                    {sku && (
                        <View style={ProductViewStyle.priceTagContainer}>
                            {!loadingSKU && (
                                <Text style={ProductViewStyle.priceTag}>{sku.price.priceFormatted}</Text>
                            )}
                            {loadingSKU && (
                                <ActivityIndicator size="large" color={ThemeVariables.color.dark}></ActivityIndicator>
                            )}
                        </View>
                    )}
                    <Card key={product.id} containerStyle={ProductViewStyle.mainProductCard}>
                        <Card.Image
                            style={{padding: 0, height: ProductViewStyle.productImage.height}}
                            resizeMethod={'auto'}
                            source={{
                                uri: product.urlImage.replace(':8080', ''),
                            }}
                        />
                        <ScrollView horizontal={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={ProductViewStyle.mainScreenScroll}>
                            {options && options.length > 0 && (
                                <View>
                                    <Text style={ProductViewStyle.title}>{optionsTitle}</Text>
                                    <Card.Divider></Card.Divider>
                                    {options.map(item => (
                                        <ListItem key={item.id} onPress={() => {
                                            showOptionMenu(item)
                                        }}>
                                            <ListItem.Content>
                                                <ListItem.Title>{item.name}</ListItem.Title>
                                                <ListItem.Subtitle>{item.selectedValueName}</ListItem.Subtitle>
                                            </ListItem.Content>
                                        </ListItem>
                                    ))}
                                </View>
                            )}
                            <Button radius={"sm"} disabled={sku == null} type="outline" onPress={()=>{addToCart()}} buttonStyle={ProductViewStyle.cartButtonStyle} titleStyle={ProductViewStyle.cartButtonStyle.buttonTitleStyle}>
                                {isAddingToCart ? (<ActivityIndicator></ActivityIndicator>):('Add to cart')}
                                <Icon name="cart-outline" type={'ionicon'} color={ThemeVariables.color.primary} />
                            </Button>
                            {specifications && specifications.length > 0 && (
                                <View>
                                    <Text style={ProductViewStyle.title}>More Information</Text>
                                    <Card.Divider></Card.Divider>
                                    {specifications.map(item => (
                                        <ListItem key={item.id}>
                                            <ListItem.Content>
                                                <ListItem.Title>{item.specificationTitle}</ListItem.Title>
                                                <ListItem.Subtitle>{item.value}</ListItem.Subtitle>
                                            </ListItem.Content>
                                        </ListItem>
                                    ))}
                                </View>
                            )}
                        </ScrollView>
                    </Card>
                </View>
            )}
            {option && (
                <BottomSheet modalProps={{}} isVisible={sheetVisible}>
                    {option.productOptionValues.map((value) => (
                        <ListItem
                            key={value.id}
                            onPress={() => {
                                selectOptionValue(value)
                            }}
                        >
                            <ListItem.Content>
                                <ListItem.Title>{value.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                    <ListItem
                        containerStyle={ProductViewStyle.sheetCancelButtonContainer}
                        onPress={() => {
                            setSheetVisible(false)
                        }}
                    >
                        <ListItem.Content>
                            <ListItem.Title style={ProductViewStyle.sheetCancelButton}>Cancel</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </BottomSheet>
            )}
        </View>
    );
};

export default ProductViewScreen;

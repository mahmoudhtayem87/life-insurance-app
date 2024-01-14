import axios from 'axios';
import Config from "./config.service";
import {encode as base64encode} from 'base-64';
import {getData} from "./storage.service";
import configService from "./config.service";


export async function getAccountCarts()
{
    let username = await getData('username');
    let password = await getData('password');
    let channelId = configService.ChannelId;
    let user = await getData('user');
    let userAccountId = user.accountBriefs[0].id;
    const base64Credentials =  base64encode(`${username}:${password}`);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${Config.APIHost}/o/headless-commerce-delivery-cart/v1.0/channels/${channelId}/account/${userAccountId}/carts`,
        headers: {
            'Authorization': `Basic ${base64Credentials}`
        }
    };
    let carts = await axios.request(config);
    if (carts.data.totalCount == 0)
    {
        await openCart();
        getAccountCarts();
    }
    return carts.data;
}
export async function openCart() {
    let username = await getData('username');
    let password = await getData('password');
    let channelId = configService.ChannelId;
    let user = await getData('user');
    const base64Credentials = base64encode(`${username}:${password}`);
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${base64Credentials}`
    };
    const data ={
        accountId: user.accountBriefs[0].id,
        currencyCode: "USD"
    };
    try {
        let carts = await axios.post(
            `${Config.APIHost}/o/headless-commerce-delivery-cart/v1.0/channels/${channelId}/carts`,
            data,
            {headers: headers}
        )
        return carts.data;
    } catch (error) {
        console.log(error)
    }
    return null;
}

export async function deleteCartItem(cartItemId) {
    let username = await getData('username');
    let password = await getData('password');
    const base64Credentials = base64encode(`${username}:${password}`);
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${base64Credentials}`
    };

    try {
        let carts = await axios.delete(
            `${Config.APIHost}/o/headless-commerce-delivery-cart/v1.0/cart-items/${cartItemId}`,
            {headers: headers}
        )
        return true;
    } catch (error) {
        return false
    }
    return false;
}
export async function AddToCart(cartId,skuId,amount)
{
    let username = await getData('username');
    let password = await getData('password');
    let user = await getData('user');
    const base64Credentials = base64encode(`${username}:${password}`);
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${base64Credentials}`
    };
    const data ={
        //"productId": 0,
        "quantity": amount,
        "skuId": skuId
    }

    try {
        let carts = await axios.post(
            `${Config.APIHost}/o/headless-commerce-delivery-cart/v1.0/carts/${cartId}/items`,
            data,
            {headers: headers}
        )
        return carts.data;
    } catch (error) {
        console.log(error)
    }
    return null;
}
export async function getCartItemsById(cartId){
    let username = await getData('username');
    let password = await getData('password');
    const base64Credentials =  base64encode(`${username}:${password}`);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${Config.APIHost}/o/headless-commerce-delivery-cart/v1.0/carts/${cartId}/items`,
        headers: {
            'Authorization': `Basic ${base64Credentials}`
        }
    };
    let carts = await axios.request(config);
    return carts.data;
}

export async function getCartById(cartId){
    let username = await getData('username');
    let password = await getData('password');
    const base64Credentials =  base64encode(`${username}:${password}`);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${Config.APIHost}/o/headless-commerce-delivery-cart/v1.0/carts/${cartId}`,
        headers: {
            'Authorization': `Basic ${base64Credentials}`
        }
    };
    let carts = await axios.request(config);
    return carts.data;
}

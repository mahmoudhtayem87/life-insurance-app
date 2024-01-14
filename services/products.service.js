import axios from 'axios';
import Config from "./config.service";
import { encode as base64encode } from 'base-64';

export function getProductsByCategory(username,password,channelId,tag)
{
    const base64Credentials =  base64encode(`${username}:${password}`);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${Config.APIHost}/o/headless-commerce-delivery-catalog/v1.0/channels/${channelId}/products?filter=tags/any(k:contains(k,'${tag}'))`,
        headers: {
            'Authorization': `Basic ${base64Credentials}`
        }
    };
    let prom = new Promise((resolve,reject)=>{
        axios.request(config)
            .then((response) => {
                resolve(response.data)
            },error=>{
                console.log(error);
                resolve(null);
            })
            .catch((error) => {
                console.log(error);
                resolve(null);
            });
    })
    return prom;
}
export function getProductsAll(username,password,channelId)
{
    const base64Credentials =  base64encode(`${username}:${password}`);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${Config.APIHost}/o/headless-commerce-delivery-catalog/v1.0/channels/${channelId}/products`,
        headers: {
            'Authorization': `Basic ${base64Credentials}`
        }
    };
    let prom = new Promise((resolve,reject)=>{
        axios.request(config)
            .then((response) => {
                resolve(response.data)
            },error=>{
                console.log(error);
                resolve(null);
            })
            .catch((error) => {
                console.log(error);
                resolve(null);
            });
    })
    return prom;
}
export function getProductSKUs(username,password,channelId,productId)
{
    const base64Credentials =  base64encode(`${username}:${password}`);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${Config.APIHost}/o/headless-commerce-delivery-catalog/v1.0/channels/${channelId}/products/${productId}/skus`,
        headers: {
            'Authorization': `Basic ${base64Credentials}`
        }
    };
    let prom = new Promise((resolve,reject)=>{
        axios.request(config)
            .then((response) => {
                resolve(response.data);
            },error=>{
                console.log(error);
                resolve(null);
            })
            .catch((error) => {
                console.log(error);
                resolve(null);
            });
    })
    return prom;
}
export function getProductSpecifications(username,password,channelId,productId)
{
    const base64Credentials =  base64encode(`${username}:${password}`);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${Config.APIHost}/o/headless-commerce-delivery-catalog/v1.0/channels/${channelId}/products/${productId}/product-specifications`,
        headers: {
            'Authorization': `Basic ${base64Credentials}`
        }
    };
    let prom = new Promise((resolve,reject)=>{
        axios.request(config)
            .then((response) => {
                resolve(response.data);
            },error=>{
                console.log(error);
                resolve(null);
            })
            .catch((error) => {
                console.log(error);
                resolve(null);
            });
    })
    return prom;
}
export function getProductOptions(username,password,channelId,productId)
{
    const base64Credentials =  base64encode(`${username}:${password}`);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${Config.APIHost}/o/headless-commerce-delivery-catalog/v1.0/channels/${channelId}/products/${productId}/product-options`,
        headers: {
            'Authorization': `Basic ${base64Credentials}`
        }
    };
    let prom = new Promise((resolve,reject)=>{
        axios.request(config)
            .then((response) => {
                resolve(response.data);
            },error=>{
                console.log(error);
                resolve(null);
            })
            .catch((error) => {
                console.log(error);
                resolve(null);
            });
    })
    return prom;
}
export function getProductSKU(username,password,options,channelId,productId)
{
    const base64Credentials =  base64encode(`${username}:${password}`);
    const data = [];
    for (let i=0; i < options.length ; i++)
    {
        let option = {
            skuOptionId: options[i].id,
            skuOptionKey: options[i].key,
            skuOptionValueId: options[i].selectedValueId,
            skuOptionValueKey:options[i].selectedValueKey,
        };
        data.push(option);
    }
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${base64Credentials}`
    };
    let prom = new Promise((resolve, reject)=>{
        axios.post(
            `${Config.APIHost}/o/headless-commerce-delivery-catalog/v1.0/channels/${channelId}/products/${productId}/skus/by-sku-option`,
            data,
            { headers: headers }
        )
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                resolve(null);
            });
    });
    return prom;
}

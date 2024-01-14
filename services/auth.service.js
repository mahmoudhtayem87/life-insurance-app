import axios from 'axios';
import Config from "./config.service";
import { encode as base64encode } from 'base-64';
import {storeData} from "./storage.service";

export function Login(username,password)
{
    const base64Credentials =  base64encode(`${username}:${password}`);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${Config.APIHost}/o/headless-admin-user/v1.0/my-user-account`,
        headers: {
            'Authorization': `Basic ${base64Credentials}`
        }
    };
    let prom = new Promise((resolve,reject)=>{
        axios.request(config)
            .then(async (response) => {
                await storeData('user',response.data);
                await storeData('username',username);
                await storeData('password',password);
                resolve(true)
            },error=>{
                console.log(error);
                resolve(false);
            })
            .catch((error) => {
                console.log(error);
                resolve(false);
            });
    })
    return prom;

}

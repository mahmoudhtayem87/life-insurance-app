import {encode as base64encode} from "base-64";
import Config from "./config.service";
import axios from "axios";
import {getData} from "./storage.service";

export async function getNewsByFolderId(newsFolderId)
{
    let username = await getData('username');
    let password = await getData('password');
    const base64Credentials =  base64encode(`${username}:${password}`);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${Config.APIHost}/o/headless-delivery/v1.0/structured-content-folders/${newsFolderId}/structured-contents`,
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

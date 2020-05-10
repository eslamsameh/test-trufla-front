import axios from 'axios'
import { url } from './url.service';
export const ProductService = {

    getProductsCounts: (params) => {
        const reqUrl = url.domainUrl + url.productCount
            .replace("{limit}", params.limit)
            .replace("{offset}", params.offset)
            .replace("{department}", params.department || '')
            .replace("{name}", params.name || '')
            .replace("{promo}", params.promo || '')
        var headers = { 'Content-Type': 'application/json' }
        return axios.get(reqUrl, { headers: headers });
    },
    getProducts: (params) => {
        const reqUrl = url.domainUrl + url.products
            .replace("{limit}", params.limit)
            .replace("{offset}", params.offset)
            .replace("{department}", params.department || '')
            .replace("{name}", params.name || '')
            .replace("{promo}", params.promo || '')
        var headers = { 'Content-Type': 'application/json' }
        return axios.get(reqUrl, { headers: headers });
    },
   
}
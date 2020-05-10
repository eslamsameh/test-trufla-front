import axios from 'axios'
import { url } from './url.service';
export const PromotionService = {
    
    getPromotions: () => {
        const reqUrl = url.domainUrl + url.promos;
        var headers = { 'Content-Type': 'application/json' }
        return axios.get(reqUrl, { headers: headers });
    },
   
}
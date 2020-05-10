import axios from 'axios'
import { url } from './url.service';
export const DepartmentService = {
    
    getDepartments: () => {
        const reqUrl = url.domainUrl + url.departments;
        var headers = { 'Content-Type': 'application/json' }
        return axios.get(reqUrl, { headers: headers });
    },
   
}
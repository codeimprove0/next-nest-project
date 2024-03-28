/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { API_URL, APIV } from '../config/constant';
import secureStorage from '../config/encrypt';
import { toast } from 'react-toastify';


const Axios = axios.create();
Axios.interceptors.response.use(
    (response) => {
        if (response.data && response.data.status !== 200) {
            //console.error(`${response.data.status} - ${response.data.message}`, response.data)
            // if(response.data.status == 400
            //     window.commonErrorToast(response.data.message)
            //     console.log(`${response.data.status} - ${response.data.message}`);
        }
        return response;
    },
    (error) => {
        // handle error
        if (error.response) {
            //console.error(`${error.response.status} - ${error.response.statusText}`, error.response)
            if (+error.response.status === 503) {
                // console.log(`${error.response.status} - ${error.response.statusText}`);
            } else if (+error.response.status === 401) {
                secureStorage.removeItem('authUserInfo');
                window.location.href = '/login';
                // if(error.response.data.errors == "TokenEmptyInCache") 
                //console.log(`${error.response.data.status} - ${error.response.data.message}`);
                // window.location.href = '/logout';
            }
            
        }

        return error.response;
    });

    // (window as any).commonErrorToast = function (error: any) {
    //     if (typeof error == "string") toast.error(error);
    //     else if (error.message) toast.error("Helllo", error.message);
    // }
export default {
    // getMasters(list : any) {
    //     return this.get("/core/commonservice/master", { master: list });
    // },
    getToken() {
        return localStorage.getItem('authUserInfo')?.['token']
    },
    post(URL : any, body : any = {}, headers : any = {}) {
        headers = headers || {};
        if (APIV) headers['apiv'] = APIV;
        headers['Authorization'] = this.getToken() || "";
        headers['Accept-Language'] =  'en';
        // headers['apikey'] = API_URL.API_KEY;
        URL = (URL[0] === '/') ? URL.substr(1) : URL;
        return Axios.post(`https://int-gcloud-stage.oto.com/agentbox/${URL}`, body, { headers })
    },
    put(URL : any, body : any, headers : any) {
        headers = headers || {};
        if (APIV) headers['apiv'] = APIV;
        headers['Authorization'] = "";
        headers['Accept-Language'] = 'en';
        URL = (URL[0] === '/') ? URL.substr(1) : URL;
        return Axios.put(`${API_URL.GETWAY_API}${URL}`, body, { headers })
    },
    get(URL : any, query?: any, headers?: any) {
        headers = headers || {};
        if (APIV) headers['apiv'] = APIV;
        headers['Authorization'] = this.getToken() || "";
        headers['Accept-Language'] = 'en';
        //headers['apikey'] = API_URL.API_KEY;
        URL = (URL[0] === '/') ? URL.substr(1) : URL;
        return Axios.get(`https://int-gcloud-stage.oto.com/agentbox/${URL}`,
            { params: query, headers })
    }
}
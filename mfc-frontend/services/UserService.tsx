import MasterService from './MasterService';


export const UserService = {
    ...MasterService,
    
    VerifyOtp(params: any): Promise<any> {
        return this.post('/userAdminAuth/adminlogin', params);
    },
    
    createOtp(params: any): Promise<any> {
        return this.post('/userAdminAuth/verifyLogin', params);
    },
    
    
    VerifyEmail(params: any): Promise<any> {
        return this.post('/userAdminAuth/adminDirectlogin', params);
    },
    loginCaptcha() {
        return this.get('/userAdminAuth/getCaptchaImage')
    },
};

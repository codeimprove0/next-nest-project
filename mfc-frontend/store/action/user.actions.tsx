import { UserService } from '../../services';
import { UserConstants } from '../constants/user.constants';
import { Dispatch } from 'redux';

import secureStorage from '../../config/encrypt';

export const UserActions = {
    createOtp,
    VerifyOtp, 
    loginCaptcha,
    VerifyEmail
};

function VerifyOtp(params : any) {

    return new Promise<any>((resolve, reject) => {
        UserService.VerifyOtp(params)
            .then(
                (userResponse: any) => {
                    const user: any = userResponse.data;
                    if (user && user.data && user.status === 200) {
                        const ob: any = user.data;
                        localStorage.setItem('authUserInfo', JSON.stringify(ob));
                        resolve(user);
                    } else {
                        resolve(user);
                    }
                },
                (error: any) => {
                    reject(error);
                }
            );
    });
    function success(user : any) { return { type: UserConstants.LOGIN_SUCCESS, user } }
    function failure(error : any) { return { type: UserConstants.LOGIN_FAILURE, error } }

}

function createOtp(params : any) {

    return new Promise<any>((resolve, reject) => {
        UserService.createOtp(params)
            .then(
                user => {
                    if (user && user.data && user.data.status === 200) {
                        // toast.success(user.data.message);
                        return resolve(user.data)
                    }
                    else {
                        // toast.error(user.data.message);
                        return resolve(user && user.data)
                    }
                },
                error => {
                    return reject(error);
                }
            );
    });

}

function loginCaptcha() {
    return new Promise<any>((resolve, reject) => {

        UserService.loginCaptcha()
            .then(
                captcha => {
                    if (captcha) {
                        if (captcha.data && captcha.data.status === 200) {
                            resolve(captcha.data)
                            // dispatch(success(captcha.data.data));
                        } else {
                            reject(captcha);
                            // dispatch(failure(captcha.data.message));
                        }
                    } else {
                        reject("failure");
                        // dispatch(failure('error'));
                    }

                    resolve(captcha)
                },
                error => {
                    // dispatch(failure(error));
                    reject(error)
                }
            )
    })

    function success(captcha : any) { return { type: UserConstants.LOGIN_CAPTCHA, captcha } }
    function failure(error : any) { return { type: UserConstants.LOGIN_CAPTCHA, error } }
}



  function VerifyEmail(params : any) {
    return new Promise<any>((resolve, reject) => {
        UserService.VerifyEmail(params)
            .then(
                user => {
                    if (user && user.data && user.data.status === 200) {

                        let ob = user.data.data;
                        secureStorage.setItem('authUserInfo', (ob));
                        // toast.success(user.data.message);
                        // dispatch(success(ob));
                        return resolve(user.data)
                    }
                    else {
                        // dispatch(failure('Invalid credentials '));
                        // toast.error(user.data.message);
                        return resolve(user && user.data)
                    }
                },
                error => {
                    // dispatch(failure(error));
                    return reject(error);
                }
            );
    });
    function success(user : any) { return { type: UserConstants.LOGIN_SUCCESS, user } }
    function failure(error : any) { return { type: UserConstants.LOGIN_FAILURE, error } }

}

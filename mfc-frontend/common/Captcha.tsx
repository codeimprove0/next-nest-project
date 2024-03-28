import React, { useEffect, useState } from "react";
import { UserActions } from "../store/action";

interface CaptchaProps {
    imageUrl?: string;
    onClick?: () => void;
    reloadCaptcha: number;
    errField: {
        captchaError: string;
        captcha: string
    };
    onKeyPressCaptcha: (captchaValue: string, captchaImage: CaptchaData) => void;
    captchaError?: boolean;
    inputField: {
        email: string;
        password: string;
        captcha: string;
        hash: string;
    };
}

export interface CaptchaData {
    data: {
        image: string;
        value: string;
    };

}

const Captcha: React.FC<CaptchaProps> = ({ imageUrl, onClick, reloadCaptcha, errField, onKeyPressCaptcha, captchaError }) => {

    const [captchaInvalid, setCaptchaInvalid] = useState<string>('');

    const [captchaImg, setCaptchaImg] = useState<CaptchaData>({ data: { image: '', value: '' } });

    const [captcha, setCaptcha] = useState<string>('');
    useEffect(() => {
        if(reloadCaptcha){
            loadCaptchaImage();
        }
        
    }, [reloadCaptcha])


    useEffect(() => {
        setCaptchaInvalid(errField && errField.captcha ? 'Invalid Captcha' : '');
    }, [errField]);

    /**
     *  Load Captcha Image
     */

    const loadCaptchaImage = () => {
        setCaptcha("");
        setCaptchaImg({ data: { image: '', value: '' } });
        UserActions.loginCaptcha()
            .then((captcha: CaptchaData) => {
                if(captcha && captcha.data ){
                    setCaptchaImg(captcha)
                }
            })
            .catch((error: Error) => {
                console.log(error);
            });
    };
    /**
     * Input Handler
     * @param e (synthatic element)
     */
    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        let captchaVal = e.target.value;
        setCaptcha(captchaVal)

        onKeyPressCaptcha(captchaVal, captchaImg);
        setCaptchaInvalid('');
    };

    return (
        <>
            <div className={captchaInvalid ? "material error" : "material"}>
                <input
                    type="text"
                    placeholder=" "
                    name="captcha"
                    value={captcha}
                    className="form-input"
                    onChange={handleInputChange}
                />

                <i className="ic-survey icn-login"></i>

                <label data-label="Captcha" className="form-label"></label>
                <span className="error-txt">{captchaInvalid || ''}</span>

                <span className="password-show">
                    {captchaError ? (
                        ''
                    ) : (
                        <>

                            {captchaImg.data.image ? (
                                <img
                                    src={`data:image/svg+xml;base64,${window.btoa(
                                        captchaImg.data.image
                                    )}`}
                                    className="captchaimg"
                                    alt=""
                                />
                            ) : (
                                <span> </span>
                            )}
                            <span
                                className="reload"
                                onClick={loadCaptchaImage}
                                title="reload captcha"
                            >
                                &#x21bb;
                            </span>
                        </>
                    )}
                </span>

            </div>
        </>
    );
}

export default Captcha;

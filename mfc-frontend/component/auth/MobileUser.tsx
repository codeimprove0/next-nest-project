import { useState } from 'react';
import Captcha from "../../common/Captcha";
import { CaptchaData } from "../../common/Captcha";
import VerifyOtp from "./VerifyOtp";
import { UserActions } from '../../store/action';
interface MobileUserProps {
    setShowMobileLinks: any;
    setShowEmailLinks: any;
    showCaptcha:any;
  }

function MobileUser(props: MobileUserProps) {

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputField, setInputField] = useState({
        email: "",
        password: "",
        captcha: "",
        hash: "",
        mobile :""
    });
    const [errField, setErrField] = useState<any>({
        email: "",
        password: "",
        isCaptchaInvalid: false,
        captchaError: "",
        captcha: "",
        otp: "",
        mobile:""
    });
    const [showVerify, setShowVerify] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>('');
    const [reloadCaptcha, setReloadCaptcha] = useState(0);

    const validForm = () => {
        let formIsValid = true;
        setErrField({
            email: "",
            password: "",
            isCaptchaInvalid: false,
            captchaError: "",
            captcha: "",
            otp: "",
            mobile :""
        });

        if (inputField.mobile === "") {

            formIsValid = false;
            setErrField((prevState:any) => ({
                ...prevState,
                mobile: "Mobile is required",
            }));
        }
        if (inputField.password === "") {

            formIsValid = false;
            setErrField((prevState:any) => ({
                ...prevState,
                password: "Password is required",
            }));
        }
        if (!inputField['captcha'].trim()) {

            formIsValid = false;
            setErrField((prevState:any) => ({
                ...prevState,
                captcha: "Captcha is required",
            }));
            setReloadCaptcha((prev) => prev + 1)
        }

        return formIsValid;
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "otp") {
            setOtp(value);
        }
        
        else if (name === "mobile") {
            // Validate mobile number to accept only numbers starting from 9 and have a length of 10 digits
            if (/^[9]\d{0,9}$/.test(value) || value === "") {
                setInputField({ ...inputField, [name]: value });
                setErrField((prevState:any) => ({ ...prevState, mobile: "" }));
            } else {
                if(value.length <=10){

                    setErrField((prevState:any) => ({
                        ...prevState,
                        mobile: "Mobile number must start with 9",
                    }));
                }
            }
        } 

        else {
            setInputField({ ...inputField, [name]: value });
        }

        errField[name] = '';
        setErrField({ ...errField });
    };


    const submitButton = async () => {

        setLoading(true);
        if (validForm()) {

            UserActions.createOtp(inputField).then((res) => {
                setLoading(false)
                if (res && res.data) {
                    //DELETE CAPTCHA HASH FROM CACHE 
                    setUserId(res && res.data && res.data.user_id);
                    setShowVerify(true);
                    props.setShowEmailLinks(false);
                   props.setShowMobileLinks(true);
                }
                setReloadCaptcha((prev) => prev + 1)
                setInputField({ ...inputField, mobile: inputField.mobile, password: inputField.password, captcha: '' })

            });
        } else {
            setReloadCaptcha((prev) => prev + 1)
            setLoading(false);
        }
    };

    const captchaFiledHandler = (captchaValue: string, captchaImage: CaptchaData) => {
        if (captchaImage.data) {
            setInputField({ ...inputField, captcha: captchaValue, hash: captchaImage.data.value });
        }
    };


    return (
        <div className="login-form">
            {showVerify ?
                (<VerifyOtp submitButton={submitButton} userId={userId} inputField={inputField} otp={otp} />)
                :
                <form autoComplete="on">
                   
                    <fieldset className="">
                        <div className={"material " + (errField.mobile ? "error" : "")}    >
                            <input
                                type="number"
                                placeholder=" "
                                name="mobile"
                                value={inputField.mobile}
                                className="form-input"
                                onChange={inputHandler}
                            />
                            <i className="ic-mobile icn-login"></i>
                            <label data-label="Mobile No." className="form-label"></label>
                            {errField.mobile && (
                                <span className="error-txt">
                                    {errField.mobile || ""}
                                </span>
                            )}
                        </div>
                    </fieldset>
                 
                    <fieldset className="">
                        <div className={"material " + (errField.password ? "error" : "")}>
                            <input
                                type="password"
                                placeholder=" "
                                name="password"
                                value={inputField.password}
                                className="form-input password-txt"
                                onChange={inputHandler}
                             //   onKeyPress={handleKeyPress}
                            />
                            <i className="ic-password icn-login"></i>
                            <label data-label="Password" className="form-label"></label>
                            {errField.password && (
                                <span className="error-txt">
                                      {errField['password'] || ""}
                                </span>
                            )}
                        </div>
                    </fieldset>
                    <fieldset className=" captcha-filed">
                        <Captcha onKeyPressCaptcha={captchaFiledHandler} errField={errField} inputField={inputField} reloadCaptcha={reloadCaptcha || props.showCaptcha} />

                    </fieldset>

                    <div className="language-selectors">

                        <button type="button" className="btn-primary" onClick={submitButton} disabled={loading}>
                            Login
                        </button>
                    </div>

                </form>
            }
        </div>
    );
}

export default MobileUser;
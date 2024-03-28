import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Captcha from "../../common/Captcha";
import { CaptchaData } from "../../common/Captcha";
import VerifyOtp from "./VerifyOtp";
import secureStorage from "../../config/encrypt";
import { UserActions } from '../../store/action';
import { useRouter } from 'next/navigation';

interface EmailUserProps {
    setShowMobileLinks: any;
    setShowEmailLinks: any;
    showCaptcha: any;
}

function EmailUser(props: EmailUserProps) {

    const { push } = useRouter();
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i); // eslint-disable-line

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputField, setInputField] = useState({
        email: "",
        password: "",
        captcha: "",
        hash: "",
        mobile: ""
    });
    const [errField, setErrField] = useState<any>({
        email: "",
        password: "",
        isCaptchaInvalid: false,
        captchaError: "",
        captcha: "",
        otp: ""
    });
    const [showVerify, setShowVerify] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>('');
    // const history = useNavigate();
    const [reloadCaptcha, setReloadCaptcha] = useState(1);

    const validForm = () => {
        let formIsValid = true;
        setErrField({
            email: "",
            password: "",
            isCaptchaInvalid: false,
            captchaError: "",
            captcha: "",
            otp: ""
        });

        if (inputField.email === "") {

            formIsValid = false;
            setErrField((prevState:any) => ({
                ...prevState,
                email: "Email is required",
            }));
        } else if (!validEmailRegex.test(inputField.email)) {

            formIsValid = false;
            setErrField((prevState:any) => ({
                ...prevState,
                email: "Please enter valid email",
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
        else {
            setInputField({ ...inputField, [name]: value });
        }
        errField[name] = '';
        setErrField({ ...errField });
    };

    // useEffect(() => {
    //     const loggedInUser = secureStorage.getItem("authUserInfo");
    //     if (loggedInUser && loggedInUser.user_data) {
    //         // navigate('/dashboard');
    //         // history("/dashboard")
    //     }
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps



    const submitButton = async () => {
        // push('/home');
        setLoading(true);
        if (validForm()) {

            UserActions.createOtp(inputField).then((res) => {
                setLoading(false)
                if (res && res.data) {
                    //DELETE CAPTCHA HASH FROM CACHE 
                    setUserId(res && res.data && res.data.user_id);
                    setShowVerify(true);
                    props.setShowEmailLinks(true);
                    props.setShowMobileLinks(false);

                }
                setReloadCaptcha((prev) => prev + 1)
                setInputField({ ...inputField, email: inputField.email, password: inputField.password, captcha: '' })

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
                        <div className={"material " + (errField.email ? "error" : "")}    >
                            <input
                                type="text"
                                placeholder=" "
                                name="email"
                                value={inputField.email}
                                className="form-input"
                                onChange={inputHandler}
                            />
                            <i className="ic-email1 icn-login"></i>
                            <label data-label="Email" className="form-label"></label>
                            {errField.email && (
                                <span className="error-txt">
                                    {errField['email'] || ""}
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

export default EmailUser;
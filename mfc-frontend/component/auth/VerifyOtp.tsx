import {  useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as HELPER from "../../config/helper";
import { ROLE_FEATURES } from "../../config/constant";
import { UserActions } from '../../store/action';
import { useRouter } from 'next/navigation';


interface VerifyOtpProps {
    inputField: {
        email: string;  
        password: string;
        captcha :string;
        hash : string;
        mobile : string;
    };
    userId: string; 
    otp: string;
    submitButton: () => Promise<void>
}

interface OtpRequest {
    email: string;
    password?: string; 
    captcha?: string; 
    resendOtp?: boolean;
    otp ?: string;
    hash ?: string;
    mobile ?: string;
  }


const VerifyOtp: React.FC<VerifyOtpProps> = (props) => {
    const { push } = useRouter();
    const maxTime = 59;
    const [errField, setErrField] = useState<any>({});
    const [inputField, setInputField] = useState({
        ...props.inputField, otp: ""
    });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    useEffect(()=>{
   //     setInputField({ ...inputField, user_id : props.userId })
    },[props.userId]) // eslint-disable-line react-hooks/exhaustive-deps

    const [otpTimer, setOtpTimer] = useState(maxTime);


    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    
        const { name, value } = e.target; 
        setInputField({ ...inputField, [name]: value, password: inputField.password });  
        errField[name] = '';
        setErrField({ ...errField });
        };


    useEffect(() => {
        let startInterval: NodeJS.Timeout;
        if (otpTimer >= 0) {

            startInterval = setInterval(() => {
                setOtpTimer((val) => val - 1)

            }, 1000)
        } else {
            setOtpTimer(-1)
        }

        return () => {
            clearInterval(startInterval)

        }
    }, [otpTimer])

    const submitButton = async () => {
        if (validForm()) {
          setLoading(true);
          try {
        
            const otpRequestData: OtpRequest = {
                email: inputField.email,
                password: inputField.password || "" , 
                captcha: inputField.captcha || "", 
                otp : inputField.otp,
                hash : inputField.hash,
                mobile : inputField.mobile,
              };
            const response: any = await UserActions.VerifyOtp(otpRequestData);
            setLoading(false);
              if (response.status === 200) {

                //    navigate("/dashboard");
                // window.location.href = '/dashboard';
                push('/home');

              }
          } catch (error) {
            // Handle any errors here
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      };
      
      

    //For validation

    const validForm = () => {
        let formIsValid = true;
        setErrField({
            captchErr: ""
        });
        if (inputField.otp === "" || inputField.otp.trim() === '') {
            formIsValid = false;
            setErrField((prevState:any) => ({
                ...prevState,
                otp: 'Otp is required',
            }));
        }
        return formIsValid;
    };

    /**
     * Resend OTP Handler
     */
    const resendOtp = () => {
        if (otpTimer < 0) {
            UserActions.createOtp({ ...inputField, resendOtp: true }).then(res => setOtpTimer(maxTime))
        }
    }

    return (
        <div>
            <fieldset className="">
                <div className = "material">
                    <input
                        type="text"
                        placeholder=" "
                        name="otp"
                        value={inputField.otp}
                        className="form-input "
                        onChange={inputHandler}
                    />
                    <i className="ic-otp icn-login">
                        <i className='path1'></i>
                        <i className='path2'></i>
                        <i className='path3'></i>
                        <i className='path4'></i>
                    </i>

                    <label data-label='Otp' className="form-label"></label>
                    {errField.otp && (
                        <span className="error-txt">
                         {errField['otp'] || ""}
                        </span>
                    )}
                </div>
                {
                    <p onClick={resendOtp} className={`resend-otp-txt ${otpTimer < 0 ? 'resend-otp' : ''}`}>{otpTimer < 0 ? 'Resend Otp' : 'resend otp after '+(otpTimer > 9 ? "0:" + otpTimer : "0:0" + otpTimer)+" seconds" }</p>
                }


            </fieldset>

            <button type="button" className="btn-primary" onClick={submitButton} disabled={loading}>
                Login
            </button>

        </div>
    )
}

export default VerifyOtp
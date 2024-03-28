import { Tab, Nav } from 'react-bootstrap';
import EmailUser from './EmailUser'
import MobileUser from './MobileUser'
import {  useState } from 'react';

function Login() {

    const [showMobileLinks, setShowMobileLinks] = useState(true);
    const [showEmailLinks, setShowEmailLinks] = useState(true);

    const [showCaptcha, setShowCaptcha] = useState(0);

    const activeTabHandler = (selectedtab: any) => {
        setShowCaptcha((prev)=>prev+1);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="login-outer">
                    <div className="login-left-panel">
                        <div className="login-bg">
                            <div className="logo-img">
                            {<img src="images/logo.png" className="" alt="insurance-logo"/>}
                            </div>

                            <div className="login-txt">
                               <span>Welcome to</span>
                                <h1> Insurance Box</h1>
                            </div>
                            {<img src="images/login_bg.png" className="login-bg-img" alt="insurance-logo"/>}
                        </div>
                    </div>
                    <div className="login-right-panel">
                        <div className="login-heading">
                            <h2>Login</h2>

                        </div>
                        <Tab.Container id="" defaultActiveKey="first" >
                            <div className="login-tab"> 
                              
                                <Nav variant="pills" className="flex-column" onSelect={(k) => activeTabHandler(k)}>
                                {(showEmailLinks && showMobileLinks) &&
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">By Email</Nav.Link>
                                    </Nav.Item>
                                }
                                {(showEmailLinks && showMobileLinks) &&
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">By Mobile</Nav.Link>
                                    </Nav.Item>
                                }
                                </Nav>


                                <Tab.Content>
                                    

                                    <Tab.Pane eventKey="second">
                                        <MobileUser setShowEmailLinks = {setShowEmailLinks} setShowMobileLinks = {setShowMobileLinks} showCaptcha={showCaptcha}/> 
                                    </Tab.Pane>  

                                    <Tab.Pane eventKey="first">
                                        <EmailUser setShowEmailLinks = {setShowEmailLinks} setShowMobileLinks = {setShowMobileLinks} showCaptcha={showCaptcha}/> 
                                    </Tab.Pane>  

                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
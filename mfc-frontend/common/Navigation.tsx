import React  from "react"; 
import { Dropdown } from "react-bootstrap";  
import Link from 'next/link'
import { useLocation } from "react-router-dom"

const Navigation = () => {
    console.log("navigation")
    return (
        <div className="container-fluid" >
        <div className="header-main">
            <div className="logo">
                Loan BOX
            </div>
            <div className="right-panel-naviganion menupanel">
                <div className="nav">
                    <ul>
                        <li><Link href="/home">Dashboard</Link></li>
                        <li><Link href="/notfound">Not Found</Link></li>
                        <li className="dropdownmenu"><Link href="/about">Manage Panel</Link>
                            <ul className="submenu">
                                <li><Link href="/financer">Financer</Link> </li>
                                <li><Link href="/lead-list">Lead List</Link> </li>
                                <li><Link href="/lead-detail">Lead Detail</Link> </li>
                            </ul>
                        </li>
                        <li className="dropdownmenu"><Link href="/contact">Rule Engine</Link>
                            <ul className="submenu">
                                <li><Link href="/rule-engine">Rule Engine</Link> </li> 
                                <li><Link href="/login">Login</Link> </li> 
                            </ul>
                        </li>
                        <li className="dropdownmenu"><Link href="/contact">More</Link>
                            <ul className="submenu">
                                <li><Link href="/mmv-list">MMV List</Link> </li>
                                <li><Link href="/mmv-multiValue">MMV Multi Value</Link> </li> 
                            </ul>
                        </li>
                    </ul>
                </div>
                <a className="notification-btn">
                    {/* <Notifaction /> */}

                </a>

                <div className="user-detail ">
                    <ul>

                        <li className="dropdownmenu"><a href="#">
                            <span className="userarc">
                                R
                            </span>
                            <div className="username">
                                <span>Ravinder Singh</span>
                                <span className="user-degintion">Telecaller</span>
                            </div>
                        </a>
                            <ul className="submenu">
                                <li><a href="/about">Option1</a> </li>
                                <li><a href="/about">Option1</a> </li>
                                <li><a href="/about">Option1</a> </li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <div className="user-status">
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            <div className="status">
                                <i className="active-status"></i>
                                <div className="status-txt">
                                    <span>Active</span>
                                    <span className="sub-status"></span>
                                </div>

                            </div>



                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <ul className="satus-drop-downlist">
                                <li className="">
                                    <i className="active-status"></i>
                                    <span>Active</span>
                                </li>
                                <li className="active">
                                    <i className="inactive-status"></i>
                                    <span className="">Set as Away</span>
                                    <ul className="away-time-stamp">
                                        <li>
                                            30 minutes
                                        </li>
                                        <li className="active">
                                            1 hour
                                        </li>
                                        <li>
                                            2 hours
                                        </li>
                                        <li>
                                            4 hours
                                        </li>
                                        <li>
                                            8 hours
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="language">
                    <ul>
                        <li className="dropdownmenu">
                            <a href="#">
                                ENG
                            </a>
                            <ul className="submenu">
                                <li><a href="/about">Option1</a> </li>
                                <li><a href="/about">Option1</a> </li>
                                <li><a href="/about">Option1</a> </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>

        </div>

    </div >
    );
}

export default Navigation;
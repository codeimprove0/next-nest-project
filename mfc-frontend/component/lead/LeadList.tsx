import React from "react";
import LeadListTable from './LeadLIstTable'
import { Button, Dropdown, Tab, Tabs, Nav } from 'react-bootstrap';

function LeadList() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="top-heading">
                    <h1>Finance Cases</h1>
                </div>
                <div className="loan-filter-bg">

                    <div className="top-filter-bg">
                        {/* <LeadListFilter /> */}
                        <div className="selected-chips">
                            <ul>
                                <li>
                                    HDFC Bank
                                    <span>
                                        <i className="ic-clearclose"></i>
                                    </span>
                                </li>
                                <li>
                                    Delhi NCR
                                    <span>
                                        <i className="ic-clearclose"></i>
                                    </span>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                        <Nav variant="pills" className="flex-column tab-line nav nav-pills">
                            <div className="tab-list">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">All Cases (756)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        My Cases (126)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Unassigned Cases (630)</Nav.Link>
                                </Nav.Item>
                            </div>

                        </Nav>


                        <Tab.Content>
                            <Tab.Pane eventKey="first">

                                <LeadListTable />

                            </Tab.Pane>
                            <Tab.Pane eventKey="second">


                                <LeadListTable />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">

                                <LeadListTable />
                            </Tab.Pane>
                        </Tab.Content>

                    </Tab.Container>




                </div>


            </div>
        </React.Fragment>
    )
}

export default LeadList
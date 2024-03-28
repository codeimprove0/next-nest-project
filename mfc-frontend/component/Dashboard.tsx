import React from 'react';
import { Button, Dropdown, Tab, Tabs, Nav } from 'react-bootstrap'; 

import {useAppSelector,useAppDispatch} from '../store/store'    
import {userNameSet } from '../store/userReducer'

import {useGetAllPostQuery } from '../store/userApi'


function Dashboard() {
  const stateInfo  =  useAppSelector((state:any)=>state.user_info);
  const dispatch = useAppDispatch(); 

  const {data,isLoading,isError,isSuccess}  = useGetAllPostQuery<any>('test');

  console.log(data,'====',isLoading) 

  const setNewState = ()=>{ 
    dispatch(userNameSet("Loan Box"))
  }

  return (
    <div className="dashboard-bg">
    <div className="dashboard-outer">
      <div className="heading">
        <span className="subheading">Hello Ravinder Singh</span>
        <h1 onClick={setNewState}>Welcome to {stateInfo.name}</h1>
      </div>
      <div className="search-bx">
        <input type="text" placeholder="Search by Loan Id or Mobile" />
        <button className="search-btn">Search</button>
        <i className="ic-search"></i>
      </div>
      <div className="dashboard-toggle-tab">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">

          <Nav variant="pills" className="flex-column">
            <div className="tab-list">
              <Nav.Item>
                <Nav.Link eventKey="first">Finance</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Refinance</Nav.Link>
              </Nav.Item>

            </div>

          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="dashboard-card">
                <div className="card color-one">
                  <div className="roung-bg">
                    <i className="ic-pending-application">
                      <i className="path1"></i>
                      <i className="path2"></i>
                      <i className="path3"></i>
                      <i className="path4"></i>
                      <i className="path5"></i>
                      <i className="path6"></i>
                      <i className="path7"></i>
                      <i className="path8"></i>
                      <i className="path9"></i>
                      <i className="path10"></i>
                    </i>
                  </div>
                  <span className="count-txt">36</span>
                  <span className="card-txt">Pending</span>
                </div>

                <div className="card color-two">
                  <div className="roung-bg">
                    <i className="ic-application"></i>
                  </div>
                  <span className="count-txt">255</span>
                  <span className="card-txt">Application</span>
                </div>

                <div className="card color-three">
                  <div className="roung-bg">
                    <i className="ic-callverified">
                      <i className="path1"></i>
                      <i className="path2"></i>
                      <i className="path3"></i>
                      <i className="path4"></i>
                    </i>
                  </div>
                  <span className="count-txt">18</span>
                  <span className="card-txt">Call Verified</span>
                </div>

                <div className="card color-four">
                  <div className="roung-bg">
                    <i className="ic-softapproved">
                      <i className="path1"></i>
                      <i className="path2"></i>
                      <i className="path3"></i>
                      <i className="path4"></i>
                      <i className="path5"></i>
                      <i className="path6"></i>
                      <i className="path7"></i>
                      <i className="path8"></i>
                    </i>
                  </div>
                  <span className="count-txt">36</span>
                  <span className="card-txt">Soft Approved</span>
                </div>

                <div className="card color-five">
                  <div className="roung-bg">
                    <i className="ic-financier">
                      <i className="path1"></i>
                      <i className="path2"></i>
                      <i className="path3"></i>
                      <i className="path4"></i>
                      <i className="path5"></i>
                      <i className="path6"></i>
                      <i className="path7"></i>
                      <i className="path8"></i>
                      <i className="path9"></i>
                      <i className="path10"></i>
                    </i>
                  </div>
                  <span className="count-txt">145</span>
                  <span className="card-txt">Sent to Financier</span>
                </div>

                <div className="card color-two">
                  <div className="roung-bg">
                    <i className="ic-survey"></i>
                  </div>
                  <span className="count-txt">45</span>
                  <span className="card-txt">Survey</span>
                </div>

                <div className="card color-one">
                  <div className="roung-bg">
                    <i className="ic-po"></i>
                  </div>
                  <span className="count-txt">106</span>
                  <span className="card-txt">PO</span>
                </div>

                <div className="card color-five ">
                  <div className="roung-bg">
                    <i className="ic-do"></i>
                  </div>
                  <span className="count-txt">21</span>
                  <span className="card-txt">DO</span>
                </div>

                <div className="card color-three">
                  <div className="roung-bg">
                    <i className="ic-disbursed">
                      <i className="path1"></i>
                      <i className="path2"></i>
                      <i className="path3"></i>
                      <i className="path4"></i>
                    </i>
                  </div>
                  <span className="count-txt">2132</span>
                  <span className="card-txt">Disbursed</span>
                </div>

                <div className="card color-four ">
                  <div className="roung-bg">
                    <i className="ic-lost">
                      <i className="path1"></i>
                      <i className="path2"></i>
                      <i className="path3"></i>
                      <i className="path4"></i>
                    </i>
                  </div>
                  <span className="count-txt">1834</span>
                  <span className="card-txt">Lost</span>
                </div>

              </div>

            </Tab.Pane>



            <Tab.Pane eventKey="second">
              <div className="dashboard-card">
                <div className="card color-one">
                  <div className="roung-bg">
                    <i className="ic-application"></i>
                  </div>
                  <span className="count-txt">255</span>
                  <span className="card-txt">Application</span>
                </div>

                <div className="card color-two">
                  <div className="roung-bg">
                    <i className="ic-callverified">
                      <i className="path1"></i>
                      <i className="path2"></i>
                      <i className="path3"></i>
                      <i className="path4"></i>
                    </i>
                  </div>
                  <span className="count-txt">18</span>
                  <span className="card-txt">Call Verified</span>
                </div>

                <div className="card color-three">
                  <div className="roung-bg">
                    <i className="ic-financier">
                      <i className="path1"></i>
                      <i className="path2"></i>
                      <i className="path3"></i>
                      <i className="path4"></i>
                      <i className="path5"></i>
                      <i className="path6"></i>
                      <i className="path7"></i>
                      <i className="path8"></i>
                      <i className="path9"></i>
                      <i className="path10"></i>
                    </i>
                  </div>
                  <span className="count-txt">145</span>
                  <span className="card-txt">Sent to Financier</span>
                </div>

                <div className="card color-four">
                  <div className="roung-bg">
                    <i className="ic-survey"></i>
                  </div>
                  <span className="count-txt">45</span>
                  <span className="card-txt">Survey</span>
                </div>


                <div className="card color-five">
                  <div className="roung-bg">
                    <i className="ic-softapproved">
                      <i className="path1"></i>
                      <i className="path2"></i>
                      <i className="path3"></i>
                      <i className="path4"></i>
                      <i className="path5"></i>
                      <i className="path6"></i>
                      <i className="path7"></i>
                      <i className="path8"></i>
                    </i>
                  </div>
                  <span className="count-txt">36</span>
                  <span className="card-txt">Soft Approved</span>
                </div>

                <div className="card color-two">
                  <div className="roung-bg">
                    <i className="ic-disbursed">
                      <i className="path1"></i>
                      <i className="path2"></i>
                      <i className="path3"></i>
                      <i className="path4"></i>
                    </i>
                  </div>
                  <span className="count-txt">36</span>
                  <span className="card-txt">Loan Disbursed</span>
                </div>



                <div className="card color-one">
                  <div className="roung-bg">
                    <i className="ic-po"></i>
                  </div>
                  <span className="count-txt">106</span>
                  <span className="card-txt">Incentive</span>
                </div>

                <div className="card color-five ">
                  <div className="roung-bg">
                    <i className="ic-incentive">
                      <i className="path1"></i>
                      <i className="path2"></i>
                      <i className="path3"></i>
                      <i className="path4"></i>
                    </i>
                  </div>
                  <span className="count-txt">1834</span>
                  <span className="card-txt">Lost</span>
                </div>

              </div>

            </Tab.Pane>


          </Tab.Content>

        </Tab.Container>
      </div>


    </div>
  </div>
  )
}

export default Dashboard
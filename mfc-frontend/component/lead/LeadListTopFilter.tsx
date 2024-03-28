// import React, { Component } from 'react';
// import Select from 'react-select';
// import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes'; 
// import { Button, Dropdown, Tab, Tabs, Nav } from 'react-bootstrap';

// import MoreFilterOption from './MoreFilterOption'

// const Financier = [
//     { value: 'HDFC', label: 'HDFC' },
//     { value: 'BOB', label: 'BOB' },
//     { value: 'PNB', label: 'PNB' },
// ];

// const Branch = [
//     { value: 'Buana Bekasi', label: 'Buana Bekasi' },
//     { value: 'Buana Bintaro', label: 'Buana Bintaro' },
//     { value: 'Buana Surabaya', label: 'Buana Surabaya' },
// ];
// const Status = [
//     { value: 'Application', label: 'Application' },
//     { value: 'Soft Approved', label: 'Soft Approved' },
//     { value: 'Survey', label: 'Survey' },
// ];

// const SubStatus = [
//     { value: 'Customer details filled details filled', label: 'Customer details filled details filled' },
//     { value: 'Application Submitted', label: 'Application Submitted' },
//     { value: 'Deviation Approved', label: 'Deviation Approved' },
// ];


// interface MyProps { }
  
// interface MyState {
//     FinancierOption: any,
//     BranchOption: any,
//     StatusOption: any,
//     SubStatusOption: any,
// }
// class LeadListTopFilter extends Component<MyProps, MyState>   {
//     constructor(props:any) {
//         super(props);
//         console.log(props)

//         this.state = {
//             FinancierOption: null,
//             BranchOption: null,
//             StatusOption: null,
//             SubStatusOption: null,

//         };
//     }
//     getDropdownButtonLabel = (params:any) => {
//         let { placeholderButtonLabel, value } =params;
//         console.log('value', params, 'placeholderButtonLabel', placeholderButtonLabel)
//         if (value && value.length === 0) {
//             return `${placeholderButtonLabel}`;
//         } else if (value && value.length) {

//             return `${value.length} selected`;
//         }
//         else
//             return `${placeholderButtonLabel}`;

//     }

//     handleChange = (FinancierOption:any) => {
//         this.setState({ FinancierOption }
//         );
//     };
//     handleChangeBranch = (BranchOption:any) => {
//         this.setState({ BranchOption }
//         );
//     };

//     handleChangeStatus = (StatusOption:any) => {
//         this.setState({ StatusOption }
//         );
//     };
//     handleChangeSubStatus = (SubStatusOption:any) => {
//         this.setState({ SubStatusOption }
//         );
//     };


//     render() {

//         const { FinancierOption } = this.state;
//         const { BranchOption } = this.state;
//         const { StatusOption } = this.state;
//         const { SubStatusOption } = this.state;

//         return (
//             <React.Fragment>
//                 <div className="lead-list-filter">

//                     <div className="filter-filed-form">
//                         <fieldset className="search-bx">
//                             <div className="material">
//                                 <input id="" type="text" placeholder="Search By Loan ID, Customer Name, Reg No." name="RoleName" className="form-input" />
//                                 <i className="ic-search"></i>
//                             </div>
//                         </fieldset>
//                         <fieldset className="multiselect-dropDown">
//                             <div className="material">
//                                 <ReactMultiSelectCheckboxes
//                                     options={Financier}
//                                     placeholderButtonLabel="Financier"
//                                     iconAfter="false"
//                                     getDropdownButtonLabel={this.getDropdownButtonLabel}
//                                     value={FinancierOption}
//                                     onChange={this.handleChange}

//                                 />
// {/* 
//                                 <Select
//                                     options={Financier}
//                                     placeholder="Financier"
//                                     value={FinancierOption}
//                                     onChange={this.handleChange}
//                                     isMulti
//                                 /> */}
//                             </div>
//                         </fieldset>

//                         <fieldset className="multiselect-dropDown">
//                             <div className="material">
//                                 <ReactMultiSelectCheckboxes
//                                     options={Branch}
//                                     placeholderButtonLabel="Branch"
//                                     iconAfter="false"
//                                     getDropdownButtonLabel={this.getDropdownButtonLabel}
//                                     value={BranchOption}
//                                     onChange={this.handleChangeBranch}
//                                 />
//                             </div>
//                         </fieldset>
//                         <fieldset className="multiselect-dropDown">
//                             <div className="material">
//                                 <ReactMultiSelectCheckboxes
//                                     options={Status}
//                                     placeholderButtonLabel="Status"
//                                     iconAfter="false"
//                                     getDropdownButtonLabel={this.getDropdownButtonLabel}
//                                     value={StatusOption}
//                                     onChange={this.handleChangeStatus}
//                                 />
//                             </div>
//                         </fieldset>
//                         <fieldset className="multiselect-dropDown">
//                             <div className="material">
//                                 <ReactMultiSelectCheckboxes
//                                     options={SubStatus}
//                                     placeholderButtonLabel="Sub Status"
//                                     iconAfter="false"
//                                     getDropdownButtonLabel={this.getDropdownButtonLabel}
//                                     value={SubStatusOption}
//                                     onChange={this.handleChangeSubStatus}
//                                 />
//                             </div>
//                         </fieldset>
//                     </div>
//                     <div className="more-filter">
//                         <MoreFilterOption />
//                     </div>

//                 </div>
//             </React.Fragment>
//         )
//     }
// }

// export default LeadListTopFilter 
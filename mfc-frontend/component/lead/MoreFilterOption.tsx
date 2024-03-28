
import React, { Component } from 'react';
import Select from 'react-select';
import { Button, Dropdown } from 'react-bootstrap';
// import { Calendra, Calendra2 } from './DatePicker'
// import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

const DateType = [
    { value: 'Application Filled', label: 'Application Filled' },
    { value: 'FAP Complete', label: 'FAP Complete' },
    { value: 'Recommend', label: 'Recommend' },
];

const Source = [
    { value: 'Dealership', label: 'Dealership' },
    { value: 'Agency', label: 'Agency' },
    { value: 'Online Channel', label: 'Online Channel' },
];
const Assignto = [
    { value: 'Gaurav', label: 'Gaurav' },
    { value: 'Manoj', label: 'Manoj' },
    { value: 'Deepak', label: 'Deepak' },
];


const FETeam = [
    { value: 'Gaurav', label: 'Gaurav' },
    { value: 'Manoj', label: 'Manoj' },
    { value: 'Deepak', label: 'Deepak' },
];
const METeam = [
    { value: 'Gaurav', label: 'Gaurav' },
    { value: 'Manoj', label: 'Manoj' },
    { value: 'Deepak', label: 'Deepak' },
];

const BETeam = [
    { value: 'Gaurav', label: 'Gaurav' },
    { value: 'Manoj', label: 'Manoj' },
    { value: 'Deepak', label: 'Deepak' },
];


interface MyProps { }
  
interface MyState {
    DateTypeOption: any,
    SourceOption: any,
    AssigntoOption: any,
    FETeamOption: any,
    METeamOption: any,
    BETeamOption: any,
}


class MoreFilterOption extends Component<MyProps, MyState>  {
    constructor(props:any) {
        super(props);
        console.log(props)

        this.state = {
            DateTypeOption: null,
            SourceOption: null,
            AssigntoOption: null,
            FETeamOption: null,
            METeamOption: null,
            BETeamOption: null,


        };
    }

    getDropdownButtonLabel = (params:any) => {
        let { placeholderButtonLabel, value } = params;
        console.log('value', value, 'placeholderButtonLabel', placeholderButtonLabel)
        if (value && value.length === 0) {
            return `${placeholderButtonLabel}`;
        } else if (value && value.length) {

            return `${value.length} selected`;
        }
        else
            return `${placeholderButtonLabel}`;

    }

    handleChangeDateType = (DateTypeOption:any) => {
        this.setState({ DateTypeOption }
        );
    };

    handleChangeSource = (SourceOption:any) => {
        this.setState({ SourceOption }
        );
    };
    handleChangeAssign = (AssigntoOption:any) => {
        this.setState({ AssigntoOption }
        );
    };
    handleChangeFETeam = (FETeamOption:any) => {
        this.setState({ FETeamOption }
        );
    };
    handleChangeMETeam = (METeamOption:any) => {
        this.setState({ METeamOption }
        );
    };

    handleChangeBETeam = (BETeamOption:any) => {
        this.setState({ BETeamOption }
        );
    };

    handleChangeAssignto = ()=>{

    }
    render() {
        const { DateTypeOption } = this.state;
        const { SourceOption } = this.state;
        const { AssigntoOption } = this.state;
        const { FETeamOption } = this.state;
        const { METeamOption } = this.state;
        const { BETeamOption } = this.state;
        return (
            <React.Fragment>
                <div className="filter-option">
                    <Dropdown>
                        <div className="text-btn d-flex">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">

                                <span className="more-filter-txt">More Filters</span>
                                <span className="leass-filter-txt">Less Filters</span>
                            </Dropdown.Toggle>

                            <div className="btn-submit-reset top-btn-none">
                                <button className="btn-primary">Search</button>
                                <button className="btn-reset">Reset</button>
                            </div>
                        </div>
                        <Dropdown.Menu>
                            <div className="more-filter-option">
                                <h3>More Filters</h3>
                                <div className="filter-form">
                                    <span className="filter-heading">Date Type</span>

                                    <fieldset className="single-select">
                                        <div className="material">
                                            <Select
                                                value={DateTypeOption}
                                                onChange={this.handleChangeDateType}
                                                options={DateType}
                                                placeholder="Select Date Type"
                                            />
                                        </div>
                                    </fieldset>

                                    <div className="Date-picker-sec">
                                        <fieldset className="">
                                            <div className="material">
                                                {/* <Calendra2 /> */}
                                            </div>
                                        </fieldset>
                                        <fieldset className="">
                                            <div className="material">
                                                {/* <Calendra /> */}
                                            </div>
                                        </fieldset>

                                    </div>


                                    <span className="filter-heading">Source</span>

                                    {/* <fieldset className="multiselect-dropDown">
                                        <div className="material">
                                            <ReactMultiSelectCheckboxes
                                                options={Source}
                                                placeholderButtonLabel="Select Source"
                                                iconAfter="false"
                                                getDropdownButtonLabel={this.getDropdownButtonLabel}
                                                value={SourceOption}
                                                onChange={this.handleChangeSource}
                                            />
                                        </div>
                                    </fieldset> */}
                                    <div className="Date-picker-sec follow-up-sec">
                                        <span className="filter-heading">Follow-up</span>
                                        <fieldset className="">
                                            <div className="material">
                                                {/* <Calendra2 /> */}
                                            </div>
                                        </fieldset>
                                        <fieldset className="">
                                            <div className="material">
                                                {/* <Calendra /> */}
                                            </div>
                                        </fieldset>

                                    </div>

                                    <span className="filter-heading">Assign</span>
{/* 
                                    <fieldset className="multiselect-dropDown">
                                        <div className="material">
                                            <ReactMultiSelectCheckboxes
                                                options={Assignto}
                                                placeholderButtonLabel="Assigned To"
                                                iconAfter="false"
                                                getDropdownButtonLabel={this.getDropdownButtonLabel}
                                                value={AssigntoOption}
                                                onChange={this.handleChangeAssignto}
                                            />
                                        </div>
                                    </fieldset> */}

                                    <span className="filter-heading">Worked upon</span>
                                    <div className="Date-picker-sec more-filter-dropdown">

                                        <fieldset className="single-select">
                                            <div className="material">
                                                <Select
                                                    value={FETeamOption}
                                                    onChange={this.handleChangeFETeam}
                                                    options={FETeam}
                                                    placeholder="FE Team"
                                                />
                                            </div>
                                        </fieldset>
                                        <fieldset className="single-select">
                                            <div className="material">
                                                <Select
                                                    value={METeamOption}
                                                    onChange={this.handleChangeMETeam}
                                                    options={METeam}
                                                    placeholder="ME Team"
                                                />
                                            </div>
                                        </fieldset>
                                        <fieldset className="single-select">
                                            <div className="material">
                                                <Select
                                                    value={BETeamOption}
                                                    onChange={this.handleChangeBETeam}
                                                    options={BETeam}
                                                    placeholder="BE Team"
                                                />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="btn-submit-reset more-filter-btn">
                                        <button className="btn-primary">Search</button>
                                        <button className="btn-reset">Reset</button>
                                    </div>
                                </div>
                            </div>

                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </React.Fragment>
        )
    }
}
export default MoreFilterOption;
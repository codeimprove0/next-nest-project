

import React, { Component } from 'react';
import FinancerListTable from "./financier/FinancerTable" 


interface MyProps { }
  
interface MyState {
    Addfinancer: boolean
}

  
class FinancerLead extends Component<MyProps, MyState>  {
    constructor(props:any) {
        super(props);
        this.state = {
            Addfinancer: false,


        };

    }



    showModalAddfinancer = () => {
        this.setState({ Addfinancer: true });
        document.body.classList.add("overflow-hidden");
    }

    hideModalAddfinancer = () => {
        this.setState({ Addfinancer: false });
        document.body.classList.remove("overflow-hidden");
    }





    render() {

        return (
            <div className="container-fluid">
                <div className="top-heading financer-lead-heding">
                    <h1>Financier</h1>
                    <button className="btn-line" onClick={this.showModalAddfinancer}>
                        <i className="ic-add"></i>
                        <span>Add Financier</span>
                    </button>
                </div>
                <FinancerListTable />


                <div className="Add-Financer-popup">
                    {/* <Modal show={this.state.Addfinancer} handleClose={this.hideModalAddfinancer} > */}
                    <Modal show={this.state.Addfinancer} handleClose={this.hideModalAddfinancer} >
                        <div className="modal-header">

                            <h2>Add Financier</h2>
                        </div>



                        <div className="modal-body" >

                            <div className="row">
                                <fieldset className="form-filed col-md-12">
                                    <div className="material">
                                        <input id="" type="text" placeholder=" " name="RoleName" className="form-input" />
                                        <label data-label="Financier Name" className="form-label"></label>
                                    </div>
                                </fieldset>
                                <div className="img-bx-select-opt col-md-7">
                                    <span className="subheading">Upload Financier Logo </span>
                                    <div className="image-bx more-file-upload">
                                        <img src="images/upload_icn.svg" className="upload-icn" />
                                        <input type="file" name="" />
                                        <p>Upload Photo</p>
                                    </div>

                                </div>

                                <div className="radio-btn col-md-12">
                                    <fieldset className="from-group radio-type-txt">
                                        <span className="subheading">Show Loan Type </span>
                                        <div className="custom-control custom-checkbox">

                                            <input id="Individual" type="radio"
                                                className="custom-control-input "
                                                name="Document"
                                                value="YesDoc"

                                            />

                                            <label className="custom-control-label">Yes </label>
                                        </div>
                                        <div className=" custom-control custom-checkbox disabled">
                                            <input id="Individual" type="radio"
                                                className="custom-control-input "
                                                name={"Document"}
                                                value={"NoDoc"}

                                            />
                                            <label className="custom-control-label">No</label>
                                        </div>


                                    </fieldset>
                                </div>
                            </div>
                            <button className="btn-primary">
                                Save
                            </button>
                        </div>

                    </Modal>

                </div>

            </div>
        )
    }
}




const Modal = (props:any) => {
    let { handleClose, show, children } = props;
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button
                    onClick={handleClose}
                    className="close_icn"
                >
                    <i className="ic-clearclose"></i>
                </button>
            </section>
        </div>
    );
};





export default FinancerLead;
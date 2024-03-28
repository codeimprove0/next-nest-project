import React, { Component } from 'react';
import ToggleSwitch from './ToggleSwitch' 
import Pagination from '../../common/Pagination'

interface MyProps { }
  
interface MyState {
    FinancerBranch: boolean,
    AddFinancerBranch: boolean
}
class FinancerListTable extends Component<MyProps, MyState>  {
    constructor(props:any) {
        super(props);
        this.state = {
            FinancerBranch: false,
            AddFinancerBranch: false,

        };

    }

    showModalFinancerBranch = () => {
        this.setState({ FinancerBranch: true });
        document.body.classList.add("overflow-hidden");
        this.hideModalAddFinancerBranch()
    }

    hideModalFinancerBranch = () => {
        this.setState({ FinancerBranch: false });
        document.body.classList.remove("overflow-hidden");
    }

    showModalAddFinancerBranch = () => {
        this.setState({ AddFinancerBranch: true });
        document.body.classList.add("overflow-hidden");
        this.hideModalFinancerBranch()
    }

    hideModalAddFinancerBranch = () => {
        this.setState({ AddFinancerBranch: false });
        document.body.classList.remove("overflow-hidden");

    }



    render() {

        return (
            <div>
                <div className="financer-table-list">

                    <table>
                        <thead>
                            <tr>
                                <th>Financier</th>
                                <th>Logo</th>
                                <th>Show Rule Engin?</th>
                                <th>Show Loan Type?</th>
                                <th>Branch</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >BFI</td>
                                <td><img src="images/BFI.png" /></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>
                                    <span className=" branch-count" onClick={this.showModalFinancerBranch}>10</span>
                                </td>
                                <td> <div className="on-off-switch">
                                    <ToggleSwitch />
                                </div></td>
                            </tr>
                            <tr>
                                <td>BCA</td>
                                <td><img src="images/BCA.png" /></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>
                                    <span className=" branch-count" onClick={this.showModalFinancerBranch}>10</span>
                                </td>
                                <td> <div className="on-off-switch">
                                    <ToggleSwitch />
                                </div></td>
                            </tr>
                            <tr>
                                <td>Mandiri</td>
                                <td><img src="images/mandri.png" /></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>
                                    <span className=" branch-count" onClick={this.showModalFinancerBranch}>10</span>
                                </td>
                                <td> <div className="on-off-switch">
                                    <ToggleSwitch />
                                </div></td>
                            </tr>

                            <tr>
                                <td>BFI</td>
                                <td><img src="images/BFI.png" /></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>
                                    <span className=" branch-count" onClick={this.showModalFinancerBranch}>10</span>
                                </td>
                                <td> <div className="on-off-switch">
                                    <ToggleSwitch />
                                </div></td>
                            </tr>
                            <tr>
                                <td>BCA</td>
                                <td><img src="images/BCA.png" /></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>
                                    <span className=" branch-count" onClick={this.showModalFinancerBranch}>10</span>
                                </td>
                                <td> <div className="on-off-switch">
                                    <ToggleSwitch />
                                </div></td>
                            </tr>
                            <tr>
                                <td>Mandiri</td>
                                <td><img src="images/mandri.png" /></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>
                                    <span className=" branch-count" onClick={this.showModalFinancerBranch}>10</span>
                                </td>
                                <td> <div className="on-off-switch">
                                    <ToggleSwitch />
                                </div></td>
                            </tr>

                            <tr>
                                <td>BFI</td>
                                <td><img src="images/BFI.png" /></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>
                                    <span className=" branch-count" onClick={this.showModalFinancerBranch}>10</span>
                                </td>
                                <td> <div className="on-off-switch">
                                    <ToggleSwitch />
                                </div></td>
                            </tr>
                            <tr>
                                <td>BCA</td>
                                <td><img src="images/BCA.png" /></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>
                                    <span className=" branch-count" onClick={this.showModalFinancerBranch}>10</span>
                                </td>
                                <td> <div className="on-off-switch">
                                    <ToggleSwitch />
                                </div></td>
                            </tr>
                            <tr>
                                <td>Mandiri</td>
                                <td><img src="images/mandri.png" /></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>
                                    <span className=" branch-count" onClick={this.showModalFinancerBranch}>10</span>
                                </td>
                                <td> <div className="on-off-switch">
                                    <ToggleSwitch />
                                </div></td>
                            </tr>

                        </tbody>
                    </table>

                    <Pagination />
                </div>

                <div className="Add-Financer-popup financer-branch-popup">
                    <Modal show={this.state.FinancerBranch} handleClose={this.hideModalFinancerBranch} >
                        <div className="modal-header">
                            <h2>Financier Branch BCA</h2>
                            <button className="btn-line" onClick={this.showModalAddFinancerBranch}>
                                <i className="ic-add"></i>
                                <span>Add Financier Branch</span>
                            </button>
                        </div>



                        <div className="modal-body" >
                            <div className="branch-list-table">
                                <div className="branch-count-txt">
                                    44 Branches
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Branch Name</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>MUF Bekasi</td>
                                            <td><div className="on-off-switch">
                                                <ToggleSwitch />
                                            </div></td>
                                        </tr>
                                        <tr>
                                            <td>MUF Bekasi</td>
                                            <td><div className="on-off-switch">
                                                <ToggleSwitch />
                                            </div></td>
                                        </tr>
                                        <tr>
                                            <td>MUF Bekasi</td>
                                            <td><div className="on-off-switch">
                                                <ToggleSwitch />
                                            </div></td>
                                        </tr>
                                        <tr>
                                            <td>MUF Bekasi</td>
                                            <td><div className="on-off-switch">
                                                <ToggleSwitch />
                                            </div></td>
                                        </tr>
                                        <tr>
                                            <td>MUF Bekasi</td>
                                            <td><div className="on-off-switch">
                                                <ToggleSwitch />
                                            </div></td>
                                        </tr>
                                        <tr>
                                            <td>MUF Bekasi</td>
                                            <td><div className="on-off-switch">
                                                <ToggleSwitch />
                                            </div></td>
                                        </tr>
                                        <tr>
                                            <td>MUF Bekasi</td>
                                            <td><div className="on-off-switch">
                                                <ToggleSwitch />
                                            </div></td>
                                        </tr>
                                        <tr>
                                            <td>MUF Bekasi</td>
                                            <td><div className="on-off-switch">
                                                <ToggleSwitch />
                                            </div></td>
                                        </tr>
                                        <tr>
                                            <td>MUF Bekasi</td>
                                            <td><div className="on-off-switch">
                                                <ToggleSwitch />
                                            </div></td>
                                        </tr>
                                        <tr>
                                            <td>MUF Bekasi</td>
                                            <td><div className="on-off-switch">
                                                <ToggleSwitch />
                                            </div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>

                    </Modal>

                </div>

                <div className="Add-Financer-popup add-financer-branch">
                    <Modal show={this.state.AddFinancerBranch} handleClose={this.hideModalAddFinancerBranch} >
                        <div className="modal-header">
                            <div className="back-icn" onClick={this.showModalFinancerBranch}>
                                <i className="ic-arrow_back"></i>
                                <span>Back</span>
                            </div>
                            <h2>Add Financier Branch</h2>

                        </div>



                        <div className="modal-body" >
                            <fieldset className="form-filed">
                                <div className="material">
                                    <input id="" type="text" placeholder=" " name="RoleName" className="form-input" />
                                    <label data-label="Financier Name" className="form-label"></label>
                                </div>
                            </fieldset>
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





export default FinancerListTable;
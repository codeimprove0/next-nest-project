import React, { Component, useState } from 'react';
import Select from 'react-select';
import Pagination from '../../common/Pagination'

const Assign = [
    { value: 'Gaurav', label: 'Gaurav' },
    { value: 'Ramesh', label: 'Ramesh' },
    { value: 'Abhay Kumar', label: 'Abhay Kumar' },
];

function LeadLIstTable() {

    const [AssignOption,SetAssign] = useState(null);

    const handleChangeAssign = ()=>{
       // SetAssign(true);
    }
    return (
        <div className="lead-list-data-table">
            <table>
                <thead>
                    <tr>
                        <th>Loan ID</th>
                        <th>Customer Details</th>
                        <th>Car Details</th>
                        <th>Dealer Details</th>
                        <th>Loan Details</th>
                        <th>Status</th>
                        <th>Financier</th>
                        <th>Assign to</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>  <a href="/lead-detail"> 213213 </a></td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Ravinder Singh</h5>
                                <span>9718905471</span>
                                <span>20 Aug 2021</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5 title="Mitsubhishi pajero sport plus 1.5D/T">Mitsubhishi pajero sport plus 1.5D/T</h5>
                                <span>2018</span>
                                <span>HR 87B 9994</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Gurukripa Motors</h5>
                                <span>GCD 12345</span>

                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Approved</h5>
                                <span className="text-bold">Rp 234.000.000</span>
                                <ul>
                                    <li>
                                        EMI Rp 123.500.000
                                    </li>
                                    <li>
                                        3 Yr
                                    </li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Soft Approved</h5>
                                <span>Recommend</span>
                                <span>20 Aug 2021</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>BFI</h5>
                                <span>Jabodetabek</span>
                                <span>Branch</span>

                            </div>
                        </td>
                        <td>
                            <div className="assign-name">
                                <span className="truncate"> Abhay Kumar</span>
                                <i className="ic-clearclose"></i>
                            </div>
                            <div className="single-select select-table">
                                <fieldset className="single-select">
                                    <div className="material">
                                        <Select
                                            value={AssignOption}
                                            onChange={handleChangeAssign}
                                            options={Assign}
                                            placeholder="Assign To"
                                        />
                                    </div>
                                </fieldset>
                            </div>
                        </td>
                        <td>
                            <ul className="action-btn">
                                <li>
                                    <i className="ic-remove_red_eyevisibility"></i>
                                </li>
                                <li>
                                    <i className="ic-Call-history"></i>
                                </li>
                                <li>
                                    <i className="ic-save_alt"></i>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#">   <a href="#">   <a href="#"> 213213 </a> </a> </a>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Ravinder Singh</h5>
                                <span>9718905471</span>
                                <span>20 Aug 2021</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Hyundai Sonet GLS</h5>
                                <span>2018</span>
                                <span>HR 87B 9994</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Gurukripa Motors</h5>
                                <span>GCD 12345</span>

                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Approved</h5>
                                <span className="text-bold">Rp 234.000.000</span>
                                <ul>
                                    <li>
                                        EMI Rp 123.500.000
                                    </li>
                                    <li>
                                        3 Yr
                                    </li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Soft Approved</h5>
                                <span>Recommend</span>
                                <span>20 Aug 2021</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>BFI</h5>
                                <span>Jabodetabek</span>
                                <span>HO</span>

                            </div>
                        </td>
                        <td>
                            <span className="truncate">Abhay Kumar</span>
                            <span className="truncate">Gaurav Arora</span>
                            <div className="single-select select-table">
                                <fieldset className="single-select">
                                    <div className="material">
                                        <Select
                                            value={AssignOption}
                                            onChange={handleChangeAssign}
                                            options={Assign}
                                            placeholder="Assign To"
                                        />
                                    </div>
                                </fieldset>
                            </div>
                        </td>
                        <td>
                            <ul className="action-btn">
                                <li>
                                    <i className="ic-remove_red_eyevisibility"></i>
                                </li>
                                <li>
                                    <i className="ic-Call-history"></i>
                                </li>
                                <li>
                                    <i className="ic-save_alt"></i>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>  <a href="#"> 213213 </a></td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Ravinder Singh</h5>
                                <span>9718905471</span>
                                <span>20 Aug 2021</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Hyundai Sonet GLS</h5>
                                <span>2018</span>
                                <span>HR 87B 9994</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Gurukripa Motors</h5>
                                <span>GCD 12345</span>

                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Approved</h5>
                                <span className="text-bold">Rp 234.000.000</span>
                                <ul>
                                    <li>
                                        EMI Rp 123.500.000
                                    </li>
                                    <li>
                                        3 Yr
                                    </li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Soft Approved</h5>
                                <span>Recommend</span>
                                <span>20 Aug 2021</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>BFI</h5>
                                <span>Jabodetabek</span>

                            </div>
                        </td>
                        <td>
                            <span className="truncate">Abhay Kumar</span>
                            <span className="truncate">Gaurav Arora</span>
                            <span className="truncate">Deepak</span>
                        </td>
                        <td>
                            <ul className="action-btn">
                                <li>
                                    <i className="ic-remove_red_eyevisibility"></i>
                                </li>
                                <li>
                                    <i className="ic-Call-history"></i>
                                </li>
                                <li>
                                    <i className="ic-save_alt"></i>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>  <a href="#"> 213213 </a></td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Ravinder Singh</h5>
                                <span>9718905471</span>
                                <span>20 Aug 2021</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Hyundai Sonet GLS</h5>
                                <span>2018</span>
                                <span>HR 87B 9994</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Gurukripa Motors</h5>
                                <span>GCD 12345</span>

                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Approved</h5>
                                <span className="text-bold">Rp 234.000.000</span>
                                <ul>
                                    <li>
                                        EMI Rp 123.500.000
                                    </li>
                                    <li>
                                        3 Yr
                                    </li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Soft Approved</h5>
                                <span>Recommend</span>
                                <span>20 Aug 2021</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>BFI</h5>
                                <span>Jabodetabek</span>

                            </div>
                        </td>
                        <td>
                            <div className="single-select select-table">
                                <fieldset className="single-select">
                                    <div className="material">
                                        <Select
                                            value={AssignOption}
                                            onChange={handleChangeAssign}
                                            options={Assign}
                                            placeholder="Assign To"
                                        />
                                    </div>
                                </fieldset>
                            </div>
                        </td>
                        <td>
                            <ul className="action-btn">
                                <li>
                                    <i className="ic-remove_red_eyevisibility"></i>
                                </li>
                                <li>
                                    <i className="ic-Call-history"></i>
                                </li>
                                <li>
                                    <i className="ic-save_alt"></i>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>  <a href="#"> 213213 </a></td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Ravinder Singh</h5>
                                <span>9718905471</span>
                                <span>20 Aug 2021</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Hyundai Sonet GLS</h5>
                                <span>2018</span>
                                <span>HR 87B 9994</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Gurukripa Motors</h5>
                                <span>GCD 12345</span>

                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Approved</h5>
                                <span className="text-bold">Rp 234.000.000</span>
                                <ul>
                                    <li>
                                        EMI Rp 123.500.000
                                    </li>
                                    <li>
                                        3 Yr
                                    </li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Soft Approved</h5>
                                <span>Recommend</span>
                                <span>20 Aug 2021</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>BFI</h5>
                                <span>Jabodetabek</span>

                            </div>
                        </td>
                        <td>
                            <div className="single-select select-table">
                                <fieldset className="single-select">
                                    <div className="material">
                                        <Select
                                            value={AssignOption}
                                            onChange={handleChangeAssign}
                                            options={Assign}
                                            placeholder="Assign To"
                                        />
                                    </div>
                                </fieldset>
                            </div>
                        </td>
                        <td>
                            <ul className="action-btn">
                                <li>
                                    <i className="ic-remove_red_eyevisibility"></i>
                                </li>
                                <li>
                                    <i className="ic-Call-history"></i>
                                </li>
                                <li>
                                    <i className="ic-save_alt"></i>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>  <a href="#"> 213213 </a></td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Ravinder Singh</h5>
                                <span>9718905471</span>
                                <span>20 Aug 2021</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Hyundai Sonet GLS</h5>
                                <span>2018</span>
                                <span>HR 87B 9994</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Gurukripa Motors</h5>
                                <span>GCD 12345</span>

                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Approved</h5>
                                <span className="text-bold">Rp 234.000.000</span>
                                <ul>
                                    <li>
                                        EMI Rp 123.500.000
                                    </li>
                                    <li>
                                        3 Yr
                                    </li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>Soft Approved</h5>
                                <span>Recommend</span>
                                <span>20 Aug 2021</span>
                            </div>
                        </td>
                        <td>
                            <div className="table-txt-data">
                                <h5>BFI</h5>
                                <span>Jabodetabek</span>

                            </div>
                        </td>
                        <td>
                            <div className="single-select select-table">
                                <fieldset className="single-select">
                                    <div className="material">
                                        <Select
                                            value={AssignOption}
                                            onChange={handleChangeAssign}
                                            options={Assign}
                                            placeholder="Assign To"
                                        />
                                    </div>
                                </fieldset>
                            </div>
                        </td>
                        <td>
                            <ul className="action-btn">
                                <li>
                                    <i className="ic-remove_red_eyevisibility"></i>
                                </li>
                                <li>
                                    <i className="ic-Call-history"></i>
                                </li>
                                <li>
                                    <i className="ic-save_alt"></i>
                                </li>
                            </ul>
                        </td>
                    </tr>

                </tbody>
            </table>
            <Pagination />
        </div >
    )
}

export default LeadLIstTable
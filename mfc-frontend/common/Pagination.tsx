
import React, { Component } from 'react';
class Pagination extends Component {
    constructor(props:any) {
        super(props);
        console.log(props)

        this.state = {

        };
    }
    render() {
        return (
            <div className="pagination-bx">
                <ul>
                    <li className="pre">
                        <a href="#">
                            <i className="ic-keyboard_arrow_left"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">1</a>
                    </li>
                    <li className="active">
                        <a href="#">2</a>
                    </li>
                    <li>
                        <a href="#">3</a>
                    </li>
                    <li>
                        <a href="#">4</a>
                    </li>
                    <li>
                        <a href="#">5</a>
                    </li>
                    <li>
                        <a href="#">6</a>
                    </li>
                    <li>
                        <a href="#">...</a>
                    </li>
                    <li>
                        <a href="#">28</a>
                    </li>
                    <li className="next">
                        <a href="#">
                            <i className="ic-keyboard_arrow_right"></i>
                        </a>
                    </li>
                </ul>
            </div>

        )
    }
}
export default Pagination;
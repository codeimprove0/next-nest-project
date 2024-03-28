
import React, { Children, Component } from 'react';

interface MyProps { }
  
interface MyState {
    checked: boolean
}

class ToggleSwitch extends React.Component<MyProps, MyState>  {
    constructor(props:any) {
        super(props);

        this.state = {
            checked: false
        };

        this.onToggleSwitchChange = this.onToggleSwitchChange.bind(this);
    }

    onToggleSwitchChange() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        return (
            <div className='ToggleSwitch ToggleSwitch__rounded'>
                <div className='ToggleSwitch__wrapper'>
                    <div className={`Slider ${this.state.checked && 'isChecked'}`} onClick={this.onToggleSwitchChange}></div>
                </div>
            </div>
        );
    }
}

export default ToggleSwitch
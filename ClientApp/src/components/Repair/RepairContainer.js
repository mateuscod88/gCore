import React, { Component } from 'react';
import RepairGrid from './RepairGrid.js';
import { RepairButton } from './RepairButton.js';

export class RepairContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddRepairButtonDisable: true,
        };
    }
    enableAddRepairButton = () => {
        this.setState({
            isAddRepairButtonDisable: false,
        })
    }
    disableAddRepairButton = () => {
        debugger;
        this.setState({
            isAddRepairButtonDisable: true,
        })
    }
    setButtonVisibility = () => {
        return this.state.isAddRepairButtonDisable;
    }
    render() {
        return (
            <div>
                <RepairGrid enableButton={this.enableAddRepairButton} disableButton={this.disableAddRepairButton}/>
                <RepairButton setButtonVisibility={this.setButtonVisibility}/>
            </div>
        );
    }

}
import React, { Component } from 'react';
import RepairGrid from './RepairGrid.js';
import { RepairButton } from './RepairButton.js';

export class RepairContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddRepairButtonDisable: true,
            repairId: 0,
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
    setRepairId = (repairId) => {
        this.setState({
            repairId: repairId,
        });
    }
    getRepairId = () => {
        return this.state.repairId;
    }
    render() {
        return (
            <div>
                <RepairGrid setRepairId={this.setRepairId} enableButton={this.enableAddRepairButton} disableButton={this.disableAddRepairButton} />
                <RepairButton getRepairId={this.getRepairId} setButtonVisibility={this.setButtonVisibility} />
            </div>
        );
    }

}
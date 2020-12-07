import React, { Component } from 'react';
import RepairGrid from './RepairGrid.js';
import { RepairButton } from './RepairButton.js';
import RepairService from '../Services/RepairService.js';
import RepairGridDetailsPopover from './RepairGridDetailsPopover.js';

export class RepairContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddRepairButtonDisable: true,
            repairId: 0,
            updateRepairGrid:false,
        };
        this.service = new RepairService();
    }
    enableAddRepairButton = () => {
        this.setState({
            isAddRepairButtonDisable: false,
        })
    }
    disableAddRepairButton = () => {
        
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
    resetUpdateRepairGrid = () => {
        this.setState({
            updateRepairGrid: false,
        });
    }
    setUpdateRepairGrid = () => {
        this.setState({
            updateRepairGrid: true,
        });
    }
    deleteRepair = async (repairId) => {
        
        await this.service.Delete(repairId);
    }
    render() {
        return (
            <div>
                <RepairGrid setRepairId={this.setRepairId} updateRepairGrid={this.state.updateRepairGrid} resetUpdateRepairGrid={this.resetUpdateRepairGrid} enableButton={this.enableAddRepairButton} disableButton={this.disableAddRepairButton} />
                <RepairButton  updateRepairGrid={this.setUpdateRepairGrid} getRepairId={this.getRepairId} deleteRepairHandler={this.deleteRepair} setButtonVisibility={this.setButtonVisibility} />
            </div>
        );
    }

}
import React from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import RepairService from '../Services/RepairService.js';

export class RepairButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openAddCar: false,
            isEditRepairDisabled: true,
            isEditRepairDisabledPrev: true,
            isRemoveRepairDisabled: true,
            isRemoveRepairDisabledPrev: true,
            redirectEditRepair: false,
        }
        this.service = new RepairService();

    }
    componentDidUpdate(prevProps) {
        
        var isAddRepair = this.props.setButtonVisibility();
        this.toggleButton('isEditRepairDisabled', 'isEditRepairDisabledPrev', isAddRepair);
        this.toggleButton('isRemoveRepairDisabled', 'isRemoveRepairDisabledPrev', isAddRepair);

    }
    toggleButton = (current, prev, isAddRepair) => {
        
        var prevIs = this.state[prev];
        if (prevIs != isAddRepair) {
            this.setState({
                [current]: isAddRepair,
                [prev]: isAddRepair,
            });

        }
    }
    onClick = () => {
        this.setState({ openAddCar: true, });
    }
    onClickEditButton = () => {
        this.setState({
            redirectEditRepair : true,
        })
    }
    onClickDeleteButton = async () => {
        
        await this.props.deleteRepairHandler(this.props.getRepairId());
        this.props.updateRepairGrid();
    }
    redirectEditRepair = () => {
        if (this.state.redirectEditRepair) {
            return <Redirect to={'/repair-add?repairId=' + this.props.getRepairId()} />
        }
    }
    render() {
        return (
            <div>
                {this.redirectEditRepair()}
                <Button variant="outlined" color="primary" onClick={this.onClickEditButton} disabled={this.state.isEditRepairDisabled} >
                    Edytuj
            </Button>
                <Button variant="outlined" color="primary" onClick={this.onClickDeleteButton} disabled={this.state.isRemoveRepairDisabled}>
                    Usun
            </Button>
            </div>
        );
    }
}
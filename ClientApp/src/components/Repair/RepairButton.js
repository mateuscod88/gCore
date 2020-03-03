import React from 'react';
import Button from '@material-ui/core/Button';

export class RepairButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openAddCar: false,
            isEditRepairDisabled: true,
            isEditRepairDisabledPrev: true,
            isRemoveRepairDisabled: true,
            isRemoveRepairDisabledPrev: true,
        }
    }
    componentDidUpdate(prevProps) {
        debugger;
        var isAddRepair = this.props.setButtonVisibility();
        this.toggleButton('isEditRepairDisabled', 'isEditRepairDisabledPrev', isAddRepair);
        this.toggleButton('isRemoveRepairDisabled', 'isRemoveRepairDisabledPrev', isAddRepair);

    }
    toggleButton = (current, prev, isAddRepair) => {
        debugger;
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
    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" disabled={this.state.isEditRepairDisabled} >
                    Edytuj
            </Button>
                <Button variant="outlined" color="primary" disabled={this.state.isRemoveRepairDisabled}>
                    Usun
            </Button>
            </div>
        );
    }
}
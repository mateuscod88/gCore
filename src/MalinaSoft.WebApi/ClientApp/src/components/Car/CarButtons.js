import React from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
export class CarButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openAddCar: false,
            redirect: false,
            isAddRepairDisabled: true,
            isAddRepairDisabledPrev: true,
            isEditCarDisabled: true,
            isEditCarDisabledPrev: true,
            isRemoveCarDisabled: true,
            isRemoveCarDisabledPrev:true,
            canUpdate: true,
            cantUpdate: false,
            redirectAddCar: false,
            redirectEditCar: false,

        }
    }
    componentDidUpdate(prevProps) {
        
        var isAddRepair = this.props.setButtonVisibility();
        this.toggleButton('isAddRepairDisabled', 'isAddRepairDisabledPrev', isAddRepair);
        this.toggleButton('isEditCarDisabled', 'isEditCarDisabledPrev', isAddRepair);
        this.toggleButton('isRemoveCarDisabled', 'isRemoveCarDisabledPrev', isAddRepair);

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
        this.setState({
            redirectAddCar: true,
        });
    }
    onClickAddRepair = () => {
        this.setState({
            redirect: true,
        });
    }
    onClickEditCar = () => {
        this.setState({
            redirectEditCar: true,
        });
    }
    onClickDelete = () => {
        this.props.deleteCarHandler(this.props.getCarId());
    }
    redirectAddCar = () => {
        if (this.state.redirectAddCar) {
            return <Redirect to={'/car-add'} />
        }
    }
    redirectEditCar = () => {
        if (this.state.redirectEditCar) {
            return <Redirect to={'/car-add?carId=' + this.props.getCarId()} />
        }
    }
    redirectAddRepair = () => {
        if (this.state.redirect) {
            return <Redirect to={'/repair-add?carId=' + this.props.getCarId()} />
        }
    }
    render() {
        return (
            <div>
                {this.redirectAddCar()}
            <Button variant="outlined" color="primary" onClick={this.onClick}>
                    Dodaj
            </Button>
                {this.redirectEditCar()}
                <Button variant="outlined" color="primary" onClick={this.onClickEditCar} disabled={this.state.isEditCarDisabled} >
                    Edytuj
            </Button>
                <Button variant="outlined" color="primary" onClick={this.onClickDelete} disabled={this.state.isRemoveCarDisabled}>
                    Usun
            </Button>
                {this.redirectAddRepair()}
                <Button variant="outlined" color="primary" onClick={this.onClickAddRepair} disabled={this.state.isAddRepairDisabled}>
                    Dodaj Naprawe
            </Button>
            </div>
        );
    }
}
import React from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
export class CarAddButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openAddCar: false,
            redirect: false,
            isAddRepairDisabled: true,
            isAddRepairDisabledPrev: true,
            canUpdate: true,
            cantUpdate: false,
        }
    }

    onClick = () => {
        this.props.addButtonHandler();
        this.setState({ openAddCar: true, });
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.onClick}>
                    Dodaj
            </Button>
            </div>
        );
    }
}
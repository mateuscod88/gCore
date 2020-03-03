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
            buttonLabel:'',
        }
    }
    componentDidMount() {
        var operationType = this.props.operationType;
        debugger;
        var carId = parseInt(this.props.location.search.substring(7, 8));
        if (carId > 0) {
            this.setState({
                buttonLabel: 'Zapisz'
            });
        }
        else {
            this.setState({
                buttonLabel: 'Dodaj'

            });
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
                    {this.state.buttonLabel}
            </Button>
            </div>
        );
    }
}
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
            buttonLabel: '',
            isButtonDisabled: false,
            isButtonDisabledPrev: false,
        }
    }
    componentDidMount() {
        var operationType = this.props.operationType;
        debugger;
        if (operationType == 'edit') {
            this.setState({
                buttonLabel: 'Zapisz',
                isButtonDisabled: true,
                isButtonDisabledPrev: true,
            });
        }
        else {
            this.setState({
                buttonLabel: 'Dodaj'

            });
        }
            
    }
    componentDidUpdate(prevProps) {
        debugger;
        if (prevProps.dataChanged != this.props.dataChanged) {
            var dataChanged = this.props.dataChanged;
            if (dataChanged) {
                this.setState({
                    isButtonDisabled: false,
                    isButtonDisabledPrev: false,

                })
            }
        }

    }
    onClick = () => {
        this.props.addButtonHandler();
        this.setState({ openAddCar: true, });
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.onClick} disabled={this.state.isButtonDisabled}>
                    {this.state.buttonLabel}
            </Button>
            </div>
        );
    }
}
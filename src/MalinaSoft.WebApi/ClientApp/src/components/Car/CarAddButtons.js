import React from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const hoveredStyle = {
    cursor: 'pointer'
}
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
            redirectEditRepair: false,
        }
    }
    componentDidMount() {
        var operationType = this.props.operationType;
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
        if (prevProps.dataChanged != this.props.dataChanged) {
            var dataChanged = this.props.dataChanged;
            var isDisabled = !dataChanged;
            this.setState({
                isButtonDisabled: isDisabled,
                isButtonDisabledPrev: isDisabled,

            })
        }

    }
    onClick = async () => {
        var isSucced = await this.props.addButtonHandler();
        if (isSucced) {
            this.setState({
                openAddCar: true,
                redirectEditRepair: true,
            });
        }
        
    }
    OnArrowClick = () => {
        this.setState({
            redirectEditRepair:true,
        })
    }
    redirectEditRepair = () => {
        if (this.state.redirectEditRepair) {
            return <Redirect to={'/car-grid'} />
        }
    }
    
    render() {
        return (
            <div>
                <ArrowBackIcon onClick={this.OnArrowClick} hoveredStyle={hoveredStyle} />
                {this.redirectEditRepair()}

                <Button variant="outlined" color="primary" onClick={this.onClick} disabled={this.state.isButtonDisabled}>
                    {this.state.buttonLabel}
                </Button>
            </div>
        );
    }
}
import React from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

export class RepairAddButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openAddCar: false,
            isButtonDisabled: false,
            isButtonDisabledPrev: false,
            isRemoveRepairDisabled: true,
            isRemoveRepairDisabledPrev: true,
            redirectEditRepair: false,
            buttonLabel:'',
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
    //componentDidUpdate(prevProps) {
    //    debugger;
    //    var isAddRepair = this.props.setButtonVisibility();
    //    this.toggleButton('isEditRepairDisabled', 'isEditRepairDisabledPrev', isAddRepair);
    //    this.toggleButton('isRemoveRepairDisabled', 'isRemoveRepairDisabledPrev', isAddRepair);

    //}
    //toggleButton = (current, prev, isAddRepair) => {
    //    debugger;
    //    var prevIs = this.state[prev];
    //    if (prevIs != isAddRepair) {
    //        this.setState({
    //            [current]: isAddRepair,
    //            [prev]: isAddRepair,
    //        });

    //    }
    //}
    onClick = () => {
        this.setState({ openAddCar: true, });
    }
    onClickEditButton = () => {
        if (this.props.isDataValid()) {
            this.setState({
                redirectEditRepair: true,
            })
        }
        else {
            this.props.setValidationMsg();
        }
        
    }
    redirectEditRepair = () => {
        if (this.state.redirectEditRepair) {
            return <Redirect to={'/repair-grid'} />
        }
    }
    render() {
        return (
            <div>
                {this.redirectEditRepair()}
                <Button variant="outlined" color="primary" onClick={this.onClickEditButton} disabled={this.state.isButtonDisabled} >
                    {this.state.buttonLabel}

            </Button>
               
            </div>
        );
    }
}
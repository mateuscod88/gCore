import React from 'react';
import { CarGrid } from './CarGrid';
import { CarButtons } from './CarButtons'

export class CarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carId: 0,
            isAddRepairButtonDisable: true,
            isAddRepairButtonDisablePrev: true,
        };
    }
    setCarId = (carId) => {
        this.setState({
            carId: carId,
        });
    }
    getCarId = () => {
        return this.state.carId;
    }
    enableAddRepairButton = () => {
        this.setState({
            isAddRepairButtonDisable:false,
        })
    }
    disableAddRepairButton = () => {
        this.setState({
            isAddRepairButtonDisable: true,
        })
    }
    getPrev = () => {
        return this.state.isAddRepairButtonDisablePrev;
    }
    setButtonVisibility = () => {
        return this.state.isAddRepairButtonDisable;
    }
    render() {
        return (
            <div>
                <CarGrid setCarId={this.setCarId} enableButton={this.enableAddRepairButton} disableButton={this.disableAddRepairButton} />
                <CarButtons getCarId={this.getCarId} setButtonVisibility={this.setButtonVisibility}/>
            </div>
        );
    }
}
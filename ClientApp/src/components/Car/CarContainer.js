import React from 'react';
import { CarGrid } from './CarGrid';
import { CarButtons } from './CarButtons'
import CarService from '../Services/CarService.js';

export class CarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.service = new CarService();
        this.state = {
            carId: 0,
            isAddRepairButtonDisable: true,
            isAddRepairButtonDisablePrev: true,
            updateCarGrid: false,
        };
    }
    deleteCar = async (carId) => {
        
        await this.service.Delete(carId);
        this.setState({
            updateCarGrid: true,
        });
    }
    resetUpdateCarGrid = () => {
        this.setState({
            updateCarGrid: false,
        });
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
                <CarGrid setCarId={this.setCarId} enableButton={this.enableAddRepairButton} disableButton={this.disableAddRepairButton} updateCarGrid={this.state.updateCarGrid} resetUpdateCarGrid={this.resetUpdateCarGrid} />
                <CarButtons getCarId={this.getCarId} setButtonVisibility={this.setButtonVisibility} deleteCarHandler={this.deleteCar}/>
            </div>
        );
    }
}
import React from 'react';
import { CarGrid } from './CarGrid';
import { CarButtons } from './CarButtons'

export class CarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carId: 0,
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
    render() {
        return (
            <div>
                <CarGrid setCarId={this.setCarId} />
                <CarButtons getCarId={this.getCarId}/>
            </div>
        );
    }
}
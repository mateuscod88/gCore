import React from 'react';
import { CarGrid } from './CarGrid';
import { CarButtons } from './CarButtons'

export class CarContainer extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <CarGrid />
                <CarButtons />
            </div>
        );
    }
}
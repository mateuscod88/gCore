import React, { Component } from 'react';
import RepairGrid from './RepairGrid.js';
import { RepairButton } from './RepairButton.js';

export class RepairContainer extends Component {
    render() {
        return (
            <div>
                <RepairGrid />
                <RepairButton />
            </div>
        );
    }

}
import React from 'react';
import Button from '@material-ui/core/Button';

export class RepairButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openAddCar: false,
        }
    }
    onClick = () => {
        this.setState({ openAddCar: true, });
    }
    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.onClick}>
                    Dodaj
            </Button>
                <Button variant="outlined" color="primary" >
                    Edytuj
            </Button>
                <Button variant="outlined" color="primary" >
                    Usun
            </Button>
            </div>
        );
    }
}
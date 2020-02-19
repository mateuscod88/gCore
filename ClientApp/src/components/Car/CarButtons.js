import React from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
export class CarButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openAddCar: false,
            redirect:false,
        }
    }
    onClick = () => {
        debugger;
        this.props.addButtonHandler();
        this.setState({ openAddCar: true, });
    }
    onClickAddRepair = () => {
        this.setState({
            redirect: true,
        });
    }
    redirectAddRepair = () => {
        if (this.state.redirect) {
            return <Redirect to={'/repair-add?carId='+this.props.getCarId()} />
        }
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
                {this.redirectAddRepair()}
                <Button variant="outlined" color="primary" onClick={this.onClickAddRepair}>
                    Dodaj Naprawe
            </Button>
            </div>
        );
    }
}
﻿import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import CarService from '../Services/CarService.js';
const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        width: 1080,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 300,
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        display: 'flex',
        width: 300,
        marginLeft: 0,
        marginRight: theme.spacing.unit,

    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});
class RepairAddContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            phoneErrorText: '',
            note: '',
            noteErrorText: '',
            carBrand: '',
            carModel: '',
            carEngine: '',
            regNum:'',
        };
        this.carService = new CarService();
    }
    componentDidMount() {
        var carId = this.props.location.search.substring(7, 8);
        if (carId.length > 0) {
            var car = this.carService.GetCarById(carId);
            if (car != undefined) {
                this.setState({
                    carBrand: car.brand,
                    carModel: car.model,
                    carEngine: car.engine,
                    regNum: car.regNum,
                });
            }
           
        }
        
    }
    handleChangePhone = (text) => {
        console.log(text);
    }
    handleChangeNote = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };
    OnDateChange = (text) => {
        console.log(text);
    };
    render() {
        const { classes, theme } = this.props;
        return (
            <div>
                <div>{this.state.carBrand} {this.state.carModel} {this.state.carEngine}  {this.state.regNum}</div>
                <TextField
                    id="outlined-name"
                    label="Nazwa"
                    error={this.state.phoneErrorText.length !== 0 ? true : false}
                    helperText={this.state.phoneErrorText}
                    className={classes.textField}
                    value={this.state.phone}
                    onChange={this.handleChangePhone('phone')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Notatka"
                    error={this.state.noteErrorText.length !== 0 ? true : false}
                    helperText={this.state.noteErrorText}
                    className={classes.textField}
                    value={this.state.note}
                    onChange={this.handleChangeNote('note')}
                    margin="normal"
                    variant="outlined"
                    multiline="true"
                />
                <TextField
                    id="date"
                    label="Data Naprawy"
                    type="date"
                    value={this.state.dueDateTechService}
                    className={classes.textField}
                    onChange={this.OnDateChange('dueDateTechService')}
                    InputLabelProps={{
                        shrink: true,
                    }}

                />

            </div>
        );
    }
}
RepairAddContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(RepairAddContainer);
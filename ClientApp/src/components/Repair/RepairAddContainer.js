import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import CarService from '../Services/CarService.js';
import RepairService from '../Services/RepairService.js';
import { RepairAddButton } from './RepairAddButton';



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

        var repairId = parseInt(this.props.location.search.substring(10, 11));
        debugger;
        var operationType = repairId > 0 ? 'edit' : 'add';
        this.state = {
            noteName: '',
            noteNameError: '',
            note: '',
            noteErrorText: '',
            carBrand: '',
            carModel: '',
            carEngine: '',
            regNum: '',
            repairId: repairId,
            dataChanged: false,
            operationType: operationType,
            dueDateTechService:'',
        };
        debugger;
        this.carService = new CarService();
        this.repairService = new RepairService();
    }
    componentDidMount() {
        var repairId = this.state.repairId;
        var carId = this.props.location.search.substring(7, 8);
        debugger;
        if (carId > 0) {
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
        else if (repairId > 0) {
            debugger;
            var repair = this.repairService.GetRepairById(repairId);
            if (repair != undefined) {
                this.setState({
                    noteName:repair.Name,
                    note: repair.Note,
                    carBrand: repair.Brand,
                    carModel: repair.Model,
                        carEngine: repair.Engine,
                    regNum: repair.PlateNumber,
                    dueDateTechService: repair.Date,
                    }
                );
            }
        }
        
    }

    setDataChanged = () => {
        this.setState({
            dataChanged: true,
        });
    }
    validateisFieldEmpty(text) {
        return text == "" ? true : false;
    }

    handleChangeName = (text) => event => {
        debugger;
        if (this.state[text] != event.target.value) {
            this.setDataChanged();
        }
        if (this.validateisFieldEmpty(event.target.value)) {
            this.setState({
                noteNameError: 'Pole wymagane',

            });
        }
        else {

            this.setState({
                noteNameError: '',

            });
        }
        this.setState({
            [text]: event.target.value
        });
    }
    
    handleChangeNote = name => event => {
        debugger;

        if (this.state[name] != event.target.value) {
            this.setDataChanged();
           
        }
        if (this.validateisFieldEmpty(event.target.value)) {
            this.setState({
                noteErrorText: 'Pole wymagane',

            });
        }
        else {

            this.setState({
                noteErrorText: '',

            });
        }
        this.setState({
            [name]: event.target.value
        });
    };
    OnDateChange = (text) => event => {
        debugger;

        if (this.state[text] != event.target.value) {
            this.setDataChanged();
        }
        let dueDateTechService = event.target.value;
        this.setState({
            dueDateTechService
        });
    };
    isDataValid = () => {
        debugger;
        if (this.state.note != '' && this.state.noteName != '', this.state.dueDateTechService != '') {
            return true;
        }
        else {
            return false;
        }
    }
    setValidationMsg = () => {
        this.setState({
            noteErrorText: 'Pole wymagane',
            noteNameError: 'Pole wymagane',
        });
    }

    render() {
        const { classes, theme } = this.props;
        return (
            <div>
                <div>{this.state.carBrand} {this.state.carModel} {this.state.carEngine}  {this.state.regNum}</div>
                <TextField
                    id="outlined-name"
                    label="Nazwa"
                    error={this.state.noteNameError.length !== 0 ? true : false}
                    helperText={this.state.noteNameError}
                    className={classes.textField}
                    value={this.state.noteName}
                    onChange={this.handleChangeName('noteName')}
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
                <RepairAddButton operationType={this.state.operationType} dataChanged={this.state.dataChanged} isDataValid={this.isDataValid} setValidationMsg={this.setValidationMsg} />
            </div>
        );
    }
}
RepairAddContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(RepairAddContainer);
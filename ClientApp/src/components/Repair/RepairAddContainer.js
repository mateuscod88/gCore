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

        var repairId = this.props.location.search.substring(10, this.props.location.search.length);
        var isRepairIdExists = this.props.location.search.indexOf("repairId") > 0;
        debugger;
        var operationType = repairId.length > 0 && isRepairIdExists ? 'edit' : 'add';
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
            dueDateTechService: '',
            counter: '',
            counterErrorText:'',
        };
        debugger;
        this.carService = new CarService();
        this.repairService = new RepairService();
    }
    async componentDidMount() {
        debugger;
        var repairId = this.state.repairId;
        var carId = this.props.location.search.substring(7, this.props.location.search.length);
        var isCarIdExist = this.props.location.search.indexOf("carId") > 0;
        debugger;
        if (carId.length > 0 && isCarIdExist) {
            var car = await this.carService.GetCarById(carId);
            await car;
            if (car != undefined) {
                this.setState({
                    carBrand: car.brand,
                    carModel: car.model,
                    carEngine: car.engine,
                    regNum: car.regNum,
                });
            }

        }
        else if (repairId.length > 0) {
            debugger;
            var repair = await this.repairService.GetRepairById(repairId);
            await repair;
            if (repair != undefined) {
                this.setState({
                    noteName: repair.name,
                    note: repair.note,
                    carBrand: repair.brand,
                    carModel: repair.model,
                    carEngine: repair.engine,
                    regNum: repair.plateNumber,
                    dueDateTechService: repair.date,
                    counter: repair.counter
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
    handleSaveButton = async () => {
        var carIdd = this.props.location.search.substring(7, this.props.location.search.length);
        debugger;
        var repairDto = {
            name: this.state.noteName,
            note: this.state.note,
            carId: carIdd,
            date: this.state.dueDateTechService,
            counter: this.state.counter
        }
        if (this.operationType == 'add') {
            await this.repairService.AddRepair(repairDto);
        }
        else {
            await this.repairService.UpdateRepair(repairDto, this.state.repairId);
        }
        
        
    }
    handleChangeCounter = name => event => {
        this.NumberValidation(event.target.value, name, 8, 'counterErrorText');
        this.setState(
            {
                [name]: event.target.value,
            });
        console.log(name);
    };
    NumberValidation = (value, name, length, errorMsg) => {
        var regex = /^\d+$/;
        if (!(value === null)) {
            if ((value.match(regex) && value.length < length) || value === "") {
                this.setState({
                    [name]: value,
                    [errorMsg]: ''
                });
            }
            else if (value.length === length) {

            }
            else {
                this.setState({
                    [errorMsg]: 'Tylko cyfry',
                })
            }
        }
        else {
            this.setState({
                [name]: '',
                [errorMsg]: '',
            })
        }
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
                <TextField
                    id="outlined-name"
                    label="Stan Licznika"
                    error={this.state.counterErrorText.length !== 0 ? true : false}
                    className={classes.textField}
                    helperText={this.state.counterErrorText}
                    value={this.state.counter}
                    onChange={this.handleChangeCounter('counter')}
                    margin="normal"
                    variant="outlined"
                />
                <RepairAddButton operationType={this.state.operationType} dataChanged={this.state.dataChanged} isDataValid={this.isDataValid} setValidationMsg={this.setValidationMsg} addButtonHandler={this.handleSaveButton} />
            </div>
        );
    }
}
RepairAddContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(RepairAddContainer);
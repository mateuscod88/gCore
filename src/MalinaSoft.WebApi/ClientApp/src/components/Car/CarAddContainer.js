﻿import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Select from 'react-select';
import classNames from 'classnames';

import NoSsr from '@material-ui/core/NoSsr';

import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import { CarAddButtons } from './CarAddButtons'
import CarService from '../Services/CarService.js';
import CarDto from '../Services/Dto/CarDto.ts';

function generateYearsArray(years) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    for (var year = 1990; year <= currentYear; year++) {
        years.push({ value: year.toString(), label: year.toString() });
    }

    return years;
}
let years = [];
generateYearsArray(years);
const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        width: 1080,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 500,
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
        zIndex: 1600,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
        background:'#4DA6FF',
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
        width: 500,
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
function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

function Control(props) {
    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    inputRef: props.innerRef,
                    children: props.children,
                    ...props.innerProps,
                },
            }}
            {...props.selectProps.textFieldProps}
        />
    );
}

function Option(props) {
    return (
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

function Placeholder(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function SingleValue(props) {
    return (
        <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
            {props.children}
        </Typography>
    );
}

function ValueContainer(props) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={classNames(props.selectProps.classes.chip, {
                [props.selectProps.classes.chipFocused]: props.isFocused,
            })}
            onDelete={props.removeProps.onClick}
            deleteIcon={<CancelIcon {...props.removeProps} />}
        />
    );
}

function Menu(props) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    );
}
const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
};
class CarAddContainer extends React.Component {
    constructor(props) {
        super(props);
        this.service = new CarService();
        var isCarIdExist = this.props.location.search.indexOf("carId") > 0;
        var carId = this.props.location.search.substring(7, this.props.location.search.length);
        var operationType = carId.length > 0 && isCarIdExist ? 'edit' : 'add';
        this.state = {
            data: null,
            phone: '',
            phoneErrorText: '',
            brand: [],
            brands: [],
            singleBrand: '',
            model: [],
            singleModel: '',
            isCarModelValid: false,
            isCarBrandValid: false,
            isCarEngineValid: false,
            engine: [],
            singleEngine: '',
            open: false,
            openDialog: false,
            updateCarGrid: false,
            name: 'Cat in the Hat',
            counter: '',
            counterErrorText: '',
            regNumber: '',
            regNumError: '',
            dueDateTechService: '',
            owner: '',
            owners: [],
            isOwnerValid: false,
            age: '',
            year: '',
            yearError: '',
            years: years,
            multiline: 'Controlled',
            single: 'dobri',
            multi: null,
            rows: [],
            row: null,
            isRowSelected: true,
            isEditDialogBox: false,
            ccarId: 0,
            operationType: operationType,
            dataChanged: false,
            car: null,
            selectedDatenew: '',
            dueDateTechServiceDataPicker:null
        };

    };
    async componentDidMount() {
        var b = await this.service.GetBrands();
        await b;
        var brands = b.map(x => ({ value: x.id, label: x.brand }));
        
        var o = await this.service.GetOwners();
        await o;
        let owners = o.map(x => ({ value: x.id, label: x.name }));
        this.setState({
            brands,
            owners
        });
        var carId = this.props.location.search.substring(7, this.props.location.search.length);
        
        if (carId.length > 0) {

            var car = await this.service.GetCarById(carId);
            await car;
            
            this.setState({
                car: car,
            });

            if (car != undefined) {
                this.setState({
                    singleBrand: { value: car.brandId, label: car.brand },
                    singleModel: { value: car.modelId, label: car.model },
                    singleEngine: { value: car.engineId, label: car.engine },
                    regNumber: car.regNum,
                    year: car.year,
                    counter: car.kilometerCounter,
                    dueDateTechService: car.technicalService,
                    phone: car.phone,
                    owner: { value: car.ownerId, label: car.owner },
                    ccarId: carId,
                    operationType: 'edit',
                });
            }

        }
        else {
            this.setState({
                operationType: 'add',
            });
        }
    }

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
    handleChangeDropDown = name => event => {
        if (event.target.value != this.state.year) {
            this.setDataChanged(true);
        }
        this.setState({
            [name]: event.target.value,
            yearError: '',
        });

    };
    carDataChangedValidation(value) {
        
        var carValid = false;
        if (this.state.car.brand === value) { return !carValid; }
        if (this.state.car.model === value) { return !carValid; }
        if (this.state.car.engine === value) { return !carValid; }
        if (this.state.car.regNum === value) { return !carValid; }
        if (this.state.car.year === value) { return !carValid; }
        if (this.state.car.kilometerCounter === value) { return !carValid; }
        if (this.state.car.technicalService === value) { return !carValid; }
        if (this.state.car.phone === value) { return !carValid; }
        if (this.state.car.owner === value) { return !carValid; }
        return carValid;
    }
    setButtonByDataChanged = (text) => {
        
        if (this.carDataChangedValidation(text)) {
            this.setDataChanged(false);
        }
        else {
            this.setDataChanged(true);
        }
    }
    handleDateChangenew = name => {
        console.log(name);
    }
    handleChangeBrand = name => async event => {
        if (this.state.operationType == "edit") {
            this.setButtonByDataChanged(event.label);
        }
        this.setState({
            [name]: event,
            singleModel: '',
            singleEngine:'',
        });
        
        var m = await this.service.GetModelByBrandId(event.value);
        await m;
        

        var model = m.map(x => ({ value: x.id, label: x.name }));;
        

        this.setState({
            model,
            isCarBrandValid: false
        });
        console.log(event);
    };
    handleChangeModel = async event => {
        if (this.state.operationType == "edit") {
            this.setButtonByDataChanged(event.label);
        }
        
        var e = await this.service.GetEngines(this.state.singleBrand.value, event.value);
        await e;
        var engine = e.map(x => ({ value: x.id, label: x.name }));
        var singleModel = event;
        this.setState({
            engine,
            singleModel,
            singleEngine: '',
            isCarModelValid: false,
        });
        console.log(event);
    };
    handleChangeEngine = (event) => {
        var singleEngine = event;
        this.setState({
            singleEngine,
            isCarEngineValid: false
        });
        console.log(event);
    };
    handleChangeCounter = name => event => {
        this.NumberValidation(event.target.value, name, 8, 'counterErrorText');
        this.setState(
            {
                [name]: event.target.value,
            });
        console.log(name);
    };
    handleChangeRegNumber = text => event => {
        this.setState({
            [text]: event.target.value.toUpperCase(),
            regNumError: ''
        });
    };
    OnDateChange = text => event => {
        
        if (event.target == undefined) {
            let a = event.getDate();
            this.setState({
                dueDateTechService: event.toISOString(),
                dueDateTechServiceDataPicker: event,
            });
        }
    };
    handleChangeOwner = text => event => {
        let owner = event;
        this.setState({
            owner,
            isOwnerValid: false
        });
    };
    handleChangePhone = name => event => {
        this.NumberValidation(event.target.value, name, 15, 'phoneErrorText');
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSaveButton = async () => {

        if (this.state.isEditDialogBox == false) {
            
            var isCarModelInvalid = this.state.singleModel === '';
            var isCarBrandInvalid = this.state.singleBrand === '';
            var isCarEngineInvalid = this.state.singleEngine === '';
            var isPhoneInvalid = this.state.phone === '';
            var isOwnerNotSelected = this.state.owner === '' || this.state.owner === null;
            var isYearInvalid = this.state.year === '';
            var isRegNumInvalid = this.state.regNumber === '';

            if (isCarModelInvalid) {
                this.setState({ isCarModelValid: true });
            }
            if (isCarBrandInvalid) {
                this.setState({ isCarBrandValid: true });
            }
            if (isCarEngineInvalid) {
                this.setState({ isCarEngineValid: true });
            }
            if (isPhoneInvalid && isOwnerNotSelected) {
                this.setState({
                    phoneErrorText: 'Telefon lub właściciel wymagany',
                    isOwnerValid: true,
                });
            }
            if (isRegNumInvalid) {
                this.setState({
                    regNumError: 'Numer rejestracyjny wymagany',
                });
            }
            if (isYearInvalid) {
                this.setState({
                    yearError: 'Rok produkcji wymagany',
                });
            }
            
            if (!isCarModelInvalid && !isCarBrandInvalid && !isCarEngineInvalid && (!isOwnerNotSelected || !isPhoneInvalid)) {
                
                var dateToday = Date.now().toString();
                if (this.state.owner != undefined) {
                    var ownerId = this.state.owners[this.state.owners.findIndex((owner) => this.state.owner.label == owner.label && this.state.owner.value == owner.value)].value;
                }
                var carDto = {
                    BrandId: this.state.singleBrand.value,
                    ModelId: this.state.singleModel.value,
                    EngineId: this.state.singleEngine.value,
                    Year: this.state.years[this.state.years.findIndex((year) => this.state.year == year.value)].value,
                    TechnicalCheck: this.state.dueDateTechService,
                    PlateNumber: this.state.regNumber,
                    KilometerCounter: this.state.counter,
                    OwnerId: ownerId,
                    Phone: this.state.phone,
                };

                if (this.state.operationType == "add") {
                    
                    await this.service.Add(carDto);
                    return true;
                }
                else {
                    var carId = this.props.location.search.substring(7, this.props.location.search.length);
                    await this.service.Update(carDto, carId);
                    return true;

                }
            }
            else {
                return false;
            }
        }
        else {
            
        }
    };
    setDataChanged = (isChanged) => {
        this.setState({
            dataChanged: isChanged,
        });
    }

    isDataValid = () => {
        
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
        const selectStyles = {
            input: base => ({
                ...base,
                color: theme.palette.text.primary,
                '& input': {
                    font: 'inherit',
                },
            }),
        };
        return (
            <div>
                <FormControl className={classes.formControl} error={this.state.isCarBrandValid} >
                    <Select
                        classes={classes}
                        styles={selectStyles}
                        options={this.state.brands}
                        components={components}
                        value={this.state.singleBrand}
                        onChange={this.handleChangeBrand('singleBrand')}
                        placeholder="Wybierz Marke"
                        isClearable
                    />
                    {this.state.isCarBrandValid && <FormHelperText> This is required!</FormHelperText>}
                </FormControl>
                <div className={classes.divider} />
                <FormControl className={classes.formControl} error={this.state.isCarModelValid} >
                    <Select
                        classes={classes}
                        styles={selectStyles}
                        options={this.state.model}
                        components={components}
                        value={this.state.singleModel}
                        onChange={this.handleChangeModel}
                        placeholder="Wybierz Model"
                        isClearable
                    />
                    {this.state.isCarModelValid && <FormHelperText>This is required!</FormHelperText>}
                </FormControl>
                <div className={classes.divider} />

                <FormControl className={classes.formControl} error={this.state.isCarEngineValid}>
                    <Select
                        classes={classes}
                        styles={selectStyles}
                        options={this.state.engine}
                        components={components}
                        value={this.state.singleEngine}
                        onChange={this.handleChangeEngine}
                        placeholder="Wybierz Silnik"
                        isClearable
                    />
                    {this.state.isCarEngineValid && <FormHelperText>This is required!</FormHelperText>}
                </FormControl>
                <div className={classes.divider} />
                <TextField
                    id="outlined-select-currency"
                    select
                    error={this.state.yearError.length !== 0 ? true : false}
                    label="Wybierz rok produkcji"
                    className={classes.textField}
                    value={this.state.year}
                    onChange={this.handleChangeDropDown('year')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText={this.state.yearError}
                    margin="normal"
                    variant="outlined"
                >
                    {years.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
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
                <TextField
                    id="outlined-name"
                    label="Numer Rejestracyjny"
                    error={this.state.regNumError.length !== 0 ? true : false}
                    helperText={this.state.regNumError}
                    className={classes.textField}
                    value={this.state.regNumber}
                    onChange={this.handleChangeRegNumber('regNumber')}
                    margin="normal"
                    variant="outlined"
                />
                
                <TextField
                    id="outlined-name"
                    label="Numer telefonu"
                    error={this.state.phoneErrorText.length !== 0 ? true : false}
                    helperText={this.state.phoneErrorText}
                    className={classes.textField}
                    value={this.state.phone}
                    onChange={this.handleChangePhone('phone')}
                    margin="normal"
                    variant="outlined"
                />
                <CarAddButtons addButtonHandler={this.handleSaveButton} operationType={this.state.operationType} dataChanged={this.state.dataChanged} isDataValid={this.isDataValid} setValidationMsg={this.setValidationMsg} />
            </div>
        );
    }
}
CarAddContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(CarAddContainer);
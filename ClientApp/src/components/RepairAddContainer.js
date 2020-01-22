import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

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
        };
    }
    handleChangePhone = (text) => {
        console.log(text);
    } 
    OnDateChange = (text) => {
        console.log(text);
    };
    render() {
        const { classes, theme } = this.props;
        return (
            <div>
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
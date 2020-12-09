import React, { useRef } from 'react'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));

export default function CarRepairsDetailsPopover(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isInitialMount = useRef(true);

    React.useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            setAnchorEl(props.anchor);
        }
    })

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',

                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>{props.popOverRepairs.length === 0 ? 'Brak napraw' : 'Ostatnie naprawy'}</Typography>
                <List dense={true}>
                    {props.popOverRepairs.map((value) =>
                        React.cloneElement(<ListItem>
                            <ListItemText
                                primary={value.repairName}
                                secondary={value.repairDate}
                            />
                        </ListItem>, {
                            key: value.id,
                        }))
                    }

                </List>
            </Popover>
        </div>
    );
}


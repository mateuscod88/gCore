import React from 'react';

export class CarAddContainer extends React.Component{
    constructor(props) {
        super(props);
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
                <FormControl className={classes.formControl} error={this.state.isCarBrandValid}>
                    <Select
                        classes={classes}
                        styles={selectStyles}
                        options={this.state.brand}
                        components={components}
                        value={this.state.singleBrand}
                        onChange={this.handleChangeBrand('singleBrand')}
                        placeholder="Wybierz Marke"
                        isClearable
                    />
                    {this.state.isCarBrandValid && <FormHelperText> This is required!</FormHelperText>}
                </FormControl>
            </div>
            );
    }
}

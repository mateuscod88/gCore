import React from 'react';
import { EditingState, PagingState, IntegratedPaging, SelectionState, SearchState, IntegratedFiltering} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, TableEditColumn, PagingPanel, TableSelection, SearchPanel, Toolbar } from '@devexpress/dx-react-grid-material-ui';

import { Column } from '@devexpress/dx-react-grid';
import CarService from '../Services/CarService.js';
import $ from "jquery";

const getRowId = row => row.id;

export class CarGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            rows: [],
            selectedRows: 0,
            selection: [],
        }
        this.service = new CarService();
    }
    async componentDidMount() {
        var columns = this.service.GetColumns();
        var rows = await this.service.GetAll();
        console.log(rows);
        this.setState({
            columns: columns,
            rows: rows.rows
        });
        console.log($('.MuiTableRow-root:not(.MuiTableRow-head)').length);
        $('.MuiTableRow-root:not(.MuiTableRow-head)').each(function (index) {
            console.log(this);

            console.log(index);
            $(this).mouseenter(function (e) {
                console.log(index + 'dupa');
                console.log(e);
            })

        });
    }
    async componentDidUpdate(prevProps) {
        var service = this.service;
        if (this.props.updateCarGrid) {
            var rows = await this.service.GetAll();
            console.log(rows);
            this.setState({
                rows: rows.rows
            });
            this.props.resetUpdateCarGrid();
        }
    }
    changeSelection = selection => {
        var service = this.service;
        var sel = [];
        sel[0] = selection[selection.length - 1];
        var selection = sel[0];
        if (selection != undefined) {
            var rowId = sel[0];
            this.props.enableButton();
            var row = this.state.rows[this.state.rows.findIndex(row => row.id == rowId)];

            console.log(row);
            
            this.props.setCarId(row.id);
            if (selection.length != 0) {
                service.SetSingleRow(row);
                service.SetIsRowSelected(true);
            }
            else {
                service.SetIsRowSelected(false);
            }
            

            this.setState({ selection: sel, selectedRows: sel[0], });

            let rows = this.state.rows;

            this.setState({
                rows
            });
        }
        else {
            this.setState({ selection: [], selectedRows: 0, });
            service.SetIsRowSelected(false);
            this.props.disableButton();
        }


    }
    
    commitChanges = ({ added, changed, deleted }) => {
        
        if (added) {

        }
        if (changed) {

        }
        if (deleted) {

        }
    }
    setSearchState = (value) => {
        this.setState({
            searchValue: value,
        });
    }
    render() {
        const { columns, rows, selection } = this.state;

        return (
            <div class="mateo">
                <Grid
                    rows={this.state.rows}
                    columns={columns}
                    getRowId={getRowId}>

                    <SelectionState
                        selection={selection}
                        onSelectionChange={this.changeSelection}
                    />
                    <SearchState
                        value={this.state.searchValue}
                        onValueChange={this.setSearchState}
                    />
                    <IntegratedFiltering />
                    <Toolbar />
                    <SearchPanel />
                    <PagingState
                        defaultCurrentPage={0}
                        pageSize={5}
                    />
                    <IntegratedPaging />
                    <EditingState
                        onCommitChanges={this.commitChanges}
                    />
                    <Table />
                    <TableHeaderRow />
                    <PagingPanel />
                   
                    <TableSelection
                        selectByRowClick
                        highlightRow
                        showSelectionColumn={false}
                    />
                </Grid>
            </div>
        );
    }
}


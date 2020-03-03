﻿import React, { Component } from 'react';
import { EditingState, PagingState, IntegratedPaging, SelectionState, SearchState, IntegratedFiltering } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, TableEditColumn, PagingPanel, TableSelection, SearchPanel, Toolbar} from '@devexpress/dx-react-grid-material-ui';
import RepairService from '../Services/RepairService.js';
const getRowId = row => row.id;

class RepairGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            rows: [],
            selectedRows: 0,
            selection: [],
            searchValue: '',

        };
        this.service = new RepairService();
    }
    GetRows =  () => {
        var service = this.service;
        var rows =  service.GetAll();
        rows;
        this.setState({
            rows: rows,
        });

    }

    async componentDidMount() {
        var service = this.service;

        this.GetRows();
        var columnss = service.GetColumns();
        debugger;

        this.setState({
            columns: service.GetColumns(),
        });
    }
    componentDidUpdate(prevProps) {
        var service = this.service;
        if (service.GetUpdateGrid() == true) {
            this.GetRows();
            service.SetUpdateGrid(false);
        }
    }
    commitChanges({ added, changed, deleted }) {
        let { rows } = this.state;
        if (added) {

        }
        if (changed) {

        }
        if (deleted) {

        }
    }

    changeSelection = selection => {
        var service = this.service;
        var sel = [];
        sel[0] = selection[selection.length - 1];
        var rowId = sel[0];

        var row = this.state.rows[this.state.rows.findIndex(row => row.id == rowId)];
        if (selection.length != 0) {
            service.SetSingleRow(row);
            service.SetIsRowSelected(true);
            this.props.onRowSelected(true);
            debugger;
        }
        else {
            service.SetIsRowSelected(false);
            this.props.onRowSelected(false);
        }
        debugger;

        this.setState({ selection: sel, selectedRows: sel[0], });
    }
    toggleSelectionRow = (rowIds, state) => {
        debugger;
        var st = rowIds;

    }

    setSearchState = (value) => {
        this.setState({
            searchValue: value,
        });
    }

    render() {

        const { columns, rows, selection } = this.state;
        return (
            <div class="car-grid-de">
                <Grid
                    rows={rows}
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

export default RepairGrid;

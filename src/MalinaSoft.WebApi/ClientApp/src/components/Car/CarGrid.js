import React from 'react';
import { EditingState, PagingState, IntegratedPaging, SelectionState, SearchState, IntegratedFiltering } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel, TableSelection, SearchPanel, Toolbar } from '@devexpress/dx-react-grid-material-ui';

import CarService from '../Services/CarService.js';
import CarRepairsDetailsPopover from './CarRepairsDetailsPopover.js';

const getRowId = row => row.id;




export class CarGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            rows: [],
            selectedRows: 0,
            selection: [],
            anchorPopover: null,
            popOverRepairs: [],
        }
        this.service = new CarService();
    }
    async componentDidMount() {
        var columns = this.service.GetColumns();
        var rows = await this.service.GetAll();
        this.setState({
            columns: columns,
            rows: rows.rows
        });
    }
    async componentDidUpdate(prevProps) {
        if (this.props.updateCarGrid) {
            var rows = await this.service.GetAll();
            this.setState({
                rows: rows.rows
            });
            this.props.resetUpdateCarGrid();
        }
    }
    onMouseEnterRow = (e, row) => {
        this.setState({
            anchorPopover: e.target.parentElement,
            popOverRepairs: (row.recentRepairs !== null ? (row.recentRepairs.map(r => ({
                repairName: r.name,
                repairDate: r.repairDate,
                id :r.id
            }))) : [])

        });
    }
    onMouseLeaveRow = (e, row) => {
        this.setState({
            anchorPopover: null,

        });
    }

    changeSelection = selection => {
        var service = this.service;
        var sel = [];
        sel[0] = selection[selection.length - 1];
        var selection = sel[0];
        if (selection !== undefined) {
            var rowId = sel[0];
            this.props.enableButton();
            var row = this.state.rows[this.state.rows.findIndex(row => row.id === rowId)];


            this.props.setCarId(row.id);
            if (selection.length !== 0) {
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
        const { columns, selection } = this.state;
        const TableRow = ({ row, ...restProps }) => {

            return (<Table.Cell
                {...restProps}
                // eslint-disable-next-line no-alert
                onMouseEnter={(e) => {
                    this.onMouseEnterRow(e, row);
                }}
                onMouseLeave={(e) => {
                    this.onMouseLeaveRow(e, row);
                }}
            //style={{
            //    cursor: "pointer",
            //    ...styles[row.brand.toLowerCase()]
            //}}
            />)
        }
        return (
            <div className="mateo">
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

                    <PagingPanel />
                    <Table cellComponent={TableRow} />
                    <TableHeaderRow />
                    <TableSelection
                        selectByRowClick
                        highlightRow
                        showSelectionColumn={false}

                    />
                </Grid>
                <CarRepairsDetailsPopover popOverRepairs={this.state.popOverRepairs} anchor={this.state.anchorPopover} />
            </div>
        );
    }
}


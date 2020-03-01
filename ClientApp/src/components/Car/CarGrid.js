import React from 'react';
import { EditingState, PagingState, IntegratedPaging, SelectionState } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, TableEditColumn, PagingPanel, TableSelection } from '@devexpress/dx-react-grid-material-ui';

import { Column } from '@devexpress/dx-react-grid';
import CarService from '../Services/CarService.js';

const getRowId = row => row.id;

export class CarGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            rows: [],
            selectedRows: 0,
            selection: [],
            //columns:
            //    [
            //        { name: 'model', title: 'Model' },
            //        { name: 'brand', title: 'Marka' },
            //        { name: 'engine', title: 'Silnik' },
            //        { name: 'regNum', title: 'Nr Rejestracyjny' },
            //        { name: 'phone', title: 'Telefon' },
            //        { name: 'dueDateTechService', title: 'Do Przeglądu' },
            //        { name: 'lastOilChange', title: 'Wymiana Oleju' }
            //    ],
            //rows:
            //    [
            //        { model: "A4", brand: "Audi", engine: "1.9Tdi", regNum: "BIA8704", phone: "513524045", dueDateTechService: "10.04.2019", lastOilChange: "200tys" },
            //        { model: "A4", brand: "Audi", engine: "1.9Tdi", regNum: "BIA8704", phone: "513524045", dueDateTechService: "10.04.2019", lastOilChange: "200tys" },
            //        { model: "A4", brand: "Audi", engine: "1.9Tdi", regNum: "BIA8704", phone: "513524045", dueDateTechService: "10.04.2019", lastOilChange: "200tys" },
            //    ]

        }
        this.service = new CarService();
    }
    componentDidMount() {
        var columns = this.service.GetColumns();
        var rows = this.service.GetAll();
        console.log(rows);
        this.setState({
            columns: columns,
            rows: rows.rows
        });
    }
    changeSelection = selection => {
        var service = this.service;
        var sel = [];
        sel[0] = selection[selection.length - 1];
        var selection = sel[0];
        if (selection != undefined) {
            var rowId = sel[0];
            console.log(sel[0]);
            this.props.enableButton();
            var row = this.state.rows[this.state.rows.findIndex(row => row.id == rowId)];

            console.log(row);
            debugger;
            this.props.setCarId(row.id);
            if (selection.length != 0) {
                service.SetSingleRow(row);
                service.SetIsRowSelected(true);
                //this.props.onRowSelected(true);
                debugger;
            }
            else {
                service.SetIsRowSelected(false);
                //this.props.onRowSelected(false);
            }
            debugger;

            this.setState({ selection: sel, selectedRows: sel[0], });

            let rows = this.state.rows;
            //rows = rows.concat({
            //    id: "3",
            //    brand: "VW",
            //    model: "Polo",
            //    engine: "1.9TDI",
            //    regNum: "BIA8872",
            //    phone: "514515151",
            //    dueDateTechService: "",
            //    lastOilChange: ""
            //});

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
    componentDidUpdate(prevProps) {
        debugger;
        //var service = this.props.service;
        //if (service.GetUpdateGrid() == true) {
        //    this.GetRows();
        //    service.SetUpdateGrid(false);
        //}
    }
    commitChanges = ({ added, changed, deleted }) => {
        debugger;
        //const { rows } = this.state;
        
        if (added) {

        }
        if (changed) {

        }
        if (deleted) {

        }
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
                    <TableEditColumn
                        showAddCommand
                        showEditCommand
                        showDeleteCommand
                    />
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


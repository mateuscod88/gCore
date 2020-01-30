import React from 'react';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { Column } from '@devexpress/dx-react-grid';
import CarService from '../Services/CarService.js';

export class CarGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            rows:[]
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
    componentDidMount()
    {
        var columns = this.service.GetColumns();
        var rows = this.service.GetAll();
        console.log(rows);
        this.setState({
            columns: columns,
            rows: rows.rows
        });
    }
    render() {
        const { columns, rows } = this.state;
        return (
            <div class="mateo">
                <Grid
                    rows={rows}
                    columns={columns}>
                    <Table />
                    <TableHeaderRow />
                </Grid>
            </div>
        );
    }
}


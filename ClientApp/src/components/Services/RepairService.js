﻿class RepairService {
    constructor() {
        this.repairs = null;
        this.columns = null;
        this.singleRow = null;
        this.isRowSelected = false;
        this.isRepairDetailsDialogBox = false;
        this.updateGrid = false;
        this.data = [
            { Id: 1, Name: "rozrzad", Date: "2020-01-02", Note: "Wymiana rozrzadu ina", Brand: "Vw", Model: "Passat", PlateNumber: "BIA004411",Engine:"1.9TDI" },
            { Id: 2, Name: "olej", Date: "2020-01-02", Note: "Wymiana rozrzadu ina", Brand: "Vw", Model: "Passat", PlateNumber: "BIA004411", Engine: "1.9TDI" },
            { Id: 3, Name: "filtr paliwa", Date: "2020-01-02", Note: "Wymiana rozrzadu ina", Brand: "Vw", Model: "Passat", PlateNumber: "BIA004411", Engine: "1.9TDI" },
            { Id: 4, Name: "wymiana klockow", Date: "2020-01-02", Note: "Wymiana rozrzadu ina", Brand: "Vw", Model: "Passat", PlateNumber: "BIA004411", Engine: "1.9TDI" }
        ]
    }
    async AddRepair(repairDTO) {
        const postResult = await fetch('/repairs/addRepair', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(repairDTO)
        });
        await postResult;
    }
    async UpdateRepair(repairDTO) {
        const putResult = await fetch('home/updateRepair?id=' + this.state.row.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(repairDTO)

        });
        await putResult;
    }
    GetRepairById(repairId) {
        return this.data.find(x => x.Id == repairId);
    }
    GetAll() {
        //const result = await fetch('/repairs/GetRepairs')
        //    .then(response => response.json())
        //    .then(data => this.repairs = {
        //        rows: (data.map(suggestion => ({
        //            id: suggestion.Id,
        //            name: suggestion.Name,
        //            date: suggestion.Date,
        //            note: suggestion.Note,
        //            carBrand: suggestion.Brand,
        //            carModel: suggestion.Model,
        //            carRegNum: suggestion.PlateNumber,

        //        }))),
        //    });
        //await result;
        debugger;
        
        this.repairs =  {
            rows: this.data.map(suggestion => ({
                id: suggestion.Id,
                name: suggestion.Name,
                date: suggestion.Date,
                note: suggestion.Note,
                carBrand: suggestion.Brand,
                carModel: suggestion.Model,
                carRegNum: suggestion.PlateNumber,

            }))
        };
        debugger;
        return this.repairs.rows;
    }
    GetColumns() {
        this.columns =
            [
                { name: 'carBrand', title: "Marka" },
                { name: 'carModel', title: "Model" },
                { name: 'carRegNum', title: "Numer Rejestracyjny" },
                { name: 'name', title: "Nazwa" },
                { name: 'date', title: "Data Naprawy" },
            ];
        return this.columns;
    }
    SetSingleRow(singleRow) {
        this.singleRow = singleRow;
    }
    GetSingleRow() {
        return this.singleRow;
    }
    SetIsRowSelected(isRowSelected) {
        this.isRowSelected = isRowSelected;
    }
    SetRepairDetailsDialogBox(isOpen) {
        this.isRepairDetailsDialogBox = isOpen;
    }
    GetRepairDetailsDialogBox() {
        return this.isRepairDetailsDialogBox;
    }
    GetUpdateGrid() {
        return this.updateGrid;
    }
    SetUpdateGrid(updateGrid) {
        this.updateGrid = updateGrid;
    }
}
export default RepairService;
import RESTService from './RESTService.js';

class RepairService {
    constructor() {
        this.RESTService = new RESTService();

        this.repairs = null;
        this.columns = null;
        this.singleRow = null;
        this.isRowSelected = false;
        this.isRepairDetailsDialogBox = false;
        this.updateGrid = false;
        this.data = [
            { Id: 1, Name: "rozrzad", Date: "2020-01-02", Note: "Wymiana rozrzadu ina", Brand: "Vw", Model: "Passat", PlateNumber: "BIA004411", Engine: "1.9TDI" },
            { Id: 2, Name: "olej", Date: "2020-01-02", Note: "Wymiana rozrzadu ina", Brand: "Vw", Model: "Passat", PlateNumber: "BIA004411", Engine: "1.9TDI" },
            { Id: 3, Name: "filtr paliwa", Date: "2020-01-02", Note: "Wymiana rozrzadu ina", Brand: "Vw", Model: "Passat", PlateNumber: "BIA004411", Engine: "1.9TDI" },
            { Id: 4, Name: "wymiana klockow", Date: "2020-01-02", Note: "Wymiana rozrzadu ina", Brand: "Vw", Model: "Passat", PlateNumber: "BIA004411", Engine: "1.9TDI" }
        ]
    }
    async AddRepair(repairDTO) {
        var rep = JSON.stringify(repairDTO);
        
        const postResult = await fetch('api/repair/add', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(repairDTO)
        });
        await postResult;
    }
    async UpdateRepair(repairDTO, repairId) {
        const putResult = await fetch('api/repair/update?id=' + repairId, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(repairDTO)

        });
        await putResult;
    }
    async GetRepairById(repairId) {
        const endpoint = "/api/repair/GetById?repairId=" + repairId;
        var result = await this.RESTService.Get(endpoint);
        await result;
        return result;
    }
    async GetAll() {
        
        const endpoint = "/api/repair/getall?pageSize=&pageNumber="
        var result = await this.RESTService.Get(endpoint);
        await result;
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
        

        //this.repairs =  {
        //    rows: this.data.map(suggestion => ({
        //        id: suggestion.Id,
        //        name: suggestion.Name,
        //        date: suggestion.Date,
        //        note: suggestion.Note,
        //        carBrand: suggestion.Brand,
        //        carModel: suggestion.Model,
        //        carRegNum: suggestion.PlateNumber,

        //    }))
        //};
        this.repairs = {
            rows: result.map(suggestion => ({
                id: suggestion.id,
                name: suggestion.name,
                date: suggestion.date,
                note: suggestion.note,
                carBrand: suggestion.brand,
                carModel: suggestion.model,
                carRegNum: suggestion.plateNumber,
                counter: suggestion.counter + ' KM'
            }))
        };


        
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
                { name: 'counter', title: "Stan Licznika" },

            ];
        return this.columns;
    }
    async Delete(repairId) {
        await this.RESTService.Delete("/api/repair/delete?id=", repairId);
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
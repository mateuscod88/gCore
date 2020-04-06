import RESTService from './RESTService.js';

class CarService {
    constructor() {

        this.RESTService = new RESTService();
        this.cars = null;
        this.repairs = null;
        this.columns = null;
        this.singleRow = null;
        this.isRowSelected = false;
        this.isRepairDetailsDialogBox = false;
        this.updateGrid = false;
        var dateToday = Date.now().toString();
        this.url = 'http://localhost:5001/';
        this.carsGetByID = [

            {
                id: "1",
                brand: "VW",
                brandId: 2,
                model: "Passat",
                modelId:13,
                engine: "1.9TDI",
                engineId:1,
                regNum: "BIA8872",
                phone: "514515151",
                dueDateTechService: dateToday,
                lastOilChange: dateToday,
                year: 2000,
                kilometerCounter: 199999,
                technicalService: "2020-01-01",
                owner: "Mat mal",
                ownerId:1,
            },
            {
                id: "2",
                brand: "VW",
                brandId: 2,
                model: "Golf",
                modelId: 21,
                engine: "1.9TDI",
                engineId: 1,
                regNum: "BIA8872",
                phone: "514515151",
                dueDateTechService: dateToday,
                lastOilChange: dateToday,
                year: 2001,
                kilometerCounter: 250000,
                technicalService: "2020-01-02",
                owner: "Mat mal1",
                ownerId: 2,

            },
        ];
    }
    Add(car) {
        this.carsGetByID.push(car);
    }
    Update(car) {
        this.carsGetByID.push(car);
    }
    GetColumns() {
        this.columns =
            [
                { name: 'model', title: 'Model' },
                { name: 'brand', title: 'Marka' },
                { name: 'engine', title: 'Silnik' },
                { name: 'regNum', title: 'Nr Rejestracyjny' },
                { name: 'phone', title: 'Telefon' },
                { name: 'dueDateTechService', title: 'Do Przeglądu' },
                { name: 'lastOilChange', title: 'Wymiana Oleju' }

            ];
        return this.columns;
    }
    GetAll() {

        var endpoint = 'api/car/getall';
        var result = RESTService.Get(endpoint);
        var carDto = result
            .then(data => this.repairs = {
                rows: (data.map(suggestion => ({
                    id: suggestion.Id,
                    name: suggestion.Name,
                    date: suggestion.Date,
                    note: suggestion.Note,
                    carBrand: suggestion.Brand,
                    carModel: suggestion.Model,
                    carRegNum: suggestion.PlateNumber,

                }))),
            });
        //var cars = this.carsGetByID

        this.cars = {
            rows: carDto
        }
        return this.cars;
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
    GetBrands() {
        var endpoint = 'api/brand/getall';
        var result = RESTService.Get(endpoint);
        var brandDto = result
            .then(data => this.repairs = {
                rows: (data.map(suggestion => ({
                    id: suggestion.Id,
                    brand: suggestion.Name,
                }))),
            });
        return brandDto.rows;
        //return [{ id: 1, brand: "audi" }, { id: 2, brand: "VW" }];
    }
    GetModelByBrandId(brandId) {
        var endpoint = 'api/model/GetCarModelsByBrandId&brandId='+brandId;
        var result = RESTService.Get(endpoint);
        var modelDto = result
            .then(data => this.repairs = {
                rows: (data.map(suggestion => ({
                    id: suggestion.Id,
                    model: suggestion.Name,
                }))),
            });
        //let cars = [{ id: 1, brand: "audi", models: [{ id: 1, model: "A3" }, { id: 2, model: "A4" }, { id: 3, model: "A5" }] }, { id: 2, brand: "VW", models: [{ id: 11, model: "Polo" }, { id: 21, model: "Golf" }, { id: 13, model: "Passat" }] }]
        //return cars.find(x => x.id == brandId).models;
        return modelDto.rows;

    }
    GetEngines(brandId, modelId) {
        var endpoint = 'api/model/GetEnginesByBrandIdModelId&brandId=' + brandId +'?modelId='+modelId;
        var result = RESTService.Get(endpoint);
        var engineDto = result
            .then(data => this.repairs = {
                rows: (data.map(suggestion => ({
                    id: suggestion.Id,
                    name: suggestion.Name,
                }))),
            });
        return engineDto.rows;
        //let cars = [{ id: 1, brand: "audi", models: [{ id: 1, model: "A3", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.8TFSI" }] }, { id: 2, model: "A4", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.8TFSI" }] }, { id: 3, model: "A5", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.8TFSI" }] }] }, { id: 2, brand: "VW", models: [{ id: 11, model: "Polo", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.8TFSI" }] }, { id: 21, model: "Golf", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "2.0TFSI" }] }, { id: 13, model: "Passat", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.4TFSI" }] }] }]
        //let models = cars.find(x => x.id == brandId).models;
        //debugger;
        //let engines = models.find(y => y.id == modelId).engines
        //return cars.find(x => x.id == brandId).models.find(y => y.id == modelId).engines;
    }
    GetOwners() {
        var endpoint = 'api/model/GetAll';
        var result = RESTService.Get(endpoint);
        var engineDto = result
            .then(data => this.repairs = {
                rows: (data.map(suggestion => ({
                    id: suggestion.Id,
                    name: suggestion.Name,
                }))),
            });
        return engineDto.rows;
        //let owners = [{ id: 1, name: "Mat mal" }, { id: 2, name: "Mat mal1" }, { id: 3, name: "Mat mal2" }, { id: 4, name: "Mat mal3" }]
        //return owners;
    }
    GetCarById(carId) {
        return this.carsGetByID.find(x => x.id == carId);
    }
}
export default CarService
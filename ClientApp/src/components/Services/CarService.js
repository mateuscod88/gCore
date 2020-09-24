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
        this.url = 'http://localhost:5000/';
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
    async Add(car) {
        //this.carsGetByID.push(car);
        await this.RESTService.Post("api/car/add", car);
    }
    async Update(car,carId) {
        var result = await this.RESTService.Update("api/car/update", carId, car);
        await result;
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
    async GetAll() {

        var endpoint = 'api/car/getall';
        //var result = RESTService.Get(endpoint);
        //var carDto = result
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
        
        var carDto = await fetch(endpoint)
            .then(response => response.json())
            .then(data => this.repairs = {
                rows: (data.map(suggestion => ({
                    id: suggestion.id,
                    brand: suggestion.brand,
                    brandId: suggestion.brandId,
                    model: suggestion.model,
                    modelId: suggestion.modelId,
                    engine: suggestion.engine,
                    engineId: suggestion.engineId,
                    regNum: suggestion.regNum,
                    phone: suggestion.phone,
                    dueDateTechService: suggestion.dueDateTechService,
                    lastOilChange: suggestion.lastOilChange,
                    year: suggestion.year,
                    kilometerCounter: suggestion.kilometerCounter,
                    technicalService: suggestion.technicalService,
                    owner: suggestion.owner,
                    ownerId: suggestion.ownerId,

                }))),
            });
            //});
        //var cars = this.carsGetByID
        await carDto;
        this.cars = {
            rows: carDto.rows
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
    async GetBrands() {
        var endpoint = 'api/brand/getall';
        

        var brandDto = await fetch(endpoint)
            .then(response => response.json())
            .then(data => this.repairs = {
                rows: (data.map(suggestion => ({
                    id: suggestion.id,
                    brand: suggestion.name,
                }))),
            });
        
        await brandDto;
        return brandDto.rows;
        //return [{ id: 1, brand: "audi" }, { id: 2, brand: "VW" }];
    }
    async GetModelByBrandId(brandId) {
        var endpoint ='api/model/GetCarModelsByBrandId?brandId='+brandId;
        //var result = RESTService.Get(endpoint);
        var modelDto = await fetch(endpoint)
            .then(response => response.json())
            .then(data => this.repairs = {
                rows: (data.map(suggestion => ({
                    id: suggestion.id,
                    name: suggestion.name,
                }))),
            });
        
        await modelDto;
        

        //let cars = [{ id: 1, brand: "audi", models: [{ id: 1, model: "A3" }, { id: 2, model: "A4" }, { id: 3, model: "A5" }] }, { id: 2, brand: "VW", models: [{ id: 11, model: "Polo" }, { id: 21, model: "Golf" }, { id: 13, model: "Passat" }] }]
        //return cars.find(x => x.id == brandId).models;
        return modelDto.rows;

    }
    async GetEngines(brandId, modelId) {
        var endpoint = 'api/engine/GetEnginesByBrandIdModelId?brandId=' + brandId +'&modelId='+modelId;
        //var result = RESTService.Get(endpoint);
        
        var engineDto = await fetch(endpoint)
            .then(response => response.json())
            .then(data => this.repairs = {
                rows: (data.map(suggestion => ({
                    id: suggestion.id,
                    name: suggestion.name,
                }))),
            });
        

        await engineDto;
        return engineDto.rows;
        //let cars = [{ id: 1, brand: "audi", models: [{ id: 1, model: "A3", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.8TFSI" }] }, { id: 2, model: "A4", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.8TFSI" }] }, { id: 3, model: "A5", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.8TFSI" }] }] }, { id: 2, brand: "VW", models: [{ id: 11, model: "Polo", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.8TFSI" }] }, { id: 21, model: "Golf", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "2.0TFSI" }] }, { id: 13, model: "Passat", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.4TFSI" }] }] }]
        //let models = cars.find(x => x.id == brandId).models;
        //
        //let engines = models.find(y => y.id == modelId).engines
        //return cars.find(x => x.id == brandId).models.find(y => y.id == modelId).engines;
    }
    async GetOwners() {
        var endpoint = 'api/owner/GetAll';
        //var result = RESTService.Get(endpoint);
        var engineDto = await fetch(endpoint)
            .then(response => response.json())
            .then(data => this.repairs = {
                rows: (data.map(suggestion => ({
                    id: suggestion.Id,
                    name: suggestion.Name,
                }))),
            });
        await engineDto;
        return engineDto.rows;
        //let owners = [{ id: 1, name: "Mat mal" }, { id: 2, name: "Mat mal1" }, { id: 3, name: "Mat mal2" }, { id: 4, name: "Mat mal3" }]
        //return owners;
    }
    async GetCarById(carId) {
        var result = await this.RESTService.Get("/api/car/GetCarById?carId=" + carId);
        await result;
        return result;
    }
    async Delete(carId) {
        await this.RESTService.Delete("/api/car/delete?id=",carId);
    }
}
export default CarService
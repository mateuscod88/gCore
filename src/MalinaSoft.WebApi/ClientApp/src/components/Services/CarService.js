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
        this.url = process.env.REACT_APP_URL;
        this.carsGetByID = [

            {
                id: "1",
                brand: "VW",
                brandId: 2,
                model: "Passat",
                modelId: 13,
                engine: "1.9TDI",
                engineId: 1,
                regNum: "BIA8872",
                phone: "514515151",
                dueDateTechService: dateToday,
                lastOilChange: dateToday,
                year: 2000,
                kilometerCounter: 199999,
                technicalService: "2020-01-01",
                owner: "Mat mal",
                ownerId: 1,
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
        await this.RESTService.Post(this.url + "api/car/add", car);
    }
    async Update(car, carId) {
        var result = await this.RESTService.Update(this.url + "api/car/update", carId, car);
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
                { name: 'repairCount', title: 'Ilość Napraw' }
                //{ name: 'dueDateTechService', title: 'Do Przeglądu' },
                //{ name: 'lastOilChange', title: 'Wymiana Oleju' }

            ];
        return this.columns;
    }
    async GetAll() {

        var endpoint = this.url + 'api/car/getall';

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
                    repairCount: suggestion.repairCount,
                    recentRepairs: suggestion.recentRepairs


                }))),
            });

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
        var endpoint = this.url + 'api/brand/getall';


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
        var endpoint = this.url + 'api/model/GetCarModelsByBrandId?brandId=' + brandId;
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
        var endpoint = this.url + 'api/engine/GetEnginesByBrandIdModelId?brandId=' + brandId + '&modelId=' + modelId;
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

    }
    async GetOwners() {
        var endpoint = this.url + 'api/owner/GetAll';
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
    }
    async GetCarById(carId) {
        var result = await this.RESTService.Get(this.url + "api/car/GetCarById?carId=" + carId);
        await result;
        return result;
    }
    async Delete(carId) {
        await this.RESTService.Delete(this.url + "api/car/delete?id=", carId);
    }
}
export default CarService
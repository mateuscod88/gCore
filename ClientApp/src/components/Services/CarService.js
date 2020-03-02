
class CarService {
    constructor() {
        this.cars = null;
        this.repairs = null;
        this.columns = null;
        this.singleRow = null;
        this.isRowSelected = false;
        this.isRepairDetailsDialogBox = false;
        this.updateGrid = false;
        var dateToday = Date.now().toString();

        this.carsGetByID = [

            {
                id: "1",
                brand: "VW",
                model: "Passat",
                engine: "1.9TDI",
                regNum: "BIA8872",
                phone: "514515151",
                dueDateTechService: dateToday,
                lastOilChange: dateToday
            },
            {
                id: "2",
                brand: "VW",
                model: "Golf",
                engine: "1.9TDI",
                regNum: "BIA8872",
                phone: "514515151",
                dueDateTechService: dateToday,
                lastOilChange: dateToday
            },
        ];
    }
    Add(car) {
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
        var dateToday = Date.now().toString();
        var cars = this.carsGetByID

        this.cars = {
            rows: cars
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
        return [{ id: 1, brand: "audi" }, { id: 2, brand: "vw" }];
    }
    GetModelByBrandId(brandId) {

        let cars = [{ id: 1, brand: "audi", models: [{ id: 1, model: "A3" }, { id: 2, model: "A4" }, { id: 3, model: "A5" }] }, { id: 2, brand: "vw", models: [{ id: 11, model: "Polo" }, { id: 21, model: "Golf" }, { id: 13, model: "Passat" }] }]
        return cars.find(x => x.id == brandId).models;

    }
    GetEngines(brandId, modelId) {
        debugger;
        let cars = [{ id: 1, brand: "audi", models: [{ id: 1, model: "A3", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.8TFSI" }] }, { id: 2, model: "A4", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.8TFSI" }] }, { id: 3, model: "A5", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.8TFSI" }] }] }, { id: 2, brand: "vw", models: [{ id: 11, model: "Polo", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.8TFSI" }] }, { id: 21, model: "Golf", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "2.0TFSI" }] }, { id: 13, model: "Passat", engines: [{ id: 1, name: "1.9TDI" }, { id: 2, name: "1.4TFSI" }] }] }]
        let models = cars.find(x => x.id == brandId).models;
        debugger;
        let engines = models.find(y => y.id == modelId).engines
        return cars.find(x => x.id == brandId).models.find(y => y.id == modelId).engines;
    }
    GetOwners() {
        let owners = [{ id: 1, name: "Mat mal" }, { id: 2, name: "Mat mal1" }, { id: 3, name: "Mat mal2" }, { id: 4, name: "Mat mal3" }]
        return owners;
    }
    GetCarById(carId) {
        return this.carsGetByID.find(x => x.id == carId);
    }
}
export default CarService
class CarService {
    constructor() {
        this.cars = null;
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
        var cars = [

            {
                id: "1",
                brand: "VW",
                model: "Passat",
                engine:"1.9TDI",
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


        this.cars = {
            rows: cars
        }
        return this.cars;
    }
}
export default CarService

class RESTService {

    function Post(url, endpoint, Dto) {
    const postResult = fetch(endpoint, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(repairDTO)
    });
    return postResult;
    }
    function Update(endpoint,id,dto) {
        const putResult = await fetch(endpoint+'?id='+ id, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(dto)

    });
    await putResult;
    }
    function Get(endpoint) : Promise<any>{
        const result = await fetch(endpoint)
            .then(response => response.json());
            //.then(data => this.repairs = {
            //    rows: (data.map(suggestion => ({
            //        id: suggestion.Id,
            //        name: suggestion.Name,
            //        date: suggestion.Date,
            //        note: suggestion.Note,
            //        carBrand: suggestion.Brand,
            //        carModel: suggestion.Model,
            //        carRegNum: suggestion.PlateNumber,

            //    }))),
            //});
        return result;
    }
}
export default RESTService;
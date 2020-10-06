﻿
class RESTService {
    async Delete(endpoint, carId) {
        await fetch(endpoint+carId, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'Delete'
        });
        
    }
    async Post(endpoint, Dto) {
        
        var js = JSON.stringify(Dto);
        

    const postResult = await fetch(endpoint, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(Dto)
    });
    await postResult;
    return postResult;
    }
     async Update(endpoint,id,dto) {
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
    async Get(endpoint) {
        
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
        await result;
        return result;
    }
}
export default RESTService;
export function getNearByPersons(lng, lat) {
    return new Promise(function(resolve, reject) {
        fetch('/api/persons?lng=' + lng + '&lat=' + lat)
        .then(function(data){
                    resolve(data.json());
        })
        .catch(err =>  reject('can not get persons from api'))
    });
}
setTimeout(()=>{
    console.log('fondle');
}, 2000)

const names = ['Emmanuel', 'Mercy', 'Nduke', 'Royal'];
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = function(address, callback) {
   setTimeout(()=> {
    const data = {
        latitude: 0,
        longitude: 0
    }
    
    callback(data)
   }, 2000)
}

const data = geocode('Philadelphia', (data)=> {

    console.log(data);
})
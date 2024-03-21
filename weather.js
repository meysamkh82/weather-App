let click = document.querySelector('button');
let input = document.querySelector('input');
let city = document.querySelector('#city'); 
let discription = document.querySelector('#dis');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let apikey = 'e6ed2e869c22a04205103a3e32271177';
input.addEventListener('focus',(event) => event.target.select())
function converToCelsilus(value){
    return value - 273;
}
async function weather(){
    if(input.value === ''){
        alert('لطفا نام شهر خود را در فیلد وارد کنید');
    }else{
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apikey}`);
        let json = await result.json();
            if(result.ok){
                getinfo(json)
            }else{
                alert('شهر مورد نظر یافت نشد')
            }
        };
}
function getinfo(data){
    let cityname = data.name;
    let dis = data.weather[0].description;
    let wd = data.wind.speed;
    let tp = converToCelsilus(data.main.temp).toFixed(2);

    city.innerHTML = 'نام شهر : <b>'+cityname+'</b>';
    discription.innerHTML = "توضیحات : <b>"+dis+'</b>';
    temp.innerHTML = "دما : <b>"+tp+'</b>';
    wind.innerHTML = "سرعت باد : <b>"+wd+'</b>';
}
click.addEventListener('click',weather);

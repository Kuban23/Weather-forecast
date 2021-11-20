let inputEl = document.querySelector('#city_title');
document.addEventListener('keydown', (k) => { // input
   let cityes = document.querySelector('#city_title').value;

   if (k.key === 'Enter') {

      // $.ajax({
      //    url: `http://api.openweathermap.org/data/2.5/weather?q=${cityes}&appid=23156883d184497e6026111739757fc6`,
      //    dataType: 'json',
      //    success: function(data) {
      //       console.log(data);
      //    }
      // });
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityes}&appid=23156883d184497e6026111739757fc6`)
         .then(function (resp) { return resp.json() })
         .then(function (data) {
            console.log(data);
            document.querySelector('.package-name').textContent = data.name;
            document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) +
               '&deg';
            document.querySelector('.windSpeed').innerHTML = Math.round(data.wind.speed) + ' м/с';
            document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + ' %';
            document.querySelector('.description').textContent = data.weather[0]['description'];
            document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
         })
   } 

});

// fetch('http://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg&appid=23156883d184497e6026111739757fc6')
//    .then(function (resp) { return resp.json() })
//    .then(function (data) {
//       console.log(data);
//       document.querySelector('.package-name').textContent = data.name;
//       document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) +
//          '&deg';
//       document.querySelector('.description').textContent = data.weather[0]['description'];
//       document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
//    })

let btnEl = document.querySelector('.button-primary');

const f1 = () => {
   window.location.reload();
}
btnEl.addEventListener('click', f1);
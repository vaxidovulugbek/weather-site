
let elvalue = document.querySelector("#search")
let elform = document.querySelector("#form")
let elweathertext = document.querySelector("#weather")
let elCity = document.querySelector("#city")
let elDegree = document.querySelector("#degree")
let elInfoCity = document.querySelector("#infoCity")
let elInfoweTemp = document.querySelector("#infoweTemp")
let elInfoFeelTemp = document.querySelector("#infofeelTemp")
let elCountry = document.querySelector("#Country")
let elWeath = document.querySelector("#weath")
let elDescw = document.querySelector("#desc-w")
let elSunrice = document.querySelector("#sunrice")
let elSunset = document.querySelector("#sunset")
let elHumiduty = document.querySelector("#humiduty")
let elLatcoordinat = document.querySelector("#latcoordinat")
let elLoncoordinat = document.querySelector("#loncoordinat")
let elSpeedw = document.querySelector("#speedw")

let elweatherIcon = document.querySelector("#weatherIcon")
let elInfoImg = document.querySelector("#infoImg")
let elBody = document.querySelector("#body")
console.log(elweatherIcon.innerHTML);

fetch (`https://api.openweathermap.org/data/2.5/weather?q=toshkent&units=metric&appid=33dedde6287575d237be2e1c44271762`)
  .then((res) => res.json())
  .then((birnimr) => {
    console.log(birnimr);
    elCity.textContent = `${birnimr.name}`
    elDegree.textContent = `${birnimr.main.temp}`
    elInfoCity.textContent = `${birnimr.name}`
    elInfoweTemp.textContent = `${birnimr.main.temp}`
    elInfoFeelTemp.textContent = `${birnimr.main.feels_like}`
    elCountry.textContent = `${birnimr.sys.country}`
    elWeath.textContent = `${birnimr.weather[0].main}`
    elDescw.textContent = `${birnimr.weather[0].description}`
    elHumiduty.textContent = `${birnimr.main.humidity}`
    elLatcoordinat.textContent = `${birnimr.coord.lat}`
    elLoncoordinat.textContent = `${birnimr.coord.lon}`
    elSpeedw.textContent = `${birnimr.wind.speed}`

    if (birnimr.weather[0].main == "Rain") {
      console.log("yomgir");
      elBody.style.backgroundImage = "url('https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMGNsb3VkfGVufDB8fDB8fA%3D%3D&w=1000&q=80')";
      elInfoImg.style.backgroundImage = "url('https://cdn.worldweatheronline.com/images/weather/large/266_night_lg.png')";
      elweatherIcon.innerHTML = `<i class='bx bx-cloud-light-rain'></i>`
    }
    if (birnimr.weather[0].main == "Clouds") {
      console.log("bulut");
      elBody.style.backgroundImage = "url('https://www.itassetmanagement.net/wp-content/uploads/2020/10/nature-3294543_1920.jpg')";
      elInfoImg.style.backgroundImage = "url('https://cdn.worldweatheronline.com/images/weather/large/122_day_lg.png')";
      elweatherIcon.innerHTML = `<i class='bx bx-cloud' ></i>`
    }
    if (birnimr.weather[0].main == "Snow") {
      console.log("qor");
      elBody.style.backgroundImage = "url('https://www.highcountryweather.com/wp-content/uploads/2016/11/2016-november-03-how-snowy-1024x681.jpg')";
      elInfoImg.style.backgroundImage = "url('https://w7.pngwing.com/pngs/553/202/png-transparent-cloud-weather-snowflake-symbol-snowflake-weather-symbol-blue-cloud-heart-thumbnail.png')";
      elweatherIcon.innerHTML = `<i class='bx bx-cloud-snow'></i>`
    }
    if (birnimr.weather[0].main == "Haze" || birnimr.weather[0].main == "Mist") {
      console.log("tuman");
      elBody.style.backgroundImage = "url('https://st2.depositphotos.com/1005011/7977/i/450/depositphotos_79770400-stock-photo-image-from-nature-series.jpg')";
      elInfoImg.style.backgroundImage = "url('https://cdn.worldweatheronline.com/images/weather/large/116_day_lg.png')";
    }
    if (birnimr.weather[0].main == "Clear") {
      console.log("toza havo");
      elBody.style.backgroundImage = "url('https://media.istockphoto.com/photos/blue-sky-with-bright-sun-and-clouds-picture-id1007768414?k=20&m=1007768414&s=612x612&w=0&h=tPqlkOIe3O1hM2pnYbZAJdwIXIpdpDddABPNdVTFOrs=')";
      elInfoImg.style.backgroundImage = "url('https://cdn.worldweatheronline.com/images/weather/small/113_day_sm.png')";
      elweatherIcon.innerHTML = `<i class='bx bx-cloud' ></i>`
    }
    
  })


elform.addEventListener("submit",(e) => {
  e.preventDefault()
  let a = elvalue.value
  fetch (`https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&appid=33dedde6287575d237be2e1c44271762`)
  .then((res) => res.json())
  .then((birnimr) => {
    console.log(birnimr)
    console.log(birnimr.main);
    elCity.textContent = `${birnimr.name}`
    elDegree.textContent = `${birnimr.main.temp}`
    elInfoCity.textContent = `${birnimr.name}`
    elInfoweTemp.textContent = `${birnimr.main.temp}`
    elInfoFeelTemp.textContent = `${birnimr.main.feels_like}`
    elCountry.textContent = `${birnimr.sys.country}`
    elWeath.textContent = `${birnimr.weather[0].main}`
    elDescw.textContent = `${birnimr.weather[0].description}`
    elHumiduty.textContent = `${birnimr.main.humidity}`
    elLatcoordinat.textContent = `${birnimr.coord.lat}`
    elLoncoordinat.textContent = `${birnimr.coord.lon}`
    elSpeedw.textContent = `${birnimr.wind.speed}`

    if (birnimr.weather[0].main == "Rain") {
      elBody.style.backgroundImage = "url('https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMGNsb3VkfGVufDB8fDB8fA%3D%3D&w=1000&q=80')";
      elInfoImg.style.backgroundImage = "url('https://cdn.worldweatheronline.com/images/weather/large/266_night_lg.png')";
      elweatherIcon.innerHTML = `<i class='bx bx-cloud-light-rain'></i>`

    }
    if (birnimr.weather[0].main == "Clouds") {
      elBody.style.backgroundImage = "url('https://www.itassetmanagement.net/wp-content/uploads/2020/10/nature-3294543_1920.jpg')";
      elInfoImg.style.backgroundImage = "url('https://cdn.worldweatheronline.com/images/weather/large/122_day_lg.png')";
      elweatherIcon.innerHTML = `<i class='bx bx-cloud' ></i>`
    }
    if (birnimr.weather[0].main == "Haze" || birnimr.weather[0].main == "Mist") {
      elBody.style.backgroundImage = "url('https://st2.depositphotos.com/1005011/7977/i/450/depositphotos_79770400-stock-photo-image-from-nature-series.jpg')";
      elInfoImg.style.backgroundImage = "url('https://cdn.worldweatheronline.com/images/weather/large/116_day_lg.png')";
    }
    if (birnimr.weather[0].main == "Clear") {
      elBody.style.backgroundImage = "url('https://media.istockphoto.com/photos/blue-sky-with-bright-sun-and-clouds-picture-id1007768414?k=20&m=1007768414&s=612x612&w=0&h=tPqlkOIe3O1hM2pnYbZAJdwIXIpdpDddABPNdVTFOrs=')";
      elInfoImg.style.backgroundImage = "url('https://cdn.worldweatheronline.com/images/weather/small/113_day_sm.png')";
      elweatherIcon.innerHTML = `<i class='bx bx-cloud' ></i>`
    }
    if (birnimr.weather[0].main == "Snow") {
      console.log("qor");
      elBody.style.backgroundImage = "url('https://www.highcountryweather.com/wp-content/uploads/2016/11/2016-november-03-how-snowy-1024x681.jpg')";
      elInfoImg.style.backgroundImage = "url('https://w7.pngwing.com/pngs/553/202/png-transparent-cloud-weather-snowflake-symbol-snowflake-weather-symbol-blue-cloud-heart-thumbnail.png')";
      elweatherIcon.innerHTML = `<i class='bx bx-cloud-snow'></i>`
    }
  })
})  

















































// fetch (`https://api.openweathermap.org/data/2.5/weather?q=toshkent&units=metric&appid=33dedde6287575d237be2e1c44271762`)
//   .then((res) => res.json())
//   .then((birnimr) => {
//     console.log(birnimr);
//     elweathertext.textContent = `${birnimr.main.temp}`
//   })


// elform.addEventListener("submit",(e) => {
//   e.preventDefault()
//   let a = elvalue.value
//   console.log(a);
//   fetch (`https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&appid=33dedde6287575d237be2e1c44271762`)
//   .then((res) => res.json())
//   .then((birnimr) => {
//     console.log(birnimr.main);
//     elweathertext.textContent = `${birnimr.main.temp}`
//   })
// })  













// function myfunc (birnimr) {
//   console.log(.main.feels_like);
// }



// let xhr = new XMLHttpRequest()
// xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Namangan&units=metric&appid=33dedde6287575d237be2e1c44271762")
// xhr.onload = function() {
//   let date = JSON.parse(xhr.responseText)
//    renderHTML(date)
//   // console.log(date);
// }
// xhr.send()

// function renderHTML (el) {
//  console.log(el.main.feels_like);

//   // el.main.forEach(element => {
//   //   console.log(element);
//   // });
// }

// renderHTML()































// function renderHTML (el) {
// let htmlstring = ""
// el.data.forEach(element => {
//   let li = document.createElement("li")
//   li.classList = "item"
//   li.innerHTML = `<div id="whiteel" class="hoverel"></div>
//   <button id="removeBtnn" class="removeBtn">Remove User</button>
//   <div class="item__subinfo">
//   <img id="itemimg" class="item__img" src="${element.avatar}" alt="">
//   <div class="item__names">
//     <h2 id="itemtitle" class="item__title">${element.first_name}</h2>
//     <p id="itemsubtitle" class="item__subtitle">${element.last_name}</p>
//   </div>
//   </div>
//   <div class="item__infos"><p class="item__infocom">COMPANY</p> <span class="item__subinfocom">Google</span></div>
//   <div class="item__infos"><p class="item__infocom">EMAIL</p> <span class="item__subinfocom">${element.email}</span></div>
//   <div class="item__infos"><p class="item__infocom">PHONE</p> <span class="item__subinfocom">(2232)2342-13822</span></div>
//   <div class="item__infos"><p class="item__infocom">WEBSITE</p> <span class="item__subinfocom">Demarco info</span></div>`
// elList.appendChild(li)
// });
// let elRemoveBtn = document.querySelectorAll(".removeBtn")
// elRemoveBtn.forEach(item => {
//   console.log(item);
//   item.addEventListener("click", removeEL)
// })
// function removeEL(e) {
//   e.target.previousElementSibling.classList.add("hoverelw")
//   const myTimeout = setTimeout(removeel, 400);
//   function removeel () {
//     elList.removeChild(e.target.parentElement)
//   }
//   }
// }






























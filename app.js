// const section=document.querySelector("#demo");
// section.addEventListener('submit',function(e){
//   e.preventDefault();
//   console.log(section.elements[0].value);
// })

const column=document.querySelector('.cities');
const search=document.querySelector('#searchform');
const city=document.querySelector('#city');
const weatherdetails=document.querySelector('#details');
const tempdetails=document.querySelector('#tempdetails');
const image=document.querySelector('.image');
const Div=document.querySelector('.div');
const list=document.querySelector(".ajax-section .cities")

search.addEventListener('submit', async function(e){
  
  e.preventDefault();
  const searchTerm=search.elements[0].value;
  // console.log(searchTerm)
  
  
  const config={params: {q: searchTerm} }
  const res= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=e224f617ed9eb568178e930cf1cce70b`);
   //console.log(res.data.main.temp);
  const newli=document.createElement('li');
  const newCity=document.createTextNode(res.data.name);
  const newweather=document.createTextNode(`${res.data.weather[0].description.toUpperCase()}`);
  const newText=document.createTextNode(`${res.data.main.temp}`);
  
    //newli.appendChild(newCity);
    const weatherimg=document.createElement('img');
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        res.data.weather[0].icon
      }.svg`;
      weatherimg.src=icon;
    // city.appendChild(newCity);
    
    // weatherdetails.appendChild(newweather);
    // image.appendChild(weatherimg);
    // tempdetails.appendChild(newText);
    // const celcius=`${res.data.main.temp}<span>&#8451;</span>`;
    // tempdetails.innerHTML=celcius;
    


    search.elements[0].value='';
    const li = document.createElement("li");
    li.classList.add("city");
    const markup = `
        <h2 class="city-name" data-name="${res.data.name},${res.data.sys.country}">
          <span>${res.data.name}</span>
          <sup>${res.data.sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(res.data.main.temp)}<sup><span>&#8451;</span></sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
            res.data.weather[0].description
      }">
          <figcaption>${res.data.weather[0].description}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);


})

const makeImages=(shows)=>{
  
     const newDiv=document.createElement('div');
     newDiv.innerText=shows.weather[0].description;
    
    
  
  
}





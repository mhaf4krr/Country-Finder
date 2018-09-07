

// here takes a call back function as a argument

getData = (callback) => {
    let request = new XMLHttpRequest();

    request.open('GET','https://restcountries.eu/rest/v2/all',true);

    request.send();

    request.addEventListener('readystatechange',(event)=>{

        if (request.status != 200 || request.readyState != 4)
        {
            document.querySelector('#status').textContent = 'Travelling Countries , Gathering Info ... '
        }

        if(request.status === 200 && request.readyState === 4)
        {
               let data = JSON.parse(request.responseText);
                
                callback(undefined,data);
    
        }
    })

    
}


createUI = function(data) {
   let dropDown = document.createElement('select')
   dropDown.setAttribute('id','choose');

   data.forEach( (country) =>{
       let option = document.createElement('option')

       option.setAttribute('value',`${country.name}`)
       option.textContent = country.name;
       dropDown.appendChild(option);
   });

   document.querySelector('#drop-down').appendChild(dropDown)
}

//getting a particular country
loadLocation = (data) => {
    document.querySelector('#choose').addEventListener('change', (e) =>{
        let country = data.find((item)=>{
            return e.target.value === item.name
        })

        document.querySelector('#c-info').innerHTML = '';

        console.log(country);

        let bordersVal = country.borders.toString(); 

        let para = document.createElement('p');
        para.textContent = `${country.name} is located in ${country.region} , ${country.subregion} .${country.name} has a population of ${country.population} . It shares its borders with ${bordersVal} . Captial is ${country.capital} `;
        let image = document.createElement('img');
        image.setAttribute('src',`${country.flag}`)
        image.setAttribute('width','300');
        image.setAttribute('class','displayBlock')
        image.setAttribute('height','300');
       
        document.querySelector('#c-info').appendChild(para);
        document.querySelector('#c-info').appendChild(image);
    } )
    }

const covid = () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://indonesia-covid-19.mathdro.id/api/provinsi", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        showResponseMessage(result.message);
      } else {
        renderCovid(result.data);
      }
    })
    .catch(error => console.log('error', error));
  
  
    const renderCovid = (data) => {
      const covidProvince = document.querySelector("#covid");
      covidProvince.innerHTML = "";
  
      data.forEach(cov => {
        covidProvince.innerHTML += `
                <div class="col-sm-4">
                  <div class="shadow p-3 mb-5 bg-white rounded my-2 mx-2">
                    <h5 class="card-title">${cov.provinsi}</h5>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="sembuh">
                          <img src="https://img.icons8.com/color/24/000000/recovery.png"/>
                          <p>${cov.kasusSemb}</p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="meninggal">
                          <img src="https://img.icons8.com/cute-clipart/24/000000/dead-face.png"/>
                          <p>${cov.kasusMeni}</p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="positif">
                          <img src="https://img.icons8.com/doodle/24/000000/coronavirus.png"/>
                          <p>${cov.kasusPosi}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        `;
      })
    }
  
  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };
};


export default covid;


var heroes = [
  { name: 'juggernaut' },
  { name: 'nyx' },
  { name: 'io' }
];

var findHero = heroes.find(hero => hero.name === 'nyx')

console.log(findHero);//{ name: 'nyx' }

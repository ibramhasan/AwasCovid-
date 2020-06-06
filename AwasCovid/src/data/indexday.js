const covidDay = () => {
  const options = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://indonesia-covid-19.mathdro.id/api/harian", options)
    .then(response => response.json())
    .then(caseByDay => {
      if (caseByDay.error) {
        showResponse(caseByDay.message);
      } else {
        renderByDay(caseByDay.data);
      }
    })
    .catch(error => console.log('error', error));
  
    const renderByDay = (data) => {
      const covidByDay = document.querySelector("#caseDay");
      covidByDay.innerHTML = "";
  
      data.forEach(day => {
        covidByDay.innerHTML += `
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Hari ke</th>
                <th scope="col">Kasus Baru</th>
                <th scope="col">Kasus Sembuh</th>
                <th scope="col">Kasus Meninggal</th>
                <th scope="col">Kasus Dirawat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">${day.harike}</td>
                <td>${day.jumlahKasusBaruperHari}</td>
                <td>${day.jumlahKasusSembuhperHari}</td>
                <td>${day.jumlahKasusMeninggalperHari}</td>
                <td>${day.jumlahKasusDirawatperHari}</td>
                </tr>
              </tbody>
          </table>
        `
      })
    }
  
    const showResponse = (message = "Check your internet connection") => {
      alert(message);
    };
};

export default covidDay;
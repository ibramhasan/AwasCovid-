const covidAllGender = () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://indonesia-covid-19.mathdro.id/api/kasus/old", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        showError(result.message);
      } else {
        renderCovid(result.data);
      }
    })
    .catch(error => console.log('error', error));

    const data = (data) => {
      console.log(data)
    }

    const findGender = data.find(covid => covid.jk === 'jk');
    

    console.log(findGender);


    // const filterGender = [];
    // filterGender = renderCovid.filter((gen)=> {
    //   return gen.jk === 'P'
    // });

    // console.log(filterGender);
    
    // const showError = (message = 'error nih ye') => {
    //   alert(message);
    // }
}

export default covidAllGender;
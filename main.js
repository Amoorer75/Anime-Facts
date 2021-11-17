//https://anime-facts-rest-api.herokuapp.com/api/v1/:anime_nam
//https://anime-facts-rest-api.herokuapp.com/api/v1
const button = document.querySelector('button');
const resDiv = document.querySelector('#show-anime')
const search = document.querySelector('input')
//const ulList = document.querySelector("#results-list")
anime_name = search.value;

function getAnime() {

    fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/:${anime_name}`).then(response => {
        console.log(response)
        return response.json();
    }).then(animeData => {
         //console.log(animeData.data.)
         //const animeobj = animedata.data;
         //resDiv.innerHTML = `<img src=${animeobj}/:Bleach>`;
       showResults(animeData.data) 
    }).catch(error => {
        console.log(error);
    })
   
}

function showResults(results) {
    const list = document.querySelector("#results-list");
    for (let i = 0; i < results.length; i++) {
        const element = document.createElement("li");
        element.innerHTML = results[i].anime_img;
        list.appendChild(element);
    }
}
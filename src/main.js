import data from './data/ghibli/ghibli.js'
import { alphabeticOrder, alphabeticOrderLess, ratingScore, ratingScoreLess, realeaseDateOld, lastestRealeaseDate, getAverage, onSearch, compareIdMovie } from "./data.js";

const navMovies = document.querySelector("#filmsimage");
const movieList = document.querySelector("#movieList");
const headerSection = document.querySelector("#logo");
const bioSection = document.querySelector("#bio");
const founderSection = document.querySelector("#founders");
const optionsFilmsandWeb = document.querySelector("#optionsFilmsandWeb");
const sectionNav = document.querySelector("#navigator");
const btnDropdown = document.querySelector("#dropbtn");
const dropDown = document.querySelector("#myDropdown");
const filmsCopy = [...data.films];
const getInputSearchMovie = document.querySelector("#InputSearchMovie");
const resultAverage = document.querySelector("#resultAverage");
const divsAboutCartoons = document.querySelector("#cartoons-container");
const divsAboutVehicles = document.querySelector("#vehicle-container");
const personalizedInfoOnTopic = document.querySelector("#infoInModal");
const locationsOfEachMovie = document.querySelector("#location-container")
const secondView = document.querySelector("#secondView");
const moviesInfoOnly = document.querySelector("#moviesInfoOnly");
const thirdView = document.querySelector("#thirdView");
const totalFilms = document.querySelector(".counter");
const refresh = document.querySelector(".home");

//mostrar pelis en el orden de la data (second view)
navMovies.addEventListener("click", () => {
    //hide first view
    headerSection.style.display = "none";
    bioSection.style.display = "none";
    founderSection.style.display = "none";
    optionsFilmsandWeb.style.display = "none";
    sectionNav.style.display = "none";
    //show second view
    btnDropdown.style.display = "block";
    movieList.style.display = "flex";
    document.querySelector(".InputSearchMovie").style.display = "block";
    movieList.innerHTML = setMoviesTitle(data.films).join("");
    resultAverage.style.display = "block";
    resultAverage.innerHTML = `The average score according to films critics is ${getAverage(filmsCopy)} of 100`;
    refresh.style.display = "flex";
    totalFilms.style.display = "flex";
    totalFilms.innerHTML = `Total Movies: ${data.films.length}`;
    thirdSlide();
    //agregado para que comience desde el inicio de la sgte pantalla
    startFromBeginning();
})
//ocultar el dopdrown y mostrar
btnDropdown.addEventListener("click", () => {
  dropDown.classList.toggle("show");
});
//reemplazar con los filtros el orden de las pelis
dropDown.addEventListener("change",
  (e) => {
    if (e.target.value === "NameOrderMore") {
      movieList.innerHTML = setMoviesTitle(alphabeticOrder(filmsCopy)).join("")
    }
    if (e.target.value === "NameOrderLess") {
      movieList.innerHTML = setMoviesTitle(alphabeticOrderLess(filmsCopy)).join("")
    }
    if (e.target.value === "RtScoreOrderMore") {
      movieList.innerHTML = setMoviesTitle(ratingScore(filmsCopy)).join("")
    }
    if (e.target.value === "RtScoreOrderLess") { movieList.innerHTML = setMoviesTitle(ratingScoreLess(filmsCopy)).join("") }
    if (e.target.value === "RdOrderMore") { movieList.innerHTML = setMoviesTitle(lastestRealeaseDate(filmsCopy)).join("") }
    if (e.target.value === "RdOrderLess") { movieList.innerHTML = setMoviesTitle(realeaseDateOld(filmsCopy)).join("") }
    thirdSlide();
  });
//funcion para input search
getInputSearchMovie.addEventListener("keyup", (e) => {
  const arrayOnSearch = onSearch(filmsCopy, e.target.value);
  movieList.innerHTML = setMoviesTitle(arrayOnSearch).join(" ");
  thirdSlide();
});
//mostrar tercera pantalla
function thirdSlide() {
  const eachMovie = document.querySelectorAll(".movieItem");
  eachMovie.forEach(element => element.addEventListener("click", () => {
    //agregado para que comience desde el inicio de la sgte pantalla
    startFromBeginning();
    thirdView.style.display = "flex";
    const movieId = element.getAttribute("id");
    const movieInformation = compareIdMovie(filmsCopy, movieId);
    moviesInfoOnly.innerHTML = descriptionMovie(movieInformation);
    moviesInfoOnly.style.display = "flex";
    const getPeopleResult = getPeople(movieInformation)[0];
    secondView.style.display = "none";
    getPeopleResult.forEach(element =>
        divsAboutCartoons.innerHTML += element
      );
    const getLocationResult = getLocations(movieInformation)[0];
    getLocationResult.forEach(element =>
        locationsOfEachMovie.innerHTML += element
      );
    // locationsOfEachMovie.innerHTML += getLocations(filmsCopy);
    const getVehiclesResult = getVehicles(movieInformation)[0];
    for (let i = 0; i < getVehiclesResult.length; i++) {
          divsAboutVehicles.innerHTML += getVehiclesResult[i]
      }
    //atrapando todos los divs de topics como personajes, vehiculos
    const getElementTopic = document.querySelectorAll(".divTopic");
    //al hacer click en el div con la clase divTopic
    getElementTopic.forEach(element => element.addEventListener("click", () => {
        //dataId es el Id del div de los topics
        const dataId = element.dataset.id;
        /*1.mostrar la funcion filterPeople*/
        const getTopicPeople = filterPeople(filmsCopy, movieId, dataId);
        personalizedInfoOnTopic;
        getTopicPeople.forEach(e => {
        personalizedInfoOnTopic.innerHTML = e;
        personalizedInfoOnTopic.classList.remove("hidden");
      });
        /*2.mostrar la funcion locaciones*/
        const getTopicLocation = filterLocation(filmsCopy, movieId, dataId);
        getTopicLocation.forEach(e => {
        personalizedInfoOnTopic.innerHTML = e;
        personalizedInfoOnTopic.classList.remove("hidden");
        });
        /*3.mostrar la funcion filterVehicle*/
        const getTopicVehicle = filterVehicle(filmsCopy, movieId, dataId);
        getTopicVehicle.forEach(e => {
        personalizedInfoOnTopic.innerHTML = e;
        personalizedInfoOnTopic.classList.remove("hidden");
        });
      document.querySelector(".close").addEventListener("click", () => {
        personalizedInfoOnTopic.classList.add("hidden");
      });
    }))
  }))
}
//que comience desde arriba
function startFromBeginning() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
//refrescar pagina
refresh.addEventListener("click", () => location.reload());
//TRAER FUNCIONES CON MANEJO DEL DOM:
//extraer la imagen y el titulo dentro de un div
const setMoviesTitle = element => {
  return element.map(
    (el) => {
      const movieCover = `<div class="movieItem" id="${el.id}"><img src="${el.poster}" alt = "portada de pelicula"/>`;
      const moviesTitle = `<h2 class="FilmsNames">${el.title.toUpperCase()}</h2></div>`;
      return movieCover + moviesTitle
    }
  )
}
//obtener descripcion segun id de pelicula
const descriptionMovie = (arr) => {
  return `<section class="moviesInfo" id="moviesInfo">
    <div class="movieInformation" id="movieInformation">
    <div class="titlemovie">
    <h2 class="titles">${arr[0].title}</h2></div> 
    </div>

    <div class="movieimage">
    <img class="poster"src="${arr[0].poster}" alt="Ghibli's movie information"/>
    </div>

    <div class="moviedescription">
    <h1 class="sipnosistitle">Sipnosis</h1>
    <p class="descriptionmovie"><br/>${arr[0].description}</p>
    </div>

    <div class="moviedirector">
    <p><br><strong>Director:${arr[0].director}</strong></p>
    </div>

    <div class="movieproducer">
    <p><strong>Producer:${arr[0].producer}</strong></p>
    </div>

  </div>
  </section>`
}

//extraer el nombre e imagen de los personajes (todos, sin excepcion)
const getPeople = arr => {
  return arr.map(e => e.people.map(el => {
    const peopleInfo = `<div class="divTopic" data-id="${el.id}">
    <img class="character" src="${el.img}" alt="character"/>
    <h3 class ="namecharacter">${el.name.charAt(0).toUpperCase() + el.name.slice(1)}</h3>
    </div>`;
    return peopleInfo;
  }));
}
//extraer el nombre e imagen de las locaciones(todos, sin excepcion)
const getLocations = arr => {
  return arr.map(e => e.locations.map(el => {
    const locartionImg = `<div class="divTopic" data-id="${el.id}"><img class="character" src="${el.img}" alt="location"/>`;
    const locationName = `<h3 class="nameLocation">${el.name.charAt(0).toUpperCase() + el.name.slice(1)}</h3></div>`;
    return locartionImg + locationName
  }))
}
//extraer el nombre e imagen de los vehiculos(todos, sin excepcion)
const getVehicles = arr => {
  return arr.map(e => e.vehicles.map(el => {
    const vehicleImg = `<div class="divTopic" data-id="${el.id}"><img class="character" src="${el.img}" alt="vehicle"/>`;
    const vehicleName = `<h3 class="namevehicle">${el.name.charAt(0).toUpperCase() + el.name.slice(1)}</h3></div>`;
    return vehicleImg + vehicleName
  }));
}
//obtener la info de un personaje por su id
const filterPeople = (filmsCopy, idMovie, idTopic) => {
  return filmsCopy.filter(element => element.id === idMovie).map(elem => elem.people)[0].filter(el => el.id === idTopic).map(el => {
    return `<div class="myModal"><span class="close">&times;</span><h3>Character Name:
      ${el.name}</h3>
      <img src="${el.img}" />
      <p>GENDER: ${el.gender}</p>
      <p>AGE: ${el.age}</p>
      <p>EYE COLOR: ${el.eye_color}</p>
      <p>HAIR COLOR: ${el.hair_color}</p>
      <p>SPECIE: ${el.specie}</p></div>`
  })
}

//obtener la info del vehiculo por su id
const filterVehicle = (filmsCopy, idMovie, idTopic) => {
  return filmsCopy.filter(element => element.id === idMovie).map(elem => elem.vehicles)[0].filter(el => el.id === idTopic).map(el => {
    return `<div class="myModal"><span class="close">&times;</span><h3>VEHICLE NAME: ${el.name}</h3>
      <img src="${el.img}" />
      <p>DESCRIPTION: ${el.description}</p>
      <p>VEHICLE CLASS: ${el.vehicle_class}</p>
      <p>VEHICLE LENGTH: ${el.length}</p>
      <p>PILOT: ${el.pilot.name}</p></div>`
  })
}

//obtener la info de la locacion por su id
const filterLocation = (filmsCopy, idMovie, idTopic) => {
  return filmsCopy.filter(element => element.id === idMovie).map(elem => elem.locations)[0].filter(el => el.id === idTopic).map(loc => {
    return `<div class="myModal"><span class="close">&times;</span><h3>LOCATION NAME: ${loc.name}</h3>
    <img src="${loc.img}" />
    <p>CLIMATE: ${loc.climate}</p>
    <p>RESIDENTS: ${loc.residents[0]}</p>
    <p>SURFACE WATER: ${loc.surface_water}</p>
    <p>TERRAIN: ${loc.terrain}</p>`
})
}
import data from './data/ghibli/ghibli.js';
//extraer la imagen y el titulo dentro de un div
export const setMoviesTitle = element => {
  return element.map(
    (el) => {
      const movieCover = `<div class="movieItem" id="${el.id}"><img src="${el.poster}" alt = "portada de pelicula"/>`;
      const moviesTitle = `<h2 class="FilmsNames">${el.title.toUpperCase()}</h2></div>`;
      return movieCover + moviesTitle
    }
  )
}

//ordena pelis alfabeticamente de A a Z
export const alphabeticOrder = (filmsCopy) => filmsCopy.sort((a, b) => {
  return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
});
//ordena pelis alfabeticamente de Z a A
export const alphabeticOrderLess = (filmsCopy) => filmsCopy.sort((a, b) => {
  if (a.title < b.title) { return 1 }
  if (a.title > b.title) { return -1 }
  return 0;
});
//ordena pelis por rating score (menor a mayor)
export const ratingScoreLess = (filmsCopy) =>
  filmsCopy.sort((a, b) => {
    if (Number(a.rt_score) > Number(b.rt_score)) { return 1 }
    if (Number(a.rt_score) < Number(b.rt_score)) { return -1 }
    return 0;
  });
//ordena pelis por rating score (mayor a menor)
export const ratingScore = (filmsCopy) => filmsCopy.sort((a, b) => {
  if (parseInt(a.rt_score) < parseInt(b.rt_score)) { return 1 }
  if (parseInt(a.rt_score) > parseInt(b.rt_score)) { return -1 }
  return 0;
});
//ordena pelis por release date (menor a mayor)
export const realeaseDateOld = filmsCopy => {
  return filmsCopy.sort((a, b) => {
    return parseInt(a.release_date) - parseInt(b.release_date)
  });
}
//ordena pelis por release date (mayor a menor)
export const lastestRealeaseDate = filmsCopy => filmsCopy.sort((a, b) => {
  return parseInt(b.release_date) - parseInt(a.release_date)
})
// Funcion para sacar promedio del rt score
export const getAverage = (arr) => {
  const sum = arr.reduce((acumulator, value) => {
    return acumulator + parseInt(value.rt_score)
  }, 0)
  return sum / arr.length
}
// Funcion para obtener  todos los personajes y sus nombres 
export const charactersName = data.films.map(film => {
  return film.people.map(character => {
    return character.name
  })
});
//Funcion inputSearch
export const onSearch = (arr, search) => {
  return arr.filter(el => {
    const textLowerCase = el.title.toLowerCase()
    const searchLowerCase = search.toLowerCase()
    if (textLowerCase.includes(searchLowerCase)) {
      return true
    }
  })
}
//funcion para obtener descripcion general de personajes
// Funcion para obtener las locaciones y sus descripciones
export const locationName = data.films.map(element => {
  return element.locations.map(e => {
    return e.name
  })
});
//extraer informacion que corresponda al id de la pelicula
export const compareIdMovie = (arr, idvalue) => {
  return arr.filter(element => {
    return element.id === idvalue
  })
};
//obtener descripcion segun id de pelicula
export const descriptionMovie = (arr) => {
  const titleOfEachMovie = `<div><h2>${arr[0].title}</h2>`;
  const posterOfEachMovie = `<img src="${arr[0].poster}"/>`;
  const descriptionOfEachMovie = `<p>Sinopsis:<br/>${arr[0].description}</p>`;
  const directorOfEachMovie = `<p><strong>Director: ${arr[0].director}</strong></p>`;
  const producerOfEachMovie = `<p><strong>Producer: ${arr[0].producer}</strong></p>`;
  const releaseOfEachMovie = `<p>Release date: ${arr[0].release_date}</p></div>`;
  return titleOfEachMovie + posterOfEachMovie + descriptionOfEachMovie + directorOfEachMovie + producerOfEachMovie + releaseOfEachMovie
}

//extraer el nombre e imagen de los personajes (todos, sin excepcion)
export const getPeople = arr => {
  return arr.map(e => e.people.map(el => {
    const peopleInfo = `<div data-id=${el.id}><img src="${el.img}" /><h3>${el.name.charAt(0).toUpperCase() + el.name.slice(1)}</h3></div>`;
    return peopleInfo;
  }));
}


//extraer el nombre e imagen de los vehiculos
export const getVehicles = arr => {
  return arr.map(e => e.vehicles.map(el => {
    const vehicleImg = `<div id=${el.id}><img src="${el.img}" />`;
    const vehicleName = `<h3>${el.name.charAt(0).toUpperCase() + el.name.slice(1)}</h3></div>`;
    return vehicleImg + vehicleName
  }));
}

//filtrar personajes por peliculas(y mostrar sus descripciones)
export const filterPeopleByMovies = (filmsCopy, movieName) => {
  filmsCopy.filter(e =>
    e.title === movieName).map(el => el.people.map(elem => {
      const cartoonName = `<div><h3>${elem.name}</h3>`;
      const cartoonImage = `<img src="${elem.img}" />`;
      const cartoonGender = `<p>Gender: ${elem.gender}</p>`;
      const cartoonAge = `<p>Age: ${elem.age}</p>`;
      const cartoonEyeColor = `<p>Eye color: ${elem.eye_color}</p>`;
      const cartoonHairColor = `<p>Hair color: ${elem.hair_color}</p>`;
      const cartoonSpecie = `<p>Specie:${elem.specie}</p></div>`;
      return cartoonName + cartoonImage + cartoonGender + cartoonAge + cartoonEyeColor + cartoonHairColor + cartoonSpecie + cartoonHairColor
    }
    ))
}
//locaciones y descripciones (Alisson)
//vehiculos y susdescripciones (yo)
export const getVehiclesAndDescripcions = (filmsCopy, movieName) => {
  filmsCopy.filter(e =>
    e.title === movieName).map(el => el.vehicles.map(elem => {
      const vehiclesName = `<div><h3>${elem.name}</h3>`;
      const vehiclesImage = `<img src="${elem.img}" />`;
      const vehiclesDescription = `<p>Description: ${elem.description}</p>`;
      const vehiclesType = `<p>Type: ${elem.vehicle_class}</p>`;
      const vehiclesLength = `<p>Length: ${elem.length}</p>`;
      const vehiclesPilot = `<p>Pilot: ${elem.pilot.name}</p></div>`;
      return vehiclesName + vehiclesImage + vehiclesDescription + vehiclesType + vehiclesLength + vehiclesPilot
    }
    ))
}
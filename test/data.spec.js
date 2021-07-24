import { alphabeticOrder, alphabeticOrderLess, ratingScoreLess, ratingScore, realeaseDateOld, lastestRealeaseDate, getAverage, onSearch, compareIdMovie} from '../src/data.js';


  const data = [{
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "rt_score": "95",
    "release_date": "1986",
  },
  {
    "id": "90b72513-afd4-4570-84de-a56c312fdf81",
    "title": "The Cat Returns",
    "rt_score": "89",
    "release_date": "2002",
  },
  {
    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
    "title": "Grave of the Fireflies",
    "rt_score": "97",
    "release_date": "1988",
  }];

describe('Ordena de forma ascendente', () => {
  it('alphabeticOrder is a function', () => {
    expect(typeof alphabeticOrder).toBe('function');
  });
  it('alphabeticOrder Ordena desde A a Z', () => {
    const sortedByTitleAscendant = [{
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "rt_score": "95",
        "release_date": "1986",
      },
      {
        "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
        "title": "Grave of the Fireflies",
        "rt_score": "97",
        "release_date": "1988",
      },
      {
        "id": "90b72513-afd4-4570-84de-a56c312fdf81",
        "title": "The Cat Returns",
        "rt_score": "89",
        "release_date": "2002",
      },
      ];
      expect(alphabeticOrder(data)).toEqual(sortedByTitleAscendant);
  });
});
describe('Ordena de forma descendente', ()=> {
  it('alphabeticOrderLess is a function', () => {
    expect(typeof alphabeticOrderLess).toBe('function');
  });
    it('alphabeticOrderLess Ordena desde la Z a la A', () => {
    const sortedByTitledescendant = [{
      "id": "90b72513-afd4-4570-84de-a56c312fdf81",
      "title": "The Cat Returns",
      "rt_score": "89",
      "release_date": "2002",
    },
    {
      "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
      "title": "Grave of the Fireflies",
      "rt_score": "97",
      "release_date": "1988",
    },
    {
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "rt_score": "95",
      "release_date": "1986",
    },
    ];
    expect(alphabeticOrderLess(data)).toEqual(sortedByTitledescendant);
  });
});
describe('Ordena desde el menor rating', () => {
  it('ratingScoreLess is a function', () => {
    expect(typeof ratingScoreLess).toBe('function');
  });
  it('ratingScoreLess Ordena desde menor a mayor rating', () => {
    const sortedByRatingAscendant = [
      {
        "id": "90b72513-afd4-4570-84de-a56c312fdf81",
        "title": "The Cat Returns",
        "rt_score": "89",
        "release_date": "2002",
      },
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "rt_score": "95",
        "release_date": "1986",
      },
      {
        "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
        "title": "Grave of the Fireflies",
        "rt_score": "97",
        "release_date": "1988",
      },
    ];
    expect(ratingScoreLess(data)).toEqual(sortedByRatingAscendant);
  });
});
describe('Ordena desde el mayor rating', () => {
  it('ratingScore is a function', () => {
    expect(typeof ratingScore).toBe('function');
  });
  it('ratingScore Ordena desde mayor a menor rating', () => {
    const sortedByRatingDescendant = [
      {
        "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
        "title": "Grave of the Fireflies",
        "rt_score": "97",
        "release_date": "1988",
      },
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "rt_score": "95",
        "release_date": "1986",
      },
      {
        "id": "90b72513-afd4-4570-84de-a56c312fdf81",
        "title": "The Cat Returns",
        "rt_score": "89",
        "release_date": "2002",
      }
    ];
    expect(ratingScore(data)).toEqual(sortedByRatingDescendant);
  });
});
describe('Ordena desde el más antiguo', () => {
  it('realeaseDateOld is a function', () => {
    expect(typeof realeaseDateOld).toBe('function');
  });
  it('realeaseDateOld Ordena desde menor a mayor release date', () => {
    const sortedByReleaseAscendant = [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "rt_score": "95",
        "release_date": "1986",
      },
      {
        "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
        "title": "Grave of the Fireflies",
        "rt_score": "97",
        "release_date": "1988",
      },
      {
        "id": "90b72513-afd4-4570-84de-a56c312fdf81",
        "title": "The Cat Returns",
        "rt_score": "89",
        "release_date": "2002",
      }
    ];
    expect(realeaseDateOld(data)).toEqual(sortedByReleaseAscendant);
  });
});
describe('Ordena desde el más actual', () => {
  it('lastestRealeaseDate is a function', () => {
      expect(typeof lastestRealeaseDate).toBe('function');
  });
  it('lastestRealeaseDate Ordena desde mayor a menor release date', () => {
    const sortedByReleaseDescendant = [
      {
        "id": "90b72513-afd4-4570-84de-a56c312fdf81",
        "title": "The Cat Returns",
        "rt_score": "89",
        "release_date": "2002",
      },
      {
        "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
        "title": "Grave of the Fireflies",
        "rt_score": "97",
        "release_date": "1988",
      },
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "rt_score": "95",
        "release_date": "1986",
      },
    ];
    expect(lastestRealeaseDate(data)).toEqual(sortedByReleaseDescendant);
  });
});
describe('extraer promedio de todas las pelis', () => {
  it('getAverage is a function', () => {
    expect(typeof getAverage).toBe('function');
  });
  it('extraer promedio de peliculas', () => {
    expect(getAverage(data)).toBeCloseTo(93.66666);
  });
});
describe('coincidencia del buscador', () => {
  it('onSearch is a function', () => {
    expect(typeof onSearch).toBe('function');
  })
  it('filtro de busqueda verdadero', () => {
    expect(onSearch(data, "castle")).toBeTruthy();
  })
  it('filtro de busqueda no verdadero', () => {
    expect(onSearch(data, "Fireflies")).not.toBeFalsy();
  });
});
describe('extraer id de pelicula', () => {
  it('compareIdMovie is a function', () => {
    expect(typeof compareIdMovie).toBe('function');
  });
  it('la pelicula debe devolver id', () => {
    const singleFilm = [
      {
        "id": "90b72513-afd4-4570-84de-a56c312fdf81",
        "title": "The Cat Returns",
        "rt_score": "89",
        "release_date": "2002",
      }
    ];
    expect(compareIdMovie(data, "90b72513-afd4-4570-84de-a56c312fdf81")).toEqual(singleFilm);
  });
});
import { alphabeticOrder, alphabeticOrderLess, ratingScoreLess, ratingScore, realeaseDateOld, lastestRealeaseDate, getAverage, onSearch, compareIdMovie} from '../src/data.js';


describe('Ordena de forma ascendente', () => {
  it('alphabeticOrder is a function', () => {
    expect(typeof alphabeticOrder).toBe('function');
  });
  it('alphabeticOrder Ordena desde A a Z', () => {
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
  it('si es el mismo, lo alterna', () => {
    const data = [{
      "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
      "title": "The Secret World of Arrietty",
      "rt_score": "95",
      "release_date": "2010",
    },
    {
      "id": "67405111-37a5-438f-81cc-4666af60c800",
      "title": "The Wind Rises",
      "rt_score": "89",
      "release_date": "2013",
    },
    {
      "id": "67405111-37a5-438f-81cc-4666af60c800",
      "title": "The Wind Rises",
      "rt_score": "89",
      "release_date": "2013",
      }];
    const result = [
    {
      "id": "67405111-37a5-438f-81cc-4666af60c800",
      "title": "The Wind Rises",
      "rt_score": "89",
      "release_date": "2013",
    },
    {
      "id": "67405111-37a5-438f-81cc-4666af60c800",
      "title": "The Wind Rises",
      "rt_score": "89",
      "release_date": "2013",
    },
    {
      "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
      "title": "The Secret World of Arrietty",
      "rt_score": "95",
      "release_date": "2010",
    }];
    expect(alphabeticOrderLess(data)).toEqual(result);
  });
});
describe('Ordena desde el menor rating', () => {
  it('ratingScoreLess is a function', () => {
    expect(typeof ratingScoreLess).toBe('function');
  });
  it('ratingScoreLess Ordena desde menor a mayor rating', () => {
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
  it('si es el mismo rating, lo alterna', () => {
    const data = [{
      "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
      "title": "When Marnie Was There",
      "rt_score": "92",
    },
    {
      "id": "758bf02e-3122-46e0-884e-67cf83df1786",
      "title": "Ponyo on the Cliff by the Sea",
      "rt_score": "92",
    }];
    const result = [
    {
      "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
      "title": "When Marnie Was There",
      "rt_score": "92",
    },
    {
      "id": "758bf02e-3122-46e0-884e-67cf83df1786",
      "title": "Ponyo on the Cliff by the Sea",
      "rt_score": "92",
    }];
    expect(alphabeticOrderLess(data)).toEqual(result);
  });
});
describe('Ordena desde el mayor rating', () => {
  it('ratingScore is a function', () => {
    expect(typeof ratingScore).toBe('function');
  });
  it('ratingScore Ordena desde mayor a menor rating', () => {
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
  it('si tiene el mismo rating debe alternar', () => {
    const data = [{
      "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
      "title": "Only Yesterday",
      "rt_score": "100"
    },
    {
      "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
      "title": "Grave of the Fireflies",
      "rt_score": "97"
    },
    {
      "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
      "title": "The Tale of the Princess Kaguya",
      "rt_score": "100"
      }];
    const result = [{
      "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
      "title": "Only Yesterday",
      "rt_score": "100"
    },
    {
      "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
      "title": "The Tale of the Princess Kaguya",
      "rt_score": "100"
    },
    {
      "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
      "title": "Grave of the Fireflies",
      "rt_score": "97"
    }];
    expect(ratingScore(data)).toEqual(result);
  });
});
describe('Ordena desde el más antiguo', () => {
  it('realeaseDateOld is a function', () => {
    expect(typeof realeaseDateOld).toBe('function');
  });
  it('realeaseDateOld Ordena desde menor a mayor release date', () => {
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
    expect(getAverage(data)).toBeCloseTo(93.66666);
  });
});
describe('coincidencia del buscador', () => {
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
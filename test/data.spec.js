import {alphabeticOrder} from '../src/data.js';


// describe('show films', () => {
//   it('is a function', () => {
//     expect(typeof setMoviesTitle).toBe('function');
//   });

//   it('returns posters about films', () => {
//     const movieCover = [{
//       id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
//       title: "Castle in the Sky",
//       poster: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
//     },
//       {

//       }

//     ]
//   });
// });


describe('sort', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrder).toBe('function');
  });

  it('order alphabetically from highest to lowest', () => {
    const a = {
      id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      title: "Castle in the Sky",
      poster: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    }
    const b = {
      id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      title: "My Neighbor Totoro",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg"
    }
  });
});
//1A.
const mcuShows=["loki","Moon Knight"];
//1B.
const starWarsShows=["The Mandalorian","The Book of Boba Fett"];
//1C.
const  disneyPlusShows=[...mcuShows,
    ...starWarsShows, "The Beatles:Get Back" ];

//1D.
    console.log(disneyPlusShows);
//2A.
const netflixMovies={
    action:"Extraction",
    crime:"Irishman"
};
//2B.
const amazonPrimeMovies=
   { action:"The Tomorrow War",
   dramaL:"One Night In Miami"};

//2C.

const streamingMovies={...netflixMovies,...amazonPrimeMovies,
    musical:"Hamilton"

} ;
//2D.
console.log(streamingMovies);
//3A.
const disneyJunior=["Mickey Mouse Clubhouse",
"Spidey and His Amazing Friends"];
console.log(disneyJunior);
//3B.
const [mickey, spidey]= disneyJunior;
//3C.
console.log(disneyJunior);
//OR
console.log(mickey);
console.log(spidey);
//or
console.log(mickey,spidey);
//4A.
const avengers={warMachine:"James Phodes",
theHulk:"Bruce Banner" };



//4B.
const {warMachine, theHulk}=avengers;
//4C.
console.log(warMachine,theHulk);
//4D.
const moreAvengers={
    blackWidow:"Natasha Romanoff",
    hawkeye:"Clint Barton",
    ironMan:"Tony Stark"
};
//4E.
const {blackWidow:nat,...others}=moreAvengers;
//4F.
console.log(nat,others);
//BONUS
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };
  //5A
  const first1=bonus.first;
  const second2=bonus.second;
  const third2=bonus.third;
  const all=[...first1,...second2,...third2]
  console.log(all);
  
//5B.
  
  const [one, two, three, four, five,six, seven, eight, nine]=all
  console.log(seven);




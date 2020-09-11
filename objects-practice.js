// Movie Database
const lotr = {
  title: "The Lord of the Rings: The Fellowship of the Ring",
  director: "Peter Jackson",
  actors: ["Elijah Wood", "Sean Astin", "Viggo Mortensen", "Ian McKellen", "Orlando Bloom", "John Rhys-Davies", "Sean Bean", "Ian Holm", "Hugo Weaving", "Cate Blanchett", "Andy Serkis"],
  releaseYear: 2001,
  duration: 178
}

// 1. Print title
console.log(`Movie Title: ${lotr.title}`);

// 2. Print director's name
console.log(`Directed by: ${lotr.director}`);

// 3. Print release year
console.log(`Released: ${lotr.releaseYear}`);

// 4. Extended edition edit
lotr.duration += 30 // this is the actual amount of extra footage in the extended edition, not 25

// Hammond Mines
// Part 1
const snakewaterMontana = {
  paleontologist: 'Dr. Alan Grant',
  depth: '10 meters',
  specimen: 'Velociraptor',
};

// 1. guestOfHonor
let guestOfHonor = snakewaterMontana.paleontologist;

// 2. cleverGirl
let cleverGirl = snakewaterMontana.specimen;

// Part 2
const nicaragua = {
  depth: '200 meters',
  annualBudget: 1500000,
  specimens: [
    'Tyrannosaurus Rex',
    'Stegosaurous',
    'Triceratops',
    'Velociraptor',
  ],
};

// 1. nicaraguanSpecimens
let nicaraguanSpecimens = nicaragua.specimens;

// 2. favoriteSpecimen
let favoriteSpecimen = nicaragua.specimens[3]; // Velociraptors are the best

// 3. add to budget
nicaragua.annualBudget += 250000;

// Part 3
const hammondsMines = {
  buenosAires: {
    depth: '400 meters',
    annualBudget: 1000000,
    specimens: ['Dilophosaurus', 'Brachiosaurus'],
  },
  mexico: {
    depth: '350 meters',
    annualBudget: 900000,
    specimens: ['Gallimimus', 'Parasaurolophus'],
  },
};

// 1. Mexico depth
let mexicoDepth = hammondsMines.mexico.depth;

// 2. Buenos Aires budget
let buenosAiresBudget = hammondsMines.buenosAires.annualBudget;

// 3. Buenos Aires specimens
let buenosAiresSpecimens = hammondsMines.buenosAires.specimens;
console.log(`The Buenos Aires specimens are ${buenosAiresSpecimens}`);

// 4. Add Nicaragua to Hammonds Mines
hammondsMines.nicaragua = nicaragua;

// 5. Create variables for budgets
// buenosAiresBudget already exists
let mexicoBudget = hammondsMines.mexico.annualBudget;
let nicaraguaBudget = hammondsMines.nicaragua.annualBudget;

// 6. Total budget
let totalBudget = buenosAiresBudget + mexicoBudget + nicaraguaBudget;

// 7. Access Parasaurolophus
let para = hammondsMines.mexico.specimens[1];
console.log(para);

// 8. Check for Mexico mine
let hasMexicoMine = (hammondsMines.mexico) ? true : false;

// 9. Log each depth
for (const x in hammondsMines) {
  console.log(hammondsMines[x].depth);
}

// 10. totalAnnualBudget
let totalAnnualBudget = 0;
let y;
for (y in hammondsMines) {
  totalAnnualBudget += hammondsMines[y].annualBudget;
}
console.log(`The annual budget is $${totalAnnualBudget}`);

// 11. allSpecimens
let allSpecimens = [];
let z;
for (z in hammondsMines) {
  let w = hammondsMines[z].specimens;
  for (const element of w)
    allSpecimens.push(element);
}
console.log(allSpecimens);
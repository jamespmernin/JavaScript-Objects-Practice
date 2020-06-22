# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

# JavaScript Objects Practice

Create a new file called `js-objects-practice.js`. You'll do all your work in this file. Remember, you can test your work by typing `node js-objects-practice.js` in the terminal.

## Movie Database

Create your own JavaScript object representing your favorite movie.

> Example:

> ```javascript
> const blade = {
>   title: 'Blade',
>   director: 'Stephen Norrington',
>   actors: ['Wesley Snipes', 'Stephen Dorff', 'Kris Kristofferson'],
>   releaseYear: 1998,
>   duration: 120,
> };
> ```

1.  After you have created your movie object, print the title of your movie using `dot notation`
2.  Print the director's name
3.  Print the release year
4.  Maybe your favorite movie came with an extended director's cut - write a statement that increases your movie object's duration by 25 minutes

## Hammonds Mines

Today we visit Jurassic Park :dragon: to explore the wild world of objects! You have been brought on to manage the dig sites for Dr. John Hammond. No expense has been spared, so let's get to work!

Copy and paste each of the JavaScript snippets into your objects-practice.js file.

### Part 1

```javascript
const snakewaterMontana = {
  paleontologist: 'Dr. Alan Grant',
  depth: '10 meters',
  specimen: 'Velociraptor',
};
```

1.  Create a variable called `guestOfHonor` and assign its value to the name of the paleontologist at Snakewater, Montana.

2.  Access the value of the specimen found in Snakewater, Montana, and store it in a variable called `cleverGirl`.

### Part 2

```javascript
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
```

1.  Store the array of specimens of this site into a variable called `nicaraguanSpecimens`.

2.  Make a variable called `favoriteSpecimen` and assign its value to your favorite dinosaur ( do this by referencing the `nicaragua` object, not the new `nicaraguanSpecimens` variable)

3.  Add 250000 to the annual budget of this site.

### Part 3

```javascript
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
```

1.  Access the depth of John Hammond's mine in Mexico, store the depth of the Mexican mine into an appropriately named variable.

2.  Access the annual budget for Hammond's mine in Buenos Aires, store the annual budget for Hammond's mine in Buenos Aires.

3.  Access and console log the dinosaur DNA specimens found in Buenos Aires.

4.  Add our previous nicaragua object as a third property on `hammondsMines`.

5.  Create three variables to store the annual budgets for each mine into them.

6.  Create a new reasonably named variable to track the total annual cost of operation for the mines by adding the previously stored budgets.

7.  Access and console log the "Parasaurolophus" specimen.

8.  Check if hammondsMines contains a mine in Mexico (check if the object has the property of mexico)

9.  Use a `for in` loop to iterate over each mine in hammondsMines and console.log out the depth of each mine

10. Make a variable called totalAnnualBudget. Use a `for in' loop to add together the budgets of all the mines and then log out totalAnnualBudget.

BONUS:

11. Make a variable called allSpecimens. Find a way to combine all of the `specimen` arrays for the mines to have a master list of specimens. Log out this array.

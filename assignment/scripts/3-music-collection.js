console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line

let myCollection = [];
function addToCollection(collection, title, artist, yearPublished) {
  collection.push({ title, artist, yearPublished });
  return collection.at(-1);
}
console.log(addToCollection(myCollection, "happy birthday", "everyone", 1900));
console.log(addToCollection(myCollection, "song2", "everyone", 2001));
console.log(addToCollection(myCollection, "song3", "michael jackson", 2003));
console.log(addToCollection(myCollection, "song4", "sia", 2015));
console.log(addToCollection(myCollection, "song5", "ACDC", 1990));
console.log(addToCollection(myCollection, "song6", "drake", 2023));
function showCollection(collection) {
  for (const item of collection) {
    console.log(
      `${item.title} by ${item.artist}, published in ${item.yearPublished} `
    );
  }
}
showCollection(myCollection);

function findByArtist(collection, artist) {
  let out = [];
  for (item of collection) {
    if (item.artist === artist) {
      out.push(item);
    }
  }
  return out;
}

console.log(findByArtist(myCollection, "sia"));
console.log(findByArtist(myCollection, "ariana grande"));

function search(collection, searchCriteria) {
  if (searchCriteria === undefined) {
    return collection;
  }
  if (
    !searchCriteria.hasOwnProperty("artist") ||
    !searchCriteria.hasOwnProperty("yearPublished")
  ) {
    return collection;
  }
  return collection.filter((item) => {
    if (
      item.artist === searchCriteria.artist &&
      item.yearPublished === searchCriteria.yearPublished
    ) {
      return item;
    }
  });
}

console.log(search(myCollection, { artist: "sia", yearPublished: 2015 }));
console.log(search(myCollection, { artist: "sia", yearPublished: 2016 }));
console.log(search(myCollection, {}));
// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}

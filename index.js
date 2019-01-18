function findMatching(collection, name) {
  return collection.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(collection, nameBegins) {
  let nameBegins = 
}
function findMatching(collection, name) {
  return collection.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(collection, nameBegins) {
  let nameBeginsLength = nameBegins.length;
  
  return collection.filter(function (driver) { return driver.slice(0, nameBeginsLength), nameBegins;});
}
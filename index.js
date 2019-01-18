function findMatching(collection, name) {
  return collection.filter(function (drivers) { return drivers.toLowerCase === name.toLowerCase; });
}
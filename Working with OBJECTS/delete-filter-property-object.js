
// Delete property of object
let name = {
  first: 'Lince',
  last: 'ecniL'
}

delete name.first;

console.log(name);


// Filter property of object

let name2 = {
  first: 'Lince',
  middle: 'inc',
  last: 'ecniL'
}

function filterObj(obj, prop) {
  var objFiltered = {};

  Object.keys(obj)
    .filter(k => k !== prop)
    .map(key => objFiltered[key] = obj[key]);

  return objFiltered;
}

console.log(filterObj(name2, 'middle'));
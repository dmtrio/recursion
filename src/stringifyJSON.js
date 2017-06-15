// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// JSON.stringify(value[, replacer[, space]])
// Parameters
//
// value
// The value to convert to a JSON string.
//
// replacer Optional
// A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string.
//
// space Optional
// A String or Number object that's used to insert white space into the output JSON string for readability purposes. If this is a Number, it indicates the number of space characters to use as white space; this number is capped at 10 (if it is greater, the value is just 10). Values less than 1 indicate that no space should be used. If this is a String, the string (or the first 10 characters of the string, if it's longer than that) is used as white space. If this parameter is not provided (or is null), no white space is used.

var stringifyJSON = function(obj) {

//input is a primitve, array, or an obj,
//output is a string og the values in order

//if obj parameter is an array call function back again on each value of the array


  //determine if obj param is an array
    //if obj param is array call function on each value inside

  var outputString = '';


  console.log(obj, typeof(obj));

  // if (obj === undefined){
  //   return '';
  // }

  if (typeof(obj) === 'number' || typeof(obj) === 'boolean'){
    outputString += obj.toString();
  } else if (obj === null) {
    outputString += 'null';
  } else if (typeof(obj) === 'string') {
    outputString += '"' + obj + '"';
  };

  if(Array.isArray(obj)){
    outputString += '['
    for (var i = 0; i < obj.length; i++){
      outputString += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        outputString += ','
      }
    }
    outputString += ']';
  }

  if(typeof(obj) === 'object'){
    
  }
  console.log(outputString);
  return outputString;

  // for (var key in obj){
  //   return key.toString();
  // }

};

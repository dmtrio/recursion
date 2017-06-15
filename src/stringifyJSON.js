// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

//input is a primitve, array, or an obj,
//output is a string og the values in order

//if obj parameter is an array call function back again on each value of the array


  //determine if obj param is an array
    //if obj param is array call function on each value inside

  var outputString = '';

    if (typeof(obj) === 'number' || typeof(obj) === 'boolean'){
      outputString += obj.toString();
    } else if (obj === null) {
      outputString += 'null';
    } else if (typeof(obj) === 'string') {
      outputString += '"' + obj + '"';
    } else if(Array.isArray(obj)){
      outputString += '['
      for (var i = 0; i < obj.length; i++){
        outputString += stringifyJSON(obj[i]);
        if (i < obj.length - 1) {
          outputString += ','
        }
      }
      outputString += ']';
    } else if(typeof(obj) === 'object'){
      outputString += '{';
      var i = 0;
      for (var key in obj) {
        if (obj[key] === undefined || typeof(obj[key]) === 'function') {
          outputString;
        } else {
          outputString +=  stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
          if (i < Object.keys(obj).length - 1) {
            outputString += ','
          }
        }
        i++;
      }
      outputString += '}';
    }

  //}
  return outputString;

};

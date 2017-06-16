// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    //inputs string that represents a className
    //outputs NodeList object that can be accessed by index numbers

    //use document.body to start the html scan

    var currentNode = document.body;
    var foundNodes = [];

  var recursiveGetElementsByClassName = function(className){
    // console.log('recursive');
    // console.log(currentNode.nodeType);
    containsClassName(className);
    hasChildNodes(className);
    hasSiblingNodes(className);
    parentHasSiblingNodes(className);
  };

  var containsClassName = function(className) {
    if(currentNode.nodeType === 1){
      //console.log( currentNode ,currentNode.classList.contains(className));
      if (currentNode.classList.contains(className)) {
        foundNodes.push(currentNode);
        //console.log('contains class');
      }
    }
  };

  var hasChildNodes = function(className) {
    if(currentNode.firstChild !== null) {
      //console.log('has child');
      currentNode = currentNode.firstChild;
      recursiveGetElementsByClassName(className);
    }
  };

  var hasSiblingNodes = function(className) {
    if(currentNode.nextSibling !== null) {
      //console.log('has sibling');
      currentNode = currentNode.nextSibling;
      recursiveGetElementsByClassName(className);
    }
  };

  var parentHasSiblingNodes = function(className) {
      if (currentNode.parentNode !== null) {
        //console.log('parent sib search');
        currentNode = currentNode.parentNode;
        hasSiblingNodes(className);
      }
  };

  recursiveGetElementsByClassName(className);

  console.log(JSON.stringify(foundNodes));
  return foundNodes;

};

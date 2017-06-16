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
    containsClassName(className);
    hasChildNodes(className);
    hasSiblingNodes(className);
    parentHasSiblingNodes(className);
  };

  var containsClassName = function(className) {
    if(currentNode.nodeType === 1){
      if (currentNode.classList.contains(className)) {
        foundNodes.push(currentNode);
      }
    }
  };

  var hasChildNodes = function(className) {
    if(currentNode.firstChild !== null) {
      currentNode = currentNode.firstChild;
      recursiveGetElementsByClassName(className);
    }
  };

  var hasSiblingNodes = function(className) {
    if(currentNode.nextSibling !== null) {
      currentNode = currentNode.nextSibling;
      recursiveGetElementsByClassName(className);
    }
  };

  var parentHasSiblingNodes = function(className) {
      if (currentNode.parentNode !== null) {
        currentNode = currentNode.parentNode;
        hasSiblingNodes(className);
      }
  };

  recursiveGetElementsByClassName(className);

  return foundNodes;
};

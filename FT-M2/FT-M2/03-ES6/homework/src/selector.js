var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl); 
  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...result];
  }
  /* if (startEl.tagName.toLowerCase() === 'body') {
    startEl = startEl.firstElementChild;
    resultSet.concat(traverseDomAndCollectElements(matchFunc,startEl));
  }

  if(startEl.firstElementChild) {
      startEl = startEl.firstElementChild;
      resultSet.concat(traverseDomAndCollectElements(matchFunc,startEl));
  }

  if(startEl.nextElementSibling) {
      startEl = startEl.nextElementSibling;
      resultSet.concat(traverseDomAndCollectElements(matchFunc,startEl));
  } */
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '#') return 'id';
  else if (selector[0] === '.') return 'class';
  else if (/\b.\b/.test(selector)) return 'tag.class';
  else if (/\b/.test(selector)) return 'tag';
}
// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector); //'id''class' 'tag' tag.class'
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function(el) {
      return (('#'+ el.id.toLowerCase()) === selector.toLowerCase()); //#pepito 
    };
  } else if (selectorType === "class") { //document.body.querySelector('h2') --> h2.lead.big
    matchFunction = function(el) {
      return el.classList.contains(selector.toLowerCase().slice(1)); //evalua cada elemento de la clase y devuelve true or false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(el) {
      return (el.tagName.toLowerCase() === selector.toLowerCase().split('.')[0]) && (el.classList.contains(selector.toLowerCase().split('.')[1])); //la segunda condicion el contains revisa si 2do en el array que devuelve split se encuentra la clase 
    }
  } else if (selectorType === "tag") { // 
    matchFunction = function (el) {
      return el.tagName.toLowerCase() === selector.toLowerCase();
    }
  }
  return matchFunction; //
};

var $ = function(selector) { //$('body')
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector); //matchFunctionMaker('body');
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
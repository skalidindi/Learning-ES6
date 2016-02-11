/**
 * var is scoped to the nearest function block
 * (or global if outside a function block),
 * and let is scoped to the nearest enclosing block
 * (or global if outside any block), which can be smaller
 * than a function block.
 */
let me = 'go'; //globally scoped
var i = 'able'; //globally scoped
function ingWithinEstablishedParameters() {
    let terOfRecommendation = 'awesome worker!'; //function block scoped
    var sityCheerleading = 'go!'; //function block scoped
};

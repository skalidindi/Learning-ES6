function normalize(words) {
    var next_id = 0;
    var ids = {};
    var result = [];
    for(var i = 0; i < words.length; i++) {
        if(!ids.hasOwnProperty(words[i])) {
            ids[words[i]] = next_id;
            next_id += 1;
        }
        result.push(ids[words[i]]);
    }
    console.log(result);
    return result;
}

function matchesPattern(words, pattern) {
   var ary1 = normalize(words);
   var ary2 = normalize(pattern);
   for (var i = 0; i < ary1.length; i++) {
      if (ary1[i] !== ary2[i]) {
         return false;
      }
   }
   return true;
}


console.log(matchesPattern(["ant", "dog", "cat", "dog"], ["a", "d", "c", "e"]));

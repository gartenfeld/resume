
function parse(str) {

  str += '..';

  var words = 0,
      chars = 0,
      longest = 0,
      record = 0;

  var reset = function() {
    if (chars > longest) {
      longest = chars;
      record = words;
    }
    chars = 0;
    words = 0;
  };

  for (var i = 0; i < str.length - 1; i++) {
    chars++;
    // ignore decimal point in numbers, domain addresses, etc.
    if ( (str[i] + '' + str[i + 1]).match(/[\w\d\'\"][ \.\!\?\,\;]/) ) {
      words++;
    }
    if ( str[i].match(/[\.\!\?]/) ) {
      reset();
    }
  }

  return record || 0;

}



var s1 = 'Parse a string input. Return the number of words in the longest sentence.';
var s2 = 'The first ..was string parsing.s';
var s3 = 'The first . ..was string parsing ';
var s4 = 'The first . ..gooblyblah! string paring';
var s5 = 'I know... But who?';
var s6 = 'I know! But who?';
var s7 = 'What about "that"?';

console.log(parse(s1));
console.log(parse(s2));
console.log(parse(s3));
console.log(parse(s4));
console.log(parse(s5));
console.log(parse(s6));
console.log(parse(s7));
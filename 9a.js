function notBad(str) {
  const notIndex = str.indexOf('not');
  const badIndex = str.indexOf('bad');

  if (notIndex !== -1 && badIndex !== -1 && badIndex > notIndex) {
      return str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3);
  } else {
      return str;
  }
}

console.log(notBad('This dinner is not that bad!')); // Output: This dinner is good!
console.log(notBad('This dinner is bad!'));          // Output: This dinner is bad!
console.log(notBad('The movie is not so bad.'));     // Output: The movie is good.
console.log(notBad('It is not bad at all'));         // Output: It is good at all
console.log(notBad('Nothing bad here'));             // Output: Nothing bad here

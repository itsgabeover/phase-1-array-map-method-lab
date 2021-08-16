const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

    // const titleCased = tutorials => tutorials.map(eachString => {
    //     const splitString = eachString.split(" ");
    //     const titleCaseSplitString = splitString.map(separatedWord => 
    //       {return separatedWord.charAt(0).toUpperCase() + separatedWord.slice(1)})
    //     const rejoinedString = titleCaseSplitString.join(" ");
    //     return rejoinedString;
    //     }
    // )

function titleCased() {
    const titleCasedArray = tutorials.map(eachString => {
      const splitString = eachString.split(" ");
      const titleCaseSplitString = splitString.map(separatedWord => 
        {return separatedWord.charAt(0).toUpperCase() + separatedWord.slice(1)})
      const rejoinedString = titleCaseSplitString.join(" ");
      return eachString = rejoinedString;
    })
    return titleCasedArray;
  }

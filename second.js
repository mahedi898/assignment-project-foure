
function evenOdd(a) {
    const checkLength = a.length;
    if (checkLength % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  const outputs = "Phero";
  console.log(evenOdd(outputs));
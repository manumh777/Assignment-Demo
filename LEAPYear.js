function leapyear(leap) {
  if ((leap % 4 === 0 && leap % 100 !== 0) || leap % 400 === 0) {
    console.log("is a leap year");
    return true;
  } else {
    console.log("is not a leap year");
    return false;
  }
}

leapyear(2400);

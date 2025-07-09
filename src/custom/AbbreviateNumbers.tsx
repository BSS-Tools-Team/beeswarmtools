const abbreviateNumbers = (value: number) => {
  if (value < 10000) {
    if (value.toString().includes(".")) return value.toString().split(".")[0];
    return value.toString();
  }
  let finalValue = "";
  // thousands, millions, billions etc..
  var s = ["", "k", "m", "b", "t", "Qd"];

  // dividing the value by 3.
  var sNum = Math.floor(("" + value).length / 4);

  // calculating the precised value.

  var sValue: number | string = 0;

  if (sNum >= 3) {
    sValue = parseFloat(
      (sNum !== 0 ? value / Math.pow(1000, sNum) : value).toPrecision()
    );
  } else {
    sValue = parseFloat(
      (sNum !== 0 ? value / Math.pow(1000, sNum) : value).toPrecision(2)
    );
  }

  finalValue = sValue.toString();

  // appending the letter to precised val.

  if (finalValue.length > 3) {
    sNum = Math.floor(("" + value).length / 3);
    sValue = parseFloat(
      (sNum !== 0 ? value / Math.pow(1000, sNum) : value).toPrecision(2)
    );

    if (sNum > 4 && finalValue.length >= 5) {
      sNum = Math.floor(("" + value).length / 3);
      sValue = parseFloat(
        (sNum !== 0 ? value / Math.pow(1000, sNum) : value).toPrecision(4)
      );
    }

    if (finalValue.split(".")[0].length === 3) {
      sNum = sNum - 1;
      sValue = finalValue.toString().slice(0, 3);
    }

    if (finalValue.length === 6) {
      sNum = sNum - 1;
      sValue = finalValue.toString().slice(0, 3);
    }
  }
  return sValue + s[sNum];
};

export default abbreviateNumbers;

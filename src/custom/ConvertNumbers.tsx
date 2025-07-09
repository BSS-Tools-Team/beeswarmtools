function ConvertNumbers(number: string) {
  let newNumber = number.match(/\d+/g)?.join();
  let finalNumber = "";

  if (/^\d+$/.test(number)) {
    finalNumber = number;
  }

  if (/[,]/.test(number)) {
    switch (number.match(/[a-z]/)?.join()) {
      case "k":
        finalNumber = newNumber?.replace(",", "") + "00";
        break;
      case "m":
        finalNumber = newNumber?.replace(",", "") + "00000";
        break;
      case "b":
        finalNumber = newNumber?.replace(",", "") + "00000000";
        break;
      case "t":
        finalNumber = newNumber?.replace(",", "") + "00000000000";
        break;
      case "q":
        finalNumber = newNumber?.replace(",", "") + "00000000000000";
        break;
    }
  }

  if (/[a-zA-Z]/.test(number) && !/[,]/.test(number)) {
    switch (number.match(/[a-z]/)?.join()) {
      case "k":
        finalNumber = newNumber + "000";
        break;
      case "m":
        finalNumber = newNumber + "000000";
        break;
      case "b":
        finalNumber = newNumber + "000000000";
        break;
      case "t":
        finalNumber = newNumber + "000000000000";
        break;
      case "q":
        finalNumber = newNumber + "000000000000000";
        break;
    }
  }

  return Number(finalNumber);
}

export default ConvertNumbers;

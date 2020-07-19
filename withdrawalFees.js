function withDrawalFees(amount) {
  switch (true) {
    case (amount <= 49):
     {
      console.log('not applicabe');
      return 'not applicabe'
    }
    case amount >= 50 && amount <= 100: {
      console.log("10");
      return 10
    }
    case amount >= 101 && amount <= 500: {
      console.log("27");
      return 27
    }
    case amount >= 501 && amount <= 1000: {
      console.log("28");
      return 28
    }
    case amount >= 1001 && amount <= 1500: {
      console.log("28");
      return 28
    }
    case amount >= 1501 && amount <= 2500: {
      console.log("28");
      return 28
    }
    case amount >= 2501 && amount <= 3500: {
      console.log("50");
      return 50
    }
    case amount >= 3501 && amount <= 5000: {
      console.log("67");
      return 67
    }
    case amount >= 5001 && amount <= 7500: {
      console.log("84");
      return 84
    }
    case amount >= 7501 && amount <= 10000: {
      console.log("112");
      return 112
    }
    case amount >= 10001 && amount <= 15000: {
      console.log("162");
      return 162
    }
    case amount >= 15001 && amount <= 20000: {
      console.log("180");
      return 180
    }
    case amount >= 20001 && amount <= 35000: {
      console.log("191");
      return 191
    }
    case amount >= 35001 && amount <= 50000: {
      console.log("270");
      return 270
    }
    case amount >= 50001 && amount <= 150000: {
      console.log("300");
      return 300
    }
    default:
      console.log("richman");
      break;
  }
}

module.exports = withDrawalFees
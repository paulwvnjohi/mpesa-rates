function transferFees(amount) {
    switch (true) {
      case (amount >= 0 && amount <= 49):
       {
        console.log("not applicable");
        return 'not applicable'
      }
      case amount >= 50 && amount <= 100: {
        console.log("10");
        return 10
      }
      case amount >= 101 && amount <= 500: {
        console.log("27");
        return 27
      }
      case amount >= 501 && amount <= 2500: {
        console.log("10");
        return 10
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
        console.log("67");
        return 67
      }
      case amount >= 7501 && amount <= 10000: {
        console.log("67");
        return 67
      }
      case amount >= 10001 && amount <= 15000: {
        console.log("162");
        return 162
      }
      case amount >= 15001 && amount <= 20000: {
        console.log("180");
        return 180
      }
      default:
        console.log("richman");
        break;
    }
  }
  
  module.exports = transferFees
function transferFees(amount) {
    switch (true) {
      case (amount <= 0): {
        console.log("not applicable");
        return 'please enter valid amount'
      }
      case (amount > 0 && amount <= 49):
       {
        console.log('Free');
        return 'Free'
      }
      case amount >= 50 && amount <= 100: {
        console.log("Free");
        return 'Free'
      }
      case amount >= 101 && amount <= 500: {
        console.log("Free");
        return 'Free'
      }
      case amount >= 501 && amount <= 1000: {
        console.log("Free");
        return 'Free'
      }
      case amount >= 1001 && amount <= 1500: {
        console.log("26");
        return 26
      }
      case amount >= 1501 && amount <= 2500: {
        console.log("41");
        return 41
      }
      case amount >= 2501 && amount <= 3500: {
        console.log("56");
        return 56
      }
      case amount >= 3501 && amount <= 5000: {
        console.log("61");
        return 61
      }
      case amount >= 5001 && amount <= 7500: {
        console.log("77");
        return 77
      }
      case amount >= 7501 && amount <= 10000: {
        console.log("87");
        return 87
      }
      case amount >= 10001 && amount <= 15000: {
        console.log("97");
        return 97
      }
      case amount >= 15001 && amount <= 20000: {
        console.log("102");
        return 102
      }
      case amount >= 20001 && amount <= 35000: {
        console.log("105");
        return 105
      }
      case amount >= 35001 && amount <= 50000: {
        console.log("105");
        return 105
      }
      case amount >= 50001 && amount <= 150000: {
        console.log("105");
        return 105
      }
      default:
        console.log("richman");
        break;
    }
  }
  
  module.exports = transferFees
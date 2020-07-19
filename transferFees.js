function transferFees(amount) {
    switch (true) {
      case (amount <= 0): {
        return -1
      }
      case (amount > 0 && amount <= 49):
       {
        return 0
      }
      case amount >= 50 && amount <= 100: {
        return 0
      }
      case amount >= 101 && amount <= 500: {
        return 0
      }
      case amount >= 501 && amount <= 1000: {
        return 0
      }
      case amount >= 1001 && amount <= 1500: {
        return 26
      }
      case amount >= 1501 && amount <= 2500: {
        return 41
      }
      case amount >= 2501 && amount <= 3500: {
        return 56
      }
      case amount >= 3501 && amount <= 5000: {
        return 61
      }
      case amount >= 5001 && amount <= 7500: {
        return 77
      }
      case amount >= 7501 && amount <= 10000: {
        return 87
      }
      case amount >= 10001 && amount <= 15000: {
        return 97
      }
      case amount >= 15001 && amount <= 20000: {
        return 102
      }
      case amount >= 20001 && amount <= 35000: {
        return 105
      }
      case amount >= 35001 && amount <= 50000: {
        return 105
      }
      case amount >= 50001 && amount <= 150000: {
        return 105
      }
      default:
        return -1
    }
  }
  
  module.exports = transferFees
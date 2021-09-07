function withDrawalFees(amount) {
  switch (true) {
    case (amount <= 49):
     {
      return -1
    }
    case amount >= 50 && amount <= 100: {
          return 10
    }
    case amount >= 101 && amount <= 500: {
          return 27
    }
    case amount >= 501 && amount <= 2500: {
          return 28
    }
    case amount >= 2501 && amount <= 3500: {
          return 50
    }
    case amount >= 3501 && amount <= 5000: {
          return 67
    }
    case amount >= 5001 && amount <= 7500: {
          return 84
    }
    case amount >= 7501 && amount <= 10000: {
    
      return 112
    }
    case amount >= 10001 && amount <= 15000: {
    
      return 162
    }
    case amount >= 15001 && amount <= 20000: {
    
      return 180
    }
    case amount >= 20001 && amount <= 35000: {
    
      return 191
    }
    case amount >= 35001 && amount <= 50000: {
    
      return 270
    }
    case amount >= 50001 && amount <= 150000: {
    
      return 300
    }
    default:
      return -1
  }
}

module.exports = withDrawalFees
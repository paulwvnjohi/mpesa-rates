function transferFees(amount) {
  switch (true) {
    case (amount <= 0): {
      return -1
    }
    case (amount > 0 && amount <= 100):
     {
      return 0
    }
    case amount >= 101 && amount <= 500: {
      return 6
    }
    case amount >= 501 && amount <= 1000: {
      return 12
    }
    case amount >= 1001 && amount <= 1500: {
      return 22
    }
    case amount >= 1501 && amount <= 2500: {
      return 32
    }
    case amount >= 2501 && amount <= 3500: {
      return 51
    }
    case amount >= 3501 && amount <= 5000: {
      return 55
    }
    case amount >= 5001 && amount <= 7500: {
      return 75
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
    case amount >= 20001 && amount <= 150_000: {
      return 105
    }
    default:
      return -1
  }
}

module.exports = transferFees
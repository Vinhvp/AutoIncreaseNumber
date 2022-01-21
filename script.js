function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber == finalNumber - 1) {
        clearInterval(interval)
      } else {
        currentNumber++
        callback(currentNumber)
      }
    }
  }
  function animateNumber1(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        currentNumber++
        callback(currentNumber)
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(400000,300, 399980, function (number) {
      const formattedNumber = number.toLocaleString('vi-VN')
      document.getElementById('transaction-count').innerText = formattedNumber
    })
    
    // animateNumber(63, 50, 0, function (number) {
    //   const formattedNumber = number.toLocaleString()
    //   document.getElementById('city-count').innerText = formattedNumber
    // })
    
    animateNumber(8000, 100, 7900, function (number) {
      const formattedNumber = number.toLocaleString('vi-VN')
      document.getElementById('customer-count').innerText = formattedNumber
    })
  })

  document.addEventListener('click',function(){
    animateNumber1(500000,600, 399999, function (number) {
        const formattedNumber = number.toLocaleString('vi-VN')
        document.getElementById('transaction-count').innerText = formattedNumber
      })
    animateNumber1(80000, 200, 7999, function (number) {
        const formattedNumber = number.toLocaleString('vi-VN')
        document.getElementById('customer-count').innerText = formattedNumber
      })
  })
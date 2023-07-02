const incrementDetailsNumber = (apiDataValue, element) => {
  const incrementStep = apiDataValue / 60; // Podelimo vrednost na manje korake
  let currentNumber = 0;

  const animateNumber = () => {
    currentNumber += incrementStep;
    if (currentNumber >= apiDataValue) {
      currentNumber = apiDataValue;
    }
    element.textContent = Math.round(currentNumber);

    if (currentNumber < apiDataValue) {
      requestAnimationFrame(animateNumber);
    }
  };

  requestAnimationFrame(animateNumber);
};

/*
const incrementDetailsNumber = (apiDataValue, element) => {
  const incrementStep = apiDataValue / 100; // Podelimo vrednost na manje korake
  let currentNumber = 0;

  const intervalID = setInterval(() => {
    currentNumber += incrementStep;
    if (currentNumber >= apiDataValue) {
      currentNumber = apiDataValue;
      clearInterval(intervalID);
    }
    element.textContent = Math.round(currentNumber);
  }, 17); // Ažuriraj broj otprilike svakih 16.67ms (60fps)
};
*/
/*
const incrementDetailsNumber = (apiDataValue, element) => {
  let counter = 0;
  element.textContent = 0;

  let intervalID = setInterval(() => {
    counter++;
    element.textContent = counter;
    if (counter === apiDataValue) {
      clearInterval(intervalID);
      counter = 0;
    }
  }, 1000);
};
*/
export { incrementDetailsNumber };

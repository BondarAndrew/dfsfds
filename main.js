
function delayedPromise(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
  const promises1 = [
    delayedPromise("First", 2000),
    delayedPromise("Second", 1500),
    delayedPromise("Third", 3000),
    delayedPromise("Fourth", 1000),
    delayedPromise("Fifth", 2500)
  ];
  
  Promise.all(promises1)
    .then(results => {
      console.log("Task 1: Results of Promise.all");
      console.log(results);
    })
    .catch(error => {
      console.error("Task 1: Error occurred:", error);
    });
  
  

  function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000; 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
  const promises2 = [
    randomDelay("First"),
    randomDelay("Second"),
    randomDelay("Third"),
    randomDelay("Fourth"),
    randomDelay("Fifth")
  ];
  
  Promise.race(promises2)
    .then(result => {
      console.log("Task 2: Result of Promise.race");
      console.log(result);
    })
    .catch(error => {
      console.error("Task 2: Error occurred:", error);
    });
  
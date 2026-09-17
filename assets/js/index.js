function printNumbers(from, to, interval) {
  let counter = from;

  function count() {
    console.log(counter);
    if (counter < to) {
      counter++;
      setTimeout(count, interval);
    }
  }
  count();
}

printNumbers(1, 10, 1000);

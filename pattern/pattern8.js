function pattern8(n) {
  for (let i = 0; i < n; i++) {
    let row = "",
      toggle = 1;
    for (let j = 0; j < i + 1; j++) {
      row += toggle;
      if (toggle == 0) toggle = 1;
      else toggle = 0;
    }
    console.log(row);
  }
}

pattern8(6);

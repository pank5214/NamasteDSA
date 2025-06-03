function pattern5(n) {
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += j + 1 + " ";
    }
    console.log(row);
  }
}

pattern5(5);

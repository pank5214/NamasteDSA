function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    // This loop is adding the empty spaces "_"
    for (let j = 0; j < n - (i + 1); j++) {
      row += " ";
    }

    // This loop is adding the "*"
    for (let k = 0; k < i + 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

pattern7(5);

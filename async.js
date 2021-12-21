function asy() {
  for (var c = 0; c < 10; c++) {
    setTimeout(() => {
      console.log(c);
    }, 100);
  }
}

asy();

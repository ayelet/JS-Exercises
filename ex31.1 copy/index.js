function getIDs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });
}
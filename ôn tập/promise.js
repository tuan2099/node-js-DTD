const promise = new Promise(function (resolve, reject) {
  // function bên trong promises sẽ được thực thi ngay lập tức khi gọi đến promises
  // Thânhf công gọi đến resolves()
  // Thất bài gọi đến reject()
});

promise
  .then() //thành công
  .catch() // thát bại
  .finally(); // đc gọi cuối cùng

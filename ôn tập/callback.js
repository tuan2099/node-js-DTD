// Callback function basic parrt 1
// Là hàm truyền qua đối số
// và đc gọi lại trong hàm nhận đối số

function program1(callback) {
  if (typeof callback === "function") {
    // bắt buộc phải check
    setTimeout(function () {
      console.log("Lấy tiền");
      callback();
    }, 1000);
  }
}

function program2() {
  console.log("mua đồ");
}

program1(program2);

// Bài tập
// Bài 1
const myNumbers = [1, 2, 3, 4, 5];

const tong = (number, callback) => {
  const sum = number.reduce((sum, number) => sum + number);
  callback(sum);
};

function result(result) {
  console.log("tổng là:", result);
}

tong(myNumbers, result);

// Bài 2

const myStrings = ["apple", "banana", "orange"];

function convert(text, callback) {
  const converStr = myStrings.map((str) => str.toLocaleUpperCase());
  callback(converStr);
}

const handleresult = (result) => {
  console.log("Dã chuyển đỏi;", result);
};

convert(myStrings, result);

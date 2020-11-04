var available_times = 0;
var total_money = 0;
var times = 100;
// [UR, SR, R, N]
var log = [0, 0, 0, 0];

// Random NUM between min and max (both include)
function limit(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Type = [
  ["UR", 5],
  ["SR", 15],
  ["R", 25],
  ["N", 55],
];
// Constuct an 100*2 Array Item
// Form: Item ["UR", 1]
var Item = new Array(100);
for (var i = 0; i < 100; i++) {
  Item[i] = new Array(2);
  Item[i][1] = 1;
}

// Pre-Random 100 case in Array Item.
for (var i = 0; i < 100; i++) {
  var tmp = limit(0, 3);
  if (Type[tmp][1] > 0) {
    Item[i][0] = Type[tmp][0];
    Type[tmp][1] -= 1;
  } else {
    i--;
  }
}

function recorder(value) {
  switch (value) {
    case "UR":
      log[0] += 1;
      break;
    case "SR":
      log[1] += 1;
      break;
    case "R":
      log[2] += 1;
      break;
    case "N":
      log[3] += 1;
      break;
  }
}
function check_tags_status_1() {
  if (document.getElementById("item_2").style.display != "none") {
    for (var i = 1; i < 10; i++) {
      document.getElementsByTagName("p")[i].style.display = "none";
    }
  }
}
function check_tags_status_10() {
  if (document.getElementsByTagName("p")[i].style.display == "none") {
    document.getElementsByTagName("p")[i].style.display = "block";
  }
}

function add_1() {
  available_times += 1;
  total_money += 100;
  document.getElementById("status").innerHTML = "已儲值：" + total_money + "元，目前還可以抽" + available_times + "次";
}

function add_X() {
  money = prompt("請輸入要儲值的金額：", "");
  var current = Math.floor(money / 100);
  available_times += current;
  total_money += 100 * current;
  alert("已儲值：" + money + "元，目前可抽次數為：" + available_times + "次");
  document.getElementById("status").innerHTML = "已儲值：" + total_money + "元，目前還可以抽" + available_times + "次";
}

function gacha_1() {
  if (available_times <= 0) {
    alert("抽取次數不足，請先儲值");
  } else {
    if (times < 0) {
      alert("抽獎池已經空了啦");
    } else {
      available_times--;
      times--;
      document.getElementById("status").innerHTML = "已儲值：" + total_money + "元，目前還可以抽" + available_times + "次";

      check_tags_status_1();

      var index = 0;
      do {
        index = Math.floor(Math.random() * 100); // Range 1-100, array index 0-99
      } while (Item[index][1] == 0);

      Item[index][1] = 0;
      document.getElementById("item_1").innerHTML = Item[index][0];
      recorder(Item[index][0]);

      document.getElementById("result").innerHTML = "記錄：" + "UR: " + log[0] + ", SR: " + log[1] + ", R: " + log[2] + ", N: " + log[3];
    }
  }
  console.log("available_times: " + available_times + "times:" + times);
}

function gacha_10() {
  if (available_times <= 0) {
    alert("抽取次數不足，請先儲值");
  } else {
    if (available_times < 10) {
      var index = new Array(available_times);
      var temp;
      for (var i = 0; i < available_times; i++) {
        do {
          temp = Math.floor(Math.random() * 100);
        } while (Item[temp][1] == 0);
        Item[temp][1] = 0;
        index[i] = temp;
      }
      console.log(index);

      for (var i = 0; i < available_times; i++) {
        var value = Item[index[i]][0];
        document.getElementsByTagName("p")[i].innerHTML = value;
        recorder(value);
        document.getElementById("result").innerHTML = "記錄：" + "UR: " + log[0] + ", SR: " + log[1] + ", R: " + log[2] + ", N: " + log[3];
      }

      times -= available_times;
      available_times -= available_times;
      document.getElementById("status").innerHTML = "已儲值：" + total_money + "元，目前還可以抽" + available_times + "次";
    } else {
      available_times -= 10;
      times -= 10;
      document.getElementById("status").innerHTML = "已儲值：" + total_money + "元，目前還可以抽" + available_times + "次";

      var index = new Array(10);
      var temp;

      for (var i = 0; i < 10; i++) {
        do {
          temp = Math.floor(Math.random() * 100);
        } while (Item[temp][1] == 0);
        Item[temp][1] = 0;
        index[i] = temp;
      }
      for (var i = 0; i < 10; i++) {
        var value = Item[index[i]][0];
        document.getElementsByTagName("p")[i].innerHTML = value;
        recorder(value);
        document.getElementById("result").innerHTML = "記錄：" + "UR: " + log[0] + ", SR: " + log[1] + ", R: " + log[2] + ", N: " + log[3];
      }
    }
  }
  console.log("available_times: " + available_times + "times:" + times);
}

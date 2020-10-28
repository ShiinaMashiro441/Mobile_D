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

/**Dev log for ur, sr, r, n NUMBERS
  console.log(Item);
  var ur = 0,
    sr = 0,
    r = 0,
    n = 0;
  for (var i = 0; i < 100; i++) {
    switch (Item[i]) {
      case "UR":
        ur++;
        continue;
      case "SR":
        sr++;
        continue;
      case "R":
        r++;
        continue;
      case "N":
        n++;
        continue;
    }
  }
  console.log(ur);
  console.log(sr);
  console.log(r);
  console.log(n);
 */

var times = 0,
  money = 0;

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
function gacha_1() {
  if (times < 100) {
    check_tags_status_1();

    var index = 0;
    do {
      index = Math.floor(Math.random() * 100); // Range 1-100, array index 0-99
    } while (Item[index][1] == 0);

    Item[index][1] = 0;
    document.getElementById("item_1").innerHTML = Item[index][0];

    recorder(Item[index][0]);

    document.getElementById("result").innerHTML = "記錄：" + "UR: " + log[0] + ", SR: " + log[1] + ", R: " + log[2] + ", N: " + log[3];

    spend();
  }
}

function check_tags_status_10() {
  if (document.getElementsByTagName("p")[i].style.display == "none") {
    document.getElementsByTagName("p")[i].style.display = "block";
  }
}
function gacha_10() {
  var index = new Array(10);
  var temp;
  if (times < 100) {
    for (var i = 0; i < 10; i++) {
      do {
        temp = Math.floor(Math.random() * 100);
      } while (Item[temp][1] == 0);
      Item[temp][1] = 0;
      index[i] = temp;
    }
    console.log(index);

    for (var i = 0; i < 10; i++) {
      var value = Item[index[i]][0];
      document.getElementsByTagName("p")[i].innerHTML = value;
      recorder(value);
      document.getElementById("result").innerHTML = "記錄：" + "UR: " + log[0] + ", SR: " + log[1] + ", R: " + log[2] + ", N: " + log[3];
      spend();
    }
  }
}

function spend() {
  times++;
  money += 100;
  document.getElementsByTagName("h5")[1].innerHTML = "共抽了 " + times + " 次，花了 " + money + " 元";
}

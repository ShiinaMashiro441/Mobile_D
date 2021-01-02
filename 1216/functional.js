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

function add_1() {
    available_times += 1;
    total_money += 100;
    document.getElementById("status").innerHTML = "已儲值：" + total_money + "元，目前還可以抽" + available_times + "次";
    console.log(available_times);
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
    const alart = document.getElementById("alart_content");
    const main = document.getElementById("main_content");
    if (times <= 0) {
        // alart_content enable
        alart.style.display = "block";
        // main_content disable
        main.style.display = "none";
        // display msg run out of cards
        alart.innerHTML = "抽獎池被你抽乾了啦";
    } else if (available_times <= 0) {
        // alart_content enable
        alart.style.display = "block";
        // main_content disable
        main.style.display = "none";
        // display run out of times
        alart.innerHTML = "還抽！你媽知道你這樣會很傷心的！";
    } else if ((times > 0) & (available_times > 0)) {
        // check alart/main content status
        alart.style.display = "none";
        main.style.display = "block";
        for (var i = 0; i < 10; i++) {
            if (i != 0) {
                document.getElementsByTagName("p")[i].style.display = "none";
            } else {
                document.getElementsByTagName("p")[i].style.display = "block";
            }
        }

        // gacha 1 program
        do {
            index = Math.floor(Math.random() * 100);
        } while (Item[index][1] == 0);

        Item[index][1] = 0;
        document.getElementById("item_1").innerHTML = Item[index][0];
        recorder(Item[index][0]);

        available_times -= 1;
        times -= 1;

        document.getElementById("record").innerHTML = "記錄：" + "UR: " + log[0] + ", SR: " + log[1] + ", R: " + log[2] + ", N: " + log[3];
        console.log("available_times: " + available_times + "times:" + times);
    }
}

function gacha_10() {
    const alart = document.getElementById("alart_content");
    const main = document.getElementById("main_content");
    if (times <= 0) {
        // alart_content enable
        alart.style.display = "block";
        // main_content disable
        main.style.display = "none";
        // display msg run out of cards
        alart.innerHTML = "抽獎池被你抽乾了啦";
    } else if (available_times <= 0) {
        // alart_content enable
        alart.style.display = "block";
        // main_content disable
        main.style.display = "none";
        // display run out of times
        alart.innerHTML = "還抽！你媽知道你這樣會很傷心的！";
    } else if ((times > 0) & (available_times > 0)) {
        // check alart/main content status
        alart.style.display = "none";
        main.style.display = "block";
        for (var i = 0; i < 10; i++) {
            document.getElementsByTagName("p")[i].style.display = "block";
        }

        // gacha 10 program
        var tmp;
        var index = new Array(available_times);
        for (var i = 0; i < available_times; i++) {
            do {
                tmp = Math.floor(Math.random() * 100);
            } while (Item[tmp][1] == 0);
            Item[tmp][1] = 0;

            var value = Item[tmp][0];
            document.getElementsByTagName("p")[i].innerHTML = value;
            recorder(value);
            document.getElementById("record").innerHTML = "記錄：" + "UR: " + log[0] + ", SR: " + log[1] + ", R: " + log[2] + ", N: " + log[3];
        }
        console.log(index);
        times -= available_times;
        available_times = 0;
        document.getElementById("status").innerHTML = "已儲值：" + total_money + "元，目前還可以抽" + available_times + "次";
    }
}

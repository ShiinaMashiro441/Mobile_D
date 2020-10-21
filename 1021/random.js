function gacha_1() {

    if(document.getElementById('item_2').style.display != 'none') {
        for(var i=1; i<10; i++) {
            document.getElementsByTagName('p')[i].style.display = 'none';
        }
    }
    // [N, R, SR, UR]
    var log = [0, 0, 0, 0];
    value = Math.floor(Math.random() * 100) + 1;
    if(value <= 60) {
        document.getElementById('item_1').innerHTML = 'N (' + value + ')';
        log[0] += 1;
    } else if(value <= 85) {
        document.getElementById('item_1').innerHTML = 'R (' + value + ')';
        log[1] += 1;
    } else if(value <= 95) {
        document.getElementById('item_1').innerHTML = 'SR (' + value + ')';
        log[2] += 1;
    } else{
        document.getElementById('item_1').innerHTML = 'UR (' + value + ')';
        log[3] += 1;
    }

    document.getElementById('result').innerHTML = '記錄：' + 'UR: ' + log[3] + ', SR: ' + log[2] + ', R: ' + log[1] + ', N: ' + log[0];
}
function gacha_10() {
    var item = new Array(10);
    var log = [0, 0, 0, 0];
    for(var i=0; i<10; i++) {
        item[i] = Math.floor(Math.random() * 100) + 1;
    }
    //console.log(item)

    for(var i=0; i<10; i++) {

        if(document.getElementsByTagName('p')[i].style.display == 'none') {
            document.getElementsByTagName('p')[i].style.display = 'block';
        }

        if(item[i] <= 60) {
            document.getElementsByTagName('p')[i].innerHTML = 'N (' + item[i] + ')';
            log[0] += 1;
        } else if(item[i] <= 85) {
            document.getElementsByTagName('p')[i].innerHTML = 'R (' + item[i] + ')';
            log[1] += 1;
        } else if(item[i] <= 95) {
            document.getElementsByTagName('p')[i].innerHTML = 'SR (' + item[i] + ')';
            log[2] += 1;
        } else{
            document.getElementsByTagName('p')[i].innerHTML = 'UR (' + item[i] + ')';
            log[3] += 1;
        }
        //document.getElementsByTagName('p')[i].innerHTML = item[i];
    }
    document.getElementById('result').innerHTML = '記錄：' + 'UR: ' + log[3] + ', SR: ' + log[2] + ', R: ' + log[1] + ', N: ' + log[0];
    //console.log(document.getElementsByTagName('p')[0].id);
    
    
}

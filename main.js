"use strict";

var myArgs = process.argv.slice(2);
var le;
if(myArgs.length > 0) {
    le = myArgs[myArgs.length-1];
}else{
    le = 'help';
}

switch (le) {
    case 'help':
        if(myArgs.length > 1) {
            console.log('ERROR: help command uses no parameters');
            break;
        }
        var cowsay = require('cowsay');
        console.log(cowsay.say({
            text : "Calculator, Author: Simion Andrei-Laurentiu"
        }));
    
        var l = ['help', '+', '-', 'mul', 'div', 'mod', 'sq', 'abs', 'pwr', 'sort', 'rev', 'max', 'min', 'uniq', 'cos', 'sin'];
        for(var i = 0; i < l.length; i++) {
            console.log(l[i]);
        }
        break;

    case '+':
        if(myArgs.length >= 3 && myArgs[myArgs.length-2] != 'complex') {
            var a = 0;
            for(var i = 0; i < myArgs.length-1; i++) {
                a = a + parseFloat(myArgs[i]);
            }
            console.log(a);
            break;
        }else if(myArgs.length >= 2  && myArgs[myArgs.length-2] == 'complex'){
            var are = 0;
            var aim = 0;
            for(var i = 0; i <= myArgs.length-4; i = i+2) {
                are = parseFloat(are) + parseFloat(myArgs[i]);
                aim = parseFloat(aim) + parseFloat(myArgs[i+1]);
            }
            if(aim < 0) {
                console.log(are + aim + 'i');
            }else if(aim >0){
                console.log(are + '+' + aim +'i');
            }else{
                console.log(are);
            }
            break;
        }else{
            console.log('ERROR: + command uses at least 2 parameters');
        }
        break;

    case '-':
        if(myArgs.length >= 3 && myArgs[myArgs.length-2] != 'complex') {
            var s = myArgs[0];
            for(var i = 1; i < myArgs.length-1; i++) {
                s = s - myArgs[i];
            }
            console.log(s);
            break;
        }else if(myArgs.length >= 2 && myArgs[myArgs.length-2] == 'complex'){
            var sre = parseFloat(myArgs[0]);
            var sim = parseFloat(myArgs[1]);
            for(var i = 2; i <= myArgs.length-4; i = i + 2) {
                sre = parseFloat(sre) - parseFloat(myArgs[i]);
                sim = parseFloat(sim) - parseFloat(myArgs[i+1]);
            }
            if(sim < 0) {
                console.log(sre + sim + 'i');
            }else if(sim >0){
                console.log(sre + '+' + sim +'i');
            }else{
                console.log(sre);
            }
            break;
        }else{
            console.log('ERROR: - command uses at least 2 parameters');
        }
        break;

    case 'mul':
        if(myArgs.length >= 3 && myArgs[myArgs.length-2] != 'complex') {
            var m = 1;
            for(var i = 0; i < myArgs.length-1; i++) {
                m = m * myArgs[i];
            }
            console.log(m);
            break;
        }else if(myArgs.length >= 4 && myArgs[myArgs.length-2] == 'complex'){
            var mre = 1;
            var mim = 1;
            for(var i = 0; i < myArgs.length-3; i = i + 4) {
                mre = mre * (parseFloat(myArgs[i]) * parseFloat(myArgs[i+2]) - parseFloat(myArgs[i+1]) * parseFloat(myArgs[i+3]));
                mim = mim * (parseFloat(myArgs[i]) * parseFloat(myArgs[i+3]) + parseFloat(myArgs[i+1]) * parseFloat(myArgs[i+2]));
            }
            if(mim < 0) {
                console.log(mre + mim + 'i');
            }else if(mim >0){
                console.log(mre + '+' + mim +'i');
            }else{
                console.log(mre);
            }
            break;
        }else{
            console.log('ERROR: mul command uses at least 2 parameters');
        }
        break;

    case 'div':
        if(myArgs.length >= 3) {
            var d = myArgs[0];
            for(var i = 1; i < myArgs.length-1; i++) {
                d = d / myArgs[i];
            }
            console.log(d);
        }else{
            console.log('ERROR: div command uses at least 2 parameters');
        }
        break;

    case 'mod':
        if(myArgs.length == 3) {
            var m = myArgs[0] % myArgs[1];
            console.log(m);
        }else{
            console.log('ERROR: mod command uses 2 parameters');
        }
        break;

    case 'sq':
        if(myArgs.length == 2) {
            var s = Math.sqrt(myArgs[0]);
            console.log(s);
        }else{
            console.log('ERROR: sq command uses at least 1 parameters');
        }
        break;

    case 'abs':
        if(myArgs.length == 2) {
            var a = Math.abs(myArgs[0]);
            console.log(a);
        }else{
            console.log('ERROR: abs command uses at least 1 parameters');
        }
        break;

    case 'pwr':
        if(myArgs.length == 3) {
            var p = Math.pow(myArgs[0], myArgs[1]);
            console.log(p);
        }else{
            console.log('ERROR: pwr command uses at least 2 parameters');
        }
        break;

    case 'sort':
        if(myArgs.length >= 2) {
            var str = [];
            myArgs = myArgs.sort((a, b) => a - b);
            for(var i = 0; i < myArgs.length-1; i++){
                str = str + ' ' + myArgs[i];
            }
            str = str.trim();
            console.log(str);
        }else{
            console.log('ERROR: sort command uses at least 1 parameters');
        }
        break;

    case 'rev':
        if(myArgs.length >= 2) {
            var str = [];
            for(var i = myArgs.length-2; i >= 0; i--) {
                str = str + ' ' + myArgs[i];
            }
            str = str.trim();
            console.log(str);
        }else{
            console.log('ERROR: rev command uses at least 1 parameters');
        }
        break;

    case 'uniq':
        if(myArgs.length >= 2) {
            var str = [];
            var list = [];
            var f = 0;
            for(var i = 0; i < myArgs.length-1; i++) {
                for(var j = 0; j < list.length && f == 0; j++) {
                    if(myArgs[i] == list[j]) {
                        f++;
                    }
                }
                if(f == 0) {
                    list.push(myArgs[i]);
                }
                f = 0;
            }
            for(var i = 0; i < list.length; i++) {
                str = str + ' ' + list[i];
            }
            str = str.trim();
            console.log(str);
        }else{
            console.log('ERROR: uniq command uses at least 1 parameters');
        }
        break;

    case 'max':
        if(myArgs.length >= 2) {
            var max = parseFloat(myArgs[0]);
            for(var i = 1; i < myArgs.length-1; i++) {
                if(max < parseFloat(myArgs[i])) {
                    max = parseFloat(myArgs[i]);
                }
            } 
            console.log(max);
        }else{
            console.log('ERROR: maximum command uses at least one parameter');
        }
        break;

    case 'min':
        if(myArgs.length >= 2) {
            var min = parseFloat(myArgs[0]);
            for(var i = 1; i < myArgs.length-1; i++) {
                if(min > parseFloat(myArgs[i])) {
                    min = parseFloat(myArgs[i]);
                }
            }
            console.log(min);
        }else{
            console.log('ERROR: minimum command uses at least one parameter');
        }
        break;

    case 'cos':
        if(myArgs.length == 2) {
            var cos = Math.cos(parseFloat(myArgs[0]));
            console.log(cos);
        }else{
            console.log('ERROR: cosinus command uses one parameter');
        }
        break;

    case 'sin':
        if(myArgs.length == 2) {
            var sin = Math.sin(parseFloat(myArgs[0]));
            console.log(sin);
        }else{
            console.log('ERROR: sinus command uses one parameter');
        }
        break;

    default:
        console.log('ERROR: this command does not exist, use help to see available commands');
}
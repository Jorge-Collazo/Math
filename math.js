//global variables
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var output = document.getElementById("output");
//Functions
function leastToGreat(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(one, two, three, four, five, six);
    
    if(o1 === one){
        one = two;
        two = three;
        three = four;
        four = five;
        five = six;
    }else if(o1 === two){
        one = one;
        two = three;
        three = four;
        four = five;
        five = six;
    }else if(o1 === three){
        one = one;
        two = two;
        three = four;
        four = five;
        five = six;
    }else if(o1 === four){
        one = one;
        two = two;
        three = three;
        four = five;
        five = six;
    }else if(o1 === five){
        one = one;
        two = two;
        three = three;
        four = four;
        five = six;
    }else if(o1 === six){
        one = one;
        two = two;
        three = three;
        four = four;
        five = five;
    }
    

    o2 = Math.min(one, two, three, four, five);

    if(o2 === one){
        one === two;
        two = three;
        three = four;
        four = five;
    }else if(o2 === two){
        one = one;
        two = three;
        three = four;
        four = five;
    }else if(o2 === three){
        one = one;
        two = two;
        three = four;
        four = five;
    }else if(o2 === four){
        one = one;
        two = two;
        three = three;
        four = five;
    }else if(o2 === five){
        one = one;
        two = two;
        three = three;
        four = four;
    }

    o3 = Math.min(one, two, three, four);

    if(o3 === one){
        one = two;
        two = three;
        three = four;
    }else if(o3 === two){
        one = one;
        two = three;
        three = four;
    }else if(o3 === three){
        one = one;
        two = two;
        three = four;
    }else if(o3 === four){
        one = one;
        two = two;
        three = three;
    }

    o4 = Math.min(one, two, three);

    if(o4 === one){
        one = two;
        two = three;
    }else if(o4 === two){
        one = one;
        two = three;
    }else if(o4 === three){
        one = one;
        two = two;
    }

    o5 = Math.min(one, two);

    if(o5 === one){
        one = two;
    }else if(o5 === two){
        one = one;
    }

    o6 = one

    output.innerHTML = o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + ", " + o6 + ", "; 
}
function median(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    output.innerHTML="";

}
function large(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    output.innerHTML="";

    var largest = Math.max(one, two, three, four, five, six);
    output.innerHTML = largest;
    return true;

    //Semi Works, will not identify duplicate numbers as the largest

    /*if(one > two && one > three && one > four && one > five && one > six){
        output.innerHTML = one;
    }else if(two > one && two > three && two > four && two > five && two > six){
        output.innerHTML = two;
    }else if(three > one && three > two && three > four && three > five && three > six){
        output.innerHTML = three;
    }else if(four > one && four > two && four > three && four > five && four > six){
        output.innerHTML = four;
    }else if(five > one && five > two && five > three && five > four && five > six){
        output.innerHTML = five;
    }else if(six > one && six > two && six > three && six > four && six > five){
        output.innerHTML = six;
    }*/
}

function small(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    output.innerHTML="";
    var smallest = Math.min(one, two, three, four, five, six);
    output.innerHTML = smallest;
    return true;

    //Semi Works, will not identify duplicate numbers as the smallest

    /*if(one < two && one < three && one < four && one < five && one < six){
        output.innerHTML = one;
    }else if(two < one && two < three && two < four && two < five && two < six){
        output.innerHTML = two;
    }else if(three < one && three < two && three < four && three < five && three < six){
        output.innerHTML = three;
    }else if(four < one && four < two && four < three && four < five && four < six){
        output.innerHTML = four;
    }else if(five < one && five < two && five < three && five < four && five < six){
        output.innerHTML = five;
    }else if(six < one && six < two && six < three && six < four && six < five){
        output.innerHTML = six;
    }*/
}
function mean(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    output.innerHTML="";

    output.innerHTML += (one + two + three + four + five + six) / (6);
    return true;
}
function mode(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    output.innerHTML="";

    
}
function range(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    output.innerHTML="";

    var smallest = Math.min(one, two, three, four, five, six);
    var largest = Math.max(one, two, three, four, five, six);
    output.innerHTML = largest - smallest;
}
function duplicate(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    output.innerHTML="";
    if(one === two || one === three || one === four || one === five || one === six){
        output.innerHTML += " "+one;
    }if(two === three || two === four || two === five || two === six){
        output.innerHTML += " "+two;
    }if(three === four || three === five || three === six){
        output.innerHTML += " "+three;
    }if(four === five || four === six){
        output.innerHTML += " "+four;
    }if(five === six){
        output.innerHTML += " "+five;
    }
}
function unique(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    output.innerHTML="";
    if(one !== two && one !== three && one !== four && one !== five && one !== six){
        output.innerHTML += " "+one;
    }if(two !== one && two !== three && two !== four && two !== five && two !== six){
        output.innerHTML += " "+two;
    }if(three !== one && three !== two && three !== four && three !== five && three !== six){
        output.innerHTML += " "+three;
    }if(four !== one && four !== two && four !== three && four !== five && four !== six){
        output.innerHTML += " "+four;
    }if(five !== one && five !== two && five !== three && five !== four && five !== six){
        output.innerHTML += " "+five;
    }if(six !== one && six !== two && six !== three && six !== four && six !== five){
        output.innerHTML += " "+six;
    }
    return true;


    //Didn't work, 
    /*if(one === two || one === three || one === four || one === five || one === six){
        output.innerHTML = "";
    }else{
        output.innerHTML = one;
    }if(two === three || two === four || two === five || two === six){
        output.innerHTML += "";
    }else{
        output.innerHTML += two;
    }if(three === four || three === five || three === six){
        output.innerHTML += "";
    }else{
        output.innerHTML += three;
    }if(four === five || four === six){
        output.innerHTML = "";
    }else{
        output.innerHTML += four;
    }if(num5 === six){
        output.innerHTML = "";
    }else{
        output.innerHTML += five;
    }if(six !== one || six !== two || six !== three || six !== four || six !== five){
        output.innerHTML = "";
    }*/
}


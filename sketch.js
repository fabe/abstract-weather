var mymap;

var lat = 52;
var lon = 13;
var x = 0;
var y = 0;

var counter = [];
var city;

var square = 35.71;
var rectX = -square;
var rectY = 0;

var sum = 0;
var avg = 0;
var largest = 0;
var lowest = 0;

var c1, c2, c3;

function kimonoCallback(data) {
    var w = data.results.collection1;
    for (var i = 0; i < w.length; i++) {
        var celsius = Math.round(w[i].avg);
        counter.push(celsius);
    }
    largest = Math.max.apply(Math, counter);
    lowest = Math.min.apply(Math, counter);

    for (var i = 0; i < counter.length; i++) {
        sum += parseInt(counter[i], 10);
    }
    avg = sum / counter.length;

    city = data.city;
};

$.ajax({
    "url": "weather.json",
        "crossDomain": false,
        "dataType": "jsonp"
});

function preload() {
    mymap = loadImage("world.png");
};

function setup() {
    createCanvas(mymap.width, mymap.height - square);
    x = map(lon, -180, 180, 0, width);
    y = map(lat, 90, -90, 0, height);

    image(mymap, 0, 0);

    c1 = color(50, 165, 160);
    c2 = color(217, 235, 161);
    c3 = color(12, 71, 79);

    $("canvas").css({
        border: "25px solid " + c3.colorString
    });
    $("#city").text(String(city));
};

function draw() {
    for (var j = 0; j <= 364; j++) {
        var lerp = map(counter[j], lowest, largest, 0, 1);

        var c = lerpColor(c1, c2, lerp);

        if (rectX >= mymap.width - square * 2) {
            rectY = rectY + square;
            rectX = 0;
        } else {
            rectX = rectX + square;
        }
        fill(c);
        noStroke();
        rect(rectX, rectY, square, square);

        // text(String(j),rectX,rectY,square,square);
    }

    fill(0);
    stroke(c3);
    strokeWeight(25);

    line(0, y, width, y);
    line(x, 0, x, width);

    /* 
    city = city.replace(/[aeiou]/ig,'').toUpperCase();
    textSize(200);
    textFont("Apercu, Helvetica");
    textStyle(BOLD);
    textAlign(CENTER);
    noStroke();
    fill(26, 25, 25);
    text(city, 0, 0, width, height);
    */
};
calmly = '';
backery = "";
objects = [];

function preload(){
    calmly = loadImage("KutieKitten and DiastrousDogs.jpg");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    picket = ml5.objectDetector("cocossd", bloodTroth);
    document.getElementById("teddy").innerHtMl = "Status :  Processing Objects";
}

function bloodTroth(){
    console.log("cocossd initialised");
    picket.detect(calmly, bloodOath);
    backery = true;
}

function bloodOath(errors, results){
    if (errors){
        console.error(errors);
    }
    else{
        console.log(results);
        objects = results;
    }
}


function draw(){
    image(calmly, 0, 0, 500, 500);
  /*  fill("#3232a8");
    text("Kitten", 140, 60);
    noFill();
    stroke("#3232a8");
    rect(140, 70, 230, 230);
    */


    if(backery != ""){
        for(i =0; i < objects.length; i++){
            document.getElementById("teddy").innerHTML = "Status :  Objects Detected";
            percent = floor(objects[i].confidence * 100);
            fill("#3232a8");
            text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
            noFill();
            stroke("#3232a8");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

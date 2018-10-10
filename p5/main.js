function setup(){
    createCanvas(window.innerWidth
        ,window.innerHeight);
    // background(0,0,255);
    // line(100,100,500,100);
    // line(300,300,100,500);
    // rect(350,350,100,200)
}

function draw()
{
    if (mouseIsPressed) {
        fill(255,255,255);
    }
    else
    {
        fill(Math.random()*255,Math.random()*255,Math.random()*255);
    }
        stroke(255,255,255);

        // stroke(Math.random()*255,Math.random()*255,Math.random()*255);
if (random()<0.5) {
    ellipse(mouseX,mouseY,random(20,80),random(20,80));
} else {
    rect(mouseX,mouseY,50,50)
}
}
// function draw()
// {
//     stroke(Math.random()*255,Math.random()*255,Math.random()*255);
//     // line(0,0,mouseX,mouseY);
//     line(Math.random()*window.innerWidth,Math.random()*window.innerHeight,mouseX,mouseY);
// }
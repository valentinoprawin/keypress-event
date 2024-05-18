canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
window.addeventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keycode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
     if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
     if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
     if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}
function up()
{
    if(rover_y >=0)
    {
        rover_y =rover_y - 10:
        console.log("when up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function up()
{
    if(rover_y >=0)
    {
        rover_y =rover_y - 10:
        console.log("when up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
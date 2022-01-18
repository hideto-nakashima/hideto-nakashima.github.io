var N = 100;
var sep =  Math.floor( N / 20 );
var cube = new Array(48);

for ( var i = 0; i < 48; i++ ){
	cube[ i ] = i;
}

var color = ['red', 'yellow', 'green', 'orange', 'white', 'blue'];

document.onkeydown = keydown;

onload = function(){
	Format();
	MakeFrame();
}

function Format(){
	ClearCanvas();
	MakeFrame();
}

function ClearCanvas(){
	var canvas = document.getElementById("canvas_plane");
	if ( ! canvas || ! canvas.getContext ) {
	    return false;
	  }
	  /* 2DƒRƒ“ƒeƒLƒXƒg */
	  var ctx1 = canvas.getContext('2d');
	  ctx1.clearRect(0, 0, 16 * N, 8 * N);
}
function MakeFrame(){
	var canvas = document.getElementById("canvas_plane");
	if ( ! canvas || ! canvas.getContext ) {
	    return false;
	}
	/* 2DƒRƒ“ƒeƒLƒXƒg */
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = 'black';
	ctx.fillRect( 0 , 0 , 1600 , 900 );
	ctx.save();
	/*Front*/
	ctx.setTransform(-1,-0.5,0,1,3.5 * N - sep / 2 , 4 * N );
	ctx.fillStyle = color[ Math.floor( cube[ 2 ] / 8 ) ];
	ctx.fillRect( 0 , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 1 ] / 8 ) ];
	ctx.fillRect( N + sep , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 0 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 4 ] / 8 ) ];
	ctx.fillRect( 0 , N + sep , N , N );
	ctx.fillStyle = color[ 0 ];
	ctx.fillRect( N + sep , N + sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 3 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , N + sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 7 ] / 8 ) ];
	ctx.fillRect( 0 , 2 * N + 2 * sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 6 ] / 8 ) ];
	ctx.fillRect( N + sep , 2 * N + 2 * sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 5 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , 2 * N + 2 * sep , N , N );
	/*Right*/
	ctx.setTransform(1,-0.5,0,1,3.5 * N + sep / 2, 4 * N);
	ctx.fillStyle = color[ Math.floor( cube[ 8 ] / 8 ) ];
	ctx.fillRect( 0 , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 9 ] / 8 ) ];
	ctx.fillRect( N + sep , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 10 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 11 ] / 8 ) ];
	ctx.fillRect( 0 , N + sep , N , N );
	ctx.fillStyle = color[ 1 ];
	ctx.fillRect( N + sep , N + sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 12 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , N + sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 13 ] / 8 ) ];
	ctx.fillRect( 0 , 2 * N + 2 * sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 14 ] / 8 ) ];
	ctx.fillRect( N + sep , 2 * N + 2 * sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 15 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , 2 * N + 2 * sep , N , N );
	/*Up*/
	ctx.setTransform(1,-0.5,-1,-0.5,3.5 * N , 4 * N - sep / 2 );
	ctx.fillStyle = color[ Math.floor( cube[ 39 ] / 8 ) ];
	ctx.fillRect( 0 , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 36 ] / 8 ) ];
	ctx.fillRect( N + sep , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 34 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 38 ] / 8 ) ];
	ctx.fillRect( 0 , N + sep , N , N );
	ctx.fillStyle = color[ 4 ];
	ctx.fillRect( N + sep , N + sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 33 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , N + sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 37 ] / 8 ) ];
	ctx.fillRect( 0 , 2 * N + 2 * sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 35 ] / 8 ) ];
	ctx.fillRect( N + sep , 2 * N + 2 * sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 32 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , 2 * N + 2 * sep , N , N );
	/*Left*/
	ctx.setTransform(-1,0.5,0,-1,11 * N - sep / 2 , 4 * N );
	ctx.fillStyle = color[ Math.floor( cube[ 21 ] / 8 ) ];
	ctx.fillRect( 0 , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 22 ] / 8 ) ];
	ctx.fillRect( N + sep , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 23 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 19 ] / 8 ) ];
	ctx.fillRect( 0 , N + sep , N , N );
	ctx.fillStyle = color[ 2 ];
	ctx.fillRect( N + sep , N + sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 20 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , N + sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 16 ] / 8 ) ];
	ctx.fillRect( 0 , 2 * N + 2 * sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 17 ] / 8 ) ];
	ctx.fillRect( N + sep , 2 * N + 2 * sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 18 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , 2 * N + 2 * sep , N , N );
	/*Back*/
	ctx.setTransform(1,0.5,0,-1,11 * N + sep / 2, 4 * N);
	ctx.fillStyle = color[ Math.floor( cube[ 31 ] / 8 ) ];
	ctx.fillRect( 0 , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 30 ] / 8 ) ];
	ctx.fillRect( N + sep , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 29 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 28 ] / 8 ) ];
	ctx.fillRect( 0 , N + sep , N , N );
	ctx.fillStyle = color[ 3 ];
	ctx.fillRect( N + sep , N + sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 27 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , N + sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 26 ] / 8 ) ];
	ctx.fillRect( 0 , 2 * N + 2 * sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 25 ] / 8 ) ];
	ctx.fillRect( N + sep , 2 * N + 2 * sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 24 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , 2 * N + 2 * sep , N , N );
	/*Down*/
	ctx.setTransform(-1,0.5,1,0.5,11 * N , 4 * N + sep / 2 );
	ctx.fillStyle = color[ Math.floor( cube[ 45 ] / 8 ) ];
	ctx.fillRect( 0 , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 43 ] / 8 ) ];
	ctx.fillRect( N + sep , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 40 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , 0 , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 46 ] / 8 ) ];
	ctx.fillRect( 0 , N + sep , N , N );
	ctx.fillStyle = color[ 5 ];
	ctx.fillRect( N + sep , N + sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 41 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , N + sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 47 ] / 8 ) ];
	ctx.fillRect( 0 , 2 * N + 2 * sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 44 ] / 8 ) ];
	ctx.fillRect( N + sep , 2 * N + 2 * sep , N , N );
	ctx.fillStyle = color[ Math.floor( cube[ 42 ] / 8 ) ];
	ctx.fillRect( 2 * N + 2 * sep , 2 * N + 2 * sep , N , N );
	ctx.restore();
}

function keydown(){
	if (event.keyCode == 32){
		for( var i = 0; i < 48; i++ ){
			cube[i] = i;
		}
		Format();
		document.getElementById("labelFU").innerHTML = 0;
		document.getElementById("labelFUFU").innerHTML = 0;
		document.getElementById("labelFive").innerHTML = 0;
		document.getElementById("labelSeven").innerHTML = 0;
		document.getElementById("labelEleven").innerHTML = 0;
		document.getElementById("labelLongest").innerHTML = 0;
	}
	if (event.keyCode == 70){
		/* F ‚ª‰Ÿ‚³‚ê‚½‚Æ‚« Front ‚ðŽžŒv‰ñ‚è‚É‰ñ“]*/
		/* Shift ‚ª‰Ÿ‚³‚ê‚Ä‚¢‚é‚Æ‚«‚Í‹tŽžŒv‰ñ‚è*/
		if (window.event.shiftKey){
		rotationF();
		rotationF();
		rotationF();
		}
		else{
		rotationF();
		}
		Format();
	}
	if (event.keyCode == 82){
		/* R ‚ª‰Ÿ‚³‚ê‚½‚Æ‚« Right ‚ðŽžŒv‰ñ‚è‚É‰ñ“]*/
		/* Shift ‚ª‰Ÿ‚³‚ê‚Ä‚¢‚é‚Æ‚«‚Í‹tŽžŒv‰ñ‚è*/
		if (window.event.shiftKey){
		rotationR();
		rotationR();
		rotationR();
		}
		else{
		rotationR();
		}
		Format();
	}	
	if (event.keyCode == 76){
		/* L ‚ª‰Ÿ‚³‚ê‚½‚Æ‚« Left ‚ðŽžŒv‰ñ‚è‚É‰ñ“]*/
		/* Shift ‚ª‰Ÿ‚³‚ê‚Ä‚¢‚é‚Æ‚«‚Í‹tŽžŒv‰ñ‚è*/
		if (window.event.shiftKey){
		rotationL();
		rotationL();
		rotationL();
		}
		else{
		rotationL();
		}
		Format();
	}
	if (event.keyCode == 66){
		/* B ‚ª‰Ÿ‚³‚ê‚½‚Æ‚« Left ‚ðŽžŒv‰ñ‚è‚É‰ñ“]*/
		/* Shift ‚ª‰Ÿ‚³‚ê‚Ä‚¢‚é‚Æ‚«‚Í‹tŽžŒv‰ñ‚è*/
		if (window.event.shiftKey){
		rotationB();
		rotationB();
		rotationB();
		}
		else{
		rotationB();
		}
		Format();
	}
	if (event.keyCode == 85){
		/* U ‚ª‰Ÿ‚³‚ê‚½‚Æ‚« Left ‚ðŽžŒv‰ñ‚è‚É‰ñ“]*/
		/* Shift ‚ª‰Ÿ‚³‚ê‚Ä‚¢‚é‚Æ‚«‚Í‹tŽžŒv‰ñ‚è*/
		if (window.event.shiftKey){
		rotationU();
		rotationU();
		rotationU();
		}
		else{
		rotationU();
		}
		Format();
	}
	if (event.keyCode == 68){
		/* D ‚ª‰Ÿ‚³‚ê‚½‚Æ‚« Left ‚ðŽžŒv‰ñ‚è‚É‰ñ“]*/
		/* Shift ‚ª‰Ÿ‚³‚ê‚Ä‚¢‚é‚Æ‚«‚Í‹tŽžŒv‰ñ‚è*/
		if (window.event.shiftKey){
		rotationD();
		rotationD();
		rotationD();
		}
		else{
		rotationD();
		}
		Format();
	}
}

function rotationF(){
	var temp;
	temp = cube[ 5 ];
	cube[ 5 ] = cube[ 7 ];
	cube[ 7 ] = cube[ 2 ];
	cube[ 2 ] = cube[ 0 ];
	cube[ 0 ] = temp;
	temp = cube[ 3 ];
	cube[ 3 ] = cube[ 6 ];
	cube[ 6 ] = cube[ 4 ];
	cube[ 4 ] = cube[ 1 ];
	cube[ 1 ] = temp;
	temp = cube[ 37 ];
	cube[ 37 ] = cube[ 23 ];
	cube[ 23 ] = cube[ 42 ];
	cube[ 42 ] = cube[ 8 ];
	cube[ 8 ] = temp;
	temp = cube[ 38 ];
	cube[ 38 ] = cube[ 20 ];
	cube[ 20 ] = cube[ 41 ];
	cube[ 41 ] = cube[ 11 ];
	cube[ 11 ] = temp;
	temp = cube[ 39 ];
	cube[ 39 ] = cube[ 18 ];
	cube[ 18 ] = cube[ 40 ];
	cube[ 40 ] = cube[ 13 ];
	cube[ 13 ] = temp;
}

function rotationR(){
	var temp;
	temp = cube[ 8 ];
	cube[ 8 ] = cube[ 13 ];
	cube[ 13 ] = cube[ 15 ];
	cube[ 15 ] = cube[ 10 ];
	cube[ 10 ] = temp;
	temp = cube[ 9 ];
	cube[ 9 ] = cube[ 11 ];
	cube[ 11 ] = cube[ 14 ];
	cube[ 14 ] = cube[ 12 ];
	cube[ 12 ] = temp;
	temp = cube[ 39 ];
	cube[ 39 ] = cube[ 7 ];
	cube[ 7 ] = cube[ 47 ];
	cube[ 47 ] = cube[ 24 ];
	cube[ 24 ] = temp;
	temp = cube[ 36 ];
	cube[ 36 ] = cube[ 4 ];
	cube[ 4 ] = cube[ 44 ];
	cube[ 44 ] = cube[ 27 ];
	cube[ 27 ] = temp;
	temp = cube[ 34 ];
	cube[ 34 ] = cube[ 2 ];
	cube[ 2 ] = cube[ 42 ];
	cube[ 42 ] = cube[ 29 ];
	cube[ 29 ] = temp;
}
function rotationL(){
	var temp;
	temp = cube[ 16 ];
	cube[ 16 ] = cube[ 21 ];
	cube[ 21 ] = cube[ 23 ];
	cube[ 23 ] = cube[ 18 ];
	cube[ 18 ] = temp;
	temp = cube[ 17 ];
	cube[ 17 ] = cube[ 19 ];
	cube[ 19 ] = cube[ 22 ];
	cube[ 22 ] = cube[ 20 ];
	cube[ 20 ] = temp;
	temp = cube[ 32 ];
	cube[ 32 ] = cube[ 31 ];
	cube[ 31 ] = cube[ 40 ];
	cube[ 40 ] = cube[ 0 ];
	cube[ 0 ] = temp;
	temp = cube[ 35 ];
	cube[ 35 ] = cube[ 28 ];
	cube[ 28 ] = cube[ 43 ];
	cube[ 43 ] = cube[ 3 ];
	cube[ 3 ] = temp;
	temp = cube[ 37 ];
	cube[ 37 ] = cube[ 26 ];
	cube[ 26 ] = cube[ 45 ];
	cube[ 45 ] = cube[ 5 ];
	cube[ 5 ] = temp;
}
function rotationB(){
	var temp;
	temp = cube[ 24 ];
	cube[ 24 ] = cube[ 29 ];
	cube[ 29 ] = cube[ 31 ];
	cube[ 31 ] = cube[ 26 ];
	cube[ 26 ] = temp;
	temp = cube[ 25 ];
	cube[ 25 ] = cube[ 27 ];
	cube[ 27 ] = cube[ 30 ];
	cube[ 30 ] = cube[ 28 ];
	cube[ 28 ] = temp;
	temp = cube[ 10 ];
	cube[ 10 ] = cube[ 47 ];
	cube[ 47 ] = cube[ 21 ];
	cube[ 21 ] = cube[ 32 ];
	cube[ 32 ] = temp;
	temp = cube[ 12 ];
	cube[ 12 ] = cube[ 46 ];
	cube[ 46 ] = cube[ 19 ];
	cube[ 19 ] = cube[ 33 ];
	cube[ 33 ] = temp;
	temp = cube[ 15 ];
	cube[ 15 ] = cube[ 45 ];
	cube[ 45 ] = cube[ 16 ];
	cube[ 16 ] = cube[ 34 ];
	cube[ 34 ] = temp;
}
function rotationU(){
	var temp;
	temp = cube[ 32 ];
	cube[ 32 ] = cube[ 37 ];
	cube[ 37 ] = cube[ 39 ];
	cube[ 39 ] = cube[ 34 ];
	cube[ 34 ] = temp;
	temp = cube[ 33 ];
	cube[ 33 ] = cube[ 35 ];
	cube[ 35 ] = cube[ 38 ];
	cube[ 38 ] = cube[ 36 ];
	cube[ 36 ] = temp;
	temp = cube[ 0 ];
	cube[  0 ] = cube[  8 ];
	cube[  8 ] = cube[ 24 ];
	cube[ 24 ] = cube[ 16 ];
	cube[ 16 ] = temp;
	temp = cube[  1 ];
	cube[  1 ] = cube[  9 ];
	cube[  9 ] = cube[ 25 ];
	cube[ 25 ] = cube[ 17 ];
	cube[ 17 ] = temp;
	temp = cube[  2 ];
	cube[  2 ] = cube[ 10 ];
	cube[ 10 ] = cube[ 26 ];
	cube[ 26 ] = cube[ 18 ];
	cube[ 18 ] = temp;
}
function rotationD(){
	var temp;
	temp = cube[ 40 ];
	cube[ 40 ] = cube[ 45 ];
	cube[ 45 ] = cube[ 47 ];
	cube[ 47 ] = cube[ 42 ];
	cube[ 42 ] = temp;
	temp = cube[ 41 ];
	cube[ 41 ] = cube[ 43 ];
	cube[ 43 ] = cube[ 46 ];
	cube[ 46 ] = cube[ 44 ];
	cube[ 44 ] = temp;
	temp = cube[  5 ];
	cube[  5 ] = cube[ 21 ];
	cube[ 21 ] = cube[ 29 ];
	cube[ 29 ] = cube[ 13 ];
	cube[ 13 ] = temp;
	temp = cube[  6 ];
	cube[  6 ] = cube[ 22 ];
	cube[ 22 ] = cube[ 30 ];
	cube[ 30 ] = cube[ 14 ];
	cube[ 14 ] = temp;
	temp = cube[  7 ];
	cube[  7 ] = cube[ 23 ];
	cube[ 23 ] = cube[ 31 ];
	cube[ 31 ] = cube[ 15 ];
	cube[ 15 ] = temp;
}

function FU( ){
	rotationF();
	rotationU();
	rotationU();
	rotationU();
	document.getElementById("labelFU").innerHTML++;
	Format();
}
function FUFU( ){
	rotationF();
	rotationU();
	rotationU();
	rotationU();
	rotationF();
	rotationF();
	rotationF();
	rotationU();
	document.getElementById("labelFUFU").innerHTML++;
	Format();
}

function rotationFive(){
	rotationR();
	rotationR();
	rotationR();
	rotationU();
	rotationR();
	rotationU();
	document.getElementById("labelFive").innerHTML++;
	Format();
}

function rotationSeven(){
	rotationD();
	rotationD();
	rotationR();
	rotationD();
	rotationD();
	rotationR();
	rotationU();
	rotationU();
	rotationL();
	rotationU();
	rotationU();
	rotationL();
	document.getElementById("labelSeven").innerHTML++;
	Format();
}

function rotationEleven(){
	rotationR();
	rotationR();
	rotationR();
	rotationU();
	rotationF();
	rotationF();
	rotationF();
	rotationL();
	rotationR();
	rotationR();
	rotationR();
	rotationU();
	rotationF();
	rotationF();
	rotationF();
	rotationL();
	rotationR();
	rotationR();
	rotationR();
	rotationU();
	rotationF();
	rotationF();
	rotationF();
	rotationL();
	document.getElementById("labelEleven").innerHTML++;
	Format();
}

function rotationLongest(){
	rotationR();
	rotationF();
	rotationF();
	rotationB();
	rotationB();
	rotationB();
	rotationU();
	rotationB();
	rotationB();
	rotationB();
	document.getElementById("labelLongest").innerHTML++;
	Format();	
}
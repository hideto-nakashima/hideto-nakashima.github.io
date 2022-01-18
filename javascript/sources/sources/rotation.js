/**
 *
 */

var deg = 0;
var N = 200;
var origin_X = 1.5 * N;
var origin_Y = 1.5 * N;

document.onkeydown = keydown;

onload = function() {
	  DrawSquare(deg);
	  MakeFrame();
};

function planeFormat(){
	Format();
	deg = 0;
    DrawSquare(deg);
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
	  /* 2Dコンテキスト */
	  var ctx1 = canvas.getContext('2d');
	  ctx1.clearRect(0, 0, 3 * N, 3 * N);
}

function MakeFrame(){
	var canvas = document.getElementById("canvas_plane");
	if ( ! canvas || ! canvas.getContext ) {
	    return false;
	}
	/* 2Dコンテキスト */
	var ctx = canvas.getContext('2d');
	ctx.save();
	/* x軸を描写する */
	ctx.beginPath();
	ctx.moveTo(0, origin_Y);
	ctx.lineTo(2 * origin_X, origin_Y);
	ctx.closePath();
	ctx.stroke();
	/* y軸を描写する */
	ctx.beginPath();
	ctx.moveTo(origin_X, 0);
	ctx.lineTo(origin_X, 2 * origin_Y);
	ctx.closePath();
	ctx.stroke();
	/* X-座標の補助線を引く */
	ctx.beginPath();
	ctx.moveTo(0.5 * N, origin_Y - N / 20);
	ctx.lineTo(0.5 * N, origin_Y + N / 20);
	ctx.moveTo(N, origin_Y - N / 20);
	ctx.lineTo(N, origin_Y + N / 20);
	ctx.moveTo(2 * N, origin_Y - N / 20);
	ctx.lineTo(2 * N, origin_Y + N / 20);
	ctx.moveTo(2.5 * N, origin_Y - N / 20);
	ctx.lineTo(2.5 * N, origin_Y + N / 20);
	/* Y-座標の補助線を引く */
	ctx.moveTo(origin_X - N / 20, 0.5 * N);
	ctx.lineTo(origin_X + N / 20, 0.5 * N);
	ctx.moveTo(origin_X - N / 20, N);
	ctx.lineTo(origin_X + N / 20, N);
	ctx.moveTo(origin_X - N / 20, 2 * N);
	ctx.lineTo(origin_X + N / 20, 2 * N);
	ctx.moveTo(origin_X - N / 20, 2.5 * N);
	ctx.lineTo(origin_X + N / 20, 2.5 * N);
	ctx.closePath();
	ctx.stroke();
	/*角度情報を表示する*/
	ctx.font = "14px 'ＭＳ ゴシック'";
	ctx.fillText(' \u03B8 = '+ deg % 360, 20, 20);
	ctx.restore();
}

function keydown(){
	if (event.keyCode == 37){
		deg += 3;
		Format();
		DrawSquare(deg);
	}
	if (event.keyCode == 39){
		deg -= 3;
		Format();
		DrawSquare(deg);
	}
}

/* deg0 だけ回転された正方形を描く */
function DrawSquare(deg0){
	var theta = deg0 / 180 * Math.PI;
	/* canvas要素のノードオブジェクト */
	var canvas = document.getElementById('canvas_plane');
	/* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
	if ( ! canvas || ! canvas.getContext ) {
	  return false;
	}
	/* 2Dコンテキスト */
	var ctx = canvas.getContext('2d');
	/* 四角を描く */
	ctx.beginPath();
	ctx.moveTo(origin_X, origin_X);
	ctx.lineTo(origin_X + N * Math.cos(theta), origin_Y - N * Math.sin(theta));
	ctx.lineTo(origin_X + N * (Math.cos(theta) - Math.sin(theta)), origin_Y - N * (Math.sin(theta) + Math.cos(theta)));
	ctx.lineTo(origin_X - N * Math.sin(theta), origin_Y - N * Math.cos(theta));
	ctx.closePath();
	ctx.globalAlpha = 0.5;
	ctx.strokeStyle = 'lightskyblue';
	ctx.fillStyle = 'lightskyblue';
	ctx.fill();
	ctx.stroke();
	ctx.strokeStyle = 'black';
	ctx.fillStyle = 'black';
	ctx.globalAlpha = 1.0;
}

function increaseDeg(){
	deg += 3;
	Format();
	DrawSquare(deg);
}

function decreaseDeg(){
	deg -= 3;
	Format();
	DrawSquare(deg);
}
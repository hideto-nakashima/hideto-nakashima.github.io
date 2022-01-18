/**
 *
 */

var trans_X = 0;
var N = 200;
var origin_X = 1.5 * N;
var origin_Y = 1 * N;

document.onkeydown = keydown;

onload = function() {
	  DrawSquare(trans_X);
	  MakeFrame();
};

function planeFormat(){
	Format();
	trans_X = 0;
    DrawSquare(trans_X);
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
	ctx.lineTo(origin_X, 1.25 * origin_Y);
	ctx.closePath();
	ctx.stroke();
	/* X-座標の補助線を引く */
	ctx.beginPath();
	ctx.moveTo(0.75 * N, origin_Y - N / 20);
	ctx.lineTo(0.75 * N, origin_Y + N / 20);
	ctx.moveTo(2.25 * N, origin_Y - N / 20);
	ctx.lineTo(2.25 * N, origin_Y + N / 20);
	/* Y-座標の補助線を引く */
	ctx.moveTo(origin_X - N / 20, 0.25 * N);
	ctx.lineTo(origin_X + N / 20, 0.25 * N);
	ctx.closePath();
	ctx.stroke();
	/*平行移動量の情報を表示する*/
	ctx.font = "14px 'ＭＳ ゴシック'";
	ctx.fillText(' t = '+ ( 150 + trans_X) / 150, 20, 20);
	ctx.restore();
}

function keydown(){
	/* ← キーが押された場合 */
	if (event.keyCode == 37){
		if (trans_X > - 2.25 * N){
			trans_X -= 3;
		}
		Format();
		DrawSquare(trans_X);
	}
	/* → キーが押された場合 */
	if (event.keyCode == 39){
		if(trans_X < 0.75 * N){
			trans_X += 3;
		}
		Format();
		DrawSquare(trans_X);
	}
}

/* deg0 だけ回転された正方形を描く */
function DrawSquare(trans_0){
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
	ctx.moveTo(origin_X, origin_Y);
	ctx.lineTo(origin_X + 0.75 * N + trans_0, origin_Y);
	ctx.lineTo(origin_X + 0.75 * N + trans_0, origin_Y - 0.75 * N);
	ctx.lineTo(origin_X, origin_Y - 0.75 * N);
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
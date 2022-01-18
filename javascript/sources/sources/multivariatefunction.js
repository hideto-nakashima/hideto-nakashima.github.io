/**
 *
 */

var theta = 0;
var trans_X = 0;
var N = 100;
var origin_X = 4 * N;
var origin_Y = 1 * N;

document.onkeydown = keydown;

onload = function() {
	  Format();
	  Draw( theta );
};

function planeFormat(){
	Format();
	theta = 0;
  Draw( theta );
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
	  ctx1.clearRect(0, 0, 5 * N, 2 * N);
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
	ctx.moveTo( origin_X - N, origin_Y);
	ctx.lineTo( origin_X + N, origin_Y);
	ctx.closePath();
	ctx.stroke();
	/* y軸を描写する */
	ctx.beginPath();
	ctx.moveTo(origin_X, 0);
	ctx.lineTo(origin_X, origin_Y + N);
	ctx.closePath();
	ctx.stroke();
	/* (-1,0)の補助線を引く */
	ctx.beginPath();
	ctx.moveTo( origin_X - .75 * N, origin_Y - N / 20);
	ctx.lineTo( origin_X - .75 * N, origin_Y + N / 20);
	/* (1,0)の補助線を引く */
	ctx.moveTo( origin_X + .75 * N, origin_Y - N / 20);
	ctx.lineTo( origin_X + .75 * N, origin_Y + N / 20);
	ctx.closePath();
	ctx.stroke();
	/* 円を描く */
	ctx.beginPath();
	ctx.arc( N, N, 0.75 * N, 0, Math.PI*2, true);
	ctx.stroke();
	/*平行移動量の情報を表示する*/
	ctx.font = "14px 'ＭＳ ゴシック'";
	ctx.fillText(' theta = '+ theta, 20, 20);
	ctx.restore();
}

function keydown(){
	/* ← キーが押された場合 */
	if (event.keyCode == 37){
		theta -= 2;
		Format();
		Draw( theta );
	}
	/* → キーが押された場合 */
	if (event.keyCode == 39){
		theta += 2;
		Format();
		Draw( theta );
	}
}

function Draw( degree ){
	var grad = degree * Math.PI / 180;
	/* canvas要素のノードオブジェクト */
	var canvas = document.getElementById('canvas_plane');
	/* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
	if ( ! canvas || ! canvas.getContext ) {
	  return false;
	}
	/* 2Dコンテキスト */
	var ctx = canvas.getContext('2d');
	/* 描画開始 */
	ctx.beginPath();
	ctx.moveTo( N - 0.75 * N * Math.cos( grad ), N - 0.75 * N * Math.sin( grad ));
	ctx.lineTo( N + 0.75 * N * Math.cos( grad ), N + 0.75 * N * Math.sin( grad ));
	ctx.closePath();
	ctx.globalAlpha = 0.5;
	ctx.strokeStyle = 'lightskyblue';
	ctx.stroke();
	/* 以上,右側の円上の直線の描画 */
	/* 以下,左側の切片の描画 */
	ctx.beginPath();
	ctx.moveTo( origin_X - N, origin_Y - 0.75 * N * Math.tan( grad ) / ( 1 + Math.tan( grad ) * Math.tan( grad )));
	ctx.lineTo( origin_X + N, origin_Y - 0.75 * N * Math.tan( grad ) / ( 1 + Math.tan( grad ) * Math.tan( grad )));
	ctx.closePath();
	ctx.stroke();
	ctx.strokeStyle = 'black';
	ctx.fillStyle = 'black';
	ctx.globalAlpha = 1.0;
}

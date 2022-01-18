var N = 100;
var step = N / 5;
var origin_X = 2 * N;
var origin_Y = 4 * N;

var varA = 1;
var varB = -1;
var varC = 2;
var varD = 1;

document.onkeydown = keydown;

onload = function() {
	  DrawSquare(varA, varB, varC, varD);
	  MakeFrame();
};

function planeFormat(){
	Format();
  DrawSquare(varA, varB, varC, varD);
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
	  ctx1.clearRect(0, 0, 6 * N, 5 * N);
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
	ctx.lineTo(6 * N, origin_Y);
	ctx.closePath();
	ctx.stroke();
	/* y軸を描写する */
	ctx.beginPath();
	ctx.moveTo(origin_X, 0);
	ctx.lineTo(origin_X, 5 * N);
	ctx.closePath();
	ctx.stroke();
	/* X-座標の補助線を引く */
	ctx.beginPath();
	ctx.moveTo(N, origin_Y - step);
	ctx.lineTo(N, origin_Y + step);
	ctx.moveTo(3 * N, origin_Y - step);
	ctx.lineTo(3 * N, origin_Y + step);
	ctx.moveTo(4 * N, origin_Y - step);
	ctx.lineTo(4 * N, origin_Y + step);
	ctx.moveTo(5 * N, origin_Y - step);
	ctx.lineTo(5 * N, origin_Y + step);
	/* Y-座標の補助線を引く */
	ctx.moveTo(origin_X - step, N);
	ctx.lineTo(origin_X + step, N);
	ctx.moveTo(origin_X - step, 2 * N);
	ctx.lineTo(origin_X + step, 2 * N);
	ctx.moveTo(origin_X - step, 3 * N);
	ctx.lineTo(origin_X + step, 3 * N);
	ctx.closePath();
	ctx.stroke();
	/*行列の情報を表示する*/
	ctx.font = "14px 'ＭＳ ゴシック'";
	ctx.fillText(''+ varA + '　	' + varB, 5 * N, 20);
	ctx.fillText(''+ varC + '　	' + varD, 5 * N, 40);
	ctx.restore();
}

function keydown(){
	/* 39 = →; 37 = ←; 38 = ↑; 40 = ↓*/
	if (event.keyCode == 39){
		if(
		(varA - 0.2 * varB    <= 4 ) &&
		((varA - 0.2 * varB) + varB <= 4 ) &&
		( varB     >=-2 ) &&
		((varA - 0.2 * varB) +  varB >=-2 ) &&
		((varC - 0.2 * varD)     >=-1 ) &&
		((varC - 0.2 * varD) + varD <= 4 ) &&
		(varD     >=-1 )
		){
			varA = Math.round( ( varA - 0.2 * varB ) * 100) / 100;
			varC = Math.round( ( varC - 0.2 * varD ) * 100) / 100;
		}
		Format();
		DrawSquare(varA, varB, varC, varD);
	}
	if (event.keyCode == 37){
		if(
		(varA + 0.2 * varB<= 4 ) &&
		((varA + 0.2 * varB) + varB <= 4 ) &&
		(varB >=-2 ) &&
		((varA + 0.2 * varB) + varB >=-2 ) &&
		(varC + 0.2 * varD>=-1 ) &&
		((varC + 0.2 * varD) + varD <= 4 ) &&
		(varD>=-1 )
		){
			varA = Math.round( ( varA + 0.2 * varB ) * 100 ) / 100;
			varC = Math.round( ( varC + 0.2 * varD ) * 100 ) / 100;
		}
		Format();
		DrawSquare(varA, varB, varC, varD);
	}
	if (event.keyCode == 38){
		if(
		(varA - 0.2 * varC <= 4 ) &&
		(varA - 0.2 * varC + varB - 0.2 * varD <= 4 ) &&
		(varB - 0.2 * varD >=-2 ) &&
		(varA - 0.2 * varC + varB - 0.2 * varD >=-2 ) &&
		(varC >=-1 ) &&
		(varC + varD <= 4 ) &&
		(varD >=-1 )
		){
			varA = Math.round( ( varA - 0.2 * varC ) * 100 ) / 100;
			varB = Math.round( ( varB - 0.2 * varD ) * 100 ) / 100;
		}
		Format();
		DrawSquare(varA, varB, varC, varD);
	} 
	if (event.keyCode == 40){
		if(
		(varA + 0.2 * varC<= 4 ) &&
		(varA + 0.2 * varC +varB + 0.2 * varD <= 4 ) &&
		(varB + 0.2 * varD     >=-2 ) &&
		(varA + 0.2 * varC + varB + 0.2 * varD >=-2 ) &&
		(varC >=-1 ) &&
		(varC + varD <= 4 ) &&
		(varD >=-1 )
		){
			varA = Math.round( ( varA + 0.2 * varC ) * 100 ) / 100;
			varB = Math.round( ( varB + 0.2 * varD ) * 100 ) / 100;
		}
		Format();
		DrawSquare(varA, varB, varC, varD);	
	}
}

/* 行列[[a,b],[c,d]]に対応する正方形を描く */
function DrawSquare(a,b,c,d){
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
	ctx.lineTo(origin_X + N * a, origin_Y - N * c);
	ctx.lineTo(origin_X + N * (a+b), origin_Y - N * (c+d));
	ctx.lineTo(origin_X + N * b, origin_Y - N * d);
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
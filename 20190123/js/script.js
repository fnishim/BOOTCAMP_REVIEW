
// $('#start').on('click',function() {
//   $('#start').html('ストップ');
//   $('body').addClass('top');

// ;})

//仕様メモ
//福岡DEV:30人
//東京LAB:40人
//東京DEV:50人
//・欠席者がいる場合は、その人を除いて、配置する。
//・ルーレット風の演出：クリア
//・視力が悪い人は前の３テーブルに配置されるようにする
//GIT HUBに上げて、URLを小菅先生に連絡
//
let time;
let div;
let personAry = [];
let stop_flg = true;
document.querySelector('#start').addEventListener('click',function() {
  if (stop_flg === true){
    document.querySelector('#start').innerHTML = 'ストップ';
    stop_flg = false;
    $("#app").empty();
  }else{
    document.querySelector('#start').innerHTML = 'スタート';
    stop_flg = true;
    clearTimeout(time);
    return;
  }
  
  // document.querySelector('body').classList.add('top');
  //LABかDIVか福岡DEVの判断
  let select_box = $('option:selected').val();
  if (select_box==="LAB"){
    counter = 40;
  }else if(select_box==="DEV"){
    counter = 50;
  }else{
    counter = 30;
  }
  
  // var obj02 = obj01.Value;
  // console.log(ii);

  //1〜50の値が入っている配列を作成
  personAry = [];
  for(let j=1; j <= counter;j++){
    personAry.push(j)
  }
  start();
// なるべく表示が変わる部分のコードは少なくする。
// 表示したいデータを作って（変数div）
// それを実際に表示する。

;})

function start(){

  //配列の中身をシャッフル
  for (let i = personAry.length - 1; i >= 0; i--){
    // 0~iのランダムな数値を取得
    var rand = Math.floor( Math.random() * ( i + 1 ) );
    // 配列の数値を入れ替える
    [personAry[i], personAry[rand]] = [personAry[rand], personAry[i]]
  }
  // console.log(personAry)

  div = ''
  // for(let i = 1; i <= 50; i++){
  // foreachの復習
  // foreach(function(data,i){});
  // [3,2,1,5,4]  
  // alert(data,i)
  // data:配列の中身、i:1,2,3・・・
  
  personAry.forEach(function(data,i){
    if((i+1) % 6 === 0){
      div += '<div class="seat">' + personAry[i] + '</div></div>';
    }else if((i+1) % 6 === 1){
      div += '<div class="table-item text-center"><div class="seat">' + personAry[i] + '</div>';
    }else{
      div += '<div class="seat">' + personAry[i] + '</div>';
    }
  })
  document.querySelector('#app').innerHTML = div;
  time = setTimeout(start,  10);
}


//
//Chromeの検証→<button>タグを選択→Propertiesを見る癖をつける。
//


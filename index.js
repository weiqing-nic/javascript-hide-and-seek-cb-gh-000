function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var nested = document.getElementById('nested');
  return nested.querySelector('.target')
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('.ranked-list li');
  for ( var i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}
function deepestChild(){
  var elem = document.querySelector('div#grand-node');

  while (true){
    var next = elem.querySelector('div');
    if (!next){
      return elem;
    }
    elem = next;
  }

}

function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
const list = document.querySelectorAll('.ranked-list')

for (let i = 0; i < list.length; i++) {
list[i].innerHTML = parseInt((i+n),10);
}
return list;
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}

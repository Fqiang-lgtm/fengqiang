"use strict";
var get_scroll = document.querySelector("#scroll");
var s_width = get_scroll.clientWidth;

var imgs = document.querySelectorAll("#scroll>img");
for (var index = 0; index < imgs.length; index++) {
    imgs[index].style.left = index*s_width + 'px';
}

for (var index = 0; index < imgs.length - 1; index++) {
    var div = document.createElement('div');
    get_scroll.appendChild(div);
    div.classList.add('pageControl');
    div.style.top = '80%';
    div.style.left = (s_width / 2 + index * 20) - ((imgs.length - 1) * 10 + (imgs.length - 1 - 1) * 10) / 2 + 'px';
}

var pageControl = document.querySelectorAll('.pageControl');
pageControl.setPage = function (p) {
    p = p - 1;
    for (var index = 0; index < this.length; index++) {
        this[index].style.backgroundColor = '';
    }
    this[p].style.backgroundColor = '#fff';
}

function move() {
    for (let index = 0; index < imgs.length; index++) {
        imgs[index].style.left = (index - page + 1) * s_width + 'px';
    }
    pageControl.setPage(page);
}

for (let index = 0; index < pageControl.length; index++) {
    pageControl[index].index = index;
    pageControl[index].onclick = function (e) {
        page = e.target.index + 1;
        move();
    }

}
var page = 1;
pageControl.setPage(page);

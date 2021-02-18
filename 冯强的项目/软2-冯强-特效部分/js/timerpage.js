    "use strict";//严格模式
    //1.翻页功能实现
    //1.1获取 滑动容器宽度
    var get_scroll = document.querySelector("#scroll");
    //clientWidth属性是专门用来获取当前元素在当前html页面中的css宽度
    var s_width = get_scroll.clientWidth;
    
    //2 设置图片的初始位置
    var imgs = document.querySelectorAll('#scroll>img');
    for(let index = 0; index < imgs.length; index++){
        imgs[index].style.left = index * s_width +'px';
    }
    
    
    //3 实现js滑动功能
    //pqge用于记录当前显示的第几页
    var page = 0;
    //3.2 图片移动
    function move(){
        //
        for (var index = 0 ; index < imgs.length ;index++){
            //
            imgs[index].style.left = (index - page)*s_width +'px';
        }
        //
        setTimeout(function(){
            if (page == imgs.length - 1){
                page = 0;
                //
                //
                for (var index =0 ; index < imgs.length ; index++){
                    imgs[index].style.transition = 'none';
                }
                //
                for (var index =0 ; index < imgs.length ; index++){
                    imgs[index].style.left = (index - page)*s_width +'px';
        }
        //
        //
        setTimeout(function(){
            for (var index = 0 ; index < imgs.length ;index++){
                imgs[index].style.transition ='left 0.7s ease-in-out';
            }
        },100);
    }
        },700);//
    }
    
    
    //3.1
    function moveLeft(){
        page++;
        if(page > imgs.length - 1){
            page = imgs.length - 1;
        }
        //
        move();
    }
    
    
    //4.
    var timer = setInterval(moveLeft,3000);





















 


//3 实现左右按钮
var leftBtn = document.createElement('div');
leftBtn.innerHTML = '《';
leftBtn.classList.add('arrow');
leftBtn.style.background = 'linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0))';
get_scroll.appendChild(leftBtn);


var rightBtn = document.createElement('div');
rightBtn.innerHTML = '》';
rightBtn.classList.add('arrow');
rightBtn.style.right = '0';
rightBtn.style.background = 'linear-gradient(to left,rgba(0,0,0,0.5),rgba(0,0,0,0))';
get_scroll.appendChild(rightBtn);

//4.左右按钮实现翻页事件
//4.1实现向左移动
var page = 1;//设置记录当前的页码1代表第一页

//4.3 实现移动功能
function move(){
    for (var index =0; index < imgs.length; index++ ){
        imgs[index].style.left = s_width*(index - page + 1)+'px';
    }
}

//4.2实现向左移动
function moveLeft(){
    page++;
    if(page > imgs.length){
        page = imgs.length;
    }
    //移动
    move();
}

//4.4 绑定DOM0级事件
leftBtn.onclick = function(){
    moveLeft();
}

//4.2实现右移动
function moveRight(){
    page--;
    if(page < 1){
        page = 1;
    }
    //移动
    move();
}

rightBtn.onclick = function(){
    moveRight();
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
    console.log("p:"+p);
    for (var index = 0; index < this.length; index++) {
        this[index].style.backgroundColor = '';
        if (p >=0 && p < this.length) {       
            this[p].style.backgroundColor = '#fff';
        }
    }
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

// 渲染分页  渲染中间的页码数
class Pagination{
    constructor(){
        this.ul = document.querySelector("#page-container");
        this.next = document.querySelector("#next-page");
        this.bindEvent();  // 左右翻页，上下页
    }
    // 这个方法在select.js 的位置调用，查询一页。渲染一页
    render(pageCount,pageIndex){
        //用来生成页码的li,渲染到页面上
        //利用pageCount渲染li
        for(let i = 1 ; i<= pageCount; i++ ){
            let li = document.createElement("li");  //创建li

        // 判断当前li是否为当前页 ，如果是当前页，li的className = active
            li.className = i === pageIndex? "active page" : "page";
            li.innerHTML = `<a href="javascript:;">${i}</a>`;
            // 把li添加到next之前
            this.ul.insertBefore(li,this.next);  //把li添加到next之前
        }
    }
    bindEvent(){
        this.ul.onclick = e =>{
            e = e || event;
            e.target || e.srcElement;
            let targetClass = e.target.classList;
            if(){

            }
        }
    }
}

let pagination  = new Pagination();
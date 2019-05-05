// 渲染分页  渲染中间的页码数
class Pagination{
    constructor(){
        this.ul = document.querySelector("#page-container");
        this.next = document.querySelector("#next-page");
        this.bindEvent();  // 左右翻页，上下页
    }
    // 这个方法在select.js 的位置调用，查询一页。渲染一页
    // 接收selectlist这个对象
    render(selectList){
        this.selectList = selectList; //(把这个对象挂在自己身上) 得到查询对象
        //在生成li之前，要把上一次生成的分页删除
        //找到所有的page-li，变成数组，遍历数组，把li全部删除
        Array.from(this.ul.querySelectorAll(".page-li")).forEach(li =>{
            li.remove();
        });

        //用来生成页码的li,渲染到页面上
        //利用pageCount渲染li
        for(let i = 1 ; i<= selectList.pageCount; i++ ){
            let li = document.createElement("li");  //创建li

        // 判断当前li是否为当前页 ，如果是当前页，li的className = active
            li.className = i === selectList.pageIndex? "active page-li" : "page-li";
            li.innerHTML = `<a href="javascript:;" class="page">${i}</a>`;
            // 把li添加到next之前
            this.ul.insertBefore(li,this.next);  //把li添加到next之前
        }
    }
    bindEvent(){
        this.ul.onclick = e =>{
            e = e || event;
            e.target || e.srcElement;
            let target = e.target;
            let targetClass = [...e.target.classList]; // 遍历target的classlist，返回数组
            if(targetClass.includes("page")){
            // 点击了页码数的分页,引用selectlist，来改变页码数
            this.selectList.pageIndex = Number(target.innerHTML); //转为数字类型，便于上面判断active
            // 重新请求数据渲染
            this.selectList.init();
            }else if(targetClass.includes("prev-page")){
                //上一页 -- ,
                if(--this.selectList.pageIndex < 1){
                    this.selectList.pageIndex =1;  // 小于1时，就让它=1，并返回
                    return;
                }
                this.selectList.init();  // 否则，重新渲染页码
            }else if(targetClass.includes("next-page")){
                //下一页 ++
                if(++this.selectList.pageIndex > this.selectList.pageCount){
                    this.selectList.pageIndex = this.selectList.pageCount;
                    return;
                }
                this.selectList.init();
            }
        }
    }
}

let pagination  = new Pagination();
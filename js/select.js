// 发送一个ajax请求，得到所有商品，进行渲染列表表格信息。 查询js
// 写法：面向对象
class SelectList{
    constructor(tbody){
        this.tbody = document.querySelector("#tbody");
        this.pageIndex = 1;  // 默认当前处于开始的分页为第一页
        // count 指的是一页有多少数量，且不能被修改 ES6
        Object.defineProperty(this,"count",{
            writable:false,
            value : 4   // 一页四条
        });                            
        this.pageCount = 1;  // 默认总页数为1，临时赋值 
        this.init();
    }

    // 发送请求 之前请求的是所有
    // 添加分页后，请求数据 —— 1.请求当前这页的数据，告诉后端当前这页是哪一页；
    //                       2. 还得告诉后端一页多少条数据

    init(){
        let {pageIndex,count} = this; //解构赋值
                                             // 此时后端可以接收这两个参数，然后请求数据
        tools.ajaxGetPromise("api/v1/select.php",{pageIndex,count}).then(data =>{
            console.log(data);
            // 当res_code ===1时，表示查询成功
            if(data.res_code === 1){
            //查询成功，就渲染data下的res_body下的data(商品)
                this.render(data.res_body.data); 
                this.pageCount = data.res_body.pageCount; //当前的总页数 = 后台的总页数
            // 根据总页数渲染分页，当前处于第几页
                pagination.render(this);    // this就是new的select这个实例，因为渲染页码 要用到很多select中的东西，所以就全部传进去。传的this是一个引用类型
                // pagination.render(this.pageCount,this.pageIndex);  //调用渲染页码的js,传参页数，和当前页
            }else{
            // 如果查询失败，弹出失败信息
                alert(data.res_massage);
            }
        })     
    }
        // 渲染
        render(list){
            let html="";  // 用一个空字符串来接收
            list.forEach((shop,index) => {
            //用模板字符串拼接 tr上取到的是id
            //用户看到的是列表的序号，序号 = 下标 + 1
                html +=`<tr data-id="${shop.id}"> 
                <td>${index + 1}</td>
                <td>${shop.name}</td>
                <td>
                    <span>${shop.price}</span>
                    <input type="text" class="inputPrice">
                </td>
                <td>
                    <span>${shop.num}</span>
                    <input type="text" class="inputNum">
                </td>
                <td>
                    <button type="button" class="btn btn-edit btn-success btn-xs">编辑</button>
                    <button type="button" class="btn btn-del btn-danger btn-xs">删除</button>
                    <button type="button" class="btn btn-ok btn-info btn-xs">确认</button>
                    <button type="button" class="btn btn-cancel btn-warning btn-xs">取消</button>
                </td>
                </tr>`;
            });
            this.tbody.innerHTML = html; //把拼接好的字符串 放到tbody中去
        }
    }
let getShop = new SelectList(tbody);  
//用一个变量来接new 的这个实例，可以被调用，类似于tools
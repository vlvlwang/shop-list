// 发送一个ajax请求，得到所有商品，进行渲染列表表格信息。 查询js
// 写法：面向对象
class SelectList{
    constructor(tbody){
        this.tbody = document.querySelector("#tbody");
        this.init();
    }
    // 发送请求
    init(){
        tools.ajaxGetPromise("api/v1/select.php").then(data =>{
            // console.log(data);
            // 当res_code ===1时，表示查询成功
            if(data.res_code === 1){
            //查询成功，就渲染data下的res_body下的data(商品)
                this.render(data.res_body.data); 
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
                    <input type="text">
                </td>
                <td>
                    <span>${shop.num}</span>
                    <input type="text">
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
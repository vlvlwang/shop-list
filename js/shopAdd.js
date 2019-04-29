// 点击 '商品入库'，添加商品到表格
class shopAdd{
    constructor(){
        this.inputName = document.querySelector("#inputName");
        this.inputPrice = document.querySelector("#inputPrice");
        this.inputNum = document.querySelector("#inputNum");
        this.addBtn = document.querySelector("#btn-shop-add");
        this.init();
    }
    init(){
        this.addBtn.onclick = () =>{
        // 取到添加商品的input框中的value值，即添加商品信息
            let name = this.inputName.value,
                price = this.inputPrice.value,
                num = this.inputNum.value;
        // 表单验证是否为空
            if(name === "" || price === "" || num === ""){
                alert("输入不能为空");
                return;
            }

        // 发送ajax请求                                       得到ajax返回的data
        tools.ajaxGetPromise("api/v1/add.php",{name,price,num}).then(data =>{
            // console.log(data); // 与数据库连接成功，可进行新增数据。
            // 实现商品列表自动刷新
            // 1. 判断是否添加成功 res_code === 1
            if(data.res_code === 1){
                alert(data.res_message); //  2.如果添加成功就提示

            // 再次输入时，把上次输入信息清空,清空input的value值
                this.inputName.value = this.inputPrice.value = this.inputNum.value = "";
                $('#myModal').modal('hide');    // 添加成功 让模态框隐藏
                
            // 把结果渲染到列表
                getShop.init(); // 调用select.js中的渲染方法，使其添加完成，自动渲染
            }
        });
        }
    }
}
new shopAdd();
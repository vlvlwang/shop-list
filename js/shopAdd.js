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
        // 发送ajax请求                                       得到ajax返回的data
        tools.ajaxGetPromise("api/v1/add.php",{name,price,num}).then(data =>{
            // console.log(data); // 与数据库连接成功，可进行新增数据。
            // 实现商品列表自动刷新
            // 1. 判断是否添加成功 res_code === 1
            if(data.res_code === 1){
                alert(data.res_message); // 2.如果添加成功就提示

            // 把结果渲染到列表
            }
        });
        }
    }
}
new shopAdd();
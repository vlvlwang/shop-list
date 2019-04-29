// 面向对象，表格编辑
class EditTable {
    constructor(tbody){
        this.tbody  = document.querySelector("#tbody");
        this.bindEvents();
    }
    bindEvents(){
        this.tbody.onclick = e =>{
        // 事件源兼容
            e = e || event;
            e.target || e.srcElement;
            let target = e.target;
            let tr = target.parentNode.parentNode; // 找到事件源的父级的父级 tr
            let classList =Array.from (target.classList);
        //通过classlist 数组来判断 是否包含该class名
            // console.log(classList);
        // includes 包含
            if(classList.includes("btn-edit")){
                this.editBtnClick(tr); // 调用 函数方法
            }else if(classList.includes("btn-del")){
                this.delBtnClick(tr);
            }else if(classList.includes("btn-ok")){
                this.okBtnClick(tr);
            }else if(classList.includes("btn-cancel")){
                this.cancelBtnClick(tr);
            }
        }
    }
    // 函数方法 
    editBtnClick(tr){
        // 在tr上找到span,值赋给对应的input
        // let aSpan = Array.from(tr.querySelectorAll("span")); // 循环遍历它
        Array.from(tr.querySelectorAll("span")).forEach(span=>{
            span.nextElementSibling.value = span.innerHTML;
        })
        // 给tr加上 edit
        tr.classList.add("edit");
    } 
    delBtnClick(tr){
        if(confirm("确定要删除吗？")){
        // 发送后台，数据库的数据删除了,在删除列表上的tr信息
            let id = tr.getAttribute("data-id");  // 找到tr上的自定义属性 id
            tools.ajaxGetPromise("api/v1/delete.php",{id}).then(data =>{
            // 判断 删除成功 || 删除失败
                if(data.res_code === 1){
                    alert(data.res_message);
                    // tr.remove();
                    getShop.init(); // 删除成功，重新渲染列表
                }else{
                    alert(data.res_message);
                }
               
            })
            
        }
        
    }
    okBtnClick(tr){
    // 编辑修改确认之前，要先发送后端，(这里修改，数据库也要修改)
    // 首先的获取到修改后的价格和库存,给input添加class名来获取
    // 找到tr中的 inputPrice / inputNum
    let inputPrice = tr.querySelector(".inputPrice"),
        inputNum = tr.querySelector(".inputNum"),
        price = inputPrice.value, // 获取到修改后的值
        num = inputNum.value,
        id = tr.getAttribute("data-id");  // 找到tr上的自定义属性 id
    //向后端发送更新请求
        tools.ajaxGetPromise("api/v1/ok.php",{id, price, num}).then(data =>{
            if(data.res_code === 1){
                alert(data.res_message);
                //换种写法
                inputPrice.previousElementSibling.innerHTML = inputPrice.value;  //input的value值赋给input上一个兄弟元素（即span）
                inputNum.previousElementSibling.innerHTML = inputNum.value;
                //给tr移除edit 显示编辑/删除
                tr.classList.remove("edit");
            }else{
                alert(data.res_message);
                //给tr移除edit 显示编辑/删除
                tr.classList.remove("edit");
            }
        })
        //原始写法
        // Array.from(tr.querySelectorAll("span")).forEach(span=>{
            // span.innerHTML = span.nextElementSibling.value;
        // })       
    }
    cancelBtnClick(tr){
        //给tr移除edit 显示编辑/删除
        tr.classList.remove("edit");
    }
}

new EditTable(tbody);
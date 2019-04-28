// 面向对象，表格编辑
class EditTable {
    constructor(tbody){
        this.tbody  = document.querySelector("#tbody");
        this.bindEvents();
    }
    bindEvents(){
        this.tbody.onclick = e =>{
            // e = e || event;
            // e.target || e.srcElement;
            let target = e.target;
            let tr = target.parentNode.parentNode; // 找到事件源的父级的父级 tr
            let classList =Array.from (target.classList);
            console.log(classList);
        // includes 包含
            if(classList.includes("btn-edit")){
                this.editBtnClick(tr);
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
        // 在tr上找到span，值赋给对应的input
        // let aSpan = Array.from(tr.querySelectorAll("sapn")); // 循环遍历它
        Array.from(tr.querySelectorAll("span")).forEach(span=>{
            span.nextElementSibling.value = span.innerHTML;
        })
        // 给tr加上 edit
        tr.classList.add("edit");
    } 
    delBtnClick(tr){
        if(confirm("确定要删除吗？")){
        // 发送后台，数据库的数据也需要删除
            tr.remove();
        }
        
    }
    okBtnClick(tr){
    // 发送后台，这里修改，数据库也要修改
        Array.from(tr.querySelectorAll("span")).forEach(span=>{
            span.innerHTML = span.nextElementSibling.value;
        })
        //给tr删除edit
        tr.classList.remove("edit");
    }
    cancelBtnClick(tr){
        tr.classList.remove("edit");
    }
}

new EditTable(tbody);
class Register{
    constructor(){
        //获取input框、注册按钮
        this.inputName = document.querySelector("#inputName");
        this.inputPassword = document.querySelector("#inputPassword");
        this.btn = document.querySelector("#btn");  //是个提交按钮
        this.bindEvent();
    }
    //给btn 绑事件
    bindEvent(){
        this.btn.onclick = () =>{
            //获取input 的内容
            let name = this.inputName.value,
                password = this.inputPassword.value;

            //数据验证 密码强度，数字类型等

            //发送请求
            tools.ajax("POST","../api/v1/register.php",{name,password},data => {
                console.log(data);
            })
            return false;  // 阻止默认提交
        }
    }
}
new Register();
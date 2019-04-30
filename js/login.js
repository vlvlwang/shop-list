class Login{
    constructor(){
        //获取input 、登录按钮
        this.inputName = document.querySelector("#inputName");
        this.inputPassword = document.querySelector("#inputPassword");
        this.btn = document.querySelector("#btn");
        this.seven = document.querySelector("#seven");
        this.bindEvent();
    }
    bindEvent(){
        this.btn.onclick = () =>{
            // 获取到input的值
            let name = this.inputName.value,
                password = this.inputPassword.value;
            // 数据验证
            //发送请求
            tools.ajax("POST","../api/v1/login.php",{name,password},data =>{
                if(data.res_code === 1){
                // 将用户名存到cookie 七天免登陆
                    if(this.seven.checked){
                        tools.cookie("name",name,{expires : 7, path : "/"});
                    }else{
                        tools.cookie("name",name,{path : "/"});
                    }
                // 弹出登录成功
                    alert(data.res_message);
                // 登录成功跳转首页
                    window.location.href = "../index.html";
                }else{
                    alert(data.res_message);  // 用户名或密码错误
                }
            })
            return false;  // 阻止默认提交
        }
    }
}
new Login();
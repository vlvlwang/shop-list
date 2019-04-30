// 判断是否是登录状态
// 获取登录前/登录后的ul 
let unloginUl = document.querySelector("#unlogin-ul");
let loginUl = document.querySelector("#login-ul");
let nameSpan = document.querySelector("#name-span");  

// 获取到用户名、密码，判断是否登录
let name = tools.cookie("name");  // 判断cookie中是否有这个name记录
// 存在该name记录
    if(name){
        unloginUl.classList.add("hidden");  // 给登录前添加hidden ，即隐藏
        nameSpan.innerHTML = name;          // 把用户名赋给span， 即 欢迎您，name
       loginUl.classList.remove("hidden");  // 给登录后删除hidden ，即显示
    }
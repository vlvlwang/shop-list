# 某东商品管理系统

### 系统功能

* 登录
* 注册
* 商品展示
* 商品修改
* 商品删除
* 商品录入

### 使用的技术

* HTML5
* CSS3
* javascript
* ajax
* bootstrap
* php
* mysql

1.写静态页（结构+样式）
    1.1 导航
    1.2 按钮
    1.3 表格
    1.4 商品入库按钮(模态层)

2.写商品表格的编辑 (editTable.js 面向对象) — 商品的增删改

3.写商品后台数据库 (select.js) 自己模拟数据库 MySQL
    3.1 select.js 中通过ajax方法查询数据，再对tbody的数据进行渲染
    3.2 建立数据库 shop
    3.3 与数据库建立连接 config.php
    3.4 查询数据库  select.php

4.写商品添加 (shopAdd.js)
    4.1 输入要添加的商品信息，点击添加，添加到数据库，重新渲染表格(添加到表格)

### 接口文档

##### 1.查询所有数据 —— select.js

- url ：api/v1/select.php  

- method： get

- query : null

- data : {

  ​	res_code: 1, // 1代表成功， 0代表失败

  ​	res_message: "网络错误，查询失败"

  ​	res_body: {

  ​		data: [

  ​			{id, name, price, num}, //商品数组 ，包括名称，ID，价格等信息

  ​			{id, name, price, num} // 返回的数据接口

  ​		]

  ​	}

  }
  
#####  2.添加商品接口 —— shopAdd.js

- url : api/v1/add.php

- method : get

- query : {name, price, num} 传参

- data : {

  ​	res_code : 1, // 1代表添加成功，0代表失败

  ​	res_message:   "添加成功"  ||  "网络错误，添加失败，请重试"。—— "告诉成功与否"

  ​	res_body : {id, name, price, num} 商品信息

  }

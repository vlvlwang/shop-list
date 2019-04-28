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

2.写商品表格的编辑 (editTable.js 面向对象)

3.写商品后台数据库 (select.js) 自己模拟数据库 MySQL

4.写商品添加 (shopAdd.js)


### 接口文档

1.查询商品数据 select.js
##### 查询所有数据

- url ：api/v1/select.php

- method： get

- query : null

- data : {

  ​	res_code: 1, // 1代表成功， 0代表失败

  ​	res_message: "网络错误，查询失败"

  ​	res_body: {

  ​		data: [

  ​			{id, name, price, num},

  ​			{id, name, price, num}

  ​		]

  ​	}

  }

2.添加"商品入库"事件  shopAdd.js
##### 添加商品接口

- url : api/v1/add.php

- method : get

- query : {name, price, num}

- data : {

  ​	res_code : 1, // 1代表添加成功，0代表失败

  ​	res_message:   "添加成功"  ||  "网络错误，添加失败，请重试",

  ​	res_body : {id, name, price, num}

  }

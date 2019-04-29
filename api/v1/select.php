
<?php
// 查询数据库 操作
// 引入另外一个PHP文件
    include("./config.php");

//查询
$sql = "select * from shop";  //查询sql 中 shop 所有的数据
$res = mysql_query($sql);  // 因为查询结果是一个资源类型，所以需要用一个变量来接收
$shop = array();
while($row = mysql_fetch_assoc($res)){
    array_push($shop,$row);      // 可得到查询结果
 }

// 查询失败的情况，说明$shop中没有数据，此时可以判断一下$shop的长度。
// $shop的长度为0，返回失败。

// 构造一个json
    $json = array(
        "res_code" => 1,
        "res_message" => "查询成功",
        "res_body" =>array(
            "data" => $shop
        ) 
        );
    echo json_encode($json);  // 通过encode的方式发送给前端，可以得到一个json格式的数据
    mysql_close();   //关闭数据库

?>
<?php
	header("Content-Type:text/html;charset=utf8");
	$username=$_GET["username"];
	$password=$_GET["password"];
	if($username=="zhangsan"){
		if($password=="123456"){
//			echo "登陆成功";
			echo '{"username":"zhangsan"}';
		}else{
			echo "登陆失败";
		}
	}else{
		echo "账号不存在";
	}
?>
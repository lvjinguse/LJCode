function change(){
    var username = loginForm.username.value;
    var password = loginForm.password.value;

    var user;
    //权限登陆
    $.ajax({
        url: "http://122.114.38.213:8080/wjkfq_gis/home/login",
        method: "GET",
        data: {
            username: username,
            password: password
        },
        success: (res)=>{
            console.log(res);
            if(res=='管理员')
                window.location.href='../home.html';
            else if(res=='普通用户')
                window.location.href='../home.html';
            else alert("您不是管理员")
        }
    });

//获取自己的个人信息
    $.ajax({
        url: "http://122.114.38.213:8080/wjkfq_gis/home/loginbyjson",
        method: "GET",
        data: {
            username: username,
            password: password
        },
        success: (res)=>{
            console.log(res);
            alert(res);
        }
    });
//获取所有人员信息
    $.ajax({
        url: "http://122.114.38.213:8080/wjkfq_gis/lyRemoteServ/GetAllUserInfoData",
        method: "GET",
        data: {

        },
        success: (res)=>{
            console.log(res);
            alert(res);
        }
    });

}
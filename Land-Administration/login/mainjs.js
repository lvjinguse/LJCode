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
//获取个人信息
function person1() {


    $.ajax({
        url: "http://122.114.38.213:8080/wjkfq_gis/home/loginbyjson",
        method: "GET",
        data: {
            username: 'admin',
            password: '123456'
        },
        success: (res) => {
            console.log(res);
            alert(res);
        }
    });
}
//获取一个用户
function getaperson() {


    $.ajax({
        url: "http://122.114.38.213:8080/wjkfq_gis/lyRemoteServ/GetOneUserData",
        method: "GET",
        data: {

            id: '1'
        },
        success: (res) => {
            console.log(res);
            alert(res);
        }
    });
}
//增加一个用户
function addaperson() {
    var myDate = new Date();
    var json = [];
    var j = {
        "bsU_Id": "",
        "bsO_Id": "",
        "bsO_Name": "",
        "LoginName": "",
        "Pwd": "",
        "Name": "",
        "LLoginDT":myDate.toLocaleString( ),
        "bsR_Id":"" ,
        "bsR_Name": "",
        "LayerSet": "",
        "canEdit": true,
        "bsO_Righrs": "",
        "bsO_RightsCode": ""
    };


    var a = JSON.stringify(json);

    $.ajax({
        url: "http://122.114.38.213:8080/wjkfq_gis/lyRemoteServ/AddUserData",
        method: "GET",
        data: {

            userinfo: '1'
        },
        success: (res) => {
            console.log(res);
            alert(res);
        }
    });

}
//删除一个用户
function delaperson() {


    $.ajax({
        url: "http://122.114.38.213:8080/wjkfq_gis/lyRemoteServ/DelUserData",
        method: "GET",
        data: {

            id: '1'
        },
        success: (res) => {
            console.log(res);
            alert(res);
        }
    });
}
//2。 获取房屋和企业信息：
function GetGisObj() {


    $.ajax({
        url: "http://122.114.38.213:8080/wjkfq_gis/lyRemoteServ/GetGisObj",
        method: "GET",
        data: {

            TType: '这里填"房屋信息"或者"企业范围"汉字',
            id:''

        },
        success: (res) => {
            console.log(res);
            alert(res);
        }
    });
}
//3）更新房屋和企业信息：
function UpdGisObj() {
    var myDate = new Date();
    var json = [];
    var j = {
        "bsU_Id": "",
        "bsO_Id": "",
        "bsO_Name": "",
        "LoginName": "",
        "Pwd": "",
        "Name": "",
        "LLoginDT":myDate.toLocaleString( ),
        "bsR_Id":"" ,
        "bsR_Name": "",
        "LayerSet": "",
        "canEdit": true,
        "bsO_Righrs": "",
        "bsO_RightsCode": ""
    };


    var a = JSON.stringify(json);

    $.ajax({
        url: "http://122.114.38.213:8080/wjkfq_gis/lyRemoteServ/GetGisObj",
        method: "GET",
        data: {

            TType: '这里填"房屋信息"或者"企业范围"汉字',
            json:a

        },
        success: (res) => {
            console.log(res);
            alert(res);
        }
    });
}
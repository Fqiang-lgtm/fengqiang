var times = 3;//3次机会
//三次验证
function validate(account,password){
    if (account=="peter"&&password=="123"){
        window.location.href = './商城.html';
    }
    else if(times<=0){
        document.getElementById('hint').innerHTML = '3次登录失败！';
    }else{
        times--;
        document.getElementById('hint').innerHTML = '账号或密码错误，还有'+times+'次机会'
    }
}
// function logon(account,password){
//     let res;//声明返回值
//     console.log("进入logon函数---1")
//     if (account=="peter"&&password=="123"){
//         res = true;
//     }else{
//         res = false
//     }
//     console.log("进入logon函数---2");
//     return res;//返回值
// }
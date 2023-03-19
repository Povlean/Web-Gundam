// 登录事件
function enter(){
    // 获取用户输入的账号
    let num = document.getElementById("num").value;
    console.log(num);
    // 获取用户输入的密码
    let pwd = document.getElementById("pwd").value;
    console.log(pwd);
    // 判断本地是否有数据 如果没有数据直接提示未注册
    if(localStorage.length == 0){
        alert("您还未注册")
    }else{
        let teldata = [] // 创建一个数组   用于存储本地所有已存储的手机号
        let pasdata = [] // 创建一个数组   用于存储本地所有已存储的密码
        let iddata = [] // 创建一个数组   用于存储本地所有已存储的id
        // 循环判断本地是否有次手机号
        for (let i = 0; i < localStorage.length; i++) {
            // 获取所有的key钥匙
            let key = localStorage.key(i)
            console.log(key);
            // 通过key拿到对应的数据进行判断
            let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
            let keyinfo = JSON.parse(keydata) // 将字符串转化为对象的形式
            console.log(keyinfo);
            // 向数组中添加数据   我们通过下标i的方式添加   这样手机号我密码是对应的   不能通过push添加！！！  不然手机号和密码是乱的
            teldata[i] = keyinfo.num
            pasdata[i] = keyinfo.pwd
            iddata[i] = keyinfo.id
        }
        console.log(teldata);
        console.log(pasdata);
        console.log(iddata);
        // 判断此手机号是否注册
        if(teldata.indexOf(num) < 0){  // indexof方法用户查看一个数组中是否有某个值，如果没有它会返回-1，有的话他会返回对应的下标
            alert("此账号未注册")
        }else{
            let index = teldata.indexOf(num) // 返回对应手机号的下标   我们通过下标去判断密码
            if(pasdata[index] != pwd){
                alert("密码错误")
            }else{
                console.log(iddata[index]);
                // 定时器
                setTimeout(function(){
                    // 跳转传餐  我先写一个传一个参数的例子吧   这个方法也可以传多个参数  你如果有需要的时候我再教你
                    window.location.href = "Gtest.html"
                },2000);
                alert("登录成功,点击后跳转到首页")
            }
        }
    }
}
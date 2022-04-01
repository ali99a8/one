// start settings for sgin in page room.html 
var btn_tem = document.querySelector(".btn_tem");
btn_tem.onclick = function() {
    Swal.fire({
        
        html: `<input type="text" id="login" class="swal2-input" placeholder="اسم مستخدم">
        <input type="password" id="password" class="swal2-input" placeholder="كلمة المرور">`,
        confirmButtonText: 'دخول',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`يرجى ادخال اسم مستخدم و كلمة المرور`)
          }
          else if (login == "ali" || password ==12)
          {
            window.open("room.html" , "_parent");
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        Swal.fire(`
          Login: ${result.value.login}
          Password: ${result.value.password}
        `.trim())
      })
      
    }
    
// end settings for sgin in page room.html 
// start settings for sgin in page babt_temperature.html 
var btn_baby_tem = document.querySelector(".btn_baby_tem");
btn_baby_tem.onclick = function(){
    Swal.fire({
       
        html: `<input type="text" id="login" class="swal2-input" placeholder="اسم مستخدم">
        <input type="password" id="password" class="swal2-input" placeholder="كلمة المرور">`,
        confirmButtonText: 'دخول',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`يرجى ادخال اسم مستخدم و كلمة المرور`)
          }
          else if (login == "ali" || password ==12)
          {
            window.open("baby_temperature.html" , "_parent");
          }
          else if (login !== "ali" || password !== 12)
          {
            Swal.showValidationMessage(`اسم مستخدم او كلمة مرور غير صحيحة`)
          }
        }
      })
}
// end settings for sgin in page babt_temperature.html
// start settings for sgin in page humd.html  

var btn_hum = document.querySelector(".btn_hum");
btn_hum.onclick = function () {
    Swal.fire({
        
        buttons: true,
        html: `<input type="text" id="login" class="swal2-input" placeholder="اسم مستخدم">
        <input type="password" id="password" class="swal2-input" placeholder="كلمة المرور">`,
        confirmButtonText: 'دخول',
        confirmButtonColor: "#DD6B55",
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`يرجى ادخال اسم مستخدم و كلمة المرور`)
          }
          else if (login == "ali" || password ==12)
          {
            window.open("humd.html" , "_parent");
          }
          else if (login !== "ali" || password !== 12)
          {
            Swal.showValidationMessage(`اسم مستخدم او كلمة مرور غير صحيحة`)
          }
        }
      }) 
    
}
// end settings for sgin in page humd.html 
var o2 = document.querySelector(".o2");
o2.onclick = function()
{
    Swal.fire({
        icon: 'error',
     
        text: 'فــي طور الاعــــداد',
        
      })
}
var btn_dis = document.querySelector(".btn_dis");
btn_dis.onclick = function() {
    window.open("display_1.html", "_parent")
}


 
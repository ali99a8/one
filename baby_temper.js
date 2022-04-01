
// alert when  save settings in page  incubator temperature  
var btn_save_baby = document.querySelector(".btn_save_baby");
btn_save_baby.onclick = function()
{
  swal("تم حفظ الاعدادات", "", "success", {
    

  });
}

var in_range1 = document.querySelector(".in_range1"), 
output_range1 = document.querySelector(".output_range1");
output_range1.innerHTML = in_range1.value;
in_range1.oninput = function()
{
  output_range1.innerHTML  = this.value;
}

var in_range2 = document.querySelector(".in_range2"), 
output_range2 = document.querySelector(".output_range2");
output_range2.innerHTML = in_range2.value;
in_range2.oninput = function()
{
  output_range2.innerHTML  = this.value;
} 
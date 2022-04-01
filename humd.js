// alert when  save settings in page  humd
var btn_save_humd = document.querySelector(".btn_save_humd");
btn_save_humd.onclick = function() {
    if(output_range1.innerHTML = in_range1.value)

        swal("تم حفظ الاعدادات ", "", "success", {});
   
     

    }
    // get value from range to display to web

var in_range1 = document.querySelector(".in_range1"),
    output_range1 = document.querySelector(".output_range1");
output_range1.innerHTML = in_range1.value;
in_range1.oninput = function() {
    output_range1.innerHTML = this.value;
}

var in_range2 = document.querySelector(".in_range2"),
    output_range2 = document.querySelector(".output_range2");
output_range2.innerHTML = in_range2.value;
in_range2.oninput = function() {
    output_range2.innerHTML = this.value;
}

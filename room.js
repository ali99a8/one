
// alert when  save settings in page  incubator temperature  
var btn_save = document.querySelector(".btn_save");
btn_save.onclick = function()
{
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,

  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
}
var valfrom_room;
var in_range1 = document.querySelector(".in_range1"), 
output_range1 = document.querySelector(".output_range1");
var  valfrom_room = document.querySelector(".valfrom_room");
output_range1.innerHTML = in_range1.value;
in_range1.oninput = function()
{
  output_range1.innerHTML  = this.value;
  localStorage.setItem("textvalue",in_range1.value );
  return false;
}
//valfrom_room  = querySelector(".valfrom_room").innerHTML = localStorage.getItem(textvalue);
var in_range2 = document.querySelector(".in_range2"), 
output_range2 = document.querySelector(".output_range2");
output_range2.innerHTML = in_range2.value;
in_range2.oninput = function()
{
  output_range2.innerHTML  = this.value;
} 


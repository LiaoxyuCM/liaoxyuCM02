b = 1;
function add(){
  a = Number(document.getElementById("numbers").value) + b;
  document.getElementById("numbers").value = String(a);
}
function buy(){
  if (a >= 2){
    a -= 2;
    b++;
    document.getElementById("numbers").value = String(a);
  }
}

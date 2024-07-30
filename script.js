function checkInput(){
	var inputContent = document.getElementById('inputPassword').value;
	if (inputContent === '18,161,130') {
    document.getElementById('inputPassword').value = '输入正确';
		setTimeout(function (){
			window.location.replace('https://hmpg.net/');
		}, 2000);
	} else {
		document.getElementById('inputPassword').value = '输入错误';
	}
}								

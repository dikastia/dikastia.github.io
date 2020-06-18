		shortcut.add("z",function() {
		   location.href="/tags/";} ,
		   {  
			//'type' : 'keydown', // EVNET TYPE - 'keydown', 'keyup', 'keypress' (기본값 'keydown')
			'disable_in_input' : true,// input, textarea에 포커스되어있을 경우 작동하지 않도록 설정 (기본값 false)
			//'propagate' : true, // Allow the event to propagate? (기본값 false)
			//'target' : document,// 타겟 Element 지정 (기본값 document)
			//'keycode' : '65',// 키코드를 직접 지정
		});
		shortcut.add("1",function() { location.href="/";}, { 'disable_in_input' : true,});
		shortcut.add("2",function() { location.href="/categories";}, { 'disable_in_input' : true,});
		shortcut.add("3",function() { location.href="/search";}, { 'disable_in_input' : true,});
		shortcut.add("q",function() {history.back();}, { 'disable_in_input' : true,});
		shortcut.add("e",function() {history.go(1);}, { 'disable_in_input' : true,});
		shortcut.add("r",function() {location.reload();}, { 'disable_in_input' : true,});
		shortcut.add("w",function() {window.scrollTo(0,0);}, { 'disable_in_input' : true,});
		shortcut.add("s",function() {document.getElementById("search-query").focus();}, { 'disable_in_input' : true,});
			
	function DivShowHide(id_var) {
	  var x = document.getElementById(id_var);
	  if (x.style.display === "none") {
		x.style.display = "block";
	  } else {
		x.style.display = "none";
	  }
	}
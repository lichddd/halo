$().ready(function () {
//	console.log($('#temdiv img').length);
	$('#temdiv img').each(function () {
		if ($('.threediv img').length<7) {
			$(this).prependTo($('.threediv'));
		}
		
		
	});
	
	
	
	
	
	
	
	
	setTimeout(timer,1000)
	
	
	
	
	
	
	
});

function timer () {
	$($('img')[6]).appendTo($('#temdiv'));
	
	
	
	$($('#temdiv img')[0]).prependTo($('.threediv'));
	setTimeout(timer,1000);
}


function getprop (str,code)
    {
        var reg = "/("+code+"\([\-\+]?((\d+)(deg))\))/i";
        var wt = div.style['-webkit-transform'], wts = wt.match (reg);
        var $2 = RegExp.$2;
        console.log ($2);
        div.style['-webkit-transform'] = wt.replace ($2, parseFloat (RegExp.$3) + 10 + RegExp.$4);
    }
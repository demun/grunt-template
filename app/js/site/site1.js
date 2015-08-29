/**
 * site1.js
 */

(function(){
	// console.log('site1 js');
})();

$(document).ready(function() {
	var main = $('.main');
	var curClass = main.attr('class');
	var thisClass;
	console.log('클릭전 curClass: '+curClass);

	main.on('click', function() {
		thisClass = $(this).attr('class');
		console.log('클릭후 thisClass: '+thisClass);
		
		if ( $(this).attr('class') === 'main' ) {
			// $(this).css('display','inline-block');
			$(this).attr('class','main main2');
		} else {
			// $(this).css('display','block');
			$(this).attr('class',curClass);
		}

	});
});
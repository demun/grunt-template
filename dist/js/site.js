/*!
 ======================================================================== 
 * Project   : GruntTemplate(Grunt 를 사용하기 위한 예제 템플릿) v0.0.1
 * Publisher : Ho, Jong-Mun (hjm01@naver.com), (http://demun.tistory.com)
 * Build     : 2018-11-21
 * License   : CC BY-ND (http://creativecommons.org/licenses/by/2.0/kr/)
 ======================================================================== 
 */
/**
 * site1.js
 */

(function(){
	// console.log('site1 js');
	// alert('fdfddf');
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
/**
 * site2.js
 */

(function(){
	// console.log('site2 js');
})();


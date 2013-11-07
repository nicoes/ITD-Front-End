define(['jquery','itd-lib/csscontext'],function($,CssContext){

	var context = new CssContext();
	var LazyLoadImage = function (imageContainer){
		var imageVersion = context.getContext();
	
		if (!$(imageContainer) || !$(imageContainer).find("noscript")) {
			return;
		}
		var img = $(imageContainer).find("noscript");
		if (img) {
			var imgSRC = img.attr("data-src-" + imageVersion);
			var altTxt = img.attr("data-alt");
			if (imgSRC) {
				var imageElement = new Image();
				imageElement.src = imgSRC;
				imageElement.setAttribute("alt", altTxt ? altTxt : "");
				$(imageContainer).append(imageElement);
				$(imageContainer).remove("noscript");
			}
		}
	};
	return LazyLoadImage;
});

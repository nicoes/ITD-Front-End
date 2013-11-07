define(['jquery','itd-lib/csscontext','backstretch'], function($,ContextRef,bs){
	
	var context = new ContextRef();
	
	var BackstretchContext = function ()
	{
		var prevurl;

		var visuals = {
		  "default": "images/background/home.jpg",
		};
		
		var defaultvisual = visuals["default"];
		
		function getBackgroundUrl(elem)
		{
			var src = defaultvisual;
			for(var key in visuals)
			{
				if (visuals.hasOwnProperty(key) && elem.hasClass(key)) {
					src = visuals[key];
				}
			}
			return src;
		}
		function loadBackground()
		{
			var size = context.getContext();
			if((size == "desktop" || size == "tablet"))
			{
				var imagecontainer = $("body:not(.empty)");
				if(imagecontainer.length > 0)
				{
		
					var url = getBackgroundUrl(imagecontainer);
					if(prevurl != url)
					{
						imagecontainer.backstretch(url, {fade: 300, duration: 7000});
						prevurl = url;
					}
				}
			}
		}
		
		loadBackground();
		
		$(window).resize(function(){
			loadBackground();
		});
	}
	return BackstretchContext;
})
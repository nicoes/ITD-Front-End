define(['jquery'], function () {
	var CSSContext = function()
	{
		//Sample function for general app funtions (helpers)
		this.getContext = function()
		{
			var size = "mobile";
			
		    if($("html").hasClass("lt-ie9"))
			{
				size = "desktop";   
			} else 
			{
				size = window.getComputedStyle(document.body,':after').getPropertyValue('content').replace(/"/g, "");
			}
			return size;
		}
	}
	return CSSContext;
});
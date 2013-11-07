define(['jquery', 'itd-lib/csscontext'], function ($, CssContext) {
	var EqualHeights = function()
	{
		var context = new CssContext();
		var size = context.getContext();
		
		this.equalize = function(elems,minHeight, maxHeight) {
			tallest = (minHeight) ? minHeight : 0;
			if( typeof elems === 'string' ) {
			    elems = [ elems ];
			}
			$.each(elems, function(index,value) {
				if($(value).height() > tallest) {
					tallest = $(value).height();
				}
			});
			if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
			return $.each(elems, function(index,value) {
				$(value).height(tallest).css("overflow","hidden");
			});
		}
		this.followLargeBrother = function(sizes,elem,brother)
		{
			var calculate = false;
			if( typeof sizes === 'string' ) {
			    sizes = [ sizes ];
			}
			$.each(sizes,function(index,value)
			{
				if(value == size)
				{
					calculate = true;
				}
			});
			if(calculate)
			{
				var curmartop = parseInt($(elem).css('margin-top'),10);
				var topdif = $(brother).offset().top - ($(elem).offset().top - curmartop);
				if(topdif > 0)
				{
					var margin = $(elem).css('margin-top',topdif); 
				}
			}
		}
	}
	return EqualHeights;
});
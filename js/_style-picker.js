(function() {
	"use strict";

	$(".style-picker").on("click", "> div", function (e) {
		var $el = $(e.currentTarget),
			id = $el.data("itemId"),
			$parent = $el.closest(".styles");

		$parent.children(".style").hide();
		$parent.children(".style[data-item-id=" + id + "]").show();
		$(".style-picker > div:first").addClass('first');
		$(".style-picker > div.active").removeClass('active');
		$(".style-picker > div[data-item-id=" + id + "]").addClass("active");
	});
})();
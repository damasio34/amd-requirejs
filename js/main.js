define(
	["jquery", "myModule"],
	function($, myModule) {
		$(function() {
			$('.btn').on('click', function() {
				var n1 = $('#n1').val();
				var n2 = $('#n2').val();

				alert(myModule.sum(n1, n2));
			});
		});
	}
);
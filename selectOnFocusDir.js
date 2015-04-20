angular.module('ui').directive('selectOnFocus', function () {
	// Linker function
	return function (scope, element, attrs) {
		element.on('click', function (e) {
			var $this = $(this);
			if ($this.hasClass('focus'))
				return;

			$this.addClass('focus');
			this.select();
		});

		element.on('blur', function (e) {
			var $this = $(this);
			$this.removeClass('focus');
		});
	};
});
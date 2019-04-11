
(function ($) {
	"use strict";


	/*==================================================================
	[ Focus Contact2 ]*/
	$('.input2').each(function(){
		$(this).on('blur', function(){
			if($(this).val().trim() != "") {
				$(this).addClass('has-val');
			}
			else {
				$(this).removeClass('has-val');
			}
		})
	})

	
	/*==================================================================
	[ Validate ]*/
	var name = $('.validate-input input[name="name"]');


	$('.validate-form').on('submit',function(){
		var check = true;

		if($(name).val().trim() == ''){
			showValidate(name);
			check=false;
		}

		if (check) {
			$(".webgl-content").show();
			$("#title").show();
			$(".container-contact2").hide();
			localStorage.setItem("name", $(name).val().trim());
			return false;
		}

        return check;
    });


	$('.validate-form .input2').each(function(){
		$(this).focus(function(){
			hideValidate(this);
		});
	});

	function showValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).addClass('alert-validate');
	}

	function hideValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).removeClass('alert-validate');
	}
})(jQuery);
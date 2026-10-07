/* Terra dos Ventos — comportamentos leves.
   O formulário não envia ao PHP demo enquanto não houver destinatário. */
(function () {
	"use strict";

	function ready(fn) {
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", fn);
		} else {
			fn();
		}
	}

	ready(function () {
		var forms = document.querySelectorAll("form.sc_form_form");
		for (var i = 0; i < forms.length; i++) {
			forms[i].addEventListener("submit", holdMessage);
			var button = forms[i].querySelector("button, input[type='submit']");
			if (button) {
				button.addEventListener("click", function (event) {
					event.preventDefault();
					holdMessage.call(this.form, event);
				});
			}
		}

		function holdMessage(event) {
			if (event && event.preventDefault) {
				event.preventDefault();
			}
			var box = this.querySelector(".sc_form_result");
			if (box) {
				box.textContent = "O canal de mensagem será aberto quando o e-mail público estiver confirmado.";
			}
		}
	});
})();

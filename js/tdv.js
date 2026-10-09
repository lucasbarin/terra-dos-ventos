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

	var entrancesOpen = !document.querySelector(".tdv-loader");
	var entranceQueue = [];

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

		revealTitles();
		revealSequence();
		bindNavToggle();
		bindHeroLoader();
	});

	function playEntrance(fn) {
		if (entrancesOpen) {
			fn();
			return;
		}
		entranceQueue.push(fn);
	}

	function releaseEntrances() {
		entrancesOpen = true;
		document.documentElement.classList.remove("tdv-hold-motion");
		window.requestAnimationFrame(function () {
			var queue = entranceQueue;
			entranceQueue = [];
			queue.forEach(function (fn) {
				fn();
			});
			revealInView();
			try {
				replayThemeEntrances();
			} catch (err) {}
		});
	}

	function revealInView() {
		var limit = window.innerHeight * 0.94;
		var nodes = document.querySelectorAll(".tdv-letters, .tdv-rise");
		for (var i = 0; i < nodes.length; i++) {
			var rect = nodes[i].getBoundingClientRect();
			if (rect.bottom <= 0 || rect.top >= limit) {
				continue;
			}
			nodes[i].classList.add("is-visible");
		}
	}

	function replayThemeEntrances() {
		var nodes = document.querySelectorAll("[data-animation^='animated']");
		for (var i = 0; i < nodes.length; i++) {
			var el = nodes[i];
			if (el.classList.contains("tdv-seq-host")) {
				continue;
			}
			var parts = (el.getAttribute("data-animation") || "").split(/\s+/);
			for (var p = 0; p < parts.length; p++) {
				if (parts[p]) {
					el.classList.remove(parts[p]);
				}
			}
		}
		if (window.jQuery) {
			window.jQuery(window).trigger("scroll");
		}
	}

	function bindHeroLoader() {
		var loader = document.querySelector(".tdv-loader");
		if (!loader) {
			return;
		}
		var video = document.querySelector(".tdv-hero-video");
		var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		var shownAt = Date.now();
		var minVisible = 1500;
		var finished = false;
		var finishTimer = 0;

		function finish() {
			if (finished) {
				return;
			}
			if (!reduce) {
				var wait = minVisible - (Date.now() - shownAt);
				if (wait > 0) {
					if (!finishTimer) {
						finishTimer = window.setTimeout(finish, wait);
					}
					return;
				}
			}
			finished = true;
			window.requestAnimationFrame(function () {
				window.requestAnimationFrame(function () {
					loader.classList.add("is-done");
					loader.setAttribute("aria-hidden", "true");
				});
			});
			var removed = false;
			function remove() {
				if (removed) {
					return;
				}
				removed = true;
				if (loader.parentNode) {
					loader.parentNode.removeChild(loader);
				}
				releaseEntrances();
			}
			loader.addEventListener("transitionend", function (event) {
				if (event.propertyName === "opacity") {
					remove();
				}
			});
			window.setTimeout(remove, reduce ? 40 : 900);
		}

		function revealWhenFrameReady() {
			if (!video || video.readyState < 2) {
				return;
			}
			var playAttempt = video.play();
			if (playAttempt && typeof playAttempt.then === "function") {
				playAttempt.then(finish).catch(finish);
				return;
			}
			finish();
		}

		if (reduce || !video) {
			if (document.readyState === "complete") {
				finish();
			} else {
				window.addEventListener("load", finish);
			}
			return;
		}

		revealWhenFrameReady();
		video.addEventListener("loadeddata", revealWhenFrameReady);
		video.addEventListener("canplay", revealWhenFrameReady);
		video.addEventListener("playing", finish);
		video.addEventListener("error", finish);
		window.setTimeout(finish, 30000);
	}

	function bindNavToggle() {
		var buttons = document.querySelectorAll(".top_panel > .menu_mobile_button");
		var menu = document.querySelector(".menu_mobile");
		if (!buttons.length || !menu) {
			return;
		}

		var fadeTimer = 0;

		function setOpen(open) {
			for (var i = 0; i < buttons.length; i++) {
				buttons[i].classList.toggle("is-open", open);
				buttons[i].setAttribute("aria-expanded", open ? "true" : "false");
				buttons[i].setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
			}
			window.clearTimeout(fadeTimer);
			if (open) {
				document.body.classList.add("tdv-nav-on");
				return;
			}
			fadeTimer = window.setTimeout(function () {
				if (!menu.classList.contains("opened")) {
					document.body.classList.remove("tdv-nav-on");
				}
			}, 480);
		}

		for (var i = 0; i < buttons.length; i++) {
			buttons[i].setAttribute("role", "button");
			buttons[i].setAttribute("tabindex", "0");
			buttons[i].setAttribute("aria-expanded", "false");
			buttons[i].setAttribute("aria-label", "Abrir menu");
			buttons[i].addEventListener("click", function (event) {
				if (!this.classList.contains("is-open")) {
					return;
				}
				event.preventDefault();
				event.stopPropagation();
				var close = document.querySelector(".menu_mobile_close");
				if (close) {
					close.click();
				}
				setOpen(false);
			}, true);
			buttons[i].addEventListener("click", function () {
				if (menu.classList.contains("opened")) {
					setOpen(true);
				}
			});
			buttons[i].addEventListener("keydown", function (event) {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					this.click();
				}
			});
		}

		var closers = document.querySelectorAll(".menu_mobile_close, .menu_mobile_overlay");
		for (var c = 0; c < closers.length; c++) {
			closers[c].addEventListener("click", function () {
				setOpen(false);
			});
		}

		document.addEventListener("keydown", function (event) {
			if (event.key === "Escape" && menu.classList.contains("opened")) {
				var close = document.querySelector(".menu_mobile_close");
				if (close) {
					close.click();
				}
				setOpen(false);
			}
		});
	}

	function revealTitles() {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		var titles = document.querySelectorAll("h1, h2.sc_promo_title, h2.sc_item_title");
		var pending = [];

		for (var i = 0; i < titles.length; i++) {
			var title = titles[i];
			if (title.closest("nav, footer, form, .menu_mobile, .menu_main_nav")) {
				continue;
			}
			var chars = splitChars(title);
			if (!chars.length) {
				continue;
			}
			var step = chars.length > 1 ? 800 / (chars.length - 1) : 0;
			for (var c = 0; c < chars.length; c++) {
				chars[c].style.animationDelay = (c * step) + "ms";
			}
			title.classList.add("tdv-letters");
			pending.push(title);
		}

		if (!pending.length) {
			return;
		}

		function show(title) {
			playEntrance(function () {
				title.classList.add("is-visible");
			});
		}

		if (!("IntersectionObserver" in window)) {
			pending.forEach(show);
			return;
		}

		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) {
					return;
				}
				show(entry.target);
				observer.unobserve(entry.target);
			});
		}, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

		pending.forEach(function (title) {
			observer.observe(title);
		});
	}

	function revealSequence() {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		var groups = [];

		function watch(root, items) {
			if (!items.length) {
				return;
			}
			groups.push({ root: root, items: items });
		}

		function arm(el, delay) {
			if (!el || el.classList.contains("tdv-rise")) {
				return;
			}
			el.classList.add("tdv-rise");
			el.style.setProperty("--tdv-delay", delay + "ms");
			el.addEventListener("animationend", function done(event) {
				if (event.target !== el || event.animationName !== "tdvRise") {
					return;
				}
				el.removeEventListener("animationend", done);
				el.style.opacity = "1";
				el.classList.remove("tdv-rise");
				if (!el.classList.contains("tdv-letters")) {
					el.classList.remove("is-visible");
				}
				el.style.animation = "none";
				el.style.transform = "";
			});
			var chars = el.querySelectorAll(".tdv-char");
			if (chars.length) {
				var step = chars.length > 1 ? 800 / (chars.length - 1) : 0;
				for (var c = 0; c < chars.length; c++) {
					chars[c].style.animationDelay = (delay + c * step) + "ms";
				}
			}
		}

		function hostOf(container) {
			var host = container.closest("[data-animation]");
			if (host && !host.closest("nav, footer, form, .menu_mobile")) {
				host.classList.add("tdv-seq-host");
			}
		}

		function pieces(container) {
			var out = [];
			for (var i = 0; i < container.children.length; i++) {
				flatten(container.children[i], out);
			}
			return out;
		}

		function flatten(el, out) {
			if (!el || el.nodeType !== 1) {
				return;
			}
			if (el.closest("form, .tdv-map-wrap, .sc_googlemap, nav, footer, .menu_mobile")) {
				return;
			}
			if (el.matches(".tdv-hero-actions, .sc_events_content, .sc_promo_content, .wpb_text_column, .wpb_wrapper, .tdv-ficha")) {
				for (var i = 0; i < el.children.length; i++) {
					flatten(el.children[i], out);
				}
				return;
			}
			if (el.matches("a.sc_anchor, script, style, br")) {
				return;
			}
			var text = (el.textContent || "").replace(/\s+/g, "");
			var visual = el.matches("img, figure, .sc_promo_image, .sc_promo_icon, .sc_icons_image, .post_featured, .images, .sc_action_item_image");
			if (!text && !visual && !el.querySelector("img")) {
				return;
			}
			out.push(el);
		}

		function sequence(container, extra) {
			if (!container || container.closest("nav, footer, form, .menu_mobile, .menu_main_nav, .tdv-map-wrap")) {
				return;
			}
			var items = pieces(container);
			if (!items.length) {
				return;
			}
			hostOf(container);
			items.forEach(function (el, index) {
				arm(el, (extra || 0) + index * 110);
			});
			watch(container, items);
		}

		document.querySelectorAll(".tdv-hero-copy, .sc_promo_text_inner, .sc_events, .sc_action_item_inner, .summary").forEach(function (container) {
			var items = pieces(container);
			if (container.classList.contains("sc_promo_text_inner")) {
				var promo = container.closest(".sc_promo");
				var image = promo ? promo.querySelector(".sc_promo_image") : null;
				if (image) {
					items.unshift(image);
				}
			}
			if (container.classList.contains("summary")) {
				var photo = container.parentElement ? container.parentElement.querySelector(".images") : null;
				if (photo) {
					items.unshift(photo);
				}
			}
			if (!items.length) {
				return;
			}
			hostOf(container);
			items.forEach(function (el, index) {
				arm(el, index * 110);
			});
			watch(container, items);
		});

		document.querySelectorAll(".top_panel_title").forEach(function (block) {
			var items = [];
			var kicker = block.querySelector(".tdv-kicker");
			var caption = block.querySelector("h1");
			var crumbs = block.querySelector(".breadcrumbs");
			if (kicker) items.push(kicker);
			if (caption) items.push(caption);
			if (crumbs) items.push(crumbs);
			items.forEach(function (el, index) {
				arm(el, index * 110);
			});
			watch(block, items);
		});

		document.querySelectorAll(".sc_icons_item").forEach(function (item, index) {
			sequence(item, index * 140);
		});

		document.querySelectorAll("ul.products").forEach(function (list) {
			if (list.closest("form, footer")) {
				return;
			}
			var cards = list.children;
			var cardIndex = 0;
			for (var i = 0; i < cards.length; i++) {
				if (!cards[i].classList || !cards[i].classList.contains("product")) {
					continue;
				}
				var bits = [];
				var featured = cards[i].querySelector(".post_featured");
				var title = cards[i].querySelector("h3");
				var text = cards[i].querySelector(".post_header p, .post_data p");
				if (featured) bits.push(featured);
				if (title) bits.push(title);
				if (text) bits.push(text);
				bits.forEach(function (el, index) {
					arm(el, cardIndex * 140 + index * 110);
				});
				watch(cards[i], bits);
				cardIndex += 1;
			}
		});

		document.querySelectorAll(".tdv-wide-photo, .woocommerce-tabs").forEach(function (block) {
			if (block.closest("form, .tdv-map-wrap")) {
				return;
			}
			arm(block, 0);
			watch(block, [block]);
		});

		if (!groups.length) {
			return;
		}

		function show(items) {
			playEntrance(function () {
				items.forEach(function (el) {
					el.classList.add("is-visible");
				});
			});
		}

		if (!("IntersectionObserver" in window)) {
			groups.forEach(function (group) {
				show(group.items);
			});
			return;
		}

		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) {
					return;
				}
				show(entry.target._tdvItems || []);
				observer.unobserve(entry.target);
			});
		}, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

		groups.forEach(function (group) {
			group.root._tdvItems = group.items;
			observer.observe(group.root);
		});
	}

	function splitChars(root) {
		var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
		var nodes = [];
		while (walker.nextNode()) {
			nodes.push(walker.currentNode);
		}
		var chars = [];
		nodes.forEach(function (node) {
			var text = node.nodeValue;
			if (!text) {
				return;
			}
			var fragment = document.createDocumentFragment();
			for (var i = 0; i < text.length; i++) {
				var character = text.charAt(i);
				if (/\s/.test(character)) {
					fragment.appendChild(document.createTextNode(character));
					continue;
				}
				var span = document.createElement("span");
				span.className = "tdv-char";
				span.textContent = character;
				fragment.appendChild(span);
				chars.push(span);
			}
			node.parentNode.replaceChild(fragment, node);
		});
		return chars;
	}
})();

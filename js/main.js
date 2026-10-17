document.addEventListener('DOMContentLoaded', () => {
	const root = document.documentElement;
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	// --- Theme toggle ---
	const THEMES = ['dark', 'slate', 'contrast'];
	const NAMES = { dark: 'Dark, blue and gold', slate: 'Slate, blue and gold', contrast: 'Light and dark, blue and gold' };
	const toggle = document.getElementById('theme-toggle');
	const nextTheme = () => THEMES[(THEMES.indexOf(root.dataset.theme) + 1) % THEMES.length];
	const label = () => {
		toggle.setAttribute('aria-label', 'Colour theme: ' + NAMES[root.dataset.theme] + '. Switch to ' + NAMES[nextTheme()]);
		toggle.title = NAMES[root.dataset.theme] + ' (click for ' + NAMES[nextTheme()].toLowerCase() + ')';
	};
	toggle.addEventListener('click', () => {
		root.dataset.theme = nextTheme();
		try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
		label();
	});
	label();

	// --- Portrait: few-step "sampling" from noise ---
	const img = document.getElementById('portrait-img');
	const canvas = document.getElementById('portrait-noise');
	const readout = document.getElementById('portrait-t');
	const resample = document.getElementById('resample');
	const STEPS = 4;
	const STEP_MS = 420;
	let timer = null;

	const paintNoise = () => {
		const size = 160;
		canvas.width = size;
		canvas.height = size;
		const ctx = canvas.getContext('2d');
		const frame = ctx.createImageData(size, size);
		const d = frame.data;
		// Standard normal noise (Box-Muller) mapped around mid-grey.
		for (let i = 0; i < d.length; i += 4) {
			for (let c = 0; c < 3; c += 1) {
				const u = Math.random() || 1e-9;
				const g = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
				d[i + c] = Math.max(0, Math.min(255, 128 + 80 * g));
			}
			d[i + 3] = 255;
		}
		ctx.putImageData(frame, 0, 0);
	};

	const steps = Array.from(document.querySelectorAll('#portrait-steps i'));
	const setT = (t) => {
		canvas.style.opacity = String(t);
		readout.textContent = t.toFixed(2);
		// One gold segment per completed sampling step.
		const done = Math.round((1 - t) * steps.length);
		steps.forEach((seg, i) => seg.classList.toggle('on', i < done));
	};

	const sample = () => {
		clearInterval(timer);
		paintNoise();
		resample.disabled = true;
		let step = 0;
		setT(1);
		timer = setInterval(() => {
			step += 1;
			setT(1 - step / STEPS);
			if (step >= STEPS) {
				clearInterval(timer);
				resample.disabled = false;
			}
		}, STEP_MS);
	};

	const giveUp = () => { clearInterval(timer); setT(0); resample.hidden = true; };

	if (reduceMotion) {
		setT(0);
	} else {
		// Hold pure noise until the photo has decoded, then step it in.
		paintNoise();
		setT(1);
		const start = () => setTimeout(sample, 350);
		if (img.complete) { if (img.naturalWidth) start(); else giveUp(); }
		else {
			img.addEventListener('load', start, { once: true });
			img.addEventListener('error', giveUp, { once: true });
		}
	}
	resample.addEventListener('click', sample);

	// --- Thread tabs: filter papers and projects ---
	const tabs = Array.from(document.querySelectorAll('.tab'));
	const panel = document.getElementById('work-panel');
	const items = Array.from(panel.querySelectorAll('.item'));
	const groups = Array.from(panel.querySelectorAll('[data-group]'));
	const featured = panel.querySelector('[data-featured]');
	const footnote = panel.querySelector('[data-footnote]');

	const inThread = (item, thread) => thread === 'all' || item.dataset.threads.split(' ').includes(thread);

	// Each item shows its categories as chips; a chip opens that category's tab.
	const labels = Object.fromEntries(tabs.map(t => [t.dataset.thread, t.firstChild.textContent.trim()]));
	items.forEach(it => {
		const row = document.createElement('p');
		row.className = 'keywords';
		it.dataset.threads.split(' ').forEach(key => {
			const chip = document.createElement('button');
			chip.type = 'button';
			chip.className = 'chip';
			chip.dataset.cat = key;
			chip.textContent = labels[key];
			chip.addEventListener('click', () => {
				select(tabs.find(t => t.dataset.thread === key), true);
				document.getElementById('publications').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
			});
			row.append(chip);
		});
		const links = it.querySelector('.pub-links');
		if (links) links.before(row); else it.append(row);
	});

	tabs.forEach(tab => {
		tab.querySelector('.count').textContent = items.filter(it => inThread(it, tab.dataset.thread)).length;
	});

	const select = (tab, focus) => {
		const thread = tab.dataset.thread;
		tabs.forEach(t => {
			const on = t === tab;
			t.setAttribute('aria-selected', String(on));
			t.tabIndex = on ? 0 : -1;
		});
		panel.setAttribute('aria-labelledby', tab.id);
		items.forEach(it => { it.hidden = !inThread(it, thread); });
		groups.forEach(g => {
			const shown = g.querySelectorAll('.item:not([hidden])').length;
			g.hidden = shown === 0;
			const n = g.querySelector('.group-title .n');
			if (n) n.textContent = shown;
		});
		// The journal paper is only featured in the full view.
		if (featured) featured.classList.toggle('pub--wide', thread === 'all');
		if (footnote) footnote.hidden = !panel.querySelector('.pub:not([hidden])');
		if (focus) tab.focus();
	};

	tabs.forEach((tab, i) => {
		tab.addEventListener('click', () => select(tab, false));
		tab.addEventListener('keydown', (e) => {
			let next = null;
			if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
			else if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
			else if (e.key === 'Home') next = tabs[0];
			else if (e.key === 'End') next = tabs[tabs.length - 1];
			if (next) { e.preventDefault(); select(next, true); }
		});
	});

	// ?thread=pq (etc.) opens a thread directly, so a view can be linked.
	const requested = new URLSearchParams(location.search).get('thread');
	select(tabs.find(t => t.dataset.thread === requested) || tabs[0], false);

	// --- Sideways strips: arrows page through by most of a view ---
	document.querySelectorAll('[data-strip]').forEach(nav => {
		const list = document.getElementById(nav.dataset.strip);
		const [prev, next] = nav.querySelectorAll('button');
		const sync = () => {
			const max = list.scrollWidth - list.clientWidth;
			nav.hidden = max <= 2;
			prev.disabled = list.scrollLeft <= 2;
			next.disabled = list.scrollLeft >= max - 2;
		};
		const page = (dir) => list.scrollBy({ left: dir * list.clientWidth * 0.85, behavior: reduceMotion ? 'auto' : 'smooth' });
		prev.addEventListener('click', () => page(-1));
		next.addEventListener('click', () => page(1));
		list.addEventListener('scroll', sync, { passive: true });
		window.addEventListener('resize', sync, { passive: true });
		sync();
	});

	// --- Edge fades on anything that scrolls sideways ---
	['publications', 'news-strip', 'career-strip'].forEach(id => {
		const el = document.getElementById(id);
		const sync = () => {
			const max = el.scrollWidth - el.clientWidth;
			el.classList.toggle('fade-start', el.scrollLeft > 2);
			el.classList.toggle('fade-end', el.scrollLeft < max - 2);
		};
		el.addEventListener('scroll', sync, { passive: true });
		window.addEventListener('resize', sync, { passive: true });
		sync();
	});

	// --- Nav scroll spy ---
	const bar = document.querySelector('.bar');
	const navLinks = Array.from(document.querySelectorAll('.bar nav a[href^="#"]'));
	const sections = navLinks.map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
	const syncActive = () => {
		const offset = bar.offsetHeight + 48;
		const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
		let current = -1;
		if (atBottom) current = sections.length - 1;
		else sections.forEach((s, i) => { if (s.getBoundingClientRect().top <= offset) current = i; });
		navLinks.forEach((a, i) => a.classList.toggle('active', i === current));
	};
	let ticking = false;
	const onScroll = () => {
		if (ticking) return;
		ticking = true;
		requestAnimationFrame(() => { syncActive(); ticking = false; });
	};
	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onScroll, { passive: true });
	syncActive();

	// --- Figure viewer ---
	const viewer = document.getElementById('viewer');
	const viewerImg = document.getElementById('viewer-img');
	const viewerTitle = document.getElementById('viewer-title');
	document.querySelectorAll('.pub-fig').forEach(btn => {
		btn.addEventListener('click', () => {
			const title = btn.closest('.pub').querySelector('.pub-title').textContent;
			viewerImg.src = btn.querySelector('img').src;
			viewerImg.alt = 'Figure from ' + title;
			viewerTitle.textContent = title;
			viewer.showModal();
		});
	});
	// Clicks on the dimmed backdrop land on the <dialog> itself.
	viewer.addEventListener('click', (e) => { if (e.target === viewer) viewer.close(); });
});

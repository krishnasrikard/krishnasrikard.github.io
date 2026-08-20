document.addEventListener('DOMContentLoaded', () => {
  // --- Scroll Reveal ---
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll('.animate-on-scroll').forEach(el => revealObserver.observe(el));

  // --- Theme Toggle ---
  // The initial theme is resolved by the inline script in <head> to avoid a
  // flash of the wrong palette; here we only handle user toggling.
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
    });
  }

  // --- Nav Scroll Spy ---
  const navLinks = Array.from(document.querySelectorAll('.masthead-nav a[href^="#"]'));
  const sections = navLinks
    .map(link => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);

  if (sections.length) {
    const masthead = document.querySelector('.masthead');

    const setActive = (index) => {
      navLinks.forEach((link, i) => link.classList.toggle('active', i === index));
    };

    const syncActive = () => {
      // Sit just past the sections' scroll-margin-top so that a section landed on
      // by an anchor jump reliably counts as the current one.
      const offset = (masthead ? masthead.offsetHeight : 0) + 32;
      // At the very bottom the last section may never clear the offset, so pin it.
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      if (atBottom) {
        setActive(sections.length - 1);
        return;
      }

      let current = -1;
      sections.forEach((section, i) => {
        if (section.getBoundingClientRect().top <= offset) current = i;
      });
      setActive(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        syncActive();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    syncActive();
  }
});

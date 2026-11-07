/* Progressive enhancement: all documentation is readable without JavaScript. */
(() => {
    const pages = [...document.querySelectorAll('.doc-page')];
    const links = [...document.querySelectorAll('.docs-menu a')];
    const search = document.querySelector('#docs-search');
    const sidebar = document.querySelector('#sidebar');
    const menuToggle = document.querySelector('#menu-toggle');
    const themePicker = document.querySelector('#theme-picker');
    const announcement = document.querySelector('#announcement');
    const outline = document.querySelector('#page-outline');
    const themes = [...themePicker.options].map(option => option.value);
    const announce = text => { announcement.textContent = text; };
    const frames = [...document.querySelectorAll('.component-frame')];
    function loadPreview(frame) {
        if (frame.dataset.previewLoaded) return;
        const source = frame.nextElementSibling;
        if (!source?.matches('template.preview-document')) return;
        frame.dataset.previewLoaded = 'true';
        if ('srcdoc' in frame) frame.srcdoc = source.content.textContent;
        else frame.src = frame.dataset.preview;
    }
    const previewObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting || entry.target.closest('.doc-page').hidden) return;
            loadPreview(entry.target);
            previewObserver.unobserve(entry.target);
        });
    }, { rootMargin: '240px 0px' }) : null;

    function activatePreviews(page) {
        page.querySelectorAll('.component-frame').forEach((frame, index) => {
            if (index === 0 || !previewObserver) loadPreview(frame);
            else previewObserver.observe(frame);
        });
    }
    const searchIndex = new Map(links.map(link => {
        const page = document.getElementById(link.hash.slice(1));
        return [link, page.textContent.toLowerCase()];
    }));
    function sendTheme(frame) {
        frame.contentWindow?.postMessage({ type: 'petal-preview-theme', theme: themePicker.value }, '*');
    }
    frames.forEach(frame => frame.addEventListener('load', () => sendTheme(frame)));
    window.addEventListener('message', event => {
        if (!['petal-preview-size', 'petal-preview-ready'].includes(event.data?.type)) return;
        const frame = frames.find(item => item.contentWindow === event.source);
        if (!frame) return;
        if (event.data.type === 'petal-preview-ready') sendTheme(frame);
        else if (Number.isFinite(event.data.height)) frame.style.height = `${Math.max(230, Math.min(850, event.data.height))}px`;
    });

    function closeMenu() {
        sidebar.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    function navigate({ focus = false } = {}) {
        let id;
        try { id = decodeURIComponent(location.hash.slice(1)); } catch { id = ''; }
        if (id === 'check') id = 'checkbox';
        // Heading anchors keep their parent page visible.
        const target = document.getElementById(id);
        const page = target?.closest('.doc-page') || pages[0];
        pages.forEach(item => { item.hidden = item !== page; });
        activatePreviews(page);
        links.forEach(link => {
            const active = link.hash === `#${page.id}`;
            link.classList.toggle('menu-active', active);
            if (active) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
        });
        document.title = `${page.dataset.title} — Petal UI`;
        outline.replaceChildren();
        page.querySelectorAll('h2:not(.card-title)').forEach((heading, index) => {
            heading.id ||= `${page.id}-section-${index}`;
            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent;
            outline.append(link);
        });
        closeMenu();
        if (focus) {
            const destination = target && target !== page ? target : page.querySelector('h1');
            destination.setAttribute('tabindex', '-1');
            destination.focus({ preventScroll: true });
            if (destination === page.querySelector('h1')) window.scrollTo(0, 0);
            else destination.scrollIntoView();
            announce(`${page.dataset.title} documentation`);
        }
    }

    function filterNavigation() {
        const query = search.value.trim().toLowerCase();
        let count = 0;
        links.forEach(link => {
            const matches = !query || searchIndex.get(link).includes(query);
            link.closest('li').hidden = !matches;
            if (matches) count++;
        });
        document.querySelectorAll('.docs-menu .menu-title').forEach(title => {
            let sibling = title.nextElementSibling;
            let visible = false;
            while (sibling && !sibling.classList.contains('menu-title')) {
                if (!sibling.hidden) visible = true;
                sibling = sibling.nextElementSibling;
            }
            title.hidden = !visible;
        });
        document.querySelector('#search-empty').hidden = count > 0;
        announce(`${count} matching documentation pages`);
    }

    search.addEventListener('input', filterNavigation);
    search.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            const query = search.value.trim().toLowerCase();
            const matches = links.filter(link => !link.closest('li').hidden);
            const title = link => document.getElementById(link.hash.slice(1)).dataset.title.toLowerCase();
            const first = matches.find(link => title(link) === query)
                || matches.find(link => title(link).startsWith(query))
                || matches[0];
            if (first) { first.click(); closeMenu(); }
        }
    });
    menuToggle.addEventListener('click', () => {
        const open = sidebar.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(open));
        if (open) search.focus();
    });
    document.addEventListener('click', event => {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
    document.addEventListener('keydown', event => {
        const editing = event.target.matches('input, textarea, select, [contenteditable="true"]');
        if ((event.key === '/' && !editing) || ((event.ctrlKey || event.metaKey) && event.key === 'k')) {
            event.preventDefault();
            if (matchMedia('(max-width: 640px)').matches) {
                sidebar.classList.add('is-open');
                menuToggle.setAttribute('aria-expanded', 'true');
            }
            search.focus();
        }
        if (event.key === 'Escape' && sidebar.classList.contains('is-open')) {
            closeMenu();
            menuToggle.focus();
        }
    });
    themePicker.addEventListener('change', () => {
        document.documentElement.dataset.theme = themePicker.value;
        frames.forEach(sendTheme);
        try { localStorage.setItem('petal-docs-theme', themePicker.value); } catch { /* Storage is optional. */ }
    });
    try {
        const saved = localStorage.getItem('petal-docs-theme');
        const theme = themes.includes(saved) ? saved : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        themePicker.value = theme;
        document.documentElement.dataset.theme = theme;
    } catch { /* Keep the document's default theme when storage is unavailable. */ }
    frames.forEach(sendTheme);

    document.addEventListener('click', async event => {
        const button = event.target.closest('.copy-code');
        if (!button) return;
        const code = button.closest('.codebox').querySelector('code');
        try {
            await navigator.clipboard.writeText(code.textContent);
            button.textContent = 'Copied!';
            announce('Code copied to clipboard');
        } catch {
            const range = document.createRange();
            range.selectNodeContents(code);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            button.textContent = 'Selected';
            announce('Code selected. Use your browser copy command.');
        }
        setTimeout(() => { button.textContent = 'Copy'; }, 1800);
    });
    window.addEventListener('hashchange', () => navigate({ focus: true }));
    navigate();
    document.documentElement.classList.add('js');
})();

(() => {
    let previousHeight = 0;
    function reportSize() {
        const height = Math.min(850, Math.max(230, document.body.scrollHeight));
        if (height === previousHeight) return;
        previousHeight = height;
        parent.postMessage({ type: 'petal-preview-size', height }, '*');
    }
    window.addEventListener('message', event => {
        if (event.source !== parent || event.data?.type !== 'petal-preview-theme') return;
        if (['light', 'dark', 'cupcake', 'forest', 'retro'].includes(event.data.theme)) {
            document.documentElement.dataset.theme = event.data.theme;
        }
    });
    // Reference URLs illustrate destinations rather than implement application routes.
    document.addEventListener('click', event => {
        if (event.target.closest('a[href]')) event.preventDefault();
    });
    document.addEventListener('submit', event => {
        if (event.target.method !== 'dialog') event.preventDefault();
    });
    new ResizeObserver(reportSize).observe(document.body);
    window.addEventListener('load', reportSize);
    parent.postMessage({ type: 'petal-preview-ready' }, '*');
    reportSize();
})();

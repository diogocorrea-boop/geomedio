function trackEvent(action, category = 'Interação', label = '') {
    console.log(`[Analytics] ${action}`, { category, label });
    if (window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
        });
    }
}

window.trackEvent = trackEvent;

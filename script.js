document.addEventListener('DOMContentLoaded', () => {
    const logoBg = document.getElementById('bg-logo');
    const chipsWrapper = document.getElementById('chips-wrapper');
    const logoContainer = document.getElementById('logo-container');

    // Sequence Config
    const INITIAL_DELAY = 800; // Time logo stays fully visible
    const FADE_DURATION = 1500; // Matches CSS transition time
    const CHIP_DELAY = 1000; // Delay after logo starts fading to show chips

    // Start Sequence
    setTimeout(() => {
        // 1. Fade out Logo
        logoBg.classList.add('hidden');

        // 2. Reveal Chips (slightly overlapping with fade or after)
        setTimeout(() => {
            chipsWrapper.classList.add('visible');
            logoContainer.classList.add('visible');
        }, CHIP_DELAY);

    }, INITIAL_DELAY);
});

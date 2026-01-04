
/**
 * Sniper Scope Effect
 * 
 * Shows a "sniper scope" spotlight effect when the user holds down the right mouse button.
 * - Dim the screen
 * - Highlight area around cursor
 * - Suppress context menu if the scope was effectively used (held for a certain duration).
 */

document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const SCOPE_ID = 'sniper-scope-overlay';
    const ACTIVATION_DELAY = 150; // ms to wait before showing scope (avoids flickering on normal clicks)
    const MIN_HOLD_DURATION_FOR_SUPPRESSION = 200; // ms, if held longer than this, suppress context menu

    let activationTimer = null;
    let startTime = 0;
    let isScopeActive = false;

    // Create the overlay element if it doesn't exist
    if (!document.getElementById(SCOPE_ID)) {
        const overlay = document.createElement('div');
        overlay.id = SCOPE_ID;
        document.body.appendChild(overlay);
    }

    const overlay = document.getElementById(SCOPE_ID);

    // Update scope position
    const updateScopePosition = (e) => {
        if (!isScopeActive) return;
        const x = e.clientX;
        const y = e.clientY;
        overlay.style.setProperty('--scope-x', `${x}px`);
        overlay.style.setProperty('--scope-y', `${y}px`);
    };

    // Mouse Down (Right Click)
    document.addEventListener('mousedown', (e) => {
        // Only trigger on right click (button 2)
        if (e.button !== 2) return;

        startTime = Date.now();

        // Delay activation slightly to check if it's a long hold
        activationTimer = setTimeout(() => {
            isScopeActive = true;
            overlay.classList.add('active');

            // Set initial position
            overlay.style.setProperty('--scope-x', `${e.clientX}px`);
            overlay.style.setProperty('--scope-y', `${e.clientY}px`);

            document.body.style.cursor = 'none'; // Optional: hide actual cursor
        }, ACTIVATION_DELAY);
    });

    // Mouse Move
    document.addEventListener('mousemove', (e) => {
        if (isScopeActive) {
            updateScopePosition(e);
        }
    });

    // Mouse Up
    document.addEventListener('mouseup', (e) => {
        if (e.button !== 2) return;

        clearTimeout(activationTimer);

        if (isScopeActive) {
            isScopeActive = false;
            overlay.classList.remove('active');
            document.body.style.cursor = ''; // Restore cursor
        }
    });

    // Context Menu
    document.addEventListener('contextmenu', (e) => {
        const duration = Date.now() - startTime;

        // If the button was held long enough to be considered a "scope intent", suppress the menu
        if (duration > MIN_HOLD_DURATION_FOR_SUPPRESSION) {
            e.preventDefault();
        }
        // Otherwise, let the context menu appear normally (it was just a quick right click)
    });
});

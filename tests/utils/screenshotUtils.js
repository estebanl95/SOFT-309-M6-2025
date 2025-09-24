/**
 * Screenshot utilities for Playwright tests
 */

/**
 * Creates an organized screenshot path with timestamp
 * @param {string} testSuite - Name of the test suite (e.g., 'login-tests', 'wishlist-tests')
 * @param {string} stepName - Name of the step (e.g., 'after-login', 'form-filled')
 * @param {string} browserName - Browser name (chromium, firefox, webkit)
 * @returns {string} - Full path for screenshot
 */
export function getScreenshotPath(testSuite, stepName, browserName = 'chromium') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `screenshots/${testSuite}/${browserName}/${timestamp}-${stepName}.png`;
}

/**
 * Takes a screenshot with consistent options
 * @param {Page} page - Playwright page object
 * @param {string} path - Screenshot path
 * @param {Object} options - Additional screenshot options
 */
export async function takeScreenshot(page, path, options = {}) {
    const defaultOptions = {
        fullPage: true,
        type: 'png',
        ...options
    };
    
    await page.screenshot({ path, ...defaultOptions });
}

/**
 * Creates directories for screenshot organization
 * @param {string} testSuite - Name of the test suite
 * @param {Array} browsers - Array of browser names
 */
export function createScreenshotDirs(testSuite, browsers = ['chromium', 'firefox', 'webkit']) {
    // This would need to be implemented with file system operations
    // For now, we'll rely on Playwright automatically creating directories
    return `screenshots/${testSuite}`;
}

/**
 * Takes a screenshot at key test moments
 * @param {Page} page - Playwright page object
 * @param {string} testSuite - Test suite name
 * @param {string} moment - Test moment identifier
 * @param {string} browserName - Browser name
 */
export async function captureTestMoment(page, testSuite, moment, browserName = 'chromium') {
    const path = getScreenshotPath(testSuite, moment, browserName);
    await takeScreenshot(page, path);
    return path;
}
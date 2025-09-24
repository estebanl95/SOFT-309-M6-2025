# Screenshot Guide for Playwright Tests

This project includes comprehensive screenshot functionality across all test files to provide visual documentation of test execution and help with debugging.

## 📸 Screenshot Features

### Automatic Screenshot Capture
Screenshots are automatically captured at key moments during test execution:

1. **Before key actions** - Shows the state before important user interactions
2. **After form submissions** - Documents results of form interactions  
3. **Error states** - Captures validation errors and warnings
4. **Success states** - Shows successful completion of actions
5. **Page transitions** - Documents navigation between different pages

### Organized File Structure
All screenshots are organized in a clear directory structure:

```
screenshots/
├── login-tests/
│   ├── chromium/
│   ├── firefox/
│   └── webkit/
├── register-tests/
│   ├── chromium/
│   ├── firefox/
│   └── webkit/
├── contact-tests/
│   ├── chromium/
│   ├── firefox/
│   └── webkit/
├── wishlist-add-test/
│   ├── chromium/
│   ├── firefox/
│   └── webkit/
├── wishlist-remove-test/
│   ├── chromium/
│   ├── firefox/
│   └── webkit/
├── wishlist-loggedout-tests/
│   ├── chromium/
│   ├── firefox/
│   └── webkit/
└── navigation-tests/
    ├── chromium/
    ├── firefox/
    └── webkit/
```

## 🛠️ How It Works

### Screenshot Utility Functions
Located in `tests/utils/screenshotUtils.js`:

- **`captureTestMoment(page, testSuite, moment, browserName)`** - Main function for taking screenshots
- **`getScreenshotPath(testSuite, stepName, browserName)`** - Generates organized file paths
- **`takeScreenshot(page, path, options)`** - Takes screenshot with consistent settings

## Current Screenshot Structure
```
screenshots/
├── wishlist-add-test/
│   └── chromium/
│       ├── 2025-09-24T00-50-54-099Z-01-after-login.png
│       ├── 2025-09-24T00-50-55-790Z-02-item-added-to-wishlist.png
│       └── 2025-09-24T00-50-57-351Z-03-wishlist-page-view.png
├── wishlist-remove-test/
│   └── chromium/
│       ├── 2025-09-24T00-50-56-893Z-04-before-removing-item.png
│       └── 2025-09-24T00-50-58-742Z-05-after-removing-item.png
└── (failure screenshots from config)
```

## Screenshot Options

### Basic Screenshot
```javascript
await page.screenshot({ path: 'screenshot.png' });
```

### Full Page Screenshot
```javascript
await page.screenshot({ path: 'screenshot.png', fullPage: true });
```

### Element Screenshot
```javascript
await element.screenshot({ path: 'element.png' });
```

### With Options
```javascript
await page.screenshot({ 
    path: 'screenshot.png', 
    fullPage: true,
    clip: { x: 0, y: 0, width: 800, height: 600 }
});
```

## Configuration in playwright.config.js
```javascript
use: {
    screenshot: 'only-on-failure',  // or 'on', 'off'
    video: 'retain-on-failure',     // optional video recording
}
```

## Helper Function for Organized Screenshots
```javascript
function getScreenshotPath(testName, stepName, browserName = 'chromium') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `screenshots/${testName}/${browserName}/${timestamp}-${stepName}.png`;
}
```

## Best Practices
1. Use descriptive names for screenshots
2. Organize by test name and browser
3. Include timestamps for uniqueness
4. Capture key moments in test flow
5. Use full page screenshots for context
6. Enable automatic failure screenshots
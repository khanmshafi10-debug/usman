from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

opts = Options()
opts.add_argument('--headless')
opts.add_argument('--window-size=1400,1000')
driver = webdriver.Chrome(options=opts)
driver.get('http://localhost:3000/')
time.sleep(2)

# Dismiss any popup/modal overlays immediately
driver.execute_script("""
    var popups = document.querySelectorAll('[data-testid*="klaviyo"], [class*="klaviyo"], [id*="klaviyo"], .needsclick, [class*="modal"]');
    popups.forEach(function(el) {
        if (!el.classList.contains('group/bottle')) {
            el.remove();
        }
    });
    // Set localStorage or cookie so klaviyo doesn't trigger
    localStorage.setItem('klaviyo_dismissed', 'true');
""")

# Scroll to the section
links = driver.find_elements(By.XPATH, "//*[contains(text(), 'Lasoora Achar Bottles')]")
if links:
    driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", links[-1])
    time.sleep(1)
    # Remove any modal that popped up after scroll
    driver.execute_script("""
        var popups = document.querySelectorAll('[data-testid*="klaviyo"], [class*="klaviyo"], [id*="klaviyo"], .needsclick');
        popups.forEach(function(el) { el.remove(); });
    """)
    time.sleep(0.5)
    driver.save_screenshot('screenshot_bottles_animated.png')
    print('Screenshot saved successfully!')
else:
    print('Section not found')

driver.quit()

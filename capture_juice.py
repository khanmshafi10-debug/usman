from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

opts = Options()
opts.add_argument('--headless')
opts.add_argument('--window-size=1400,1000')
driver = webdriver.Chrome(options=opts)
driver.get('http://localhost:3000/')
time.sleep(2)

# Remove any popup / modal overlays if present
driver.execute_script("""
    document.querySelectorAll('[data-testid*="klaviyo"], [class*="klaviyo"], [id*="klaviyo"]').forEach(el => el.remove());
    document.querySelectorAll('.needsclick').forEach(el => el.remove());
""")

links = driver.find_elements(By.CSS_SELECTOR, "a[href*='2oz-pickle-juice']")
for l in links:
    if l.is_displayed():
        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", l)
        time.sleep(1)
        driver.save_screenshot('screenshot_lasoora_juice_section.png')
        print('Captured displayed link without modal!')
        break

driver.quit()

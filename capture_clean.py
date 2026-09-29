from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

opts = Options()
opts.add_argument('--headless')
opts.add_argument('--window-size=1400,1100')
driver = webdriver.Chrome(options=opts)
driver.get('http://localhost:3000/')
time.sleep(2)

driver.execute_script("""
    document.querySelectorAll('[data-testid*="klaviyo"], [class*="klaviyo"], [id*="klaviyo"], .needsclick').forEach(el => el.remove());
""")

cards = driver.find_elements(By.CSS_SELECTOR, '.wsgProdSel')
if cards:
    driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", cards[0])
    time.sleep(1)
    driver.execute_script("""
        document.querySelectorAll('[data-testid*="klaviyo"], [class*="klaviyo"], [id*="klaviyo"], .needsclick').forEach(el => el.remove());
    """)
    time.sleep(0.5)
    driver.save_screenshot('screenshot_clean_bottles_section.png')
    print('Clean section captured!')

driver.quit()

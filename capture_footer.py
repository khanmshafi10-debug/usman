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

driver.execute_script("""
    document.querySelectorAll('[data-testid*="klaviyo"], [class*="klaviyo"], [id*="klaviyo"], .needsclick').forEach(el => el.remove());
""")

footer = driver.find_elements(By.TAG_NAME, 'footer')
if footer:
    driver.execute_script("arguments[0].scrollIntoView({block: 'start'});", footer[0])
    time.sleep(1.5)
    driver.execute_script("""
        document.querySelectorAll('[data-testid*="klaviyo"], [class*="klaviyo"], [id*="klaviyo"], .needsclick').forEach(el => el.remove());
    """)
    time.sleep(0.5)
    driver.save_screenshot('screenshot_updated_footer.png')
    print('Footer screenshot captured!')
else:
    print('Footer not found')

driver.quit()

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

sec = driver.find_elements(By.CSS_SELECTOR, "section[id*='pickle_juice']")
if sec:
    driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", sec[0])
    time.sleep(1)
    driver.save_screenshot('screenshot_lasoora_juice_section.png')
    print('Captured pickle_juice section by ID!')
else:
    print('pickle_juice section not found by ID')

driver.quit()

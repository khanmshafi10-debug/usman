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

elements = driver.find_elements(By.XPATH, "//*[contains(text(), 'Lasoora Achar Bottles')]")
if elements:
    driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", elements[0])
    time.sleep(1)
    driver.save_screenshot('screenshot_lasoora_bottles.png')
    print('Found and captured Lasoora Achar Bottles!')
else:
    print('Element not found')

driver.quit()

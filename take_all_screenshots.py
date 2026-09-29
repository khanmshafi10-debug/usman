from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

opts = Options()
opts.add_argument('--headless')
opts.add_argument('--window-size=1400,1200')
driver = webdriver.Chrome(options=opts)
driver.get('http://localhost:3000/')
time.sleep(2)

# 1. Hero section
driver.save_screenshot('screenshot_hero.png')

# 2. Comparison section
try:
    comp = driver.find_element(By.CSS_SELECTOR, 'img[src*="usman-achar-jar"]')
    driver.execute_script('arguments[0].scrollIntoView({block: "center"});', comp)
    time.sleep(1)
    driver.save_screenshot('screenshot_comparison.png')
except Exception as e:
    print('Error comparison:', e)

# 3. Product Showcase section (Pickle Pouch / Lasoora Achar section)
try:
    showcase = driver.find_element(By.CSS_SELECTOR, '.pickle-pouch')
    driver.execute_script('arguments[0].scrollIntoView({block: "center"});', showcase)
    time.sleep(1)
    driver.save_screenshot('screenshot_bottles_showcase.png')
except Exception as e:
    print('Error showcase:', e)

# 4. Lasoora Bottles / Juice section
try:
    juice = driver.find_element(By.XPATH, '//*[contains(text(), "Lasoora Achar Bottles")]')
    driver.execute_script('arguments[0].scrollIntoView({block: "center"});', juice)
    time.sleep(1)
    driver.save_screenshot('screenshot_bottles_juice.png')
except Exception as e:
    print('Error juice:', e)

driver.quit()
print('All screenshots captured successfully!')

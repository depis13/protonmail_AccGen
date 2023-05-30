
import logging
import os
import json
from random import randint
import sys
from typing import Union
from time import sleep

import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.remote.webelement import WebElement


from get_driver_version import get_chrome_version
from randomizer import randomize

logger = logging.getLogger(__name__)

class MailGenerator:

    def __init__(self, cnf):
        self.cnf = cnf
        self.driver = None
        self.server_code=None

    password=None
    username=None
    bad_servers=['cn','de']

    def make_result(self,username,password) -> bool:
        try:
            #making json with proton mail data
            if not os.path.exists("results"):
                os.mkdir("results")
            filename = "results/protonmails.json"
            if not os.path.exists(filename):
                with open(filename, "w") as f:
                    json.dump([], f)
            with open(filename, "r+") as f:
                data = json.load(f)
                data.append({"username": username, "password": password})
                f.seek(0)
                json.dump(data, f, indent=4)
                f.truncate()
            return True
        except Exception as err:
            logger.error(f'make_result() error: {err}')

    def make_handles(self) -> bool:
        try:
            #making handles
            self.proton_tab=self.driver.current_window_handle
            self.driver.switch_to.new_window('tab')
            self.disposable_mail_tab=self.driver.current_window_handle
            self.driver.switch_to.window(self.proton_tab)
            return True
        except Exception as err:
            logger.error(f'make_handles() canot make handles. {err}')
            return False

    def get_mail(self) -> Union[str,None]:
        try:
            #getting 10min mail address
            self.driver.switch_to.window(self.disposable_mail_tab)
            url='https://10minutesemail.net/'
            self.driver.get(url)
            mail_input=WebDriverWait(self.driver, 5).until(
                        EC.element_to_be_clickable((By.ID, "trsh_mail")))
            while True:
                mail=mail_input.get_property('value')
                if 'landing' not in mail:
                    break
            #self.csrf_token = self.driver.find_element(By.CSS_SELECTOR,'meta[name="csrf_token"]').get_attribute('content')
            #logger.info(f'csrf: {self.csrf_token}')
            logger.info(f'temporary mail address: {mail}')
            self.driver.switch_to.window(self.proton_tab)
            return(mail)
        except Exception as err:
            logger.error(f'get_mail() error: {err}')

    def get_verification_code(self) -> Union[str,None]:
        try:
            #getting verification code from 10min mail
            self.driver.switch_to.window(self.disposable_mail_tab)
            while True:
                try:
                    verification_code_btn=WebDriverWait(self.driver, 300).until(
                        EC.element_to_be_clickable((By.CLASS_NAME, "subject_email")))
                    verification_code_btn.click()
                    break
                except:
                    WebDriverWait(self.driver, 1).until(
                        EC.element_to_be_clickable((By.XPATH,"//button[@aria-label='Consent']"))).click()
            sleep(1)
            iframe=self.driver.find_element(By.ID,'myIframe')
            self.driver.switch_to.frame(iframe)
            verification_code=self.driver.find_element(By.TAG_NAME,'code').text.strip()
            self.driver.switch_to.default_content()
            logger.info(f'verification code: {verification_code}')
            self.driver.switch_to.window(self.proton_tab)
            return verification_code
        except Exception as err:
            logger.error(f'get_verification_code() error: {err}')
    
    def fill_registration_data(self) -> bool:
        try:
            url='https://account.proton.me/signup?plan=free&billing=12&ref=prctbl&minimumCycle=12&currency=EUR&product=mail&language=en'
            #fill registration data
            self.driver.get(url)
            password_input=WebDriverWait(self.driver, 300).until(
                EC.element_to_be_clickable((By.ID, "password")))
            password_input.click()
            password_input.send_keys(self.password)
            repeat_password_input=self.driver.find_element(By.ID, 'repeat-password')
            repeat_password_input.send_keys(self.password)
            username_iframe=self.driver.find_element(By.CSS_SELECTOR, "iframe[title='Username']")
            self.driver.switch_to.frame(username_iframe)
            username_input = self.driver.find_element(By.ID, "email")
            username_input.send_keys(self.username)
            self.driver.switch_to.default_content()
            create_account_button=self.driver.find_element(By.XPATH,"//button[contains(text(),'Create account')]")
            create_account_button.click()
            return True
        except:
            logger.error(f'cannot fill registration data')
            return False
    
    def find_email_input(self) -> Union[WebElement,None]:
        try:
            #trying to choose email verification
            try:
                #phone/email
                phone_input=WebDriverWait(self.driver, 20).until(
                EC.element_to_be_clickable((By.ID, "phone")))
                email_verification_button=self.driver.find_element(By.ID, "label_0")
                email_verification_button.click()
                email_input=self.driver.find_element(By.ID, "email")
                return email_input
            except:
                try:
                    email_input=self.driver.find_element(By.ID, "email")
                    return email_input
                except:
                    email_verification_button=self.driver.find_element(By.ID, "label_1")
                    email_verification_button.click()
                    email_input=self.driver.find_element(By.ID, "email")
                    return email_input
        except Exception as err:
            logger.error(f'find_email_input() cannot find email input. {err}')


    def create_account(self) -> bool:
        try:
            if not self.make_handles():
                return False
            self.username=randomize('-s', randint(4,7))+randomize('-s',randint(4,7))+randomize('-s',randint(4,7))
            self.password=randomize('-p',randint(14,25))
            logger.info(f'Username: {self.username}')
            logger.info(f'Password: {self.password}')
            if not self.fill_registration_data():
                return False
            #choose email verification
            email_input=self.find_email_input()
            if not email_input:
                return False
            mail=self.get_mail()
            if not mail:
                return False
            
            #sending mail for verification
            try:
                email_input.click()
                email_input.send_keys(Keys.END)
                email_input.send_keys(Keys.SHIFT + Keys.HOME)
                email_input.send_keys(Keys.DELETE)
                email_input.send_keys(mail)
                get_code_button=self.driver.find_element(By.XPATH, "//button[contains(text(), 'Get verification code')]")
                get_code_button.click()
                verification_input=WebDriverWait(self.driver, 10).until(
                    EC.element_to_be_clickable((By.ID, "verification")))
            except Exception as err:
                raise Exception(f'error during sending mail verification. {err}')

            code=self.get_verification_code()
            if not code:
                return False

            #completing registration
            try:
                verification_input.send_keys(code)
                verify_button=self.driver.find_element(By.XPATH,"//button[contains(text(),'Verify')]")
                verify_button.click()
                display_namy_apply_button=WebDriverWait(self.driver, 40).until(
                    EC.element_to_be_clickable((By.XPATH,"//button[contains(text(),'Next')]")))
                display_namy_apply_button.click()
            except Exception as err:
                raise Exception(f'error during completing registration. {err}')

            if self.make_result(self.username,self.password):
                return True
        except Exception as err:
            logger.error(f'create_account() error: {err}')
            return False

    def create_driver(self):
        #options
        options = uc.ChromeOptions()
        if self.cnf["selenium"]["headless"]:
            options.headless = True
            options.add_argument('--disable-gpu')
        options.add_argument('--disable-application-cache')
        options.add_argument('--disable-cache')
        options.add_argument('--disk-cache-size=0')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--lang=en')
        options.add_argument("--no-sandbox")
        options.add_argument('--mute-audio')
        options.add_argument('--use-fake-device-for-media-stream')
        options.add_argument('--no-first-run')
        proxy_ext_relative_path = f"chrome_extensions/brisk"
        proxy_ext_absolute_path = os.path.abspath(proxy_ext_relative_path)
        options.add_argument(f"--load-extension={proxy_ext_absolute_path}")
        while True:
            try:
                version = get_chrome_version()
                if self.cnf["selenium"]["headless"]:
                    self.driver = uc.Chrome(version_main=version, options=options, headless=True)
                else:
                    self.driver = uc.Chrome(version_main=version, options=options)
                #proxy
                wait = WebDriverWait(self.driver, 10)
                proxy_ext_url = 'chrome-extension://ciifcakemmcbbdpmljdohdmbodagmela/html/popup.html'
                self.driver.get(proxy_ext_url)
                server_list_button = wait.until(
                    EC.element_to_be_clickable((By.CLASS_NAME, "current-location")))
                max_connect_attempts=self.cnf['selenium']['max_proxy_attempts']
                for i in range(max_connect_attempts):
                    try:
                        server_list_button.click()
                        location_items=wait.until(EC.visibility_of_all_elements_located((By.CLASS_NAME, 'location-item')))
                        for location in location_items:
                            code_value=location.get_attribute('data-code')
                            if code_value!=self.server_code and code_value not in MailGenerator.bad_servers:
                                location.click()
                                self.server_code=code_value
                                logger.info(f'Selected server is [{self.server_code}]')
                                wait.until(EC.text_to_be_present_in_element((By.CLASS_NAME, 'btn-status'), 'DISCONNECT'))
                                return
                        else:
                            raise Exception(f'cannot connect to provided servers')
                    except:
                        logger.warning(f'Proxy connection attempt {i+1}/{max_connect_attempts} failed')
                else:
                    raise Exception('cannot connect to proxy')
            except Exception as err:
                if self.driver:
                    self.stop()
                if 'urlopen error retrieval incomplete' in str(err):
                    continue
                else:
                    raise Exception(f'driver initialization error: {err}')

    def run(self) -> bool:
        try:
            i = 0
            max_execution_times = self.cnf["max_exec_times"]
            while True:
                i += 1
                if i > max_execution_times:
                    raise Exception("Unable to make mail within defined number of executions")
                logger.info(f'Attempt {i}/{max_execution_times}')
                try:
                    self.create_driver()
                    if not self.create_account():
                        self.stop()
                        continue
                    logger.info('registration completed')
                    return
                except Exception as e:
                    msg = f"run() falied. {e}"
                    logger.warning(msg)
                finally:
                    if self.driver:
                        self.stop()
        except (KeyboardInterrupt, SystemExit):
            if self.driver:
                self.stop()
            sys.exit(0)
        except Exception as err:
            msg = f'Error in run(). {err}'
            logger.error(msg)
        finally:
            if self.driver:
                self.stop()

    def stop(self):
        if self.driver:
            self.driver.quit()
            try:
                self.driver.service.stop()
            except:
                pass
            self.driver.command_executor.close()
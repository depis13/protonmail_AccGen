
import logging
import os
import json
from random import randint

import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.common.proxy import Proxy, ProxyType
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys


from get_driver_version import get_chrome_version
from randomizer import randomize

logger = logging.getLogger(__name__)

class MailGenerator:

    def __init__(self, cnf):
        self.cnf = cnf
        self.driver = None
    
    def make_result(self,username,password) -> bool:
        try:
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

    def make_handles(self):
        self.proton_tab=self.driver.current_window_handle
        self.driver.switch_to.new_window('tab')
        self.disposable_mail_tab=self.driver.current_window_handle
        self.driver.switch_to.window(self.proton_tab)

    def get_mail(self):
        try:
            self.driver.switch_to.window(self.disposable_mail_tab)
            url='https://10minutesemail.net/'
            self.driver.get(url)
            
            try:
                consent_button=WebDriverWait(self.driver, 12).until(
                EC.element_to_be_clickable((By.XPATH, '//button[@aria-label="Consent"]')))
                consent_button.click()
            except:
                pass
            mail_input=self.driver.find_element(By.ID, 'tempEmailAddress')
            mail=mail_input.get_property('value')
            logger.info(f'temporary mail address: {mail}')
            self.driver.switch_to.window(self.proton_tab)
            return(mail)
        except Exception as err:
            logger.error(f'get_mail() error: {err}')

    def get_verification_code(self):
        try:
            self.driver.switch_to.window(self.disposable_mail_tab)

            verification_code_btn=WebDriverWait(self.driver, 200).until(
                EC.element_to_be_clickable((By.XPATH, "//td[contains(text(), 'Proton Verification Code')]")))
            verification_code_btn.click()
            verification_code_iframe=WebDriverWait(self.driver, 50).until(
                EC.visibility_of_element_located((By.CSS_SELECTOR, 'iframe[height="400px"]')))
            self.driver.switch_to.frame(verification_code_iframe)
            verification_code=self.driver.find_element(By.TAG_NAME, "code").text.strip()
            self.driver.switch_to.default_content()

            logger.info(f'verification code: {verification_code}')
            self.driver.switch_to.window(self.proton_tab)
            return verification_code
        except Exception as err:
            logger.error(f'get_verification_code() error: {err}')
    
    def create_account(self):
        try:
            url='https://account.proton.me/signup?plan=free&billing=12&ref=prctbl&minimumCycle=12&currency=EUR&product=mail&language=en'

            self.make_handles()
            username=randomize('-s', randint(4,7))+randomize('-s',randint(4,7))+randomize('-s',randint(4,7))
            logger.info(f'Username: {username}')
            password=randomize('-p',randint(14,25))
            logger.info(f'Password: {password}')

            #fill registration data
            self.driver.get(url)
            password_input=WebDriverWait(self.driver, 300).until(
                EC.element_to_be_clickable((By.ID, "password")))
            
            password_input.click()

            password_input.send_keys(password)

            repeat_password_input=self.driver.find_element(By.ID, 'repeat-password')
            repeat_password_input.send_keys(password)

            username_iframe=self.driver.find_element(By.CSS_SELECTOR, "iframe[title='Username']")
            self.driver.switch_to.frame(username_iframe)
            username_input = self.driver.find_element(By.ID, "email")
            username_input.send_keys(username)
            self.driver.switch_to.default_content()

            create_account_button=self.driver.find_element(By.XPATH,"//button[contains(text(),'Create account')]")
            create_account_button.click()

            #choose email verification
            try:
                phone_input=WebDriverWait(self.driver, 20).until(
                EC.element_to_be_clickable((By.ID, "phone")))
                email_verification_button=self.driver.find_element(By.ID, "label_0")
                email_verification_button.click()
                email_input=self.driver.find_element(By.ID, "email")
            except:
                try:
                    email_input=self.driver.find_element(By.ID, "email")
                except:
                    email_verification_button=self.driver.find_element(By.ID, "label_1")
                    email_verification_button.click()
                    email_input=self.driver.find_element(By.ID, "email")

            mail=self.get_mail()
            email_input.click()
            email_input.send_keys(Keys.END)
            email_input.send_keys(Keys.SHIFT + Keys.HOME)
            email_input.send_keys(Keys.DELETE)
            email_input.send_keys(mail)
            get_code_button=self.driver.find_element(By.XPATH, "//button[contains(text(), 'Get verification code')]")
            get_code_button.click()
            verification_input=WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable((By.ID, "verification")))
            code=self.get_verification_code()

            verification_input.send_keys(code)
            verify_button=self.driver.find_element(By.XPATH,"//button[contains(text(),'Verify')]")
            verify_button.click()
            display_namy_apply_button=WebDriverWait(self.driver, 40).until(
                EC.element_to_be_clickable((By.XPATH,"//button[contains(text(),'Next')]")))
            display_namy_apply_button.click()

            if self.make_result(username,password):
                return True
        except Exception as err:
            logger.error(f'create_account() error: {err}')
            return False

    def create_driver(self, extension_proxy_name=None):
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
        if self.cnf["proxy"]["use_proxy"]:
            if self.cnf["proxy"]["extension_proxy"]:
                ext_relative_path = f"chrome_extensions/{extension_proxy_name}"
                ext_absolute_path = os.path.abspath(ext_relative_path)
                options.add_argument(f"--load-extension={ext_absolute_path}")
                if self.cnf["proxy"]["extension_proxy"] == 'auth':
                    proxy = Proxy()
                    proxy.proxy_type = ProxyType.MANUAL
                    proxy.http_proxy = f'{self.cnf["proxy"]["endpoint"]}:{self.cnf["proxy"]["port"]}'
                    options.add_argument('--proxy-server=%s' % proxy.http_proxy)
            else:
                proxy = Proxy()
                proxy.proxy_type = ProxyType.MANUAL
                proxy.http_proxy = f'{self.cnf["proxy"]["endpoint"]}:{self.cnf["proxy"]["port"]}'
                options.add_argument('--proxy-server=%s' % proxy.http_proxy)
        while True:
            try:
                version = get_chrome_version()
                if self.cnf["selenium"]["headless"]:
                    self.driver = uc.Chrome(version_main=version, options=options, headless=True)
                else:
                    self.driver = uc.Chrome(version_main=version, options=options)
                #proxy
                if self.cnf["proxy"]["use_proxy"]:
                    if 'extension_proxy' in self.cnf["proxy"]:
                        if self.cnf["proxy"]["extension_proxy"]:
                            wait = WebDriverWait(self.driver, 5)
                            ext_urls_dict = {
                                'troywell': 'chrome-extension://adlpodnneegcnbophopdmhedicjbcgco/popup.html',
                                'auth': 'chrome-extension://ggmdpepbjljkkkdaklfihhngmmgmpggp/options.html',
                                'browsec': 'chrome-extension://omghfjlpggmjjaagoclmmobgdodcjboh/popup/popup.html',
                            }
                            ext_url = ext_urls_dict[extension_proxy_name]
                            self.driver.get('https://google.com')
                            self.driver.get(ext_url)
                            if extension_proxy_name == 'troywell':
                                for i in range(3):
                                    try:
                                        try:
                                            wait.until(
                                                EC.visibility_of_element_located((By.CLASS_NAME, "analytics")))
                                            decline_button = self.driver.find_element(By.CLASS_NAME, "analytics__button")
                                            decline_button.click()
                                            wait.until(EC.invisibility_of_element_located((By.CLASS_NAME, 'fade-enter-from')))
                                        except:
                                            pass
                                        connect_button = wait.until(
                                            EC.element_to_be_clickable((By.CLASS_NAME, "connect-button")))
                                        connect_button.click()
                                        wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "connect-button_green")))
                                        break
                                    except:
                                        self.driver.refresh()
                                        pass
                                else:
                                    raise Exception('Cannnot connect to troywell extension')
                            elif extension_proxy_name == 'auth':
                                username_input = wait.until(EC.presence_of_element_located((By.ID, "login")))
                                username_input.send_keys(self.cnf["proxy"]["username"])
                                password_input = self.driver.find_element(By.ID, "password")
                                password_input.send_keys(self.cnf["proxy"]["password"])
                                save_button = self.driver.find_element(By.ID, "save")
                                save_button.click()
                            elif extension_proxy_name == 'browsec':
                                start_button = wait.until(
                                    EC.element_to_be_clickable((By.XPATH, "/html/body/div[2]")))
                                start_button.click()
            except (KeyboardInterrupt, SystemExit):
                if self.driver:
                    self.stop()
            except Exception as err:
                if self.driver:
                    self.stop()
                if 'urlopen error retrieval incomplete' in str(err):
                    continue
                else:
                    raise Exception(f'driver initialization error: {err}')
            return

    def run(self) -> bool:
        try:
            i = 1
            max_execution_times = self.cnf["max_exec_times"]
            extension_names = self.cnf["proxy"]["extension_proxy"]
            if isinstance(extension_names, str):
                extension_names = [extension_names]
            num_extensions = len(extension_names)
            while True:
                logger.info(f'Attempt {i}/{max_execution_times}')
                i += 1
                if i > max_execution_times:
                    raise Exception("Unable to make mail within defined number of executions")
                if 'max_ext_attempts' not in self.cnf['proxy']:
                    max_ext_attempts = 2
                else:
                    max_ext_attempts = self.cnf['proxy']['max_ext_attempts']
                for ext_idx in range(num_extensions):
                    ext_name = extension_names[ext_idx]
                    for ext_attempt in range(max_ext_attempts):
                        try:
                            self.create_driver(ext_name)
                            if not self.create_account():
                                self.stop()
                                continue
                            self.stop()
                            logger.info('Generator executed succesfully')
                            return
                        except Exception as e:
                            msg = f"Extension '{ext_name}' failed with error: {e}. Attempt {ext_attempt + 1}/{max_ext_attempts}"
                            logger.warning(msg)
                        finally:
                            if self.driver:
                                self.stop()
                    else:
                        logger.error(f"All attempts for extension '{ext_name}' failed")
                        continue
                else:
                    msg = f'All VPN extensions failed.'
                    logger.error(msg)
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
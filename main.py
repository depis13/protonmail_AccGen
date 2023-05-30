
import json
import logging
import os
import sys
from json import JSONDecodeError
from apscheduler.schedulers.blocking import BlockingScheduler

from generator import MailGenerator

logger = logging.getLogger(__name__)
os.environ["DISPLAY"] = ":0"

#logging.getLogger('apscheduler.scheduler').setLevel(logging.ERROR)

logging.basicConfig(
    level=logging.INFO,
    format='[%(asctime)s] [%(name)s] [%(levelname)s] %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout)
    ]
)

cnf = {}

def get_config() -> None:
    global cnf
    try:
        path = os.path.join(os.getcwd(), "config", "config.json")
        with open(path) as f:
            cnf = json.load(f)
    except (IOError, IndexError) as err:
        logger.error(f"Can't open task file: {err}")
        sys.exit(1)
    except JSONDecodeError as err:      
        logger.error(f"Error in task file: {err}")
        sys.exit(1)

def main() -> None:
    get_config()
    generator=MailGenerator(cnf)
    if not cnf['schedule']['enable_scheduler']:
        generator.run()
    else:
        max_runs = cnf['schedule'].get('max_runs', None)
        scheduler = BlockingScheduler()
        scheduler.add_job(generator.run, 'interval', minutes=cnf['schedule']['exec_interval_min'], max_instances=1,max_runs=max_runs)
        scheduler.start()

if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, SystemExit):
        logger.info("Worker aborted manually")
        sys.exit(0)
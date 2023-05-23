1. Modify library file `venv/lib/python3.8/site-packages/undetected_chromedriver/patcher.py`:
   Line 16: add `import secrets`
   Line 63: replace `prefix = "undetected"`
   with `prefix = secrets.token_hex(8)`

2. Launch:
   `python main.py`

3. Use `auth` in `extension_proxy` parameter to use proxy with authorization


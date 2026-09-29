with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

import re

for i, line in enumerate(lines):
    # Skip script and style tags
    # Check if 'pickle' is in text
    if re.search(r'\bpickles?\b', line, re.I):
        # Filter out javascript variables and internal URLs unless relevant
        s = line.strip()
        if not s.startswith(('//', 'var ', 'const ', 'let ', 'window.', 'Shopify.', '"', '{', '/*', '*')):
            print(f"Line {i+1}: {s[:110]}")

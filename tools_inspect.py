import re
from collections import Counter

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', text)
counts = Counter(imgs)
print("--- Product/Content Images in index.html ---")
for src, cnt in counts.most_common(50):
    if any(ext in src.lower() for ext in ['.png', '.jpg', '.webp']):
        print(f"{cnt:2d}x: {src}")

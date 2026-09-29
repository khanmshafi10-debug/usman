import urllib.request, json, base64

urls = [
    ('classic', 'https://cdn.shopify.com/s/files/1/0250/3395/files/SP_2oz_PICKLEJUICE_CLASSIC_2.json?v=1749551528'),
    ('spicy', 'https://cdn.shopify.com/s/files/1/0250/3395/files/SP_2oz_PICKLEJUICE_SPICY_3.json?v=1749551528')
]

for name, url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
    with open(f'{name}_lottie.json', 'w', encoding='utf-8') as f:
        json.dump(data, f)
    for a in data.get('assets', []):
        if 'p' in a and a['p'].startswith('data:image'):
            aid = a['id']
            b64 = a['p'].split(',', 1)[1]
            fn = f'{name}_{aid}.png'
            with open(fn, 'wb') as f:
                f.write(base64.b64decode(b64))
            print(f'Saved {fn} (size: {a.get("w")}x{a.get("h")})')

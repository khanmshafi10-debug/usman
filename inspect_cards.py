with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(4245, 5100):
    line = lines[i]
    if any(k in line for k in ['font-VodkaBold', 'font-SteelfishBold', 'font-NexaRustBlack', 'activeProduct']):
        print(f"{i+1}: {line.strip()[:100]}")
        if i+1 < len(lines):
            print(f"   next: {lines[i+1].strip()[:100]}")

import re

def clean_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern for Card 1
    # Replace from `<a href="/products/2oz-pickle-juice-shooter-hydration-12-count-with-electrolytes" class="border-Primary-Green`
    # up to the end of that </a>
    card1_regex = r'<a href="/products/2oz-pickle-juice-shooter-hydration-12-count-with-electrolytes" class="border-Primary-Green rounded-4xl.*?</a>'
    
    clean_card1 = """<a href="/products/2oz-pickle-juice-shooter-hydration-12-count-with-electrolytes" class="border-Primary-Green rounded-4xl flex h-full border-4 group/bottle relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg">
                                    <div class="flex w-full p-4 items-center justify-center">
                                        <img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Traditional Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="750" loading="lazy" class="aspect-[163/258] lg:aspect-[346/419] w-full object-contain rounded-[28px] transition-transform duration-300 ease-out group-hover/bottle:scale-105 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
                                    </div>
                                </a>"""

    content, n1 = re.subn(card1_regex, clean_card1, content, flags=re.DOTALL)
    print(f'Card 1 replaced in {filepath}: {n1}')

    # Pattern for Card 2
    card2_regex = r'<a href="/products/2oz-pickle-juice-shooter-pepper-hydration-12-count" class="border-Primary-Green rounded-4xl.*?</a>'

    clean_card2 = """<a href="/products/2oz-pickle-juice-shooter-pepper-hydration-12-count" class="border-Primary-Green rounded-4xl flex h-full border-4 group/bottle relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg">
                                    <div class="flex w-full p-4 items-center justify-center">
                                        <img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Spicy Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="750" loading="lazy" class="aspect-[163/258] lg:aspect-[346/419] w-full object-contain rounded-[28px] transition-transform duration-300 ease-out group-hover/bottle:scale-105 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
                                    </div>
                                </a>"""

    content, n2 = re.subn(card2_regex, clean_card2, content, flags=re.DOTALL)
    print(f'Card 2 replaced in {filepath}: {n2}')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

clean_html('index.html')
clean_html('suckerpunchpickles.com/index.html')
print('Finished cleaning both files.')

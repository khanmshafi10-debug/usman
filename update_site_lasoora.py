import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Pickle Pouch section title (around line 4069 and 4092)
content = re.sub(
    r'(<div class="font-NexaRustBlack1[^>]*>\s*)Pickle Pouch(\s*</div>)',
    r'\1Lasoora Achar\2',
    content
)
content = re.sub(
    r'(<div class="subheading-h5\s+\[&_span\]:font-VodkaBold[^>]*>\s*)SNACK\s*<span>Packs</span>(\s*</div>)',
    r'\1GLASS <span>Bottles</span>\2',
    content
)

# 2. Update the swiper slides in pickle-pouch section (all 10 slides from ~line 4106 to 4201)
# Specifically replace the pouches in this swiper:
old_swiper_imgs = [
    r'src="\./cdn/shop/files/SweetBBQ-resized\.png"[^>]*alt="Sweet BBQ Snack Pack"[^>]*class="w-full object-cover"',
    r'src="\./cdn/shop/files/03_SpicyDill-RedChile_Front_1\.png"[^>]*alt="Spicy Kosher Dill Snack Pack"[^>]*class="w-full object-cover"',
    r'src="\./cdn/shop/files/04_ThreePerpper-Sweet_nHeat_Front_1\.png"[^>]*alt="[^"]*"[^>]*class="w-full object-cover"',
    r'src="\./cdn/shop/files/01_KosherDill-Classic_Front_429c5218-c400-4c70-8790-2c9b16ce81c4\.png"[^>]*alt="[^"]*"[^>]*class="w-full object-cover"',
    r'src="\./cdn/shop/files/02_Bread_Butter-SnappySweet_Front_1\.png"[^>]*alt="Sweet Bread &amp; Butter Snack Pack"[^>]*class="w-full object-cover"'
]

jar_img_tag = 'src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Homemade Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="600" class="w-full object-contain"'

for pattern in old_swiper_imgs:
    content = re.sub(pattern, jar_img_tag, content)

# 3. Update products array in activeProduct slider (line ~4204)
content = content.replace(
    "products: ['Sweet BBQ','Spicy Dill','Three Pepper','Kosher Dill','Bread & Butter']",
    "products: ['Traditional Lasoora','Spicy Lasoora','Chatkhara Lasoora','Mustard Oil Lasoora','Special Recipe']"
)

# 4. Update the 5 cards in the pickle-pouch section:
# Change Snack <span>Pack</span> to Achar <span>Bottle</span> in these cards
# Find and replace each flavor and type
content = content.replace(
    """<div class="font-VodkaBold text-[32px] leading-10  ">
                                                        Slow Smoked
                                                    </div>""",
    """<div class="font-VodkaBold text-[32px] leading-10  ">
                                                        Traditional
                                                    </div>"""
)
content = content.replace(
    """<div class="font-SteelfishBold text-[32px] leading-10 uppercase  ">
                                                        Sweet BBQ
                                                    </div>""",
    """<div class="font-SteelfishBold text-[32px] leading-10 uppercase  ">
                                                        Lasoora Achar
                                                    </div>"""
)

content = content.replace(
    """<div class="font-VodkaBold text-[32px] leading-10  ">
                                                        Red Chile
                                                    </div>""",
    """<div class="font-VodkaBold text-[32px] leading-10  ">
                                                        Spicy Masala
                                                    </div>"""
)
content = content.replace(
    """<div class="font-SteelfishBold text-[32px] leading-10 uppercase  ">
                                                        Spicy Dill
                                                    </div>""",
    """<div class="font-SteelfishBold text-[32px] leading-10 uppercase  ">
                                                        Lasoora Achar
                                                    </div>"""
)

content = content.replace(
    """<div class="font-VodkaBold text-[32px] leading-10  ">
                                                        Fiery Hot
                                                    </div>""",
    """<div class="font-VodkaBold text-[32px] leading-10  ">
                                                        Chatkhare Daar
                                                    </div>"""
)
content = content.replace(
    """<div class="font-SteelfishBold text-[32px] leading-10 uppercase  ">
                                                        Three Pepper
                                                    </div>""",
    """<div class="font-SteelfishBold text-[32px] leading-10 uppercase  ">
                                                        Lasoora Achar
                                                    </div>"""
)

content = content.replace(
    """<div class="font-VodkaBold text-[32px] leading-10  ">
                                                        Classic
                                                    </div>""",
    """<div class="font-VodkaBold text-[32px] leading-10  ">
                                                        Mustard Oil
                                                    </div>"""
)
content = content.replace(
    """<div class="font-SteelfishBold text-[32px] leading-10 uppercase  ">
                                                        Kosher Dill
                                                    </div>""",
    """<div class="font-SteelfishBold text-[32px] leading-10 uppercase  ">
                                                        Lasoora Achar
                                                    </div>"""
)

content = content.replace(
    """<div class="font-VodkaBold text-[32px] leading-10  ">
                                                        Snappy Sweet
                                                    </div>""",
    """<div class="font-VodkaBold text-[32px] leading-10  ">
                                                        Special Recipe
                                                    </div>"""
)
content = content.replace(
    """<div class="font-SteelfishBold text-[32px] leading-10 uppercase  ">
                                                        Bread & Butter
                                                    </div>""",
    """<div class="font-SteelfishBold text-[32px] leading-10 uppercase  ">
                                                        Lasoora Achar
                                                    </div>"""
)

# Update Snack <span>Pack</span> to Achar <span>Bottle</span>
content = re.sub(
    r'<div class="font-NexaRustBlack text-\[16px\] leading-\[18px\] uppercase \[&_span\]:block  ">\s*Snack <span>Pack</span>\s*</div>',
    r'<div class="font-NexaRustBlack text-[16px] leading-[18px] uppercase [&_span]:block  ">\n                                                        Achar <span>Bottle</span>\n                                                    </div>',
    content
)

# 5. Comparison section titles (around lines 3701 and 3912):
content = content.replace(
    """Pickle Juice <span>Shooters</span>""",
    """Lasoora Achar <span>Glass Jar</span>"""
)
content = content.replace(
    """Pickle Snack <span>Packs</span>""",
    """Lasoora Achar <span>Snack Pouch</span>"""
)

# 6. Pickle Juice section (around lines 5463-5620):
content = re.sub(
    r'(<div class="h5-alternative\s+text-Primary-Green lg:h4-alternative\s*">\s*)Pickle Juice(\s*</div>)',
    r'\1Lasoora Achar Bottles\2',
    content
)
content = re.sub(
    r'<img src="\./cdn/shop/files/PJ-single_transparent\.png" alt="Classic Dill Pickle Juice Shot"[^>]*>',
    r'<img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Traditional Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="750" loading="lazy" class="aspect-[163/258] lg:aspect-[346/419] w-full object-contain rounded-[28px]">',
    content
)
content = content.replace(
    """Classic Dill Pickle Juice Shot""",
    """Usman Traditional Lasoora Achar (450g)"""
)

content = re.sub(
    r'<img src="\./cdn/shop/files/SP_2oz_PICKLEJUICE_SPICY\.png" alt="Spicy Dill Pickle Juice Shot"[^>]*>',
    r'<img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Spicy Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="750" loading="lazy" class="aspect-[163/258] lg:aspect-[346/419] w-full object-contain rounded-[28px]">',
    content
)
content = content.replace(
    """Spicy Dill Pickle Juice Shot""",
    """Usman Spicy Chatkhara Lasoora Achar (450g)"""
)

# 7. Marquee section pouches (around line 6140-6190):
# Replace remaining 01_KosherDill, 04_ThreePepper, 03_SpicyDill, 02_Bread_Butter
marquee_jar_img = '<img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Homemade Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="600" loading="lazy" class="w-full object-contain max-w-[280px] aspect-square mx-auto lg:max-w-full">'

content = re.sub(
    r'<img src="\./cdn/shop/files/01_KosherDill-Classic_Front_429c5218-c400-4c70-8790-2c9b16ce81c4\.png"[^>]*>',
    marquee_jar_img,
    content
)
content = re.sub(
    r'<img src="\./cdn/shop/files/04_ThreePerpper-Sweet_nHeat_Front_1\.png"[^>]*>',
    marquee_jar_img,
    content
)
content = re.sub(
    r'<img src="\./cdn/shop/files/03_SpicyDill-RedChile_Front_1\.png"[^>]*>',
    marquee_jar_img,
    content
)
content = re.sub(
    r'<img src="\./cdn/shop/files/02_Bread_Butter-SnappySweet_Front_1\.png"[^>]*>',
    marquee_jar_img,
    content
)

# 8. Navigation & Search Drawer text:
content = content.replace('placeholder="Search pickles, juice, bundles"', 'placeholder="Search lasoora achar, bottles, pouches"')
content = content.replace('placeholder="Search pickles, shots, bundles"', 'placeholder="Search lasoora achar, bottles, pouches"')
content = content.replace('<span class="sp-card__title">Pickle Snack Packs</span>', '<span class="sp-card__title">Lasoora Snack Packs</span>')
content = content.replace('<span class="sp-card__title">Pickle Juice</span>', '<span class="sp-card__title">Lasoora Achar Bottles</span>')
content = content.replace('<span class="sp-card__title">Pickles</span>', '<span class="sp-card__title">Lasoora Achar</span>')
content = content.replace('<span class="sp-card__title">Spicy Pickles</span>', '<span class="sp-card__title">Spicy Lasoora Achar</span>')
content = content.replace('Cook with pickles', 'Cook with lasoora achar')
content = content.replace('>Pickle juice<', '>Lasoora achar<')
content = content.replace('>Pickle Juice<', '>Lasoora Achar<')
content = content.replace('>Shop Pickles<', '>Shop Lasoora Achar<')
content = content.replace('>Pickle Party<', '>Lasoora Achar Party<')

# 9. Shop Pickles Section (around line 6200-6300):
content = content.replace(
    """<div class="h5-alternative  text-Primary-Green lg:h4-alternative  ">
                                Pickles
                            </div>""",
    """<div class="h5-alternative  text-Primary-Green lg:h4-alternative  ">
                                Lasoora Achar
                            </div>"""
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

with open('suckerpunchpickles.com/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated index.html and suckerpunchpickles.com/index.html successfully!")

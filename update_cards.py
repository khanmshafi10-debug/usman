with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update Shop Hydrating to Shop Homemade
c = c.replace(
    """                                <div class="text-[40px] font-SteelfishBold leading-12 lg:text-[64px] lg:leading-18 uppercase  ">
                                    Shop Hydrating
                                </div>""",
    """                                <div class="text-[40px] font-SteelfishBold leading-12 lg:text-[64px] lg:leading-18 uppercase  ">
                                    Shop Homemade
                                </div>"""
)

# 2. Replace Lottie canvas blocks in section template--28302484865392__product_cards_U3UaxQ
# First card:
old_card1_media = """                                <a href="/products/2oz-pickle-juice-shooter-hydration-12-count-with-electrolytes" class="hidden h-full  lg:block border-Primary-Green rounded-4xl border-4">
      <canvas
        x-data="animation"
        x-intersect.once="intersect = true; animationInit($el, false, false, 'https://cdn.shopify.com/s/files/1/0250/3395/files/SP_2oz_PICKLEJUICE_CLASSIC_2.json?v=1749551528', true)"
        :class="{ '!visible !opacity-100 !h-auto': intersect }"
        class="animate-default invisible h-0 opacity-0 aspect-[163/258] lg:aspect-[346/419] w-full object-cover rounded-[28px]"
      ></canvas>
    </a>
                                <a href="/products/2oz-pickle-juice-shooter-hydration-12-count-with-electrolytes" class="border-Primary-Green rounded-4xl flex h-full border-4 lg:hidden">
                                    <div class="flex ">

                                        <img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Traditional Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="750" loading="lazy" class="aspect-[163/258] lg:aspect-[346/419] w-full object-contain rounded-[28px]">


                                    </div>
                                </a>"""

new_card1_media = """                                <a href="/products/2oz-pickle-juice-shooter-hydration-12-count-with-electrolytes" class="border-Primary-Green rounded-4xl flex h-full border-4 bg-white/50">
                                    <div class="flex w-full p-4 items-center justify-center">
                                        <img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Traditional Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="750" loading="lazy" class="aspect-[163/258] lg:aspect-[346/419] w-full object-contain rounded-[28px]">
                                    </div>
                                </a>"""

c = c.replace(old_card1_media, new_card1_media)

# Second card:
old_card2_media = """                                <a href="/products/2oz-pickle-juice-shooter-pepper-hydration-12-count" class="hidden h-full  lg:block border-Primary-Green rounded-4xl border-4">
      <canvas
        x-data="animation"
        x-intersect.once="intersect = true; animationInit($el, false, false, 'https://cdn.shopify.com/s/files/1/0250/3395/files/SP_2oz_PICKLEJUICE_SPICY_3.json?v=1749551528', true)"
        :class="{ '!visible !opacity-100 !h-auto': intersect }"
        class="animate-default invisible h-0 opacity-0 aspect-[163/258] lg:aspect-[346/419] w-full object-cover rounded-[28px]"
      ></canvas>
    </a>
                                <a href="/products/2oz-pickle-juice-shooter-pepper-hydration-12-count" class="border-Primary-Green rounded-4xl flex h-full border-4 lg:hidden">
                                    <div class="flex ">

                                        <img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Spicy Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="750" loading="lazy" class="aspect-[163/258] lg:aspect-[346/419] w-full object-contain rounded-[28px]">


                                    </div>
                                </a>"""

new_card2_media = """                                <a href="/products/2oz-pickle-juice-shooter-pepper-hydration-12-count" class="border-Primary-Green rounded-4xl flex h-full border-4 bg-white/50">
                                    <div class="flex w-full p-4 items-center justify-center">
                                        <img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Spicy Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="750" loading="lazy" class="aspect-[163/258] lg:aspect-[346/419] w-full object-contain rounded-[28px]">
                                    </div>
                                </a>"""

c = c.replace(old_card2_media, new_card2_media)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

with open('suckerpunchpickles.com/index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Updated cards media and title!')

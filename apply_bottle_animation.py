with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Card 1 container replacement (Traditional Lasoora Achar)
old_card1 = """                                <a href="/products/2oz-pickle-juice-shooter-hydration-12-count-with-electrolytes" class="border-Primary-Green rounded-4xl flex h-full border-4 bg-white/50">
                                    <div class="flex w-full p-4 items-center justify-center">
                                        <img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Traditional Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="750" loading="lazy" class="aspect-[163/258] lg:aspect-[346/419] w-full object-contain rounded-[28px]">
                                    </div>
                                </a>"""

new_card1 = """                                <a href="/products/2oz-pickle-juice-shooter-hydration-12-count-with-electrolytes" class="border-Primary-Green rounded-4xl flex h-full border-4 group/bottle relative overflow-visible cursor-pointer">
                                    <style>
                                        @keyframes usmanFloatLeft {
                                            0%, 100% { transform: translateY(0px) rotate(0deg); }
                                            50% { transform: translateY(-8px) rotate(-1deg); }
                                        }
                                        @keyframes usmanFloatRight {
                                            0%, 100% { transform: translateY(0px) rotate(0deg); }
                                            50% { transform: translateY(-8px) rotate(1deg); }
                                        }
                                        @keyframes boltSparkle {
                                            0%, 100% { transform: scale(1) translateY(0); opacity: 0.9; }
                                            25% { transform: scale(1.08) translateY(-2px) rotate(1deg); opacity: 1; }
                                            75% { transform: scale(0.96) translateY(2px) rotate(-1deg); opacity: 0.85; }
                                        }
                                    </style>
                                    <div class="flex w-full p-4 items-center justify-center relative overflow-visible">
                                        <!-- Animated Green Lightning Bolts from Usman Jar -->
                                        <div class="absolute -top-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-300 ease-out group-hover/bottle:scale-115 group-hover/bottle:-translate-y-4" style="animation: boltSparkle 1.8s ease-in-out infinite;">
                                            <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-[0_0_10px_rgba(148,200,60,0.8)]">
                                                <!-- Left bolt -->
                                                <polygon points="26,52 42,22 34,22 47,4 32,36 40,36" fill="#c8f17a" stroke="#1b4d1b" stroke-width="2.5" stroke-linejoin="round" />
                                                <!-- Center tall bolt -->
                                                <polygon points="56,76 70,38 60,38 76,4 54,48 64,48" fill="#c8f17a" stroke="#1b4d1b" stroke-width="3" stroke-linejoin="round" />
                                                <!-- Right bolt -->
                                                <polygon points="94,52 78,22 86,22 73,4 88,36 80,36" fill="#c8f17a" stroke="#1b4d1b" stroke-width="2.5" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        <!-- Floating Usman Jar -->
                                        <img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Traditional Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="750" loading="lazy" class="aspect-[163/258] lg:aspect-[346/419] w-full object-contain rounded-[28px] transition-transform duration-500 ease-out group-hover/bottle:scale-105 filter drop-shadow-[0_14px_22px_rgba(0,0,0,0.25)]" style="animation: usmanFloatLeft 3.5s ease-in-out infinite;">
                                    </div>
                                </a>"""

c = c.replace(old_card1, new_card1)

# Card 2 container replacement (Spicy Chatkhara Lasoora Achar)
old_card2 = """                                <a href="/products/2oz-pickle-juice-shooter-pepper-hydration-12-count" class="border-Primary-Green rounded-4xl flex h-full border-4 bg-white/50">
                                    <div class="flex w-full p-4 items-center justify-center">
                                        <img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Spicy Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="750" loading="lazy" class="aspect-[163/258] lg:aspect-[346/419] w-full object-contain rounded-[28px]">
                                    </div>
                                </a>"""

new_card2 = """                                <a href="/products/2oz-pickle-juice-shooter-pepper-hydration-12-count" class="border-Primary-Green rounded-4xl flex h-full border-4 group/bottle relative overflow-visible cursor-pointer">
                                    <div class="flex w-full p-4 items-center justify-center relative overflow-visible">
                                        <!-- Animated Fiery Red/Amber Lightning Bolts from Usman Spicy Jar -->
                                        <div class="absolute -top-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-300 ease-out group-hover/bottle:scale-115 group-hover/bottle:-translate-y-4" style="animation: boltSparkle 2s ease-in-out infinite 0.4s;">
                                            <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
                                                <!-- Left bolt -->
                                                <polygon points="26,52 42,22 34,22 47,4 32,36 40,36" fill="#fca5a5" stroke="#991b1b" stroke-width="2.5" stroke-linejoin="round" />
                                                <!-- Center tall bolt -->
                                                <polygon points="56,76 70,38 60,38 76,4 54,48 64,48" fill="#fbbf24" stroke="#991b1b" stroke-width="3" stroke-linejoin="round" />
                                                <!-- Right bolt -->
                                                <polygon points="94,52 78,22 86,22 73,4 88,36 80,36" fill="#fca5a5" stroke="#991b1b" stroke-width="2.5" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        <!-- Floating Usman Spicy Jar -->
                                        <img src="./cdn/shop/files/usman-achar-jar-transparent.png" alt="Usman Spicy Lasoora Achar Bottle" srcset="./cdn/shop/files/usman-achar-jar-transparent-400.png 352w, ./cdn/shop/files/usman-achar-jar-transparent.png 600w" width="600" height="750" loading="lazy" class="aspect-[163/258] lg:aspect-[346/419] w-full object-contain rounded-[28px] transition-transform duration-500 ease-out group-hover/bottle:scale-105 filter drop-shadow-[0_14px_22px_rgba(0,0,0,0.25)]" style="animation: usmanFloatRight 3.8s ease-in-out infinite 0.5s;">
                                    </div>
                                </a>"""

c = c.replace(old_card2, new_card2)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

with open('suckerpunchpickles.com/index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Updated bottle animation in both HTML files!')

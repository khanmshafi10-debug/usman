from PIL import Image
import os

# 1. Load user image with original alpha
im_orig = Image.open('cdn/shop/t/121/assets/footer.static.png').convert('RGBA')
user_img_path = r'C:/Users/AR LAPTOP/.gemini/antigravity/brain/6374623b-17ad-4f97-804e-3f963aa0c9d8/.user_uploaded/media_1790693406867.jpg'
im_user = Image.open(user_img_path).convert('RGBA')

# Resize user image to 2880, 810 with high quality Lanczos filter
im_user_resized = im_user.resize((2880, 810), Image.Resampling.LANCZOS)

# Preserve the exact alpha mask from original desktop image
r_u, g_u, b_u, _ = im_user_resized.split()
_, _, _, a_o = im_orig.split()
desktop_final = Image.merge('RGBA', (r_u, g_u, b_u, a_o))

# 2. Build seamless mobile version
imm = Image.open('cdn/shop/t/121/assets/footer-mobile.static.png').convert('RGBA')

patch_d = desktop_final.crop((1060, 360, 1570, 520))
pw = int(patch_d.width * 0.4145)
ph = int(patch_d.height * 0.4145)
patch_m = patch_d.resize((pw, ph), Image.Resampling.LANCZOS)

mask = Image.new('L', (pw, ph), 255)
feather = 6
for x in range(pw):
    for y in range(ph):
        dist = min(x, pw - 1 - x, y, ph - 1 - y)
        if dist < feather:
            mask.putpixel((x, y), int(255 * (dist / feather)))

mobile_final = imm.copy()
mobile_final.paste(patch_m, (210, 222), mask)

# 3. Save to both root cdn and suckerpunchpickles.com cdn
paths = [
    ('cdn/shop/t/121/assets/footer.static.png', desktop_final),
    ('suckerpunchpickles.com/cdn/shop/t/121/assets/footer.static.png', desktop_final),
    ('cdn/shop/t/121/assets/footer-mobile.static.png', mobile_final),
    ('suckerpunchpickles.com/cdn/shop/t/121/assets/footer-mobile.static.png', mobile_final),
]

for p, img in paths:
    os.makedirs(os.path.dirname(p), exist_ok=True)
    img.save(p, format='PNG', optimize=True)
    print(f'Saved {p} successfully! Size: {img.size}')

print('All footer images updated!')

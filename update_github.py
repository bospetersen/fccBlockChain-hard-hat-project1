import os
import time

today =format(time.strftime("%Y/%m/%d %H:%M:%S"))

os.system(f'cd {os.path.dirname(__file__)}../') 

print('\n-- git add . -----------------------------------------------------------------------------\n')
os.system(f'git add . ')
print(f'git add .')
print(f'\n-- git commit -m"Updated files: {today}" ------------------------------------------------\n')
os.system(f'git commit -m"Updated files: {today}"')
print('\n-- git push origin main ------------------------------------------------------------------\n')
os.system(f'git push origin main')
print('\n------------------------------------------------------------------------------------------\n')

# Resize element - Get dimensions: 
# https://stackoverflow.com/questions/65300719/get-value-of-css-resized-element
# ------------------
# https://medium.com/the-z/making-a-resizable-div-in-js-is-not-easy-as-you-think-bda19a1bc53d
# https://codepen.io/ZeroX-DG/pen/vjdoYe
# ------------------
# https://www.csis.org/dracopoulos-ideas-lab
# ------------------
# CSS Animation
# https://javascript.info/css-animations
# ------------------
# SystemThemePageLayout: react snippet works!</p>
# https://www.freecodecamp.org/news/learn-flexbox-build-5-layouts/</p>
# ------------------
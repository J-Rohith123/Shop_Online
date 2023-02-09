import pyautogui as pag
import random
import time

while True:
    pag.displayMousePosition()
    time.sleep(10)


# while True:
#     x=random.randint(400,900)
#     y=random.randint(400,900)
#     pag.moveTo(x,y,1)
#     time.sleep(3)
list2 = 0

def on_in_background():
    global list2
    Wert = 0
    list2 = Wert
control.in_background(on_in_background)

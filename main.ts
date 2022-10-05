let Wert = 0
let list2 = 0
basic.forever(function () {
    Wert = 1 + Wert
    list2 = Wert
    led.plotBarGraph(
    2,
    Wert
    )
})
control.inBackground(function () {
	
})

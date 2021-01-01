input.onButtonPressed(Button.A, function () {
    item = !(item)
})
let current_WindDirection_List = ""
let current_WindSpeed = 0
let item = false
serial.redirectToUSB()
weatherbit.startWindMonitoring()
item = true
basic.forever(function () {
    current_WindSpeed = weatherbit.windSpeed()
    current_WindDirection_List = weatherbit.windDirection()
    if (item) {
        basic.showString("Sp")
        basic.showNumber(Math.trunc(current_WindSpeed))
    } else {
        basic.showString("Dir")
        basic.showString(current_WindDirection_List)
    }
    serial.writeLine("" + current_WindSpeed + "," + current_WindDirection_List)
    bluetooth.uartWriteLine("" + current_WindSpeed + ";" + weatherbit.windDirection())
})

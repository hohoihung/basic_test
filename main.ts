serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.clearScreen()
    basic.showString(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
    basic.pause(200)
})
let p0 = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
basic.showIcon(IconNames.SmallHeart)
serial.redirect(
SerialPin.P13,
SerialPin.P12,
BaudRate.BaudRate9600
)
basic.forever(function () {
    basic.clearScreen()
    p0 = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(p0)
    basic.pause(500)
    basic.showIcon(IconNames.Yes)
})

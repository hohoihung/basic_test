let p0 = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    p0 = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(p0)
    basic.pause(500)
    basic.clearScreen()
})

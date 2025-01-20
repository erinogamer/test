input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . # .
        # . . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . # .
        # # . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . # .
        # # # # .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.showString("EXPLOTANO TOWER")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(87916579, 99999999))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("ok ok")
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("DAJ FOLLOW")
})

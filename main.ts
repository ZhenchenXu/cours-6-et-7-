let E = 0
let T = 0
basic.showLeds(`
    . # . # .
    . . . . .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.pause(1000)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    # . # # #
    . # . . .
    # . # # #
    . . . . .
    `)
basic.pause(1000)
basic.showString("Ca commence !")
while (T == 0) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("T")
        T = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("T")
        T = 2
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("T")
        T = 3
    }
}
basic.forever(function () {
    if (E == 2 && T == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        T = 0
        E = 0
    } else if (E == 2 && T == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        T = 0
        E = 0
    } else if (E == 2 && T == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        T = 0
        E = 0
    } else if (E == 3 && T == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        T = 0
        E = 0
    } else if (E == 3 && T == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        T = 0
        E = 0
    } else if (E == 3 && T == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        T = 0
        E = 0
    } else if (E == 4 && T == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        T = 0
        E = 0
    } else if (E == 4 && T == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        T = 0
        E = 0
    } else if (E == 4 && T == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        T = 0
        E = 0
    }
})
basic.forever(function () {
    while (E > 0) {
        if (E == 1) {
            basic.showString("E")
            E = randint(2, 4)
        }
    }
})
basic.forever(function () {
    if (E == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (E == 3) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
    if (E == 4) {
        basic.showLeds(`
            . . . . .
            # . # # #
            . # . . .
            # . # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    while (T > 0) {
        if (T == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            E = 1
        }
        if (T == 2) {
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
            E = 1
        }
        if (T == 3) {
            basic.showLeds(`
                . . . . .
                # . # # #
                . # . . .
                # . # # #
                . . . . .
                `)
            E = 1
        }
    }
})

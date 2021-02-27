let E = 0
let T = 0
basic.showString("Bienvenue au roche papier ciseau, t=toi, et e=l'ennemi.  ")
basic.showLeds(`
    . # . # .
    . . . . .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    # . # # #
    . # . . .
    # . # # #
    . . . . .
    `)
basic.showString("A=Roche, B=papier, A+B = ciseau ")
basic.pause(1000)
basic.showString("Ça commence !")
while (true) {
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
    if (T == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        E = 1
        T = 0
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
        T = 0
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
        T = 0
    }
})
basic.forever(function () {
    if (E == 1) {
        basic.showString("E")
        E = 0
        E = randint(2, 4)
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
    if (E == 2 && T == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else if (E == 2 && T == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (E == 2 && T == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (E == 3 && T == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (E == 3 && T == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else if (E == 3 && T == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (E == 4 && T == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (E == 4 && T == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (E == 4 && T == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})

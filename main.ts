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
}
basic.forever(function () {
	
})

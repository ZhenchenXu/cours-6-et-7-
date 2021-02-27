basic.showString("Bienvenue au roche papier ciseau, t , veut dire toi, et e représent l'ennemi.  ")
basic.showLeds(`
    . # . # .
    . . . . .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.pause(100)
basic.showString("Lorsque tu voit")
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.pause(200)
basic.showString("C'est roche ")
basic.pause(100)
basic.showString("Lorsque tu voit")
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.showString("C'est papier  ")
basic.pause(100)
basic.showString("Lorsque tu voit")
basic.showLeds(`
    . . . . .
    # . # # #
    . # . . .
    # . # # #
    . . . . .
    `)
basic.showString("C'est ciseau ")
basic.showString("A=Roche, B=papier, A+B = ciseau ")
basic.pause(1000)
basic.showString("Ça commence !")
basic.forever(function () {
	
})

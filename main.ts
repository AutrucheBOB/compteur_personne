input.onButtonPressed(Button.A, function () {
    Personne += 1
})
input.onButtonPressed(Button.B, function () {
    Personne += -1
})
let Personne = 0
basic.forever(function () {
    basic.showNumber(Personne)
    if (Personne >= 20) {
        basic.showString("Warning! 20 PERSONNE")
    }
})

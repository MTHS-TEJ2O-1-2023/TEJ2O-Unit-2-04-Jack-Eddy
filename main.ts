/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program prints the temperature on a microbit
*/

//variable for microbits temperature
let microbitTemperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function(){
  microbitTemperature =  input.temperature()
  basic.showNumber(microbitTemperature)
})

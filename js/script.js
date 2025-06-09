// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Feb 2025
// This file contains the JS functions for index.html
'use strict'

// This function factors a number
function factorNumber() {
  const inputValue = document.getElementById('number').value
  const number = parseInt(inputValue)
  let text = ''

  if (isNaN(number) || number <= 0) {
    text = 'Please enter a positive whole number to factor.'
  } else {
    let factors = ''
    let currentNumber = 1
while (currentNumber <= number) {
  if (number % currentNumber === 0) {
    if (factors === "") {
      factors = currentNumber
    } else {
      factors = factors + ", " + currentNumber
    }
  }
}
  text = "Factors of " + number + " are: " + factors
  }
  document.getElementById("results").innerHTML = text
}


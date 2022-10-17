import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add two numbers and return answer', () => {
    const button1 = container.getByTestId('number1');
    const buttonPlus = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');

  });

  it('should subtract two number and give answer', () => {
    const button7 = container.getByTestId('number7');
    const buttonSub = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSub);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
    
  });

  it('should multiply two numbers and return answer', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');

     });

  it('should divide two numbers and return an answer', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDiv = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDiv);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3')
    
  });

it('should display buttons clicked', () => {
  const button1 = container.getByTestId('number1');
  const button2 = container.getByTestId('number2');
  const button3 = container.getByTestId('number3');
  const button4 = container.getByTestId('number4');
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button1);
  fireEvent.click(button2);
  fireEvent.click(button3);
  fireEvent.click(button4);
  expect(runningTotal.textContent).toEqual('1234');
});

it('should chain multiple operations together', () => {
  const button2 = container.getByTestId('number2');
  const buttonMultiply = container.getByTestId('operator-multiply');
  const button4 = container.getByTestId('number4');
  const buttonSub = container.getByTestId('operator-subtract');
  const button3 = container.getByTestId('number3');
  const buttonPlus = container.getByTestId('operator-add');
  const button1 = container.getByTestId('number1');
  const buttonEquals = container.getByTestId('operator-equals');
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button2);
  fireEvent.click(buttonMultiply);
  fireEvent.click(button4);
  fireEvent.click(buttonSub);
  fireEvent.click(button3);
  fireEvent.click(buttonPlus);
  fireEvent.click(button1);
  fireEvent.click(buttonEquals);
  expect(runningTotal.textContent).toEqual('6');
  

});

it('should clear the running total without affecting the calculation', () => {
  const button2 = container.getByTestId('number2');
  const buttonPlus = container.getByTestId('operator-add');
  const button9 = container.getByTestId('number9');
  const buttonEquals = container.getByTestId('operator-equals');
  
  const buttonClear = container.getByTestId('clear');
  const buttonSub = container.getByTestId('operator-subtract');
  const button1 = container.getByTestId('number1');
  
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button2);
  fireEvent.click(buttonPlus);
  fireEvent.click(button9);
  fireEvent.click(buttonEquals);
  fireEvent.click(buttonClear);
  fireEvent.click(buttonSub);
  fireEvent.click(button1);
  fireEvent.click(buttonEquals);
  expect(runningTotal.textContent).toEqual('10');
  
  

})





})





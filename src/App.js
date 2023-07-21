import { Container, Content, Row} from "./styles";
import Input from "./components/input";
import Button from "./components/Button";
import { useState } from "react";




const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleTimesNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const times = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(times))
      setOperation('')
    }

  }

  const handleDivideNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const divided = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divided))
      setOperation('')
    }

  }


  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleTimesNumbers();
            break;
          case '/':
            handleDivideNumbers();
            break;
          default: 
            break;
        }
    }

  }

  const bgColoroperator = "#5E2129"
  const colorOperator = "#fff"

  const bgColorNumber = "#D0D1D3"


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>

        <Row>
            <Button label="x" onClick={() => handleTimesNumbers()} bgColor={bgColoroperator} color={colorOperator}/>
            <Button label="/" onClick={() => handleDivideNumbers()} bgColor={bgColoroperator} color={colorOperator}/>
            <Button label="CE"  onClick={handleOnClear} bgColor={"#6EA5CE"} color={colorOperator}/>
            <Button label="C" onClick={handleOnClear} bgColor={"#6EA5CE"} color={colorOperator}/>
          </Row>

          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} bgColor={bgColorNumber} color={"#000"} />
            <Button label="8" onClick={() => handleAddNumber('8')} bgColor={bgColorNumber} color={"#000"}/>
            <Button label="9" onClick={() => handleAddNumber('9')} bgColor={bgColorNumber} color={"#000"}/>
            <Button label="-" onClick={() => handleMinusNumbers()} bgColor={bgColoroperator} color={colorOperator}/>
          </Row>

          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')} bgColor={bgColorNumber} color={"#000"}/>
            <Button label="5" onClick={() => handleAddNumber('5')} bgColor={bgColorNumber} color={"#000"}/>
            <Button label="6" onClick={() => handleAddNumber('6')} bgColor={bgColorNumber} color={"#000"}/>
            <Button label="+" onClick={() => handleSumNumbers()} bgColor={bgColoroperator} color={colorOperator}/>
          </Row>

          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')} bgColor={bgColorNumber} color={"#000"}/>
            <Button label="2" onClick={() => handleAddNumber('2')} bgColor={bgColorNumber} color={"#000"}/>
            <Button label="3" onClick={() => handleAddNumber('3')} bgColor={bgColorNumber} color={"#000"}/>
            <Button label="=" onClick={() => handleEquals()} bgColor={"#21BF6A"} color={colorOperator}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;

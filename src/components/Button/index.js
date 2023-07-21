import { ButtonContainer } from "./styles";


const Button = ({label, onClick, bgColor, color}) => {
  
    return (
      <ButtonContainer onClick={onClick} style={{backgroundColor: bgColor, color: color}}>
        {label}
      </ButtonContainer>

    );
  }
  
  export default Button;
  


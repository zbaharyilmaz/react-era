import styled from 'styled-components';

const ButtonS = styled.button`
color:${({Zey})=> Zey? "magenta":"white"};

background: ${({Zey, Mudlond})=>Zey? "pink": Mudlond? "gold":"magenta"};
border: none;
padding: 0.5;
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;
font-size: 1.2rem;
&:hover{transform:scale(1.3)};
border-radius: 15px;

`;
export const PinkButton= styled(ButtonS)`
color: yellow;
width: 150px;
background-color: ${({Bahar})=> Bahar? "red":"green"};
`

export default ButtonS;

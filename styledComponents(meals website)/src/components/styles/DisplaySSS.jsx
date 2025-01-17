import styled from 'styled-components';

const DisplaySSS = styled.div`
background-color: #e2eeee;
display: flex;
justify-content: space-between;
align-items: center;
@media screen (max-width:({theme})=>theme.responsive){
flex-direction:column;
}
`;

export default DisplaySSS;

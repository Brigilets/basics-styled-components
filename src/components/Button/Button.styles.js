import styled, {keyframes} from 'styled-components';

export const StyledButton = styled.button`
border: 2px solid #4caf50;
//defining styles of a button based on variant value
background-color: ${(props)=> (props.variant === 'outline' ? '#FFF' : '#4caf50')};
color: ${(props)=> (props.variant === 'outline' ? '#4caf50' : '#FFF') };
padding: 15px 32 px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
cursor: pointer;
transition: 0.5s all ease-out;
//specifying pseudo class
&:hover{
    background-color: ${(props)=> (props.variant !== 'outline' ? '#FFF' : '#4caf50')};
color: ${(props)=> (props.variant !== 'outline' ? '#4caf50' : '#FFF') };

}
`
//extending styles
export const FancyButton = styled(StyledButton)`
background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
border: none;
padding: 5px 5px;
`

//submit button 
// example of passing props in attribute values
export const SubmitButton = styled(StyledButton).attrs((props) =>({
    type: 'submit',
}))`

box-shadow: 0 9px #999;
&:active{
    background-color: ${(props) =>
    props.variant !== 'outline' ? '#FFF' : '#4caf50'};
    box-shadow: 0 5px #666;
    transform: translate(40px); 
    } 
`
const rotate= keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`
// animations using Keyframes and styled components
// helps to avoid overriding of styles
export const AnimatedLogo = styled.img`
height: 40vmin;
pointer-events: none;
animation: ${rotate} infinite 10s linear;
`

export const DarkButton = styled(StyledButton)`
border: 2px solid ${props => props.theme.dark.primary};
background-color: ${props => props.theme.dark.primary};
color: ${props => props.theme.dark.text}
`
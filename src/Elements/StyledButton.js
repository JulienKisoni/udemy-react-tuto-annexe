// import les modules dont on a besoin
import Styled, {css} from 'styled-components';

const vert = "green";
const rouge = "red";
// on crée le composant
const StyledButton = Styled.button`
    /* background: ${props => props.green ? 'green': 'red'}; */
    background: ${props => props.theme.green};
    color: white;
    height: 30px;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;

    ${props => !props.green && css`
        background: ${props => props.theme.red};
        color: lightblue;
        font-size: 20px;    
    `}
`

// on exporte le composant
export default StyledButton;
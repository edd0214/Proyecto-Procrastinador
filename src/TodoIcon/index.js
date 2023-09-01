import {AiTwotoneDelete as DeleteSVG} from 'react-icons/ai';
import {AiFillCheckCircle as CheckSVG} from 'react-icons/ai';
import './TodoIcon.css'

const iconTypes= {
    "check": (color)=> <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color)=> <DeleteSVG className="Icon-svg" fill={color}/>,
};

function TodoIcon( {type, color, onClick} ){
    return(
        <span
            className={ `Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}            
        </span>
    );
}

export {TodoIcon};
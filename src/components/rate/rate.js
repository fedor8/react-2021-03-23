import {ReactComponent as Star} from '../../icons/star.svg';
import style from './rate.module.css'

export default function Rate(props) {
    function calculateColor(i) {
        return props.value > (i + 1) || (i + 1 - props.value) < 0.5 ? style.marked : style.notMarked;
    }

    return (
        <span>
            {props.value}
            {[...Array(5).keys()].map(i => <Star
                key={i}
                className={style.rating + ' ' + calculateColor(i)}/>)}
        </span>
    );
}
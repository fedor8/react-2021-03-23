import {ReactComponent as Star} from '../../icons/star.svg';
import style from './rate.module.css'

export default function Rate(props) {
    function calculateColor(i) {
        const starRating = i + 1;
        return props.value > starRating || (starRating - props.value) < 0.5 ? style.marked : style.notMarked;
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
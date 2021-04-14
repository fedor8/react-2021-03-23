import Menu from "../menu";
import Rate from "../rate";
import {useMemo} from "react";
import {ReviewList} from "../review";


export default function Restaurant(props) {

    const reviews = props.restaurant.reviews;

    const activeRestaurantRating = useMemo(
        () => {
            return reviews.reduce((sum, review) => review.rating + sum, 0) / reviews.length;
        },
        [reviews]
    );

    return (
        <div>
            <h3>Рейтинг</h3>
            <Rate value={activeRestaurantRating.toFixed(2)}/>
            <h3>Меню</h3>
            <Menu menu={props.restaurant.menu}/>
            <h3>Отзывы</h3>
            <ReviewList reviews={reviews}/>
        </div>
    );
}
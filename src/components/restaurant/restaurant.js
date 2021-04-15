import Menu from "../menu";
import Rate from "../rate";
import {useMemo} from "react";
import {ReviewList} from "../review";

const Restaurant = ({restaurant}) => {

    const {reviews, menu} = restaurant;

    const activeRestaurantRating = useMemo(
        () => {
            const ratingSum = reviews.reduce((sum, review) => review.rating + sum, 0);
            return ratingSum / reviews.length;
        },
        [reviews]
    );

    return (
        <div>
            <h3>Рейтинг</h3>
            <Rate value={activeRestaurantRating.toFixed(2)}/>
            <h3>Меню</h3>
            <Menu menu={menu}/>
            <h3>Отзывы</h3>
            <ReviewList reviews={reviews}/>
        </div>
    );
}

export default Restaurant;
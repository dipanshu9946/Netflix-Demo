
import style from "./Netflix.module.css"

export const SeriesCard = ({ data }) => {
    const { img_url, name, rating, description, cast, genre, watch_url } = data;

    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "#fdcea0" : "#f7dc6f"}`,
        color: "var(--bg-color)",
        fontWeight: "bold",
        cursor: "pointer",  
    };

    const rating_class = rating >= 8.5 ? style.super_hit : style.average
    

    return (
        <li className={style.card}>
            <div>
                <img src={img_url} alt={name} width="40%" height="40%" />
            </div>
            <div className={style["card-content"]}>
            <h2>Name: {name}</h2>
            <h3>Rating: 
                <span
                className={`${style.rating} ${rating_class}`}>
                 {rating}
                </span>
            </h3>
            <p>Summary: {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
            <a href={watch_url} target="_blank" rel="noopener noreferrer">
                <button style={btn_style}>Watch Now</button>
            </a>
            </div>
        </li>
    );
};
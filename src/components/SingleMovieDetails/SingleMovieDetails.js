import {Button} from "@mui/material";

import css from './SingleMovieDetails.module.css';
import {useContext} from "react";
import {ThemeContext} from "../../App";


function SingleMovieDetails({currentMovie, trailerInfo}) {
    const {
        title,
        original_language,
        original_title,
        overview,
        release_date,
        poster_path,
        vote_average
    } = currentMovie;
    const {theme} = useContext(ThemeContext);

    const trailerKey = trailerInfo.find(trailerInfo => trailerInfo.type === "Trailer");
    const linkTrailer = (trailerKey?.key) ? `https://www.youtube.com/watch?v=${trailerKey.key}` : ""


    return (
        <div className={css.container} data-theme={theme}>
            <div className={css.poster}>
                <img className={css.photo} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            </div>
            <div className={css.info}>
                <h2>{title}</h2>
                <div className={css.data}>
                    <br/>
                    <span>Language: {original_language}</span>
                    <br/>
                    <span>Name: {original_title}</span>
                    <br/>
                    <span>About: {overview}</span>
                    <br/>
                    <span>Release: {release_date}</span>
                    <br/>
                    <span>Rating: {vote_average}</span>

                    <div className={css.trailer}>
                        <Button disabled={!linkTrailer} variant="contained"
                                href={linkTrailer}>Watch trailer</Button>
                    </div>

                </div>

            </div>


        </div>
    );
}

export {SingleMovieDetails};
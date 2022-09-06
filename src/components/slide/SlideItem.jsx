import React from 'react';
import Button, { OutlineButton } from '../button/Button';
import tmdbApi, { category} from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './Slide.scss';
import { useHistory } from 'react-router';

const SlideItem = props => {
    let hisrory = useHistory();
    const item = props.item;
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);
        const videos = await tmdbApi.getVideos(category.movie, item.id);
        if (videos.results.length > 0) {
            const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer';
        }
        modal.classList.toggle('active');
    }

    return (
        <div
            className={`slide__item ${props.className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="slide__item__content container">
                <div className="slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => hisrory.push('/movie/' + item.id)}>
                            Watch now
                        </Button>
                        <OutlineButton onClick={setModalActive}>
                            Watch trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="poster" />
                </div>
            </div>
        </div>
    )
}

export default SlideItem
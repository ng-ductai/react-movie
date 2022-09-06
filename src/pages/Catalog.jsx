import React, {useEffect} from 'react';
import { useParams } from 'react-router';
import Banner from '../components/banner/Banner';
import { category as cate } from '../api/tmdbApi';
import Grid from '../components/grid/Grid';

const Catalog = () => {
    const { category } = useParams();

    useEffect(() => {
        window.scrollTo(0,0)
    }, [category])

    return (
        <>
            <Banner>
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </Banner>
            <div className="container">
                <div className="section mb-3">
                    <Grid category={category}/>
                </div>
            </div>
        </>
    );
}

export default Catalog;

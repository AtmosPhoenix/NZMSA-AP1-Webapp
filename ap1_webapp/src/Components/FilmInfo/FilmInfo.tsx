import React from 'react';
import './FilmInfo.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';
const ACard = Card as any;
const { Meta } = Card;

export interface IFilmInfoProps {
    PosterURL:      string | undefined;
    Title:          string | undefined;
    ReleaseYear:    string | undefined;
    Director:       string | undefined;
    Description:    string | undefined;
}

function FilmInfo(props: IFilmInfoProps){

    const subtext = props.ReleaseYear + " - " + props.Director;

    return (
        <div className="filmInfoComponent">
            <ACard
                hoverable
                style={{ width: 240 }}
                cover={
                    <img
                    alt="image failed to load"
                    src={props.PosterURL}
                    />
                }
                >
            <Meta title={props.Title} description={subtext} />
            </ACard>
        </div>
    )
}

export default FilmInfo;
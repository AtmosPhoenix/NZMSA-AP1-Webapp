import React, { useState, useEffect } from 'react';
import FilmInfo from '../FilmInfo/FilmInfo';
import posterLinks, { placeholderPosterUrl } from '../../Common/Posterlinks';
import { Slider, InputNumber, Row, Col } from 'antd';
import './FilmTimeline.css'

export interface IFilmTimelineProps {
}

interface IFilmData {
  Id:           number;
  Title:        string;
  Description:  string   | undefined;
  Director:     string   | undefined;
  Producer:     string   | undefined;
  ReleaseYear:  number;
  People:       string[] | undefined;
  Species:      string[] | undefined;
  Locations:    string[] | undefined;
  Url:          string   | undefined;
}

function FilmTimeline(props: IFilmTimelineProps)
{
  // SHARED VARS //////////////////////////////////////////////////////////////////////////////////

  const [EarliestSearchYear, setEarliestSearchYear] = useState(1980);
  const [LatestSearchYear,   setLatestSearchYear  ] = useState(2020);

  // FILM DISPLAY /////////////////////////////////////////////////////////////////////////////////

  const timelineLoadingElement = <p>TIMELINE LOADING</p>;
  const [FilmCardOutput, setFilmCardOutput] = useState(timelineLoadingElement);
  const [FilmCardData,      setFilmCardData]     = useState<IFilmData[]>([]);
  const [FilmCardElements,  setFilmCardElements] = useState<JSX.Element[]>([]);
  const [FilmCardDataIsWritten, setFilmCardDataIsWritten] = useState<boolean>(false);


  function FindImageUrlForFilm(title: string): string {
    let result = placeholderPosterUrl;

    // Manipulate film title to create key
    // format is camelCase: castleInTheSky
    if (title){

      // Split into words and handle capitalization
      let words: string[] = title.split(' ');
      if (words.length > 0) {
        words[0] = words[0].toLowerCase();
        if (words.length > 1) {
          for (let i = 1; i < words.length; i++) {
            let firstLetter = words[i].substring(0,1);
            let remainder = words[i].substring(1);
            words[i] = firstLetter.toUpperCase() + remainder;
          }
        }
      }

      // Reconstruct key from words
      let key = "";
      words.forEach(word => key = key.concat(word));
      key = key.replace(/\W/g, '');

      // Use key to retireve image url
      posterLinks.every(element => {
        if (element.key === key){
          result = element.imgUrl;
          return false;
        } else return true;
      });
    }

    return result;
  }

  function BuildFilmCardsForDisplay(startYear: number, endYear: number): JSX.Element {
    
    let elementsToDisplay: JSX.Element[] = [];

    for (let i = 0; i < FilmCardData.length; i++) {
      const relYear = FilmCardData[i].ReleaseYear;
      if (relYear >= startYear && relYear <= endYear ){
        elementsToDisplay.push(FilmCardElements[i]);
      }
    }

    return <ol className="filmCardContainer">{elementsToDisplay}</ol>;    
  }

  function RequestGhibliApiDataOnce() {

    if (!FilmCardDataIsWritten) {

      // Configure api request
      const api_url = 'https://ghibliapi.herokuapp.com/films';
      const api_options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }

      // GET data
      fetch(api_url, api_options).then(response => {

        let filmData: IFilmData[] = [];
        let filmElements: JSX.Element[] = [];

        if (response.ok) {        
  
          // Parse data
          response.json().then(data => {
  
          // Construct array of film card elements
          data.forEach((film: any) => {

            // Store raw data for later reference
            let rawData: IFilmData = {
              Id:           film.id,
              Title:        film.title,
              Description:  film.description,
              Director:     film.director,
              Producer:     film.producer,
              ReleaseYear:  film.release_date,
              People:       film.people,
              Species:      film.species,
              Locations:    film.locations,
              Url:          film.url
            }
            filmData.push(rawData);

            // Build card element
            filmElements.push(
              <FilmInfo
                key         ={film.id}
                PosterURL   ={FindImageUrlForFilm(film.title)}
                Title       ={film.title}
                Director    ={film.director}
                Description ={film.description}
                ReleaseYear ={film.release_date}
              />
            );
          });

          // Store parsed data and elements
          setFilmCardData(filmData);
          setFilmCardElements(filmElements);
        
          // Generate output element
          let newElement = 
          setFilmCardOutput(BuildFilmCardsForDisplay(EarliestSearchYear, LatestSearchYear)); 


          // Prevent unnecessary re-requesting of api  data
          setFilmCardDataIsWritten(true);  
  
          });
        }
      }).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
    }
  }

  useEffect(RequestGhibliApiDataOnce);

  // TIMELINE SELECTOR ////////////////////////////////////////////////////////////////////////////
  
  const inputNumSpan = 2;   // To be used properly with antd grid, ensure that:
  const sliderSpan = 20;    // 2 * inputNumSpan + sliderSpawn = 24

  const [StartYear, setStartYear] = useState(1980);
  const [EndYear, setEndYear] = useState(2020);

  function setStartYearSafe(value: any) {
    setStartYear(value <= EndYear - 1 ? value : StartYear);
  }
  
  function setEndYearSafe(value: any) {
    setEndYear(value >= StartYear + 1 ? value : EndYear);
  }

  function onChangeStartYear(value: number[]) {
    let startVal = value[0];
    let endVal = value[1];
    setStartYearSafe(startVal);
    setEndYearSafe(endVal);
  }

  function onTimlineValuesChanged() {
    setFilmCardOutput(BuildFilmCardsForDisplay(StartYear, EndYear)); 
  }

  let timelineOutput = (
    <Row>

      <Col span={inputNumSpan}>
        <InputNumber
          size='small'
          min={EarliestSearchYear}
          max={LatestSearchYear - 1}
          value={StartYear}
          onChange={(value: number) => {setStartYearSafe(value); onTimlineValuesChanged(); }}
        />
      </Col>

      <Col span={sliderSpan}>
        <Slider
          min={EarliestSearchYear}
          max={LatestSearchYear}
          onChange={onChangeStartYear}
          onAfterChange={onTimlineValuesChanged}
          range value={[StartYear, EndYear]}
          tipFormatter= { null }
        />
      </Col>
      
      <Col span={inputNumSpan}>
        <InputNumber
          size='small'
          min={EarliestSearchYear + 1}
          max={LatestSearchYear}
          value={EndYear}
          onChange={(value: any) => {setEndYearSafe(value); onTimlineValuesChanged(); }}
        />
      </Col>

    </Row>
  )

  // FINAL ELEMENT ////////////////////////////////////////////////////////////////////////////////

  return(
    <div>
      {FilmCardOutput}
      {timelineOutput}
    </div>
  );

}

export default FilmTimeline;
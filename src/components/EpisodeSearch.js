import React, { Component } from "react";
import starwars from "../data/starwars.json";
import TitlePresenter from "./TitlePresenter";
// imported Title Presenter here//

const movies = starwars.movies;

class EpisodeSearch extends Component {
  state = {
    episodeNumber: 1,
    episode: {}
  };

  getMovies = e => {
    e.preventDefault();
  };

  movieEpisode = Episode => {
    return movies.find(movie => parseInt(movie.episode_number) === Episode);
  };

  handleSelect = event => {
    this.setState({
      episodeNumber: parseInt(event.target.value)
      // parseint is installed here to convert a string to an integer
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // TODO: change the state of the episode
    // similar to handle select set state pass value to episode will be current state of episode number
    console.log("Episode", this.state);
  };

  render() {
    return (
      <React.Fragment>
        <form id="episode-form" onSubmit={this.handleSubmit}>
          {/* <select value={this.state.value} onChange={this.handleChange} /> */}
          {/* this Selects the state change and this selects any value below.
         Best guess is handle change is the event handler */}
          <select
            name="episodeList"
            form="episode-form"
            value={this.state.episodeNumber}
            onChange={this.handleSelect}
          >
            <option value="1"> Episode I</option>
            <option value="2">Episode II</option>
            <option value="3">Episode II</option>
            <option value="4">Episode IV</option>
            <option value="5">Episode V</option>
            <option value="6">Episode VI</option>
          </select>

          <input type="submit" />
        </form>
        {/*Looking for the same prop. as on the home page  */}
        {/*  */}
        <TitlePresenter title={this.state.episode.title} />
      </React.Fragment>
    );
  }
}

export default EpisodeSearch;

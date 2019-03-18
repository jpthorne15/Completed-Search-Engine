import React, { Component } from "react";
import starwars from "../data/starwars.json";
import TitlePresenter from "./TitlePresenter";

const movies = starwars.movies;

class Home extends Component {
  state = { 
    mainCharacter: "",
    characters: [],
    epsiodeNumber: "" 
  };
  // state = { epsiodeNumber: ""}

  moviesThatStar = (Character) => {
    return movies.filter(movie => movie.main_characters.includes(Character));
  };

epsiodeNum = (epsiodeNumber) => {
return movies.filter(movie => movie.episode_number===epsiodeNumber
   )
 };
// Repeated moviesthatStar format to attempt to have a description be another property to search by
  movieEpisode = Episode => {
  return movies.find(movie => parseInt(movie.episode_number) === Episode);
  };

  getMovies = e => {
    e.preventDefault();

    this.setState({
      characters: this.moviesThatStar(this.state.mainCharacter)
    });


    console.log("movies", this.moviesThatStar(this.state.mainCharacter));
  };

  render() {
    console.log('episode', this.movieEpisode(4))
    return (
      <React.Fragment>
        <form onSubmit={this.getMovies}>
        <input
            type="text"
            placeholder="Search by Character"
            onChange={e => {
              this.setState({ mainCharacter: e.target.value });
            }}
          />
          <input value='character'type="submit" />
          <br/>
          <input
            type="text"
            placeholder="Search by Epsiode Number"
            onChange={e => {
              this.setState({ epsiodeNumber: e.target.value });
            }}
          />
          <input value='episode_Number'type="submit" />
        </form>
        <h2>Movies that star {this.state.mainCharacter}</h2>

        <ul>
          {this.state.characters.map(movie => (
            <TitlePresenter title={movie.title} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
export default Home;

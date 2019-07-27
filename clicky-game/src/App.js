import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import WhichWeasley from "./components/WhichWeasley";
import weasleys from "./weasleys.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
    state = {
      weasleys,
      score: 0,
      highscore: 0
    };

    winGame = () => {
      // if the current score is higher than the high score, current score becomes high score
      if (this.state.score > this.state.highscore) {
        this.setState({highscore: this.state.score}, function() {
          console.log(this.state.highscore);
        });
      }
      // reset the click count for each weasley
      this.state.weasleys.forEach(weasley => {
        weasley.count = 0;
      });
      // alert the user that they won the game
      alert("Congratulations! You win! You only clicked each Weasley once!");
      // reset the score to 0
      this.setState({score: 0});
      return true;
    }
    
    gameOver = () => {
       // if the current score is higher than the high score, current score becomes high score
      if (this.state.score > this.state.highscore) {
        this.setState({highscore: this.state.score}, function() {
          console.log(this.state.highscore);
        });
      }
      // reset the click count for each weasley
      this.state.weasleys.forEach(weasley => {
        weasley.count = 0;
      });
      // alert the user that they lost the game and notify them of their current score
      alert(`Better luck next time! \nScore: ${this.state.score}`);
      // reset the score to 0
      this.setState({score: 0});
      return true;
    }

    clickCount = id => {
      // find the current card
      this.state.weasleys.find((current, i) => {
        if (current.id === id) {
          // if that card hasn't been clicked then increase the click count by 1
          if(weasleys[i].count === 0){
            weasleys[i].count = weasleys[i].count + 1;
            // add 1 to the score in the state
            this.setState({score : this.state.score + 1}, function(){
              console.log(this.state.score);
              // if the score is 9, they win
              if (this.state.score === 9) {
                this.winGame();
              }
            });
            // randomly display the cards on the page
            this.state.weasleys.sort(() => Math.random() - 0.5)
            return true; 
          } 
          // if the card has been clicked, game over
          else {
            this.gameOver();
          }
        }
      });
    }

    render() {
      return (
        <Wrapper>
          {/* Send the score and high score to the title element */}
          <Title score={this.state.score} highscore={this.state.highscore}>Which Weasley??</Title>
          {/* Make a new weasleys array so we don't alter the state */}
          {this.state.weasleys.map(weasley => (
          <WhichWeasley
            clickCount={this.clickCount}
            id={weasley.id}
            image={weasley.image}
            key={weasley.id}
          />
        ))}
        </Wrapper>
      );
    }
}




export default App;

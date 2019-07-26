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
      if (this.state.score > this.state.highscore) {
        this.setState({highscore: this.state.score}, function() {
          console.log(this.state.highscore);
        });
      }
      this.state.weasleys.forEach(weasley => {
        weasley.count = 0;
      });
      alert("Congratulations! You win! You only clicked each Weasley once!");
      this.setState({score: 0});
      return true;
    }
    
    gameOver = () => {
      if (this.state.score > this.state.highscore) {
        this.setState({highscore: this.state.score}, function() {
          console.log(this.state.highscore);
        });
      }
      this.state.weasleys.forEach(weasley => {
        weasley.count = 0;
      });
      alert(`Better luck next time! \nScore: ${this.state.score}`);
      this.setState({score: 0});
      return true;
    }

    clickCount = id => {
      let newScore = 0;
      this.state.weasleys.find((current, i) => {
        if (current.id === id) {
          if(weasleys[i].count === 0){
            weasleys[i].count = weasleys[i].count + 1;
            this.setState({score : this.state.score + 1}, function(){
              console.log(this.state.score);
              if (this.state.score === 9) {
                this.winGame();
              }
            });
            // this.setState(prevState => prevState.score += 1);
            this.state.weasleys.sort(() => Math.random() - 0.5)
            return true; 
          } 
          
          else {
            this.gameOver();
          }
        }
      });
    }

    render() {
      return (
        <Wrapper>
          <Title score={this.state.score} highscore={this.state.highscore}>Which Weasley??</Title>
          {this.state.weasleys.map(weasley => (
          <WhichWeasley
            clickCount={this.clickCount}
            id={weasley.id}
            image={weasley.image}
          />
        ))}
        </Wrapper>
      );
    }
}




export default App;

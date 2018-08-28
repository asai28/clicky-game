import React from "react";
import Display from "./Components/Display/index";
import Wrapper from "./Components/Wrapper/index";
import Character from "./Components/Character/index";
import characters from "./characters.json";
import Navbar from "./Components/Navbar";

class App extends React.Component{
    state= {
        clicked: [],
        characters: characters,
        correct: 0,
        maxScore: 0,
        result: ""
    }

    handleOnClick= (id) => {
        if(this.state.clicked.includes(id)){
            console.log("That was incorrect!");
            this.restartGame();
        }
        else{
            console.log("That's correct!");
            this.setState({
                clicked: this.state.clicked.concat(id),
                correct: this.state.correct + 1,
                maxScore: this.state.maxScore > this.state.correct ? this.state.maxScore : this.state.correct,
                characters: characters,
                result: "That was correct!"
            }, function(data){
                console.log(data);
                if(this.state.correct === 12){
                    this.setState({
                        result: "You are truly awesome!",
                        maxScore: 12
                    });
                    this.restartGame();
                }
            })
        }
        console.log(this.state.clicked);
        console.log(this.state.maxScore);
        this.shuffle(characters);
    }

    restartGame = () => {
        this.shuffle(characters);
        this.setState({
            clicked: [],
            correct: 0,
            maxScore: this.state.maxScore,
            characters: characters,
            result: "That was incorrect! Replay Game.."
        });
    }

    render(){
        return (
        <div>
        <Navbar correct={this.state.correct} maxScore={this.state.maxScore} result={this.state.result} />
        <br/><br/><br/>
        <Display />
        <Wrapper>
        {this.state.characters.map(character => 
        <Character 
            id = {character.id}
            key = {character.id}
            img = {character.img}
            name = {character.name}
            clicked = {this.clicked}
            handleOnClick = {this.handleOnClick}
        />
        )
        }
        </Wrapper>
        </div>
        )
    }

    shuffle (array) {
        var i = 0, j = 0, temp = 0;
      
        for (i = array.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * (i + 1))
          temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
      }
}
export default App;

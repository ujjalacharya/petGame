const React = require("react");

const PetComponent = require("./PetComponent")


var style = {
    textAlign: 'center',
    fontSize: '2em',
    color: 'rebeccapurple'
}

var btnStyle = {
    marginTop: '30px',
    marginRight: '5px',
    height: '25px'
}



class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            catLikesCount: 0,
            dogLikesCount: 0,
            catResult : '',
            dogResult : ''
        }
        
    }

    handleLikeBtnClick= (event) => {
        var petname = event.target.value
      if (petname === 'Cat'){
          this.setState((prevState)=>{
              return{
                  catLikesCount: prevState.catLikesCount +1
              }
          })
      }
      else if (petname === 'Dog'){
        this.setState((prevState)=>{
            return{
                dogLikesCount: prevState.dogLikesCount +1
            }
        })
    }
    }

    handleDislikeBtnClick= (event) => {
        var petname = event.target.value
        if (petname === 'Cat'){
            this.setState((prevState)=>{
                return{
                    catLikesCount: prevState.catLikesCount -1
                }
            })
        }
        else if (petname === 'Dog'){
          this.setState((prevState)=>{
              return{
                  dogLikesCount: prevState.dogLikesCount -1
              }
          })
      }
    }

    handleShowWinner = ()=>{

        var catLikesCount = this.state.catLikesCount;
        var dogLikesCount = this.state.dogLikesCount;
        var catResult = "TIE";
        var dogResult = "TIE";
        
        
        if(catLikesCount > dogLikesCount){
            console.log("Cat is the winner")
             catResult = 'WINNER'
             dogResult = 'LOSER'
        }
        else if(catLikesCount < dogLikesCount){
            console.log("Dog is the winner")
             catResult = 'LOSER'
             dogResult = 'WINNER'
        }

        this.setState({
            catResult: catResult,
            dogResult: dogResult
        })
    }

    
    handleStartOver = ()=>{
        console.log("Start Over clicked")

    }

    render() {
        return (
            <div>
                <h1 style={style}>
                    Welcome to Cat and Dog Cuteness Fight Game
                </h1>
                <div style={{ marginTop: 60, textAlign: "center" }}>
                    <PetComponent
                        petName="Cat"
                        likesCount = {this.state.catLikesCount}
                        petImageUrl="https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg"
                        result = {this.state.catResult}
                        onLikeBtnClick = {this.handleLikeBtnClick}
                        onDislikeBtnClick = {this.handleDislikeBtnClick}
                      
                    />
                    <PetComponent
                        petName="Dog"
                        likesCount = {this.state.dogLikesCount}                        
                        petImageUrl="http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-12.jpg"
                        result = {this.state.dogResult}                        
                        onLikeBtnClick = {this.handleLikeBtnClick}
                        onDislikeBtnClick = {this.handleDislikeBtnClick}
                       
                    />

                </div>
                <div style={{textAlign: 'center'}}>
                    <button style={btnStyle} onClick={this.handleShowWinner}>Show Winner</button>
                    <button style={btnStyle} onClick={this.handleStartOver}>Start Over</button>
                </div>

            </div>
        )
    }
}




module.exports = HomePage;
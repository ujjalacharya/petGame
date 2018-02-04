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
        this.catCompInstRef = null;
        this.dogCompInstRef = null;
        
    }

    handleShowWinner = ()=>{
        
        let catLikes = this.catCompInstRef.state.likesCount;
        let dogLikes = this.dogCompInstRef.state.likesCount;
        if(catLikes > dogLikes){
            console.log("Cat is the winner")
        }
        else if(catLikes < dogLikes){
            console.log("Dog is the winner")
        }else{
            console.log("It's a tie")
        }
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
                        petImageUrl="https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg"
                        ref = {(compInst)=>{this.catCompInstRef = compInst }}
                    />
                    <PetComponent
                        petName="Dog"
                        petImageUrl="http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-12.jpg"
                        ref = {(compInst)=>{this.dogCompInstRef = compInst}}
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
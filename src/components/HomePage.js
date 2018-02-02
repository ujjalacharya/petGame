const React = require("react");
const CatComponent = require("./CatComponent")
const DogComponent = require("./DogComponent")

const HomePage = () => {

    var style = {
        textAlign: 'center',
        fontSize: '2em',
        color: 'rebeccapurple'
    }

    return (
        <div>
            <h1 style={style}>
                Welcome to Cat and Dog Cuteness Fight Game
            </h1>
            <div style={{marginTop: 60, textAlign: "center"}}>
                <CatComponent />
                <DogComponent />
            </div>
        </div>
    )
}





module.exports = HomePage;
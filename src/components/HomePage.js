const React = require("react");

const PetComponent = require("./PetComponent")


var style = {
    textAlign: 'center',
    fontSize: '2em',
    color: 'rebeccapurple'
}



const HomePage = () => {
    return (
        <div>
            <h1 style={style}>
                Welcome to Cat and Dog Cuteness Fight Game
            </h1>
            <div style={{marginTop: 60, textAlign: "center"}}>
                <PetComponent
                 petName="Cat"
                petImageUrl="https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg"
                />
                <PetComponent
                 petName="Dog"
                 petImageUrl="http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-12.jpg"
                 />
                
            </div>
        </div>
    )
}




module.exports = HomePage;
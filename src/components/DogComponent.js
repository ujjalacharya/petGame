const React = require("react");

class DogComponent extends React.Component {
    render() {
        return (
            <div style={compStyle}>
                <h3>Dog Component</h3>
                <img style={{ height: "400px", width: "400px" }}src="http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-12.jpg" alt="Cute Dog" />
                <br />
                <button style={btnStyle}>Like</button>
                <button style={btnStyle}>Dislike</button>
            </div>
        )
    }
    
}

var compStyle = {
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto'    
}

var btnStyle = {
    height: '25px',
    width: '70px',
    marginTop: '10px',
    marginRight: '5px'
}




module.exports = DogComponent;
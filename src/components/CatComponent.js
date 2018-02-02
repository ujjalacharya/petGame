const React = require("react");

class CatComponent extends React.Component {
    render() {
        return (
            <div style={compStyle}>
                <h3>Cat Component</h3>
                <img  style={{height: "400px", width: "400px"}}
                src="https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg" alt="Cute Cat"/>
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
};

var btnStyle = {
    height: '25px',
    width: '70px',
    marginTop: '10px',
    marginRight: '5px'
}

module.exports = CatComponent;
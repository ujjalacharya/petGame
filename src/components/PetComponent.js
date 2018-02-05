const React = require("react");

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



class PetComponent extends React.Component {

    constructor(props){
        super(props);
        
    }
    
    render() {
        return (
            <div style={compStyle}>
                <h3>{this.props.petName} Like: {this.props.likesCount}</h3>
                <img style={{ height: "400px", width: "400px" }}src={this.props.petImageUrl} alt={`${this.props.petName}`} />
                <br />
                <button style={btnStyle} value={this.props.petName} onClick={this.props.onLikeBtnClick}>Like</button>
                <button style={btnStyle} value={this.props.petName} onClick={this.props.onDislikeBtnClick}>Dislike</button>
            </div>
        )
    }
    
}



module.exports = PetComponent;
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
        this.state = {
            likesCount: 0
        }
    }
    
    handleLikeBtnClick= () => {
        console.log(this.props.petName+ " component like button clicked")
        this.setState({
            likesCount: this.state.likesCount + 1
        });
    }

    handleDislikeBtnClick= () => {
        console.log(`${this.props.petName} component dislike button clicked`)
        this.setState({
            likesCount: this.state.likesCount - 1
        })
    }

    render() {
        return (
            <div style={compStyle}>
                <h3>{this.props.petName} Like: {this.state.likesCount}</h3>
                <img style={{ height: "400px", width: "400px" }}src={this.props.petImageUrl} alt={`${this.props.petName}`} />
                <br />
                <button style={btnStyle} onClick={this.handleLikeBtnClick}>Like</button>
                <button style={btnStyle} onClick={this.handleDislikeBtnClick}>Dislike</button>
            </div>
        )
    }
    
}



module.exports = PetComponent;
import React,{Component} from 'react';
import './Box.css';

class Box extends Component {
    render() {
        return (
            <div onClick={this.props.onClick} className = {this.props.class}></div>
        )
    }
}

export default Box;
import React,{Component} from 'react';
import Box from './Box';

class Boxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            box1: "box black",
            box2: "box blue",
            box3: "box green",
            box4: "box brown",
            box5: "box red",
            box6: "box orange",
            box7: "box grey",
            box8: "box purple",
            box9: "box turquoise",
            box10:"box magenta",
            box11:"box white",
            box12:"box beige",
            box13:"box pink",
            box14:"box greenyellow",
            box15:"box orangered",
            box16:"box gold",
            colors: ["box orange","box green","box blue","box purple","box black","box yellow","box brown",
            "box grey","box turquoise","box magenta","box orangered","box greenyellow","box white",
        "box beige","box gold","box pink"]
        }
        this.Randone = this.Randone.bind(this);
        this.Randtwo = this.Randtwo.bind(this);
        this.Randthree = this.Randthree.bind(this);
        this.Randfour = this.Randfour.bind(this);
        this.Randfive = this.Randfive.bind(this);
        this.Randsix = this.Randsix.bind(this);
        this.Randseven = this.Randseven.bind(this);
        this.Randeight = this.Randeight.bind(this);
        this.Randnine = this.Randnine.bind(this);
        this.Randten = this.Randten.bind(this);
        this.Randeleven = this.Randeleven.bind(this);
        this.Randtwelve = this.Randtwelve.bind(this);
        this.Randthirteen = this.Randthirteen.bind(this);
        this.Randfourteen = this.Randfourteen.bind(this);
        this.Randfifteen = this.Randfifteen.bind(this);
        this.Randsixteen = this.Randsixteen.bind(this);
    }
    Randone() {
        this.setState({
            box1: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randtwo() {
        this.setState({
            box2: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randthree() {
        this.setState({
            box3: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randfour() {
        this.setState({
            box4: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randfive() {
        this.setState({
            box5: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randsix() {
        this.setState({
            box6: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randseven() {
        this.setState({
            box7: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randeight() {
        this.setState({
            box8: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randnine() {
        this.setState({
            box9: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randten() {
        this.setState({
            box10: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randeleven() {
        this.setState({
            box11: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randtwelve() {
        this.setState({
            box12: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randthirteen() {
        this.setState({
            box13: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randfourteen() {
        this.setState({
            box14: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randfifteen() {
        this.setState({
            box15: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    Randsixteen() {
        this.setState({
            box16: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
    }
    
    render() {
        return (
            <div>
                <Box onClick={this.Randone} class={this.state.box1}/>
                <Box onClick={this.Randtwo} class={this.state.box2}/>
                <Box onClick={this.Randthree} class={this.state.box3}/>
                <Box onClick={this.Randfour} class={this.state.box4}/>
                <Box onClick={this.Randfive} class={this.state.box5}/>
                <Box onClick={this.Randsix} class={this.state.box6}/>
                <Box onClick={this.Randseven} class={this.state.box7}/>
                <Box onClick={this.Randeight} class={this.state.box8}/>
                <Box onClick={this.Randnine} class={this.state.box9}/>
                <Box onClick={this.Randten} class={this.state.box10}/>
                <Box onClick={this.Randeleven} class={this.state.box11}/>
                <Box onClick={this.Randtwelve} class={this.state.box12}/>
                <Box onClick={this.Randthirteen} class={this.state.box13}/>
                <Box onClick={this.Randfourteen} class={this.state.box14}/>
                <Box onClick={this.Randfifteen} class={this.state.box15}/>
                <Box onClick={this.Randsixteen} class={this.state.box16}/>
            </div>
        )
    }
}

export default Boxes;
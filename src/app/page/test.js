import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {

    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };
        this.update = this.update.bind(this);
    }

    update(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red).value,
            green: ReactDOM.findDOMNode(this.refs.green).value,
            blue: ReactDOM.findDOMNode(this.refs.blue).value
        });
    }

    render() {

        return (
            <div>
                <div className="content">dit is een test</div>
            </div>
        );

        // return (
        //     <div>
        //         <Slider ref="red" update={this.update} />
        //         {this.state.red}
        //         <Slider ref="green" update={this.update} />
        //         {this.state.green}
        //         <Slider ref="blue" update={this.update} />
        //         {this.state.blue}
        //     </div>);
    }
}

// class Slider extends React.Component {
//     render() {
//         return (<input type="range"
//                min="0"
//                max="255"
//                onChange={this.props.update}/>);
//     }
// }

// const Widget = (props) => {
//     return (
//         <div>
//             <input type="text"
//                    onChange={props.update}/>
//             <h1>{props.txt}</h1>
//         </div>
//     );
// };

Test.propTypes = {
    txt: React.PropTypes.string.isRequired
};

Test.defaultProps = {
    txt: 'this is the default text'
};

export default Test;
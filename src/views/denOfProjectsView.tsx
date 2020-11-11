import React from "react";
import { connect } from "react-redux";

import {
  mapDispatchToProps,
  mapStateToProps,
} from "../viewConnectors/vcDenofProjects";


interface DenofProjectsViewProps {
  readonly dopState: any;
  readonly ac: () => void;
  readonly c: () => void;
  readonly res: () => void;
  readonly one: (val:any) => void ;
  readonly two: (val:any) => void
}

class DenofProjects extends React.PureComponent <DenofProjectsViewProps> {
  componentDidMount() {}
 
    
    render() {
        return (
            <React.Fragment>
                <div className="calc-app">

                    <div className="container">
                        <div className="display">
                            {!this.props.dopState.num2 ? this.props.dopState.value : this.props.dopState.num2}
                            <span className="cursor" />
                        </div>

                        <div className="keypad">
                            <button className="clear" onClick={() => this.props.ac()}>AC</button>
                            <button className="backspace" onClick={() => this.props.c()}>C</button>
                            <button onClick={() => this.props.two('+')}>+</button>
                            <button onClick={() => this.props.one(7)}>7</button>
                            <button onClick={() => this.props.one(8)}>8</button>
                            <button onClick={() => this.props.one(9)}>9</button>
                            <button onClick={() => this.props.two('-')}>-</button>
                            <button onClick={() => this.props.one(4)}>4</button>
                            <button onClick={() => this.props.one(5)}>5</button>
                            <button onClick={() => this.props.one(6)}>6</button>
                            <button onClick={() => this.props.two('/')}>/</button>
                            <button onClick={() => this.props.one(1)}>1</button>
                            <button onClick={() => this.props.one(2)}>2</button>
                            <button onClick={() => this.props.one(3)}>3</button>
                            <button onClick={() => this.props.two('*')}>*</button>
                            <button onClick={() => this.props.one(0)}>0</button>
                            <button onClick={() => this.props.one('.')}>.</button>
                            <button className="result" onClick={() => this.props.res()}>=</button>

                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}







export default connect(mapStateToProps, mapDispatchToProps)(DenofProjects);

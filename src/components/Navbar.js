import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        const {ties, playerx, playero} = this.props;

        return (
            <div className = "navbar">
                <div className = "title">
                    <h1>Tic Tac Toe</h1>
                </div>
                <div className = "statistics">
                    <h2>
                        Jucatorul X: {playerx}
                    </h2>
                    <h2>
                        Jucatorul O: {playero}
                    </h2>
                    <h2>
                        Egaluri: {ties}
                    </h2>
                </div>
            </div>
        );
    }
}

export default Navbar;
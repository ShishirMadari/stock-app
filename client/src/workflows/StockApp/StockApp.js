import React, { Component } from 'react';
import { connect } from "react-redux";


class StockApp extends Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StockApp);

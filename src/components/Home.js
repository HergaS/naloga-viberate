import React from 'react';
import '../styles/Home.css';
import { connect } from "react-redux";

import ArtistData from './ArtistData'
import ArtistGraph from './ArtistGraph'

class Home extends React.Component {
    render() {
        return (
        <div className="Home container-fluid">
            <div className="row">
                <div className="col-12 col-md-4 box">
                    <img 
                        src={this.props.artistImg}
                        alt="Artist"
                        height="100%"
                        className="artist-img"
                    />
                </div>
                <div className="col-12 col-md-5 box"><ArtistData/></div>
                <div className="col-12 col-md-3 box"><ArtistGraph/></div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        artistImg: state.artists.artistImg
    };
};


export default connect(mapStateToProps)(Home);
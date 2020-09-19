import React from 'react';
import logo from '../logo-v.svg';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Header.css';
import { connect } from "react-redux";

import { addArtists } from '../actions/artistActions';
import { addArtistData } from '../actions/artistActions';
import { addArtistImg } from '../actions/artistActions';

class Header extends React.Component {

    componentDidMount() {
        this.getArtists(0)
    }

    async getArtists(id) {
        return fetch('https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a')
        .then((response) => response.json())
        .then((responseJson) => {
            this.props.addArtists(responseJson.all_artists)
            this.getArtistData(responseJson.all_artists[id].artist_uuid)
        })
        .catch((error) => {
          console.error(error);
        });
    }

    async getArtistData(artistID) {
        return fetch(`https://run.mocky.io/v3/${artistID}`)
        .then((response) => response.json())
        .then((responseJson) => {
            this.props.addArtistData(responseJson)
            this.props.addArtistImg(responseJson.data.image)
        })
        .catch((error) => {
          console.error(error);
        });
    }

    changeArtist(id) {
        this.getArtistData(this.props.artists[id].artist_uuid)
    }

    render() {
        if (this.props.artists === null) {
            return (
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="#home" className="mr-5">
                        <img 
                            src={logo}
                            alt="Viberate"
                            width="65"
                            height="65"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="" className="mx-3"></Nav.Link>
                            <Nav.Link href="" className="mx-3"></Nav.Link>
                            <Nav.Link href="" className="mx-3"></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        } else {
            return (
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="#home" className="mr-5">
                        <img 
                            src={logo}
                            alt="Viberate"
                            width="65"
                            height="65"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={(e) => this.changeArtist(0,e)} className="mx-3">{this.props.artists[0].artist_name}</Nav.Link>
                            <Nav.Link onClick={(e) => this.changeArtist(1,e)} className="mx-3">{this.props.artists[1].artist_name}</Nav.Link>
                            <Nav.Link onClick={(e) => this.changeArtist(2,e)} className="mx-3">{this.props.artists[2].artist_name}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        artists: state.artists.artists,
        artistData: state.artists.artistData,
        artistImg: state.artists.artistImg
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addArtists: (artists) => {
            dispatch(addArtists(artists));
        },
        addArtistData: (artistData) => {
            dispatch(addArtistData(artistData));
        },
        addArtistImg: (artistImg) => {
            dispatch(addArtistImg(artistImg));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
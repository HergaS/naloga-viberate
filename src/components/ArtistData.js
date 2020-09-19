import React from 'react';
import '../styles/Home.css';
import { Button, Spinner, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


class ArtistData extends React.Component {
    render() {
        if (this.props.artistData === null) {
            return (
                <div className="mx-auto my-auto">
                    <Spinner animation="border" role="status" style={{marginTop: 50+'%'}}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        } else {
            console.log(this.props.artistData)
            return (
                <div className="artist-data container-fluid">
                    <div className="row text-left mt-2">
                        <div className="col-12 my-3"><Button variant="outline-dark">BOOKING REQUEST</Button></div>
                        <div className="col-12"><h2 className="my-3">{this.props.artistData.data.name}</h2></div>
                        <Button variant="dark" className="ml-3 mr-1"><FontAwesomeIcon icon={faHeart} /></Button>
                        <Button variant="dark">FOLLOW</Button>
                        <Button variant="dark" className="ml-3"><FontAwesomeIcon icon={faShareSquare} /></Button>
                    </div>
                    <div className="row text-left my-3">
                        <div className="col-12"><h5>ORIGIN</h5></div>
                        <div className="col-12"><Button variant="outline-dark">{this.props.artistData.data.country.name}</Button></div>
                    </div>
                    <div className="row text-left mb-3">
                        <div className="col-12"><h5>GENRE</h5></div>
                        <div className="col-12"><Button variant="outline-dark">{this.props.artistData.data.genre.name}</Button></div>
                    </div>
                    <Subgenres subGen={this.props.artistData.data.subgenres} />
                    <hr className="border-line" />
                    <Icons icons={this.props.artistData.data.social_links} />
                </div>
            );
        }
    }
}

function SubGenre(props) {
    return <div className="col mb-2"><Button variant="outline-dark">{props.value}</Button></div>;
  }

function Subgenres(props) {
    const subGen = props.subGen;
    return (
        <div className="row text-left mb-3">
            <div className="col-12"><h5>SUBGENRES</h5></div>
            {subGen.map((subG) =>
                <SubGenre key={subG.id}
                        value={subG.name} />
            )}
            <div className="col">
                <OverlayTrigger
                    trigger="click"
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Tooltip id={`tooltip-bottom`}>
                            <h3>Vote for subgenres</h3>
							<p>Don’t agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
                            <p>
                                <button variant="dark">Vote now</button>
                            </p>
                        </Tooltip>
                    }
                >
                    <Button variant="dark">+</Button>
                </OverlayTrigger>
            </div>
        </div>
    );
}

function Icon(props) {
    return <a href={props.value.link} className="icons mx-3 my-3"><img src={require(`../images/svg/${props.value.channel}.svg`)} alt={`${props.value.channel} link`} /></a>;
}

function Icons(props) {
    const icons = props.icons;
    return (
        <div className="row text-left mb-3">
            {icons.map((icon) =>
                <Icon key={icon.channel}
                    value={icon} />
            )}
            <div className="col">
                <OverlayTrigger
                    trigger="click"
                    key='top'
                    placement='top'
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            <h3>Got more info?</h3>
							<p>Add Place's links so everyone can see their social media highlights.</p>
                            <p>
                                <button variant="dark">Add links</button>
                            </p>
                        </Tooltip>
                    }
                >
                    <Button variant="dark">+</Button>
                </OverlayTrigger>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        artistData: state.artists.artistData
    };
}

export default connect(mapStateToProps)(ArtistData)
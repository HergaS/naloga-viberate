import React from 'react';
import '../styles/Home.css';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ResponsiveBar } from '@nivo/bar';


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
            return (
                <div className="artist-data container-fluid" style={{height:80+'vh', backgroundColor:'#efefef', paddingTop:50+'vh'}}>
                    <div className="row">
                        <div className="col-12"><h5>MOST POPULAR IN</h5></div>
                    </div>
                    <div className="row" style={{height:80+'%'}}>
                        <div className="col-10 offset-1">
                            <ResponsiveBar
                                data={this.props.artistData.data.popularity}
                                keys={[ 'percentage' ]}
                                indexBy="city"
                                margin={{ top: 50, right: 30, bottom: 20, left: 100 }}
                                padding={0.8}
                                innerPadding={2}
                                groupMode="grouped"
                                layout="horizontal"
                                colors="black"
                                borderColor="white"
                                axisTop={null}
                                axisRight={null}
                                axisBottom={null}
                                axisLeft={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0
                                }}
                                enableGridY={false}
                                enableLabel={false}
                                labelSkipWidth={11}
                                labelSkipHeight={10}
                                labelTextColor="black"
                                legends={[]}
                                isInteractive={false}
                                animate={true}
                                motionStiffness={90}
                                motionDamping={15}
                            />
                        </div>
                    </div>
                </div>
            );
        }
    }
}



const mapStateToProps = (state) => {
    return {
        artistData: state.artists.artistData
    };
}

export default connect(mapStateToProps)(ArtistData)
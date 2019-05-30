
import React from 'react';
import '../Styles/HomeCard.css';

export default class HomeCard extends React.Component {

    /* A state to handle if some HTML is supposed to being displayed */
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            visible: false
        };
    }

    /*A method to redirect to another page */
    bookNow = () => {
        let url = 'https://www.spotahome.com/london';
        window.location.assign(url);
    }
    /* A method to handle the state of the component */
    changeDetailsFlag = () => {
        this.setState({ visible: !this.state.visible });
    }
    /* A simple function to return text depending on input */
    favorite(prop) {
        if (prop) {
            return ' and is one of ours Favourites!';
        }
        return '';
    }

    render() {
        return (
            <div className='container'>
                <div className='row homeCardLine'>
                    <div className='col-lg-2' style={{
                        'alignSelf': 'center',
                        'textAlign': 'center'
                    }}>
                        <img className='homeImage' alt='The Room' src={this.props.homeCard.photoUrls}></img>
                    </div>
                    <div className='col-lg-10' style={{ 'paddingBottom': '1rem' }}>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='row description'>{this.props.homeCard.title}</div>
                            </div>
                            <div className='col-lg-4' style={{ 'paddingTop': '1rem' }}>
                                <div className='priceLabel'>
                                    {this.props.homeCard.pricePerMonth + this.props.homeCard.currencySymbol}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='row description moreDetails' id={this.props.count + '_moreDetails'}>
                                    {/*Showing this element according to the state of the component */}
                                    {this.state.visible &&
                                        <div>{'Type: ' + this.props.homeCard.type + this.favorite(this.props.homeCard.isFavorite)}</div>
                                    }
                                </div>
                            </div>
                            <div className='col-lg-8 alignRight'>
                                <button className='primaryButton' onClick={() => this.bookNow()}>Book Now!</button>
                                <div className='divider'></div>
                                <button className='secondaryButton' onClick={() => { this.changeDetailsFlag() }}>More Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
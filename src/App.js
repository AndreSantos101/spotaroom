import React from 'react';
import Header from './Components/Header';
import ListHomeCards from './Components/ListHomeCards';
import API from './API/Spotaroom';
import './App.css';

const title = 'spotaroom';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      listHomeCards: []
    };
  }

  componentDidMount() {
    try {
      API.getInstance().getHomeCards().then(data => {
        this.setState(() => ({
          listHomeCards: data.homecards.map((elem) => ({
            adId: elem.adId, currencySymbol: elem.currencySymbol, pricePerMonth: elem.pricePerMonth
            , title: elem.title, type: elem.type, photoUrls: elem.photoUrls.homecardHidpi, isFavorite: elem.isFavorite
          })
          )
        }));
      });
    } catch (e) {
      alert('Not able to make the request to spotaroom API: ' + e);
    }
  }
  render() {
    return (
      <div className='App'>
        <Header title={title}></Header>
        <div>
          <ListHomeCards listHomeCards={this.state.listHomeCards}></ListHomeCards>
        </div>
      </div>
    )
  }
}

import React from "react";
import './Locations.css';
import fetchingItem from '../helpers/fetchPokemon';
import locationSearch from "../helpers/searchLocationAPI";

export default class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      nameArr: [],
    }
  }

  componentDidMount() {
    this.locationsArr();
    
  }

  locationsArr = async () => {
    const response = await fetchingItem(20, 0);
    const locations = await Promise.all(response.results.map(({ url }) => {
      const name = locationSearch(url)
      return name;
    }))
    const namesmo = locations.map(({ names }) => names[1].name)
    this.setState({ nameArr: namesmo })
  }


  render() {
    //fetchingItem(20, 0)
    // this.locationsArr();
    const { nameArr } = this.state;
    return(
      <div>
        <h2>Locations</h2>
        <ul>
        { nameArr.map((location) => <li key={location}>{ location }</li>) }
        </ul>
      </div>
    )
  }
}
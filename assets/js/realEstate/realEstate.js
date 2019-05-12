import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingData from './data/listingData';

class App extends Component {
  constructor () {
    super()
    this.state = {
      listingData,
      city: 'All',
      homeType: 'All',
      bedrooms: 1,
      min_price: 0,
      max_price: 5000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimminng_pool: false,
      filteredData: listingData,
      populateFormsData: [],
      sortby: 'price-dsc',
      search: ''
    }
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
  }

  componentWillMount(){
    var listingData = this.state.listingData.sort((a,b)=>{
      return a.price - b.price;
    })

    this.setState({
      listingData
    })
  }

  change(event){

    var name = event.target.name;

    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    }, ()=>{
      this.filteredData()
      console.log(this.state);
    })

  }

  filteredData(){
      var newData = this.state.listingData.filter((item)=>{
        return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
      })

      if(this.state.city != 'All'){
        newData = newData.filter((item)=>{
          return item.city == this.state.city
        })
      }
      if(this.state.homeType != 'All'){
        newData = newData.filter((item)=>{
          return item.homeType == this.state.homeType
        })
      }
      if(this.state.sortby == 'price-dsc'){
        newData = newData.sort((a,b)=>{
          return a.price - b.price
        })
      }
      if(this.state.sortby == 'price-asc'){
        newData = newData.sort((a,b)=>{
          return b.price - a.price
        })
      }

      if(this.state.search != ''){
        newData = newData.filter((item)=>{
          var city = item.city.toLowerCase();
          var searchText = this.state.search.toLowerCase();

          var n = city.match(searchText);

          if(n != null){
            return true;
          }
        })
      }

      this.setState({
        filteredData: newData
      })
  }

  populateForms(){
    //City
    var city = this.state.listingData.map((item)=>{
      return item.city
    });

    city = new Set(city)

    city = [...city]

    
    city = city.sort()
    //HomeTypes
    
    var homeTypes = this.state.listingData.map((item)=>{
      return item.homeType
    });
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]

    homeTypes = homeTypes.sort();
    
    //Bedrooms
      var bedrooms = this.state.listingData.map((item)=>{
        return item.rooms
      });
      bedrooms = new Set(bedrooms)
      bedrooms = [...bedrooms]

      bedrooms = bedrooms.sort();

      this.setState({
        populateForms: {
          homeTypes,
          bedrooms,
          city
        }
      })
  }
  render () {
    return (
      <div>
        <Header />  
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/>
          <Listings listingData={this.state.filteredData} change={this.change} globalState={this.state}/>
        </section>
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)

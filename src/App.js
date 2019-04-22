import React, { Component } from 'react';
import './App.scss';

import Preloader from "./components/Preloader/Preloader";
import ProductSection from './components/ProductSection/ProductSection';
import FilterSection from './components/FilterSection/FilterSection';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      appData : [],
      currentDataIndex:0,
    };
    this.getInitialData = this.getInitialData.bind(this);
    this.useData = this.useData.bind(this);
    this.getFilterData = this.getFilterData.bind(this);
  }
  componentDidMount(){

    this.getInitialData();


  
    
  }

  getInitialData(){

    
    let urls = [
      "https://app.dataweave.com/v6/app/retailer/bundles/?&base_view=all_products&start=0&limit=20&sort_on=&sort_by=&filters={%22search%22:%22%22}&api_key=38430b87ac715c5858b7de91fb90b3f7",
      "https://app.dataweave.com/v6/app/retailer/bundles/?&base_view=increase_opportunity&start=0&limit=20&sort_on=&sort_by=&filters={%22search%22:%22%22}&api_key=38430b87ac715c5858b7de91fb90b3f7"
    ]
    
    var promises = urls.map(url => fetch(url).then(y => y.json()));
    Promise.all(promises).then(results => {
        return this.setState({
          appData: results,
        })
    });

  }

  getFilterData(params){

      let filterParams = {
        "limit":params.limit || 20,
        "sort_by": params.sort_by || "asc" ,
        "sort_on":params.sort_on || null,
        "start":params.start || 0,
        "filters":params.filter || {
                  "search": "",
                }
      }

     
      let urls = [
        "https://app.dataweave.com/v6/app/retailer/bundles/?&base_view=all_products&start="+filterParams.start+"&limit="+filterParams.limit+"&sort_on="+filterParams.sort_on+"&sort_by="+filterParams.sort_by+"&filters={%22search%22:%22"+filterParams.filters.search+"%22}&api_key=38430b87ac715c5858b7de91fb90b3f7",
        "https://app.dataweave.com/v6/app/retailer/bundles/?&base_view=increase_opportunity&start="+filterParams.start+"&limit="+filterParams.limit+"&sort_on="+filterParams.sort_on+"&sort_by="+filterParams.sort_by+"&filters={%22search%22:%22"+filterParams.filters.search+"%22}&api_key=38430b87ac715c5858b7de91fb90b3f7"
      ]

    var promises = urls.map(url => fetch(url).then(y => y.json()));
    Promise.all(promises).then(results => {
      console.log("results",results);
     
        return this.setState({
          appData: results,
        })
        
    });

  }


  useData(index){
    
    this.setState({
      currentDataIndex:index
    }) 
  
  }

  render() {
    
    let appData = this.state.appData;

    if(appData.length !== 0){
      
      
      let initialCardBundleId = 1; let noData = false;
      let productListData = this.state.appData[this.state.currentDataIndex];
    
      if(productListData.data.length){
        initialCardBundleId = productListData.data[0].bundle_id;
        noData = false ;
      } else {
        initialCardBundleId = "";
        noData= true;
      } 
      
      return (
        <div className="App">
          
          <FilterSection appData={appData} sendData={this.useData} currentDataIndex={this.state.currentDataIndex}/>
          <ProductSection noData={noData} initialCardBundleId={initialCardBundleId} getFilterData={this.getFilterData} productListData={productListData} sendData={this.getData}/>
          
        </div>
      );
    }
    return (
      <Preloader/>
    );
  }
}

export default App;

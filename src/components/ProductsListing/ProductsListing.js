

import React from "react";
import SearchAndSort from "./SearchAndSort";
import ProductsList from "./ProductsList";
import Preloader from "../Preloader/Preloader";
import Pagination from "./Pagination";

class ProductsListing extends React.Component{


    render(){

        let productListData = this.props.productListData;
       
        if(productListData){
            
            let productList = productListData.data;

            return(
                <div className="product__listing-block">
                    <SearchAndSort getFilterData={this.props.getFilterData} productListData={productListData}/>
                    {!this.props.noData ? <ProductsList noData={this.props.noData} currentCardBundleID={this.props.currentCardBundleID} productList={productList} passCurrentBundleId={this.props.passCurrentBundleId}/> : <div className="no-data">No Data Found</div>}
                    <Pagination productListData={productListData}/>
                </div>    
            )
        }

        else{
           return <Preloader/>
        }
        
        
    }
} 

export default ProductsListing
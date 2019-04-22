import React from "react";
import "./ProductsListing.scss";

class Pagination extends React.Component{

    render(){

        let remainingProductCount = this.props.productListData.count - this.props.productListData.parameters.limit;
        
        
        return(
            <div className="pagination__block">
                <div className="pagination__counter-wrap">
                    <span className="product__count">{remainingProductCount}</span> Product(s) More
                </div>
            </div>    
        )
        
    }
} 

export default Pagination;
import React from "react";
import ProductCard from "./ProductCard";
import Preloader from "../Preloader/Preloader";

class ProductsList extends React.Component{

    componentDidMount(){
        this.props.passCurrentBundleId(this.props.currentBundleId);
    }
    
    render(){
        let productListData = this.props.productList;
        let  currentCardBundleID = this.props.currentCardBundleID;

        var self = this;
        if(productListData){

            let productList = productListData.map(function(card,index){
                return <ProductCard currentCard={card.bundle_id === currentCardBundleID ? true : false} key={card.bundle_id} cardData={card} loadIndex={index} onClick={() => self.props.passCurrentBundleId(card.bundle_id)}/>
            });

            return(
                <div className="product__list-block">
                    {productList}
                </div>    
            )
        }

        else{
            return <Preloader/>
        }
        
    }
} 

export default ProductsList
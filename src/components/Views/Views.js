import React from "react";

class Views extends React.Component{
    constructor(props){
        super(props);
        this.sendData = this.sendData.bind(this);
    }

    sendData(event){
        // console.log("target",event.currentTarget.dataset.index);
        let index = parseInt(event.currentTarget.dataset.index);
        
        // console.log("use Data called",index);
        this.props.sendData(index);
    }
    render(){
        // console.log("View data render",this.props.appData[0]);
        let viewData = this.props.appData;
        // console.log(viewData," ",viewData != undefined)

         


        if(viewData.length > 0){

            let allProductData = viewData[0];
            let marginGainProductsData = viewData[1];
            // console.log("allProductData",allProductData);
            // console.log("marginGainProductsData",marginGainProductsData);
            // console.log("viewData",viewData)
            // console.log("viewData data",viewData[0].data)

            return(
                <div className="views__block">
                    <h2 className="section__header section__header--blue">Views</h2>
                    <div className="views__list">
                        <div className={`views__item ${this.props.currentDataIndex === 0 ? "views__item--active" : ""}`} data-index={0} onClick={this.sendData}>
                            <span className="views__item--label">All Matched Products</span>
                            <span className="views__item--product-count">{allProductData.count}</span>
                        </div> 
                        <div className={`views__item ${this.props.currentDataIndex === 1 ? "views__item--active" : ""}`} data-index={1} onClick={this.sendData}>
                            <span className="views__item--label">Margin Gain Opportunities</span>
                            <span className="views__item--product-count">{marginGainProductsData.count}</span>
                        </div>   
                    </div>    
                </div>    
            )
        }
        else{
            return <div>
                </div>;
        }
        
    }
} 

export default Views
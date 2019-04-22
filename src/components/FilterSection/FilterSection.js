import React from 'react';
import "./FilterSection.scss"
import Views from '../Views/Views';
import Preloader from '../Preloader/Preloader';


class FilterSection extends React.Component{

    constructor(props){
        super(props);
        this.sendData = this.sendData.bind(this);
        this.state = {
            currentDataIndex:0
        }
    }

    componentDidMount(){
        
    }


    sendData(index){
        // console.log("use Data called",index);
        this.props.sendData(index);
      }

    render(){
        // console.log("filter Component render");
        let appData = this.props.appData;

        if(appData){
            
            return(
                <div className="filter__section" >
                    <Views appData={appData} sendData={this.sendData} currentDataIndex={this.props.currentDataIndex}/>
                </div>
            )
        }

        else{

            return <Preloader />
        }
        
    }
}

export default FilterSection;
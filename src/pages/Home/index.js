import React, { useState } from 'react'
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Footer from '../../components/common/footer';
import Delivery from '../../components/Delivery';
import DiningOut from '../../components/DiningOut';
import NightLife from '../../components/NightLife';

const HomePage = () => {
 
const [activeTab,setActiveTab]=useState("Delivery");

return (
    <div>
      <Header/>
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <Footer/>
    </div>
  );
};
const getCorrectScreen=(tab)=>{
switch(tab){
case "Delivery":
  return <Delivery/>
case "Dining Out":
  return <DiningOut/>
case "Night Life":
  return <NightLife/>
  default:
    return <Delivery/>
}

}


 



  

  


export default HomePage;

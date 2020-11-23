import React from "react";
import Productos from "../Components/productos";
import axios from "axios";

class Product extends React.Component{

  state={
    nameProd:[]
  }
  componentDidMount(){
    axios.get('https://jmo9r.sse.codesandbox.io/api/Productos')
   .then((res) => {
     const nameProd=res.data;
      this.setState({
       nameProd
     })
  }).catch(console.log)
  }  
  render(){
    
    const {nameProd}=this.state;
    return(
      <Productos NameProd = {nameProd} />
    );
  }
}

export default Product;
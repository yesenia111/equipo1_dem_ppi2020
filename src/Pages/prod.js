import React from "react";
import Productos from "../Components/productos";
import axios from "axios";

class Product extends React.Component{

  state={
    nameProd:[]
  }
  componentDidMount(){
    axios.get('https://tienda-ahorro-backend.herokuapp.com/api/Productos')
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
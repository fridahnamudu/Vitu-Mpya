import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Item from '../Components/Items/Item';
import all_product from '../Components/Assests/all_product';


function ShopCategory (props){
  const {all_product} = useContext(ShopContext);
  console.log (props.category)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span> Showing 1-12</span> out of 30 products
        </p>
        <div className="shopcategory-sort">
          Sort by <ArrowDropDownCircleIcon />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }

        })}
      </div>
    </div>
  )
}

export default ShopCategory
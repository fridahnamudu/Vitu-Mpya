import React from 'react'
import './NewCollections.css'
import Item from '../Items/Item'
import new_collections from '../Assests/new_collections'

function NewCollections() {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
      <div className="collections">
        {new_collections.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.Image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
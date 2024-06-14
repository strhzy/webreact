import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Overlay = (props) => {
  return (
    <div>
      <div><h2>Корзина</h2></div>

      {props.overlayItems.length > 0 ?(
        <div>
      {props.overlayItems.map((obj)=>(
          <Card style={{ width: '18rem' }}> 
            <Card.Body>
              <Card.Title>{obj.name}</Card.Title>
              <Card.Text>
                {obj.description}
              </Card.Text>
              <Card.Text>
                {obj.price}
              </Card.Text>
              <Button onClick={()=> props.deleteItem(obj.id)}>X</Button>
            </Card.Body>
        </Card>
        ))
      }
      </div>
      
      ): (
        <h1>Пусто</h1>
      ) }
      <div>
        <p>Итог: </p>
        <p>{props.total_price}</p>
      </div>
    </div>
  )
}

export default Overlay

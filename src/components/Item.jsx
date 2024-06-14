import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../App';

const Item = (props) => {

    const context = React.useContext(AppContext);

    const onClickAdd =() => {
        const {id, myId, name:name, description:description, price:price} = props;
        props.onPlus({id, myId, name, description, price});
    }

    return (
    <Card style={{ width: '18rem' }}> 
    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
        <Card.Text>
            {props.price}
        </Card.Text>
        <Button onClick={onClickAdd}>
            {
                context.isAdded(props.myId) ? 'Добавлен':'Добавить в корзину'
            }
        </Button>
    </Card.Body>
    </Card>
    )
}

export default Item

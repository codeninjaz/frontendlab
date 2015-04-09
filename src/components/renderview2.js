import React from 'react';
import _  from 'lodash';
import {ListGroupItem, ListGroup, Button} from 'react-bootstrap';
import ListItem from './listitem';
import Store from '../data/datastore1';

//This is a render-view only rendering allowed
export default class RenderView1 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            listVisibility: 'none',
            buttonText: 'Visa lista'
        }
    }
    itemList(){
        var listItems = [];
        _.forEach(this.props.data, function(item){
            listItems.push(
                <ListGroupItem key={item.id}>
                    <ListItem item={item} />
                </ListGroupItem>
                );
        });
        return listItems;
    }
    handleButton(){
        let items = Store.getItems()
        if(this.state.listVisibility==='none'){
            this.setState({
                listVisibility:'block',
                buttonText: 'Dölj lista'
            })
        }
        else{
            this.setState({
                listVisibility:'none',
                buttonText: 'Visa lista'
            })
        }
    }
    render(){
        return(
        <div>
            <Button bsStyle='primary' bsSize='small' block onClick={this.handleButton.bind(this)}>{this.state.buttonText}</Button>
            <div style={{display:this.state.listVisibility}}>
                <ListGroup>
                    {this.itemList()}
                </ListGroup>
            </div>
        </div>
        );
    }
}
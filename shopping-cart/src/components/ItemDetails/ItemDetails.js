import React, { Component } from 'react'
import { Button, Collapse, Card, Media, Row, Col } from 'react-bootstrap'

export default class ItemDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      
    };
  }
  render() {
    return (
      <div>
        <Button
        className="item-details-button"
        bsStyle="link"
        onClick={()=> this.setState({ open: !this.state.open  })}
        >
        {this.state.open === false ? `See` : `Hide`} item details 
        {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
        <div >
          <Card>
          <Media>
              <img
              width={100}
              height={100}
              className="thumbnail"
              src="https://images-na.ssl-images-amazon.com/images/I/61M9QAYH5GL._UY500_.jpg"
              alt="Generic placeholder"
            />
            <p>Essentials by Amber. <br/>Floral Maxi Dress</p>
            <Media.Body>
              <strong>{`$${this.props.price}`}</strong>
              <br/>
              <strong className="price-strike">
              {`$${this.props.price}`}
              </strong>
            </Media.Body>
          </Media>
  
            </Card>
        </div>
        </Collapse>
      </div>
    )
  }
}

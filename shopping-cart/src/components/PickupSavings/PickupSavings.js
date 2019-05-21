import React, { Component } from 'react'
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'

const styles = {
  pickupSavings: {
    textDecorations: 'underline',
  },
  totalSavings: {
    color: 'red',
    fontWeight: '800'
  }
}

export class PickupSavings extends Component {
  render() {
    // <Tooltip id="tooltip">
    // <p>Picking up your order in the store helps cut costs, and we pass the savings on to you.</p>
    // </Tooltip>;
    return (
      <div>
        <Row className="show-grid">
        <Col md={6}>
        <OverlayTrigger placement="bottom" overlay={Tooltip}>
        <div style={styles.pickupSavings}>Pickup Savings</div>
        </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}>{`$${this.props.price}`}</Col>
        </Row>
      </div>
    )
  }
}

export default PickupSavings

import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
      <div className="container">
        <h4 className="center">About</h4>
        <hr/>
        <div className="row">
          <div className="col s12 m10 l8 offset-m1 offset-l2">
            {/* <img src={process.env.PUBLIC_URL + '/assets/291-3264x2176.jpg'} alt="" className="responsive-img" /> */}
            <img src="https://picsum.photos/id/291/3264/2176" alt="" className="responsive-img"/>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
      </div>
    </div>
    )
  }
}
import React, { Component } from 'react'

export default class Home extends Component {
  render(){
    return (
      <div>
        <div id="welcome"></div>
        <section className="container section scrollspy" id="social">
          <hr/>
          <h4 className="center">Mastodon - Social SNS</h4>
          <div className="row">
            <div className="col s12 m10 offset-m1 l8 offset-l2">
              <div className="card-panel blue darken-1">
                <span className="white-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                </span>
              </div>
            </div>
          </div>
          <div className="slider">
              <ul className="slides">
                <li>
                  <img src={process.env.PUBLIC_URL + '/assets/m-s-1.png'} alt="login" className="responsive-img"/>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + '/assets/m-s-2.png'} alt="list" className="responsive-img"/>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + '/assets/m-s-3.png'} alt="detail" className="responsive-img"/>
                </li>
              </ul>
          </div>
        </section>
        <div className="parallax-container">
          <div className="parallax">
            {/* <img src={process.env.PUBLIC_URL + '/assets/505-2000x1333.jpg'} alt="" className="responsive-img" /> */}
            <img src="https://picsum.photos/id/505/2000/1333" alt="" className="responsive-img" />
          </div>
        </div>
        <section className="container section scrollspy" id="community">
        <hr/>
          <h4 className="center">Flarum - Community</h4>
          <div className="row">
            <div className="col s12 m10 offset-m1 l8 offset-l2">
              <div className="card-panel orange darken-3">
                <span className="white-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                </span>
              </div>
            </div>
          </div>
          <div className="slider">
              <ul className="slides">
                <li>
                  <img src={process.env.PUBLIC_URL + '/assets/bbs-s-1.png'} alt="homepage" className="responsive-img materialboxed"/>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + '/assets/bbs-s-2.png'} alt="tag" className="responsive-img materialboxed"/>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + '/assets/bbs-s-3.png'} alt="detail" className="responsive-img materialboxed"/>
                </li>
              </ul>
          </div>
        </section>
        <div className="parallax-container">
          <div className="parallax">
            {/* <img src={process.env.PUBLIC_URL + '/assets/588-2509x1673.jpg'} alt="" className="responsive-img" /> */}
            <img src="https://picsum.photos/id/588/2509/1673" alt="" className="responsive-img" />
          </div>
        </div>
      </div>
    )
  }
}

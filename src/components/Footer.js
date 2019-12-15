import React, { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <footer className="page-footer black darken-3">
        <div className="container">
          <div className="row">
            <div className="col s12 m6 l3">
              <h6>COMMUNITY</h6>
              <ul>
                <li><a href="https://homeless.group" className="grey-text"><i className="fab fa-mastodon"></i> Mastodon</a></li>
                <li><a href="https://bbs.homeless.group" className="grey-text"><i className="fas fa-users"></i> Flarum BBS</a></li>
              </ul>
            </div>
            <div className="col s12 m6 l3">
              <h6>THANKS TO</h6>
              <ul>
                <li><a href="https://reactjs.org/" className="grey-text"><i className="fab fa-react"></i> React</a></li>
                <li><a href="https://materializecss.com/" className="grey-text"><i className="fab fa-css3-alt"></i> Materialize CSS</a></li>
                <li><a href="https://fontawesome.com/" className="grey-text"><i className="fab fa-font-awesome"></i> Fontawesome CSS</a></li>
                <li><a href="https://picsum.photos/" className="grey-text"><i className="fas fa-image"></i> Picsum</a></li>
                <li><a href="https://www.oracle.com/cloud/" className="grey-text"><i className="fas fa-cloud"></i> Oracle Cloud</a></li>
                <li><a href="https://github.com/" className="grey-text"><i className="fab fa-github"></i> Github</a></li>
                <li><a href="https://cloudflare.com/" className="grey-text"><i className="fas fa-cloud"></i> Cloudflare</a></li>
              </ul>
            </div>
            <div className="col s12 m6 l3">
              <h6>CONTACT</h6>
              <ul>
                <li><a href="mailto:itabas016@gmail.com" className="grey-text"><i className="fas fa-envelope"></i> Email to Me</a></li>
              </ul>
            </div>
            <div className="col s12 m6 l3">
              <h6>DONATE</h6>
              <ul>
                <li><img src={process.env.PUBLIC_URL + '/assets/qrcode.jpg'} alt="QRcode" className="responsive-img" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright black darken-4">
          <div className="container center-align">
            <hr />
            <div>Copyright &copy; 2019. All Rights Reserved.</div>
            <div>Homeless Group</div>
          </div>
        </div>
      </footer>
    )
  }
}

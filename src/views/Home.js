import React, { Component } from 'react'

export default class Home extends Component {
  render () {
    return (
      <div>
        <div id="welcome" className="responsive-img"></div>
        <section className="container section scrollspy" id="social">
          <hr />
          <h4 className="center"><a href="https://homeless.group" className="blue-text" target="_blank" rel="noopener noreferrer">Mastodon - Social SNS</a></h4>
          <div className="row">
            <div className="col s12 m10 offset-m1 l8 offset-l2">
              <div className="card-panel blue darken-1">
                <span className="white-text">
                  <h6><strong>SNS/Toots/Timeline/Chat</strong></h6>
                  <p>这是一款去中心化社交应用，并且是开源项目，支持用户自建服务器，支持不同服务器间用户的交流，有点像分布式社交平台。使用起来一点也不逊于Twitter, 并且支持数据的导入和导出。:)</p>
                  <p>手机客户端, <a href="https://play.google.com/store/apps/details?id=com.keylesspalace.tusky" className="white-text" target="_blank" rel="noopener noreferrer"><strong>Tusky</strong></a>(Android), <a href="https://apps.apple.com/us/app/amarok-for-mastodon/id1214116200?ls=1" className="white-text" target="_blank" rel="noopener noreferrer"><strong>Amaroq</strong></a>(IOS), 更多请移步这里 <a href="https://joinmastodon.org/apps" className="white-text" target="_blank" rel="noopener noreferrer"><i className="fas fa-arrow-alt-circle-right"></i></a></p>
                  <p>欢迎前来体验。:) <i className="fab fa-mastodon"></i><a href="https://homeless.group" className="white-text" target="_blank" rel="noopener noreferrer"> Mastodon</a></p>
                </span>
              </div>
            </div>
          </div>
          <div className="slider">
            <ul className="slides">
              <li>
                <img src={process.env.PUBLIC_URL + '/assets/m-s-1.png'} alt="login" className="responsive-img" />
              </li>
              <li>
                <img src={process.env.PUBLIC_URL + '/assets/m-s-2.png'} alt="list" className="responsive-img" />
              </li>
              <li>
                <img src={process.env.PUBLIC_URL + '/assets/m-s-3.png'} alt="detail" className="responsive-img" />
              </li>
            </ul>
          </div>
        </section>
        <div className="parallax-container">
          <div className="parallax">
            <img src={process.env.PUBLIC_URL + '/assets/505-2000x1333.jpg'} alt="" className="responsive-img" />
            {/* <img src="https://picsum.photos/id/505/2000/1333" alt="" className="responsive-img" /> */}
          </div>
        </div>
        <section className="container section scrollspy" id="community">
          <hr />
          <h4 className="center"><a href="https://bbs.homeless.group" className="orange-text" target="_blank" rel="noopener noreferrer">Flarum - Community</a></h4>
          <div className="row">
            <div className="col s12 m10 offset-m1 l8 offset-l2">
              <div className="card-panel orange darken-3">
                <span className="white-text">
                  <h6><strong>Community/BBS/Discussion/QA</strong></h6>
                  <p>开源社区人气轻论坛-Homeless BBS:)</p>
                  <p>欢迎前来体验。:) <i className="fas fa-users"></i><a href="https://bbs.homeless.group" className="white-text" target="_blank" rel="noopener noreferrer"> Homeless BBS</a></p>
                </span>
              </div>
            </div>
          </div>
          <div className="slider">
            <ul className="slides">
              <li>
                <img src={process.env.PUBLIC_URL + '/assets/bbs-s-2.png'} alt="tag" className="responsive-img" />
              </li>
              <li>
                <img src={process.env.PUBLIC_URL + '/assets/bbs-s-3.png'} alt="detail" className="responsive-img" />
              </li>
            </ul>
          </div>
        </section>
        <div className="parallax-container">
          <div className="parallax">
            <img src={process.env.PUBLIC_URL + '/assets/588-2509x1673.jpg'} alt="" className="responsive-img" />
            {/* <img src="https://picsum.photos/id/588/2509/1673" alt="" className="responsive-img" /> */}
          </div>
        </div>
      </div>
    )
  }
}

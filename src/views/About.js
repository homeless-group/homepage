import React, { Component } from 'react'

export default class About extends Component {
  render () {
    return (
      <div>
        <div className="container">
          <h4 className="center">About</h4>
          <hr />
          <div className="row">
            <div className="col s12 m10 l8 offset-m1 offset-l2">
              <img src={process.env.PUBLIC_URL + '/assets/291-3264x2176.jpg'} alt="" className="responsive-img" />
              {/* <img src="https://picsum.photos/id/291/3264/2176" alt="" className="responsive-img"/> */}
            </div>
          </div>
          <ul>
            <li>
              <h5><strong>关于我们</strong></h5>
              <div className="card-panel cyan darken-3">
                <span className="white-text">
                  <h6><strong>开篇</strong></h6>
                  <p>首先最想说的是真心希望这个平台能帮助到大家。</p>
                  <p>就像歌里所唱，只要人人都献出一点爱，就变成美好的人间。想想也是人生短暂几十年，能做一些事情，帮助一些人，何乐而不为呢？</p>
                  <p>欢迎大家在社交平台 <i className="fab fa-mastodon"></i><a href="https://homeless.group" className="white-text" target="_blank" rel="noopener noreferrer"> Mastodon SNS</a>或 <i className="fas fa-users"></i><a href="https://bbs.homeless.group" className="white-text" target="_blank" rel="noopener noreferrer"> Homeless论坛</a>发言。</p>
                  <p>欢迎加入我们。 <i className="fas fa-sign-language"></i><i className="fas fa-sign-language"></i><i className="fas fa-sign-language"></i></p>
                </span>
              </div>
            </li>
            <li>
              <h5><strong>联系我们</strong></h5>
              <div className="card-panel brown lighten-1">
                <span className="white-text">
                  <p>通过Email, 或者在Mastodon都可以找到我。</p>
                  <p>欢迎大家提供建议。</p>
                  <div className="row">
                    <div className="col s4 m2 l1">
                      <a href="mailto:itabas016@gmail.com" class="btn-floating btn-large waves-effect waves-light red"><i className="fas fa-envelope"></i></a>
                    </div>
                    <div className="col s4 m2 l1">
                      <a href="https://homeless.group/@itabas016" class="btn-floating btn-large waves-effect waves-light blue" target="_blank" rel="noopener noreferrer"><i className="fab fa-mastodon"></i></a>
                    </div>
                  </div>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
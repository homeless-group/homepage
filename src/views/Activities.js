import React, { Component } from 'react'

export default class Activities extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activities: [
        {
          'id': 5,
          'date': '2019-12-08',
          'title': '新增精彩瞬间/照片墙功能'
        },
        {
          'id': 4,
          'date': '2019-12-01',
          'title': '网站正式上线啦~'
        },
        {
          'id': 3,
          'date': '2019-11-29',
          'title': 'Homeless轻论坛添加Google Analytics插件'
        },
        {
          'id': 2,
          'date': '2019-11-28',
          'title': '基于Flarum轻论坛开始试运行'
        },
        {
          'id': 1,
          'date': '2019-11-23',
          'title': 'Mastodon 社交平台成功部署Oracle Cloud，开始试运行'
        }
      ]
    }
  }
  render () {

    const activities = this.state.activities.map(activity => {
      return (
        <p>{activity.date} {activity.title}</p>
      )
    });

    return (
      <div>
        <div className="container">
          <h4 className="center">Activities</h4>
          <hr />
          <ul>
            <li>
              <h5><strong>精彩瞬间/图片墙</strong></h5>
              <div className="card-panel purple darken-2">
                <span className="white-text">
                  <h6>正在搜集中...</h6>
                  <p>欢迎大家在<i className="fas fa-users"></i><a href="https://bbs.homeless.group" className="white-text" target="_blank" rel="noopener noreferrer"> Homeless论坛</a>投稿</p>
                </span>
              </div>
            </li>
            <li>
              <h5><strong>动态</strong></h5>
              <div className="card-panel light-blue darken-2">
                <span className="white-text">
                  {activities}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
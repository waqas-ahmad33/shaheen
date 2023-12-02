import React from 'react'

const Teachinf = (props) => {
  return (
    <div class="ui card w-auto">
         <div className="card">
    <div className="image ">
      <img src="{}" alt='ok' />
    </div>
    <div className="content">
      <div className="header">{props.name}</div>
      <div className="meta">
        <a href='www.google.com'>Friends</a>
      </div>
      <div className="description">
        {props.qualification}
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        Joined in 2013
      </span>
      <span>
        <i className="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
    </div>
  )
}

export default Teachinf
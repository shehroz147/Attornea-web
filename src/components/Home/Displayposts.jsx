import React from 'react';

export default function Displayposts(props) {
  return (<div>
    {
        props.posts.map((post)=>(
            <div className="post-container">
            <dic className="post-row">
                <div className="user-profile">
                    <img src={post.profilePic}/>
                    <div>
                        <p>{post.name}</p>
                       <span>{post.date}</span>
                    </div>
                </div>
                <a href="#"><i className="fas fa-ellipsis-v"></i></a>
            </dic>
            <p className="post-text">{post.desc}</p>
            <img src={post.postimg} className="post-img"/>
            <div className="post-row">
                <div className="activity-icons">
                    <div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png"/>120</div>
                    <div><img src="https://i.postimg.cc/rmjMymWv/comments.png"/>45</div>
                    <div><img src="https://i.postimg.cc/T2bBchpG/share.png"/>20</div>
                </div>
                <hr/>
            </div>
        </div>
    

        ))
  }
  </div>
  )
}

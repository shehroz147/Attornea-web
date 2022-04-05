import React from 'react';
import Displayposts from './Displayposts';
import L1 from "../pictures/L1.jpg"
import L2 from "../pictures/L2.jpg"
import L3 from "../pictures/L3.jpg"
import L4 from "../pictures/L4.jpg"
import L5 from "../pictures/L5.jpg"
import L6 from "../pictures/L6.jpg"

export default function Post() {
const Posts = [{
    profilePic:"https://i.postimg.cc/cHg22LhR/profile-pic.png",
    name:"Naveed Ahmed",
    date:"June 24 2021, 13:40 pm",
    desc:"Subscribe @Vkive Tutorials Youtube Channel to watch more videos on website development and UI desings.#VkiveTutorials #YoutubeChannel",
    postimg:L1
},{
    profilePic:"https://i.postimg.cc/cHg22LhR/profile-pic.png",
    name:"Ahmed Ali",
    date:"June 24 2021, 13:40 pm",
    desc:"Subscribe @Vkive Tutorials Youtube Channel to watch more videos on website development and UI desings.#VkiveTutorials #YoutubeChannel",
    postimg:L2
},{
    profilePic:"https://i.postimg.cc/cHg22LhR/profile-pic.png",
    name:"Zawar Zafar",
    date:"June 24 2021, 13:40 pm",
    desc:"Subscribe @Vkive Tutorials Youtube Channel to watch more videos on website development and UI desings.#VkiveTutorials #YoutubeChannel",
    postimg:L3
},{
    profilePic:"https://i.postimg.cc/cHg22LhR/profile-pic.png",
    name:"Ali Danish",
    date:"June 24 2021, 13:40 pm",
    desc:"Subscribe @Vkive Tutorials Youtube Channel to watch more videos on website development and UI desings.#VkiveTutorials #YoutubeChannel",
    postimg:L4
},{
    profilePic:"https://i.postimg.cc/cHg22LhR/profile-pic.png",
    name:"Hamza Nizami",
    date:"June 24 2021, 13:40 pm",
    desc:"Subscribe @Vkive Tutorials Youtube Channel to watch more videos on website development and UI desings.#VkiveTutorials #YoutubeChannel",
    postimg:L5
},{
    profilePic:"https://i.postimg.cc/cHg22LhR/profile-pic.png",
    name:"Shoaib Ayub",
    date:"June 24 2021, 13:40 pm",
    desc:"Subscribe @Vkive Tutorials Youtube Channel to watch more videos on website development and UI desings.#VkiveTutorials #YoutubeChannel",
    postimg:L6
}]
  return <Displayposts posts = {Posts}/>;
}

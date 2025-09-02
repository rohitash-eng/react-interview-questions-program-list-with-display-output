import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const BasicExampleOfCss = () => {
  return (
    <div className='core-video-wrapper-main'>
      <div className='core-video-box'>
        <div className='core-video-img'>
          <iframe
            className='iframe-height'
            src="https://www.youtube.com/embed/LUexXsF14Z0?si=YxpUsATzy_LxasLn&listType=playlist&rel=0"
            title="Leo and Tig 🦁 Summer best 🐯 Funny Family Good Animated Cartoon for Kids"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* <img alt='dummy image' src='https://cdn.b12.io/client_media/CLkc8SwL/3cc24280-3f3b-11ef-9443-0242ac110002-jpg-hero_image.jpeg' /> */}
        </div>
        <div className='core-video-caption'>
          <h3 className='core-video-title'>rel=0 - will hide the related video end of video not middle Cartoon for Kids</h3>
          {/* <p className='core-video-desc'>Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, autem voluptatum veritatis odio voluptas, nesciunt quae dolorem adipisci omnis recusandae alias minima amet consequuntur modi accusantium accusamus unde! Consequatur, sequi!</p> */}
        </div>
      </div>
      <div className='core-video-box'>
        <div className='core-video-img'>
          <iframe
          className='iframe-height'
          src="https://www.youtube.com/embed/b2sjCyAsFbM?si=Zt6TSclvp-jugIMs&listType=playlist&rel=0"
          title="Peter Rabbit - Camping by the Lake | Cartoons for Kids"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

          {/* <img alt='dummy image' src='https://cdn.b12.io/client_media/CLkc8SwL/3ed0517a-3f3b-11ef-9443-0242ac110002-jpg-hero_image.jpeg' /> */}
        </div>
        <div className='core-video-caption'>
          <h3 className='core-video-title'>Peter Rabbit - Camping by the Lake | Cartoons for Kids</h3>
          {/* <p className='core-video-desc'>Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, autem voluptatum veritatis odio voluptas, nesciunt quae dolorem adipisci omnis recusandae alias minima amet consequuntur modi accusantium accusamus unde! Consequatur, sequi!</p> */}
        </div>
      </div>
      <div className='core-video-box'>
        <div className='core-video-img'>
        <iframe
          className='iframe-height'
          src="https://www.youtube.com/embed/wZq2tyLNPRU?si=YXi413G194HBTUoY&listType=playlist&rel=0"
          title="Best Short English Stories for Kids Collection | Infobells"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
          {/* <img alt='dummy image' src='https://cdn.b12.io/client_media/CLkc8SwL/3cc24280-3f3b-11ef-9443-0242ac110002-jpg-hero_image.jpeg' /> */}
        </div>
        <div className='core-video-caption'>
          <h3 className='core-video-title'>Best Short English Stories for Kids Collection | Infobells</h3>
          {/* <p className='core-video-desc'>Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, autem voluptatum veritatis odio voluptas, nesciunt quae dolorem adipisci omnis recusandae alias minima amet consequuntur modi accusantium accusamus unde! Consequatur, sequi!</p> */}
        </div>
      </div>
      <div className='core-video-box'>
        <div className='core-video-img'>
          <iframe
            className='iframe-height'
            src="https://www.youtube.com/embed/jWuEHJCYajE?si=F16AcfO7aBV7w8q-&listType=playlist&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* <img alt='dummy image' src='https://cdn.b12.io/client_media/CLkc8SwL/3ed0517a-3f3b-11ef-9443-0242ac110002-jpg-hero_image.jpeg' /> */}
        </div>
        <div className='core-video-caption'>
          <h3 className='core-video-title'>Sweaty | Jungle Beat | Cartoons for Kids | WildBrain Zoo</h3>
          {/* <p className='core-video-desc'>Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, autem voluptatum veritatis odio voluptas, nesciunt quae dolorem adipisci omnis recusandae alias minima amet consequuntur modi accusantium accusamus unde! Consequatur, sequi!</p> */}
        </div>
      </div>
      <div className='core-video-box'>
        <div className='core-video-img'>
          <iframe
          className="iframe-height"
          src="https://www.youtube.com/embed/ChqnN3cKzXQ?si=yvKaKAuRxzhOkX2F&listType=playlist&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
          {/* <img alt='dummy image' src='https://cdn.b12.io/client_media/CLkc8SwL/3cc24280-3f3b-11ef-9443-0242ac110002-jpg-hero_image.jpeg' /> */}
        </div>
        <div className='core-video-caption'>
          <h3 className='core-video-title'>ABC Phonics Chant for Children | Sounds and Actions from A to Z</h3>
          {/* <p className='core-video-desc'>Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, autem voluptatum veritatis odio voluptas, nesciunt quae dolorem adipisci omnis recusandae alias minima amet consequuntur modi accusantium accusamus unde! Consequatur, sequi!</p> */}
        </div>
      </div>
    </div>
  );
};

export default BasicExampleOfCss;

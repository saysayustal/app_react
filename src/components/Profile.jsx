import React from 'react';

const Profile = () => {
    return (
        <div className="content">
        <div className="content_header_img">
          <img src="http://www.haraldhau.com/wp-content/uploads/header-blue.jpg"></img>
        </div>
        
        <div className="main_content">
          <div className="block_content">
          <div className="account_logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"></img>
          </div>
          <div>main content</div>
        </div>
        </div>
        <div className="second_content">
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
        </div>
      </div>       
    );
}

export default Profile;
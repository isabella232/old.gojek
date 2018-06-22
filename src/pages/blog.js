import React, { Component } from 'react';

import OpenSourceprojects from '../components/OpenSource/index'
import CallToAction from '../components/Common/callToAction';
import Posts from '../components/Blog/posts';

class Blog extends Component {
    render() {
        return(
            <div className="first-section">
                <Posts 
                    count="9"
                />

                <CallToAction 
					theme="green"
					text="Build the tech that powers an entire country. Soon: Singapore, Thailand, Vietnam & Philippines."
					btnText="APPLY NOW"
					link="/careers/"
				/>
            </div>
        )
    }
}

export default Blog;
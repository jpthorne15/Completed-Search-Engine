import React, {Component} from 'react';

class TitlePresenter extends Component {
    render() {
        const title =this.props.title
        const episode_number=this.props.episode_number
        // Need to track where episodenumber came from compared to title 
        return (
                <li>
                    {title}
                    {episode_number}
                </li>
        );
    }
}
export default TitlePresenter;
import React, {Component} from 'react';

class PostCard extends Component {
    render() {
        return (
            <div>
                {/* this.childrenではない！！  */}
                {/*参照元の入れ子になったタグをそのまま表示する*/}
                {this.props.children}
            </div>
        )
    }
}

export default PostCard;
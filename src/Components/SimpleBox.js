import React, {Component} from 'react';

export default class SimpleBox extends Component {

    render() {
        //this.props.titleとやるより、一箇所でまとめて書くとわかりやすくて良い
        const {title, body, footer} = this.props;

        return (
            <div className="container">
                <div className="card-title">
                    {title}
                </div>
                <div className="card-body">
                    {body}
                </div>

                {/*propsにフッターが存在していれば、表示*/}
                {
                    footer && <div className="card-footer">
                        <p>Footerあるよー！</p>
                        {footer}
                    </div>
                }
            </div>
        )
    }
}

//こんな感じで呼び出す
// <SimpleBox title="title", body={this.renderBody()} />
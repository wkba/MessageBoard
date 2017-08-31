import React, {Component} from 'react';
import '../Styles/App.css';
import _ from 'lodash';
import {connect} from 'react-redux';
import {getPosts, savePost, deletePost} from "../Actions/PostActions";
import {Field, reduxForm, reset} from 'redux-form';
import PostCard from '../Components/PostCard';
import {getUser, logout} from "../Actions/UserActions";


class App extends Component {

    renderPosts() {
        //losashライブラリを使っている
        return _.map(this.props.posts, (post, key) => {
            return (
                <PostCard key={key}>
                    <h3>
                        {post.title}
                    </h3>
                    <p>{post.body}</p>
                    <button onClick={() => this.props.deletePost(key)}>Delete</button>
                </PostCard>

            )
        })
    }

    renderField(field) {
        return (
            <input type="text" {...field.input} placeholder={`Please enter a ${field.label}`}/>
        )
    }

    onSubmit(values) {
        //this.props.savePost(values);
        //送信後、フォームがクリアされるように改修
        this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
    }


    render() {
        const {handleSubmit} = this.props;

        return (
            <div>
                <div>
                    <button onClick={() => {this.props.logout()}}>
                        Sign out
                    </button>
                </div>
                <div>
                    {this.renderPosts()}
                </div>
                <div>
                    {/*フォームとバインドしていることに注意*/}
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            name="title"
                            component={this.renderField}
                            label='title'
                            class=""
                        />
                        <Field
                            name="body"
                            component={this.renderField}
                            label='field'
                            class=""
                        />
                        <button type="submit">Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

let form = reduxForm({
    form: 'NewPost'
})(App);

//savePostを追加し忘れていた。
//this.propsに関数を追加するときは、ここにも明記
//propsに変数セットしてる + これから使うだろう関数

form = connect((state,ownProps) => ({
    posts: state.posts,
    user: state.user,
}), {getPosts, savePost, deletePost, getUser, logout})(form);

export default form;

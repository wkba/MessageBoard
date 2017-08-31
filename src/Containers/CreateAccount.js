import React, {Component} from 'react';
import InputField from "../Components/InputField";
import FooterFormButton from "../Components/FooterFormButton";
import SimpleBox from "../Components/SimpleBox";
import {createAccount} from "../Actions/UserActions";
import {connect} from 'react-redux';
import ErrorAlert from "../Components/ErrorAlert";

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            conformPassword: '',
            error: '',
        }
    }

    isValid() {
        const {email, password, conformPassword} = this.state;
        if (email === '' || password === '' || conformPassword === '') {
            this.setState({
                error: '全て記入してください。'
            });
            return false;
        }
        if (password !== conformPassword) {
            this.setState({
                error: 'パスワードが一致しません。'
            });
            return false;
        }
        return true;
    }

    //1:16:31あたり参考
    //　データをバインドしてる
    submitAccount(event) {
        event.preventDefault();

        if (!this.isValid()) {
            return;
        }
        this.props.createAccount(this.state.email, this.state.password).then(() => {
            this.props.history.replace('/')
        }).catch(err => {
            this.setState({
                error: err.message,
            })
        });
    }

    renderBody() {
        return (
            <div>
                <form onSubmit={(event) => this.submitAccount(event)}>
                    <InputField
                        id="email"
                        type="text"
                        label="Email"
                        inputAction={
                            (event) => this.setState({
                                email: event.target.value
                            })
                        }
                    />
                    <InputField
                        id="password"
                        type="password"
                        label="Password"
                        inputAction={
                            (event) => this.setState({
                                password: event.target.value
                            })
                        }
                    />

                    <InputField
                        id="conform-password"
                        type="password"
                        label="Conform Password"
                        inputAction={
                            (event) => this.setState({
                                conformPassword: event.target.value
                            })
                        }
                    />

                    {
                        this.state.error && <ErrorAlert>{this.state.error}</ErrorAlert>
                    }

                    <FooterFormButton submitLabel="Crate Account"
                                      otherLabel="Go back"
                                      goToLink="/Login"
                                      {...this.props}
                    />
                </form>
            </div>
        );
    }

    render() {
        return (
            <SimpleBox body={this.renderBody()} title='Create Account'/>
        );
    }
}

export default connect(null, {createAccount})(CreateAccount);
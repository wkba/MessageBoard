import React, {Component} from 'react';
import SimpleBox from "../Components/SimpleBox";
import InputField from '../Components/InputField';
import FooterFormButton from "../Components/FooterFormButton";
import {connect} from 'react-redux';
import {login, getUser} from '../Actions/UserActions';
import ErrorAlert from "../Components/ErrorAlert";
class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
        }
    }

    componentWillMount() {
        if (this.props.user !== null) {
            this.props.history.push('/');
        }
    }

    submitLogin(event) {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password).catch(err => {
            this.setState({
                error: err
            });
        });
    }

    submitLogin(event) {
        //なんだこれ
        event.preventDefault();
        this.props.login(this.state.email, this.state.password).catch(err => {
            console.log(err);
            this.setState({
                error:err,
            });
        })
    }

    renderBody() {
        const errStyle = {
            borderColor: 'red'
        };
        return (
            <div>
                <form onSubmit={event => this.submitLogin(event)}>
                    <InputField
                        id="email"
                        type="text"
                        label="Email"
                        inputAction={
                            (event) => this.setState({
                                email: event.target.value
                            })
                        }
                        style={this.state.error ? errStyle :null}
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
                        style={this.state.error ? errStyle :null}
                    />
                    {this.state.error && <ErrorAlert>メールアドレスかパスワードが間違えています。</ErrorAlert>}

                    {/*this.propsで自身の持っているpropsを引き継ぎ*/}
                    {/*今回の場合、loginClassが持っているhistory等を引き継いだ*/}
                    {/*...this.stateでstateを引き継ぐこともできる*/}


                    <FooterFormButton submitLabel="Sign in"
                                      otherLabel="Create Account"
                                      goToLink="/CreateAccount"
                                      {...this.props}
                    />
                </form>
            </div>

        )
    }

    render() {
        console.log('in Login.js', this.state);
        return (
            // カッコ大事。ないと表示されない
            <SimpleBox title="Sign in" body={this.renderBody()}/>
        )
    }
}

function mapStateToProps(state) {
    return {user: state.user};
}

export default connect(mapStateToProps, {login, getUser})(Login);
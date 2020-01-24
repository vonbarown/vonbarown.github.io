import React, { Component } from 'react'


import './contact.css'
class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleInput = e => {
        const value = e.target.value;
        this.setState({
            ...this.prevState,
            [e.target.name]: value
        });
    };


    render() {
        console.log(this.state);

        return (
            <div className='contactPage'>
                <div className='contactPage-formField'>
                    <form className='contact' onSubmit={e => e.preventDefault()} required>
                        <div className='inputField'>
                            <label htmlFor="name">Name</label> <br />
                            <input name='name' type="text" placeholder=' Name..' onChange={this.handleInput} value={this.state.name} required className='inputBar' />
                        </div>
                        <div className='inputField'>
                            <label htmlFor="email">Email</label> <br />
                            <input type="email" name='email' placeholder='  Email..' onChange={this.handleInput} value={this.state.email} required className='inputBar' />
                        </div>
                        <div className='inputField'>
                            <label htmlFor="message">Message</label> <br />
                            <textarea name="message" id="message" cols="30" rows="10"
                                placeholder='Message....'
                                onChange={this.handleInput} value={this.state.message}
                                required ></textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact
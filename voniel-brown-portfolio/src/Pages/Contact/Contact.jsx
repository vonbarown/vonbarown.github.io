import React, { Component } from 'react'
import axios from 'axios'

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

    handleInput = e => this.setState({ [e.target.name]: e.target.value });


    handleSubmit = async e => {
        e.preventDefault()
        const { name, email, message } = this.state

        try {
            axios.post('http://localhost:8080/users/send',
                {
                    name,
                    email,
                    message
                }
            )

            // console.log(mail);

        } catch (error) {
            console.log(error);

        }
    }

    render() {
        console.log(this.state);

        return (
            <div className='contactPage'>
                <div className='contactPage-formField'>
                    <form className='contact' onSubmit={this.handleSubmit} required>
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
                        <button className='submit'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact
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
                <form className='contact'>
                    <div className='inputField'>
                        <label htmlFor="name">Name</label> <br />
                        <input name='name' type="text" placeholder=' Name..' onChange={this.handleInput} value={this.state.name} required className='inputBar' />
                    </div>
                    <div className='inputField'>
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" placeholder='  Email..' onChange={this.handleInput} value={this.state.email} required className='inputBar' />
                    </div>
                    <div className='inputField'>
                        <label htmlFor="name">Name</label> <br />
                        <textarea name="message" id="" cols="30" rows="10" onChange={this.handleInput} value={this.state.message} required className='inputBar'></textarea>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact
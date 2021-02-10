import React, {Component} from 'react';
import styles from './contactForm.module.css';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        isAddDisable: true
    };
  
    change = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value,
        }, this.setIsAddEnable);
    };
    
    setIsAddEnable = () => {
        const { name, number } = this.state;
        this.setState({
          isAddDisable: name === '' || number === ''
        });
    };

    inputSubmit = (e) => {
        e.preventDefault();
        // console.log('Submitted!');
        const { name, number } = this.state;
        const { arrayItems } = this.props.state.contacts;
        if (arrayItems && arrayItems.find(contact => name === contact.name)) {
            alert('Такой пользователь уже есть в Вашей телефонной книге!!!');
        } else {
            this.props.onSubmit(name, number);
        }
        this.setState({
            name: '',
            number: '',
        });
    };
     
    render() {
        const { name, number, isAddDisable } = this.state;        
        return (            
            <form onSubmit={this.inputSubmit} className={styles.form}> 
                <div className={styles.formBlock}>
                <label className={styles.label}>
                    Name
                    <input  className={styles.inpt}
                            type="text"
                            name="name"
                            value={name}     
                            onChange={this.change}                              
                    />
                </label>
                <label className={styles.label}>
                    Number
                    <input  className={styles.inpt}
                            type="text"
                            name="number"
                            value={number}
                            onChange={this.change}
                    />
                </label>
                </div>
                <button className={styles.btn} type="submit" onClick={this.change} disabled = {isAddDisable}>Add contact</button>
            </form>
        );
    }
}
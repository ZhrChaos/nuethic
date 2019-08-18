import React from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import ProductCard from './Components/ProductCard';
import one from './Images/one.jpg';
import two from './Images/two.jpg';
import three from './Images/three.jpg';
import four from './Images/four.jpg';
import five from './Images/five.jpg';
import six from './Images/six.jpg';
import seven from './Images/seven.jpg';

const API_PATH = 'http://localhost:1992/nuethic/api/index.php';

let array = [
  {
    image: one,
    info: "CARBON BLACK - RAINBOW"
  },

  {
    image: two,
    info: "BLACK - CHROME GREY"
  },
  {
    image: three,
    info: "BLACK - BLACK"
  },
  {
    image: four,
    info: "BLACK - SLATE"
  },
  {
    image: five,
    info: "BLACK - FADE"
  },
  {
    image: six,
    info: "BLACK - BLACK"
  },
  {
    image: seven,
    info: "BLACK - BLACK"
  }
]


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sunglasses: [],
      num1: 0,
      num2: 4,
      name: "",
      email: "",
      phone: "",
      message: "",
      mailSent: false,
      error: null
    }
  }

  componentDidMount() {
    this.setState({ sunglasses: array.slice(this.state.num1, this.state.num2) })
  }


  next = () => {
    this.setState({ num1: this.state.num1 + 1 }, () => {
      this.setState({ sunglasses: array.slice(this.state.num1, this.state.num2) });

    });
    this.setState({ num2: this.state.num2 + 1 });
  }

  back = () => {
    this.setState({ num1: this.state.num1 - 1 }, () => {
      this.setState({ sunglasses: array.slice(this.state.num1, this.state.num2) });

    });
    this.setState({ num2: this.state.num2 - 1 });
  }


  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  };


  render() {
    return (
      <div className='App'>
        <div className="sales"> SALES: Up to 50% OFF on selected items</div>
        <div className="header">

          <div className='headerText'>
            <h1>SALES</h1>
            <h2>Up to 50% OFF</h2>
          </div>
        </div>
        <div className='between'>
          <h1> COLLECTIONS</h1>
          <h1> SEE COLLECTION</h1>
        </div>
        <div className="wrap">
          <button onClick={(e) => this.back(e)} > </button>
          {this.state.sunglasses.map((value, index) => {
            return <ProductCard key={index} sunglasses={value} />
          })}
          <button onClick={(e) => this.next(e)} />
        </div>
        <div className='contactWrap'>

          <div className='contact1'>
            <h1>Contact Us</h1>
            <p>Send us a message to let us know how we can help. We typically respond withing 24 hours.</p>
            <p>You can also give us a call <a href="1-801-904-6087">1-801-904-6087</a></p>
            <p>Or send us an email at <a href="contact@nuethic.com">contact@nuethic.com</a></p>
          </div>

          <div className="contact2">
            <form className="contact-form" action="./contactform.php" method="post">
              < h2 > Name</h2>
              <input name="name" placeholder='Name' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input>
              <h2>Email</h2>
              <input name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input>
              <h2>Phone</h2>
              <input name="number" placeholder="Phone" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })}></input>
              <h2>What can we do for you?</h2>
              <textarea name="message" className="message" placeholder="Tell us more..." value={this.state.more} onChange={(e) => this.setState({ more: e.target.value })}></textarea>
              <button type="submit" name="submit" onClick={(e) => this.handleFormSubmit(e)} >Submit</button>

            </form>

          </div>
        </div>
      </div >
    );
  }
}

export default App;

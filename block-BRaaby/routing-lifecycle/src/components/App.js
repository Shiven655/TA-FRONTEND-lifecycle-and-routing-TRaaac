import React from 'react';
import Loader from './Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faCalendar,
  faMap,
  faPhone,
  faLock,
} from '@fortawesome/fontawesome-free-solid';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    if (!this.state.data) {
      return <Loader />;
    }
    console.log(this.state.data);
    return (
      <>
        <div className="container">
          <div className="box">
            <img
              src="https://randomuser.me/api/portraits/men/83.jpg"
              alt="profile"
            />
            <p>My name is</p>
            <h3>Glen</h3>
            <div className="flex">
              <FontAwesomeIcon className="icon" icon={faUser} />
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <FontAwesomeIcon className="icon" icon={faCalendar} />
              <FontAwesomeIcon className="icon" icon={faMap} />
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <FontAwesomeIcon className="icon" icon={faLock} />
            </div>
            <button>{!this.state.data ? 'Random User' : 'Loading...'}</button>
          </div>
        </div>
      </>
    );
  }
}
export default App;

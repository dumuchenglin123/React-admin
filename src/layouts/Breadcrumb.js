import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Breadcrumb.scss';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {}

  render() {
    const { breadcrumbs } = this.props;
    return (
      <ul className={styles.breadcrumbs}>
        {breadcrumbs.map((item, i) => (
          <li key={i}>
            {i !== 0 && <i className="fa fa-angle-right" />}
            {item.length === 1 && <span>{item[0]}</span>}
            {item.length === 2 && <Link to={item[1]}>{item[0]}</Link>}
          </li>
        ))}
      </ul>
    );
  }
}

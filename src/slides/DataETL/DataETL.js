import React, { Component } from 'react';
import classNames from 'classnames';
import Reveal from 'reveal.js';
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/moon.css';
// import 'reveal.js/css/theme/night.css';
import './DataETL.css';


class DataETL extends Component {
  componentDidMount() {
    Reveal.initialize();
  }
  render() {
    return (
      <div className='reveal'>
        <div className='slides'>
          {/* Cover Slide */}
          <section>
            <h1>Semi-Month Topic</h1>
            <h3>BASIC ETL PROCESSING</h3>
            <p>
              <small>Created by Emily Li</small>
            </p>
            <h9>02/29/2018</h9>
          </section>
          {/* Questions Slide */}
          <section>
  					<h2>What is ETL?</h2>
  					<p className='fragment'>
  						<span className={classNames('fragment', 'fade-up')}>EXTRACT ... TRANSFORM ... LOAD ... DATA</span>
  					</p>
  				</section>
          <section>
            <h2>WHY ETL?</h2>
            <p className='fragment'>
              <span className={classNames('fragment', 'fade-up')}>ETL provides a method of moving the data from various source into a data warehouse.</span>
            </p>
          </section>
          {/* How to do ETL */}
          <section>
              <h2 style={{textAlign: 'left'}}>How to do ETL?</h2>
              <img width="700" height="300" data-src="ETLProcess.PNG" />
          </section>
          {/* Thanks */}
          <section>
  					<h2>THANK YOU</h2>
  					<h5>Question?</h5>
  				</section>
        </div>
      </div>
    );
  }
}

export default DataETL;

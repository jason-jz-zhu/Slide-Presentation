import React, { Component } from 'react';
import classNames from 'classnames';
import Reveal from 'reveal.js';
import 'reveal.js/css/reveal.css';
// import 'reveal.js/css/theme/moon.css';
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
            <h9>03/14/2018</h9>
          </section>
          {/* Questions Slide */}
          <section>
  					<h2>What is ETL?</h2>
  					<p className='fragment'>
  						  <span className={classNames('fade-up')}> Data are moved from source to target database. </span>
  					</p>
            <p className='fragment'>
              <span className={classNames('fade-up')}>EXTRACT ... TRANSFORM ... LOAD ... DATA</span>
            </p>
  				</section>
          <section>
            <h2>WHY ETL?</h2>
            <p className='fragment'>
              <span className={classNames( 'fade-up')}> Why do we need bikes? cars? planes? or anything that transports something “from” and “to”. </span>
            </p>
            <p className='fragment'>
  						<span className={classNames('fade-up')}>In the software world, ETL is used to “transport” data from source to its destination. Just imagine how the world would be without any transport? Same is the case with ETL.</span>
  					</p>
          </section>
          {/* How to do ETL */}
          <section>
            <section>
              <h2 style={{textAlign: 'left'}}>How to do ETL?</h2>
              <img width="700" height="300" data-src="ETL workflow.jpg" />
            </section>
            <section style={{textAlign: 'left'}}>
              <h3>EXTRACT DATA FROM SOURCE</h3>
              <ol>
                <li>API (REST APIs, SOAP APIs)</li>
                <li>Excel files</li>
                <li>CSV files</li>
                <li>Database(SQL Server, Oracle, MySQL, MongoDB)</li>
              </ol>
              <img width="700" height="300" data-src="Data extract.PNG" />
            </section>
            <section style={{textAlign: 'left'}}>
              <h3>TRANSFORM DATA</h3>
              <ol>
                <li> Data transformation is where the data is transformed for storing in the proper format or structure for the purposes of querying and analysis </li>
                <li> Selecting only certain columns to load</li>
                <li> Sorting or ordering the data </li>
                <li> Aggregating </li>
              </ol>
              <img width="600" height="150" data-src="Data transform.PNG" />
            </section>
            <section style={{textAlign: 'left'}}>
              <h3>LOAD DATA</h3>
              <ol>
                <li> Data loading is where the data is loaded into the final target database </li>
                <li> This phase interacts with a database</li>
              </ol>
              <img width="600" height="150" data-src="Data loading.PNG" />
            </section>
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

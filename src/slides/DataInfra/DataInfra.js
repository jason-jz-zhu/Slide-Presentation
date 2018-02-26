import React, { Component } from 'react';
import classNames from 'classnames'
import Reveal from 'reveal.js';
// import reveal
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/moon.css';
import './DataInfra.css';

class DataInfra extends Component {
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
            <h3>Data Infrastructure</h3>
            <p>
              <small>Created by <a href="https://jiazhenzhu.netlify.com/">Jiazhen Zhu</a></small>
            </p>
          </section>
          {/* Questions Slide */}
          <section>
  					<h2>What is it?</h2>
  					<p className='fragment'>
  						Maybe you have heard or touch with some terms like&nbsp;
  						<span className={classNames('fragment', 'fade-up')}>Data Warehouse, Data Engineering, Database, ETL</span>
  						<span className={classNames('fragment', 'fade-up')}>, or even Data Science.</span>
  					</p>
  					<p className={classNames('fragment', 'fade-up')}>
  						Those are part of Data Infrastructure.
  					</p>
  					<p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'red'}}>Let us see an overview.</span>
  					</p>
  				</section>
          {/* Overview Diagram Slide */}
          <section>
            <section>
              <h2 style={{textAlign: 'left'}}>DATA INFRA</h2>
              <img width="800" height="500" data-src="Data%20Infra.PNG" />
            </section>
            <section style={{textAlign: 'left'}}>
              <h2>Staging</h2>
              <ol>
                <li>Loading original raw data</li>
                <li>Document previous data source</li>
                <li>Row counts</li>
                <li>Quality checks (% null values in the important columns)</li>
              </ol>
            </section>
            <section style={{textAlign: 'left'}}>
              <h2>Cleaning</h2>
              <ol>
                <li>Missing values</li>
                <li>Null/Blank values</li>
                <li>Meaningful infomation (date, address etc)</li>
                <li>Data types</li>
                <li>Error Logging</li>
                <li>Notifications</li>
                <li>Roll back</li>
              </ol>
            </section>
            <section style={{textAlign: 'left'}}>
              <div>
                <h2>Conforming</h2>
                <ol>
                  <li>Quality checks after cleaning</li>
                  <li>Notifications</li>
                  <li>Roll back</li>
                </ol>
              </div>
            </section>
            <section style={{textAlign: 'left'}}>
              <h2>Delivered</h2>
              <ol>
                <li>Data Warehouse</li>
                <li>Star schema</li>
              </ol>
            </section>
          </section>
          {/* Philosophy */}
          <section>
  					<h2>The philosophy need</h2>
  					<ul>
  						<li className={classNames('fragment', 'fade-up')}>Open Source: MySQL, Airflow etc</li>
  						<li className={classNames('fragment', 'fade-up')}>Standard Components</li>
  						<li className={classNames('fragment', 'fade-up')}>Scale</li>
  						<li className={classNames('fragment', 'fade-up')}>Understand Logic</li>
  					</ul>
  				</section>
          {/* Interested Topic */}
          <section>
            <h2>Interested Topic</h2>
            <ul>
              <li className={classNames('fragment', 'fade-up')}>Data Engineering</li>
              <li className={classNames('fragment', 'fade-up')}>Data Warehouse</li>
              <li className={classNames('fragment', 'fade-up')}>Schedule Workflow</li>
              <li className={classNames('fragment', 'fade-up')}>Data Quality</li>
              <li className={classNames('fragment', 'fade-up')}>HDFS</li>
              <li className={classNames('fragment', 'fade-up')}>Data Viz for Data Infra</li>
              <li className={classNames('fragment', 'fade-up')}>Data Pipeline</li>
              <li className={classNames('fragment', 'fade-up')}>Automation</li>
              <li className={classNames('fragment', 'fade-up')}>Document</li>
            </ul>
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

export default DataInfra;

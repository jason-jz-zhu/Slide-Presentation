import React, { Component } from 'react';
import classNames from 'classnames';
import Reveal from 'reveal.js';
import 'reveal.js/css/reveal.css';
// import 'reveal.js/css/theme/moon.css';
// import 'reveal.js/css/theme/night.css';
import './DataPipeline.css';


class DataPipeline extends Component {
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
            <h3>Data Pipeline</h3>
            <p>
              <small>Created by <a href="https://jiazhenzhu.netlify.com/">Jiazhen Zhu</a></small>
            </p>
            <h9>05/09/2018</h9>
          </section>
          {/* Questions Slide */}
          <section>
  					<h2>What is it?</h2>
  					<p className='fragment'>
  						Data Pipeline is an embedded data processing&nbsp;
  						<span className={classNames('fragment', 'fade-up')}>like the pipeline we have in the real world.</span>
  					</p>
  					<p className={classNames('fragment', 'fade-up')}>
  						Currently many companies do not use BI tools and begin to build their own data pipeline during ETL process.
  					</p>
  					<p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'red'}}>Let us see more.</span>
  					</p>
  				</section>
          {/* Overview Diagram Slide */}
          <section>
            <section>
              <h2 style={{textAlign: 'left'}}>Overview</h2>
              <img width="800" height="500" data-src="datapipelinetriangle.PNG" />
            </section>
            <section style={{textAlign: 'left'}}>
              <h2>ETL Frameworks</h2>
              <ol>
                <img width="800" height="500" data-src="ETLFramework.PNG" />
              </ol>
            </section>
            <section style={{textAlign: 'left'}}>
              <h2>Programming Paradigm</h2>
              <ol>
                <li>Not OOD</li>
                <li>Functional Programing</li>
              </ol>
            </section>
            <section style={{textAlign: 'left'}}>
              <div>
                <h2>Benefits</h2>
                <ol>
                  <li>More clean</li>
                  <li>Easy debug</li>
                  <li>Integrate with different database</li>
                  <li>Tracking of failures, success, retries</li>
                  <li>List dependencies and task execution order</li>
                </ol>
              </div>
            </section>
            <section style={{textAlign: 'left'}}>
              <h2>Packages</h2>
              <ol>
                <li>Celery</li>
                <li>RabbitMQ</li>
                <li>Airflow/Luigi</li>
              </ol>
            </section>
          </section>
          {/* Philosophy */}
          <section>
  					<h2>DAG</h2>
  					<ul>
  						<li className={classNames('fragment', 'fade-up')}>Directed Acyclic Graph</li>
  						<li className={classNames('fragment', 'fade-up')}>A finite directed graph with no directed cycles</li>
  						<li className={classNames('fragment', 'fade-up')}>data enters a processing element through its incoming edges and leaves the element through its outgoing edges.</li>
  						<li className={classNames('fragment', 'fade-up')}>Topological Ordering</li>
  					</ul>
  				</section>
          {/* Interested Topic */}
          <section>
            <h2>Interested Topic</h2>
            <ul>
              <li className={classNames('fragment', 'fade-up')}>Data Engineering</li>
              <li className={classNames('fragment', 'fade-up')}>Schedule Workflow</li>
              <li className={classNames('fragment', 'fade-up')}>Data Quality</li>
              <li className={classNames('fragment', 'fade-up')}>HDFS</li>
              <li className={classNames('fragment', 'fade-up')}>Data Viz for Data Infra</li>
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

export default DataPipeline;

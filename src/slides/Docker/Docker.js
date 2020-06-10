import React, { Component } from 'react';
import classNames from 'classnames';
import Reveal from 'reveal.js';
// import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/night.css';
// import 'reveal.js/css/theme/moon.css';



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
            <h1>Knowledge Sharing Session</h1>
            <h3>Basic Docker</h3>
            <p>
              <small>Created by <a href="https://jiazhenzhu.netlify.com/">Jiazhen Zhu</a></small>
            </p>
            <h9>06/11/2020</h9>
          </section>
          {/* Questions Slide */}
          <section>
  					<h1>Agenda</h1>
                      <ul>
                          <li>What / Why is Docker?</li>
                          <li>Architecture</li>
                          <li>Demo</li>
                      </ul>
  		  </section>
          <section>
                <section>
                      <h2>Docker can:</h2>
  					<p className={classNames('fragment', 'fade-up')}>
            --- deploy the applications in a sandbox (called containers)
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      --- package an application with all of its dependencies into a standardized unit for software development
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      --- containers do not have high overhead and hence enable more efficient usage of the underlying system and resources.
  					</p>
  					<p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'red'}}>Let us see more.</span>
  					</p>
                      </section>
                <section  data-background="https://myminimeandmesite.files.wordpress.com/2018/05/img_3439.gif">
                <h2>Why Docker rather than others like VM?</h2>
                </section>
                <section>
                <h2>This is becuase Docker</h2>
                    <p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'green'}}>move up the abstraction of resources from the hardware level to the os level</span>
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'magenta'}}>which can give us application portability</span>
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'blue'}}>infrastructure sepration</span>
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'red'}}>self-containd microservices</span>
  					</p>
                </section>
  		  </section>
          {/* Overview Diagram Slide */}
          <section>
            <section>
              <h2 style={{textAlign: 'left'}}>Architecture</h2>
              <img className={classNames('fragment', 'fade-up')} width="600" height="500" data-src="dockervsvm.png" align="right" background-color="white"/>
            </section>

            <section>
              <h2 style={{textAlign: 'centre'}}>Architecture</h2>
              <img width="600" height="500" data-src="dockerarchitecture.svg" align="centre"/>
            </section>

          </section>
          {/* Philosophy */}
          <section>
                 <section>
                  <h2>Demo</h2>
  		</section>
          


  		</section>
          {/* Interested Topic */}
          <section>
            <h2>Interested Topic</h2>
            <ul>
              <li className={classNames('fragment', 'fade-up')}>Functional Programing (Data Pipeline)</li>
              <li className={classNames('fragment', 'fade-up')}>D3 (Data Viz)</li>
              <li className={classNames('fragment', 'fade-up')}>Airflow</li>
              <li className={classNames('fragment', 'fade-up')}>Machine Learning</li>
              <li className={classNames('fragment', 'fade-up')}>Docker</li>
              <li className={classNames('fragment', 'fade-up')}>Tuning Index in SQL</li>
              <li className={classNames('fragment', 'fade-up')}>Batch or Streaming Processing</li>
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

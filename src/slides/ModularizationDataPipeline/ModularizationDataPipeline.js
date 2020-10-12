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
            <h1>Knowledge Sharing</h1>
            <h3>Modularization using Python and Docker for Data Pipeline</h3>
            <p>
              <small>Created by <a href="https://jiazhenzhu.netlify.com/">Jiazhen Zhu</a></small>
            </p>
            <h9>10/14/2020</h9>
          </section>
          {/* Questions Slide */}
          <section>
  					<h1>Agenda</h1>
                      <ul>
                          <li>Challenges</li>
                          <li>Solution</li>
                          <li>Demo</li>
                      </ul>
  		  </section>
          <section>
                <section>
                      <h2>Challenges:</h2>
  					<p className={classNames('fragment', 'fade-up')} style={{color: 'green'}}>
            1. How can we split monolithic pipeline into a couple small MicroService pipelines?
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      2. How can we reuse our code or MicroService across the team and organization?
  					</p>
                      <p className={classNames('fragment', 'fade-up')} style={{color: 'green'}}>
                      3. How can we optimize the pipeline separately?
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      4. How can we test our pipeline more effectively?
  					</p>
  					<p className={classNames('fragment', 'fade-up')} style={{color: 'green'}}>
                      5. How can we deploy our pipeline painless?
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'red'}}>Let us see more.</span>
  					</p>
                      </section>
  		  </section>
          {/* Overview Diagram Slide */}
          <section>
            <section>
              <h2 style={{textAlign: 'centre'}}>Solution</h2>
              <img className={classNames('fragment', 'fade-up')} width="800" height="500" data-src="ModularizationSolution.png" background-color="white"/>
            </section>

            <section>
                      <h2>Functional programming:</h2>
  					<p className={classNames('fragment', 'fade-up')} >
                      Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.
  					</p>
            </section>

            <section>
                      <h2>Functional programming Benefits:</h2>
                      <p className={classNames('fragment', 'fade-up')}>
                      1. For functional programming, because we don't use shared state, just have input parameters and output return, it is easier to do the unit testing.
  					</p>
                      <p className={classNames('fragment', 'fade-up')} >
                      2. It becomes easier to split one monolithic program into a couple small functions.
  					</p>
            </section>

            <section>
                      <h2>Directed Acyclic Graph (DAG):</h2>
  					<p className={classNames('fragment', 'fade-up')} >
                      A DAG displays assumptions about the relationship between variables (often called nodes in the context of graphs). The assumptions we make take the form of lines (or edges) going from one node to another.
  					</p>
            </section>

            <section>
                      <h2>DAG Benefits:</h2>
                      <p className={classNames('fragment', 'fade-up')}>
                      1. We will have clear data lineage based on the DAG.
  					</p>
                      <p className={classNames('fragment', 'fade-up')} >
                      2. It becomes easier to split one monolithic data pipeline into a couple small data pipelines.
  					</p>
            </section>
            <section>
                      <h2>Python Project Package:</h2>
            </section>

            <section>
                      <h2>Python Project Package Benefits:</h2>
                      <p className={classNames('fragment', 'fade-up')}>
                      1. It is easier to share the reusable module to the whole community.
  					</p>
                      <p className={classNames('fragment', 'fade-up')} >
                      2. We have one entry point among our module
  					</p>
            </section>

            <section>
                      <h2>Docker:</h2>
  					<p className={classNames('fragment', 'fade-up')} >
                      Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
  					</p>
            </section>

            <section>
                      <h2>Docker Benefits:</h2>
                      <p className={classNames('fragment', 'fade-up')}>
                      1. We can optimize every data pipeline in one separated environment.
  					</p>
                      <p className={classNames('fragment', 'fade-up')} >
                      2. It is easier to deploy and monitor each data pipeline painless.
  					</p>
            </section>

            <section>
                      <h2>Yacron:</h2>
  					<p className={classNames('fragment', 'fade-up')} >
                      A modern Cron replacement that is Docker-friendly.
  					</p>
            </section>

            <section>
                      <h2>Yacron Benefits:</h2>
                      <p className={classNames('fragment', 'fade-up')}>
                      1. It is easier to schedule batch process inside of docker.
  					</p>
            </section>
          </section>
          {/* Philosophy */}
          <section>
                 <section>
                  <h2>Demo</h2>
                  <p className={classNames('fragment', 'fade-up')}>
                  In this example, I will present one ETL process from reading csv, cleaning data and generate the metric.
  				</p>
  		</section>
  		</section>


          <section>
                 <section>
                  <h2>Reference</h2>
                  <p>
                  https://medium.com/walmartglobaltech/modularization-using-python-and-docker-for-data-pipeline-1193bba7c207
  				</p>
                  <p className={classNames('fragment', 'fade-up')}>
                  https://github.com/jason-jz-zhu/Modularization_Python_Docker_Demo
  				</p>
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

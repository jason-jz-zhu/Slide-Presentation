import React, { Component } from 'react';
import classNames from 'classnames';
import Reveal from 'reveal.js';
import 'reveal.js/css/reveal.css';
// import 'reveal.js/css/theme/moon.css';
// import 'reveal.js/css/theme/night.css';
// import './DataPipeline.css';


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
            <h3>Basic Cassandra</h3>
            <p>
              <small>Created by <a href="https://jiazhenzhu.netlify.com/">Jiazhen Zhu</a></small>
            </p>
            <h9>11/27/2019</h9>
          </section>
          {/* Questions Slide */}
          <section>
  					<h1>Agenda</h1>
                      <ul>
                          <li>What is Cassandra?</li>
                          <li>Architecture</li>
                          <li>When Cassandra? / When not Cassandra?</li>
                          <li>Cassandra Data Modeling Process</li>
                      </ul>
  		  </section>
          <section>
                <section>
                      <h2>Apache Cassandra is a:</h2>
  					<p className={classNames('fragment', 'fade-up')}>
                      NoSQL
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      Peer to Peer Design
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      Flexible Data Model
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      High Performance
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      Distributive Database
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      Built for High Availability 
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      and Linear Scalability
  					</p>
  					<p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'red'}}>Let us see more.</span>
  					</p>
                      </section>
                <section  data-background="http://i.giphy.com/90F8aUepslB84.gif">
                <h2>Why Cassandra has so many description?</h2>
                </section>
                <section>
                <h2>This is becuase Cassandra has famous parent</h2>
                    <p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'green'}}>Google: Big Tables (2006)</span>
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'yellow'}}>Amazon: DynamoDB (2007)</span>
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'blue'}}>Facebook: Cassandra (2008)</span>
  					</p>
                </section>
  		  </section>
          {/* Overview Diagram Slide */}
          <section>
            <section>
              <h2 style={{textAlign: 'left'}}>Architecture - CAP</h2>
              <img className={classNames('fragment', 'fade-up')} width="266.5" height="227" data-src="cassandracap.PNG" align="right"/>
              <p className={classNames('fragment', 'fade-up')} style={{textAlign: 'left'}}>
              Consistency: latest data or an error
              {/* Every read from the database gets the latest (and correct) piece of data or an error */}

              </p>
              <p className={classNames('fragment', 'fade-up')} style={{textAlign: 'left'}}>
              Availability: response without delay
              {/* Every request is received, and a response is given – without a guarantee that the data is the latest update */}

              </p>
              <p className={classNames('fragment', 'fade-up')} style={{textAlign: 'left'}}>
              Partition Tolerance: working even losing network connectivity between nodes
              {/* The system continues to work regardless of losing network connectivity between nodes. */}
              </p>
            </section>

            <section>
              <h2 style={{textAlign: 'left'}}>Architecture - Ring Circle</h2>
              <img width="299" height="290" data-src="ringcircle1.PNG" align="left"/>
                <ol>
                    <li className={classNames('fragment', 'fade-up')}>Three node in one cluster</li>
                    <li className={classNames('fragment', 'fade-up')}>Peer to Peer design </li>
                        <ul className={classNames('fragment', 'fade-up')}>
                            <li>not master slave</li>
                            <li>no leader election</li>
                            <li>read & write</li>
                        </ul>
                    <li className={classNames('fragment', 'fade-up')}>Hash Ring </li>
                        <ul className={classNames('fragment', 'fade-up')}>
                            <li>Data is Partitioned</li>
                            <li>Data is Replicated</li>
                        </ul>
                </ol>
            </section>



            <section>
              <h2 style={{textAlign: 'left'}}>Architecture - Adding Node</h2>
              <img width="299" height="283" data-src="ringcircle2.PNG" align="left"/>
                <ol>
                    <li className={classNames('fragment', 'fade-up')}>Linear scale performance </li>
                    <br/>
                    <li className={classNames('fragment', 'fade-up')}>Add node without failures</li>
                </ol>
            </section>


          </section>
          {/* Philosophy */}
          <section>
              <section>
                  <h2>When Use Cassandra?</h2>
                  <ul>
                      <li>Read Access is by a Known Primary Key</li>
                      <li>High Performance with Limited SQL</li>
                      <li>Need High Available</li>
                      <li>Need Scale Linearly</li>
                      <li>Need Complex Data Type</li>
                      <li>No Need for Joins or Aggregates</li>
                      
                  </ul>
              </section>
              <section>
                  <h2>When Not Use Cassandra?</h2>
                  <ul>
                      <li>Need Many Joins</li>
                      <li>Need Aggregation</li>
                      <li>Need Subquery</li>
                      <li>Need High consistency like 100%</li>
                  </ul>
              </section>
  		</section>
          <section>
              <section>
                  <h2>Data Modeling</h2>
                  <ul>
                      <li>Denormalization is not just okay – it’s a must</li>
                      <li>ALWAYS think Queries first</li>
                      <li>One table per query is a great strategy</li>
                  </ul>
              </section>
              <section>
                  <h2>Data Modeling - Workflow</h2>
                  <img width="824" height="267" data-src="cassandraworkflow.PNG"/>
              </section>
              <section>
                  <h2>Application - Workflow</h2>
                  <img width="701" height="417" data-src="applicationworkflow.PNG"/>
              </section>
              <section>
                  <h2>Access Patterns, Table, and Query</h2>
                  <img width="206" height="288" data-src="userbyemail.PNG" align="right"/>
                  <ul width="300px">
                      <li>Q1: Find a user with a specified email</li>
                      <li>Q2: Find all basic information<br /> with specified email</li>
                      <br />
                      <li>A1: SELECT user_id FROM <br />users_by_email WHERE email = “XXX”;</li>
                    <li>A2: SELECT user_id FROM <br />users_by_email WHERE email = “XXX”;</li>
                  </ul>
              </section>
              <section>
                  <h2>Access Patterns, Table, and Query</h2>
                  <img width="206" height="288" data-src="videosbytag.PNG" align="right"/>
                  <ul width="300px">
                      <li>Q3: Find all videos that match <br /> a specific tag (show the most<br /> recent uploaded videos first)</li>
                      <br />
                      <li>A3: SELECT * FROM  <br />videos_by_tag WHERE tag = “t1”;</li>
                  </ul>
              </section>
              <section>
                  <h2>Access Patterns, Table, and Query</h2>
                  <img width="206" height="288" data-src="videosbyactor.PNG" align="right"/>
                  <ul width="300px">
                      <li>Q4: Find all videos that features  <br /> a specific actor and release year  <br /> range (show the most recent <br /> videos first, and then <br /> sorted by title)</li>
                      <br />
                      <li>A4: SELECT * FROM <br />FROM videos_by_actor  <br />WHERE actor_name = “an1” <br />AND release_year >= “y1” </li>
                  </ul>
              </section>
  		</section>
          {/* Interested Topic */}
          {/* <section>
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
          </section> */}
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

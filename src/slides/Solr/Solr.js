import React, { Component } from 'react';
import classNames from 'classnames';
import Reveal from 'reveal.js';
import 'reveal.js/css/reveal.css';


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
            <h3>Basic Solr</h3>
            <p>
              <small>Created by <a href="https://jiazhenzhu.netlify.com/">Jiazhen Zhu</a></small>
            </p>
            <h9>02/05/2020</h9>
          </section>
          {/* Questions Slide */}
          <section>
  					<h1>Agenda</h1>
                      <ul>
                          <li>What is Solr?</li>
                          <li>Architecture</li>
                          <li>Why Solr faster than others?</li>
                          <li>Demo</li>
                      </ul>
  		  </section>
          <section>
                <section>
                      <h2>Apache Solr is a:</h2>
  					<p className={classNames('fragment', 'fade-up')}>
                      one of the most common search platforms
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      Natural Language Processing
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      built on the powerful indexing platform Lucene
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      high-speed
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
                      scalable text search
  					</p>
                    <p className={classNames('fragment', 'fade-up')}>
                      Google-like search
  					</p>
  					<p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'red'}}>Let us see more.</span>
  					</p>
                      </section>
                <section  data-background="https://media.giphy.com/media/3HSzHiDUtNLhu/giphy.gif">
                <h2>Why Solr like a superman?</h2>
                </section>
                <section>
                <h2>This is becuase Solr</h2>
                    <p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'green'}}>from the Apache Lucene project</span>
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'magenta'}}>full-text search, faceted search, real-time indexing</span>
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'blue'}}>NoSQL features and rich document (e.g., Word, PDF) handling</span>
  					</p>
                      <p className={classNames('fragment', 'fade-up')}>
  						<span style={{color: 'red'}}>All info come from wiki (https://en.wikipedia.org/wiki/Apache_Solr)</span>
  					</p>
                </section>
  		  </section>
          {/* Overview Diagram Slide */}
          <section>
            <section>
              <h2 style={{textAlign: 'left'}}>Architecture</h2>
              <img className={classNames('fragment', 'fade-up')} width="600" height="500" data-src="solr_overview_arch.PNG" align="right"/>
            </section>

            <section>
              <h2 style={{textAlign: 'centre'}}>Architecture</h2>
              <img width="600" height="500" data-src="solr_inner_arch.PNG" align="centre"/>
            </section>

          </section>
          {/* Philosophy */}
          <section>
                 <section>
                  <h2>Why Solr so faster?</h2>
                  <ul>
                      <li>Inverted Index</li>
                      <li>Like google search</li>
                      <li>Use space to reduce the time</li>
                      
                  </ul>
                 </section>
                <section>
                    <h2 style={{textAlign: 'center'}}>inverted Index</h2>
                    <img width="600" height="500" data-src="inverted_index.PNG"/>
                </section>
  		</section>
          <section>
              <section>
                  <h2>Data Type / Customized Data Type</h2>
                  <ul>
                      <li>Int, String, Date</li>
                      <li>Complex Type (Demo)</li>
                  </ul>
              </section>
              <section>
                  <h2>Data Field</h2>
                  <ul>
                      <li>Copying Fields: can apply several distinct field types to a single piece of incoming information (Demo)</li>
                      <li>Dynamic Fields: Dynamic fields allow Solr to index fields that you did not explicitly define in your schema (Demo)</li>
                  </ul>
              </section>

              <section>
                  <h2>MoreLikeThis</h2>
                  <ul>
                      <li>The MoreLikeThis search component enables users to query for documents similar to a document in their result list</li>
                      <li>Handler (Demo)</li>
                      <li>Query (Demo)</li>
                      <li>https://lucene.apache.org/solr/guide/6_6/morelikethis.html</li>
                  </ul>
              </section>
              

              <section>
                  <h2>Query</h2>
                  <ul>
                      <li>select (Demo)</li>
                      <li>AND / OR</li>
                      <li>between</li>
                  </ul>
              </section>
              <section>
                  <h2>Update</h2>
                  <ul width="300px">
                      <li>Curl</li>
                      <li>spark-solr</li>
                  </ul>
              </section>
              <section>
                  <h2>Resource</h2>
                  <ul>
                      <li>https://lucene.apache.org/solr/guide/8_4/solr-tutorial.html</li>
                  </ul>
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

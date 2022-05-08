import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blogpage'>
          <div className="container">
              <div className="question">
                  <h1> 1. Difference between javascript and node js ?</h1>
                  <div className="answer">
                      <h5>Javascript: </h5>
                      <p>JavaScript is a programming language. It is running in any web browser with a proper browser engine.
                      Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.
                      JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome)
                      </p>
                  </div>
                  <div className="answer">
                      <h5>Nodejs: </h5>
                      <p>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.
                      It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.
                      Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.  
                      </p>
                  </div>
              </div>
              
              <div className="question">
                  <h1> 2. When should you use nodejs and when should you use mongodb ?</h1>
                  <div className="answer">
                      <h5>Nodejs useing for: </h5>
                      <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
                      </p>
                  </div>
                  <div className="answer">
                      <h5>Mongodb useing for: </h5>
                      <p>
                      SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases. 
                      </p>
                  </div>
              </div>
              <div className="question">
                  <h1> 3. Differences between sql and nosql databases.?</h1>
                  <div className="answer">
                      <h5 >SQL : </h5>
                     <ol >
                         <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
                         <li>These databases have fixed or static or predefined schema</li>
                         <li>These databases are not suited for hierarchical data storage.</li>
                         <li>These databases are best suited for complex queries</li>
                         <li>Vertically Scalable</li>
                         <li>Follows ACID property</li>
                     </ol>
                  </div>
                  <div className="answer">
                      <h5>NOSQL </h5>
                      <ol>
                         <li>Non-relational or distributed database system.</li>
                         <li>They have dynamic schema</li>
                         <li>These databases are best suited for hierarchical data storage</li>
                         <li>These databases are not so good for complex queries</li>
                         <li>Horizontally scalable</li>
                         
                         <li>Follows CAP(consistency, availability, partition tolerance)</li>
                     </ol>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Blog;
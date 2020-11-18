import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

const Recruitment = () => (
  <Layout>
    <div className="jumbotron jumbotron-fluid" style={{paddingTop: '200px'}}>
      <div className="container">
        <h1 className="display-4" style={{fontFamily: `'Cereal', sans-serif`, fontWeight: 700}}>Recruitment</h1>
        <p className="lead">Want to join REMAKE as a technician? Want to learn all there is to know about repair? Want to be able to manage the first free repair community in a university? You’re in the right place.</p>
        <hr className="my-4"/>
        <p className="lead description">Before we get started, make sure you know exactly what we do, and why we do it. If you’re still unsure, talk to us at join@remake.repair</p>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <h4 style={{fontFamily: `'Cereal', sans-serif`, fontWeight: 700}}>As a technician, there are a number of things you should know: </h4>
        <p className="lead description">We have two technician categories: Coordinator and Assistant Technician (AT). You join as an AT and, as soon as you acquire all the skills and knowledge you need, you’ll be upped to the status of Coordinator in no time. The greater the dedication, the more perks you get (like a fancy Pro Tech Toolkit all for yourself!)</p>
        <p className="lead description">As an AT, you are subject to the following responsibilities, duties, and benefits:</p>
      </div>
      <div className="row">
        <table className="table table-bordered">
        <thead>
          <tr>
            <th>Expectations</th>
            <th>Duties</th>
            <th>Benefits</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>
                <p className="description">
                  Good teamwork, collaborative learning and skill-sharing spirit
                </p>
              </td>
              <td>
                <p className="description">
                  Undergo REMAKE’s training program in its entirety
                </p>
              </td>
              <td>
                <p className="description">
                  Welcoming learning environment
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="description">
                  Willingness to pick up the necessary repair skills rapidly
                </p>
              </td>
              <td>
                <p className="description">
                  Operate as a technician, diagnosing issues and servicing devices, during most Repair Parties
                </p>
              </td>
              <td>
                <p className="description">
                  Access to REMAKE's diagnosing and repair tools
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="description">
                  Adherence to REMAKE’s Code of Conduct and Safety Regulations
                </p>
              </td>
              <td>
                <p className="description">
                Contribute to other activities and projects as possible to help expand REMAKE's community and values
                </p>
              </td>
              <td>
                 <p className="description">
                Personalised training on how to repair most consumer electronic devices for free
                </p> 
              </td>
            </tr>
          </tbody>
        </table>
        <div className="offset-md-1 col-md-11">
          <p className="lead description">&#9654; As such, you’ll be in a position to contribute as a technician during our Repair Parties. There are, usually, four to six parties in a semester/term; they take place once every two weeks (usually on Sundays), and each of them takes about 5 to 6 hours. You can attend these parties depending on your own availability, but remember, the more you do, the more likely you get upped to the status of Coordinator. Lack of enthusiasm will be frowned upon! </p>
        </div>
        <div className="offset-md-1 col-md-11">
          <p className="lead description">&#9654; You <b>do not</b> need any prior experience in repair in order to apply. We will teach you everything you need to know. </p>
        </div>
        <div className="offset-md-1 col-md-11">
          <p className="lead description">&#9654; You can use this application form to apply for an opening at either the UCL or HKUST Branch. Do utilise your university-provided email in the application form, else we will not be able to process your application. </p>
        </div>
      </div>
      <div className="row">
        <h4 style={{fontFamily: `'Cereal', sans-serif`, fontWeight: 700}}>Let’s get to it! </h4>
        <div style={{display: 'flex', width: '100%'}}>
          <iframe frameBorder="0" border="0" style={{borderStyle: 'none',width: '100%',height: '640px'}} src="https://remake.wispform.com/81dcf6a7"></iframe>
        </div>
      </div>
    </div>

  </Layout>
)

export default Recruitment

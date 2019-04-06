import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

const Recruitment = () => (
  <Layout>
    <div className="jumbotron jumbotron-fluid" style={{paddingTop: '200px'}}>
      <div className="container">
        <h1 className="display-4" style={{fontFamily: `'Cereal', sans-serif`, fontWeight: 700}}>Recruitment</h1>
        <p className="lead">Want to join REMAKE as a technician? Want to learn all there is to know about repair? Want to be able to manage the first free repair community in Asia? You’re in the right place.</p>
        <hr className="my-4"/>
        <p className="lead description">Before we get started, make sure you know exactly what we do, and why we do it. If you’re still unsure, you might want to head to the “About Us” page and come back here a little later.</p>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <h4 style={{fontFamily: `'Cereal', sans-serif`, fontWeight: 700}}>As a technician, however, there are a number of things you should also know: </h4>
        <p className="lead description">We have two technician categories: Coordinator and Assistant Technician (AT). You join as an AT and, if you show strong dedication towards the project, you’ll be upped to the status of Coordinator in no time. The greater the dedication, the more perks you get (like a fancy Pro Tech Toolkit all for yourself!)</p>
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
                  Good teamwork, collaborative learning and skill-sharing
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
                  Willingness to pick up the necessary repairing skills  
                </p>
              </td>
              <td>
                <p className="description">
                  Diagnose issues and service devices during some Repair Parties, depending on availability
                </p>
              </td>
              <td>
                <p className="description">
                  Training on how to repair most handheld electronic devices for free
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
                Contribute ideas to expand REMAKE’s community and improve the project
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="offset-md-1 col-md-11">
          <p className="lead description">&#9654; As such, you’ll be in a position to contribute as a technician during our Repair Parties. There are, usually, six parties in a semester; they take place once every two weeks on Sundays, and each of them takes about 6 to 8 hours. You can attend these parties depending on your own availability, but remember, the more you do, the more likely you get upped to the status of Coordinator. If you refuse to attend any, you will be removed from the project. </p>
        </div>
        <div className="offset-md-1 col-md-11">
          <p className="lead description">&#9654; You <b>do not</b> need any prior experience in repair in order to apply. We will teach you everything you need to know. </p>
        </div>
      </div>
      <div className="row">
        <h4 style={{fontFamily: `'Cereal', sans-serif`, fontWeight: 700}}>Still want to apply? Let’s get to it! </h4>
        <div style={{display: 'flex', width: '100%'}}>
          <iframe frameBorder="0" border="0" style={{borderStyle: 'none',width: '100%',height: '640px'}} src="https://interface.wispform.com/81dcf6a7"></iframe>
        </div>
      </div>
    </div>

  </Layout>
)

export default Recruitment
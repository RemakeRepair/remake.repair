import React from 'react'
import Carousel from './carousel'

const MessageModal = () => (
  <div className="modal fade" id="messageModal" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Thank you for your interest!</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>
            The REMAKE team would like to thank you for your huge support!
            We have received an overwhelming number of replies in just 24 hours from the time we opened our registration form:
            our entire quota for <strong>all Repair Parties in November</strong> has been filled.
            We have now closed our registration form and are working around the clock to see how to accommodate the increased demand!
            Stay tuned for more details, and rest assured, if we can’t have you this time, <strong>there will be more Repair Parties in the near future</strong>.
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
)

const Header = () => (
  <header className="masthead">
    <div className="container d-flex h-100 align-items-center">
      <div className="header-center">
        <h1 className="emphasis">
          Make <br/>
          Your <Carousel titles={['iPhone', 'Laptop', 'Kindle', 'Macbook', 'iPad']}/> <br/>
          Work Again.
        </h1>
        <div className="ruler"></div>
//         <a data-toggle="modal" data-target="#messageModal" className="text-white btn btn-outline-light btn-lg bold-outline-btn">Join a party</a>
           <a href="https://ust.az1.qualtrics.com/jfe/form/SV_e5RUnMPs5KKWgcd" target="_blank" className="text-white btn btn-outline-light btn-lg bold-outline-btn">Join a party</a>
      </div>
      <style jsx>{`
        .bold-outline-btn {
          border-radius: 8pt;
          border-width: 2px;
          font-family: 'Cereal', sans-serif;
        }
        `}</style>
    </div>
    <MessageModal/>
  </header>
)

export default Header

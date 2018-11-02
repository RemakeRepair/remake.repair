import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'
import Team from '../components/team'

const Home = () => (
  <Layout>
    <Header/>
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="about-header">
              <div className="icon-wrapper">
                <div className="circular-background-orange">
                  <img src="/static/assets/images/advocate.svg" width="48"/>
                </div>
              </div>
              <p className="lead description">
                REMAKE is a free community-based repair project that holds <strong>Repair Parties</strong> at the Hong Kong University of Science and Technology with a fun, collaborative spirit.
                We thrive on skill-sharing and collaborative learning to fix technology and our relationship with it!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <img  className="ewaste" src="/static/assets/images/ewaste.png"/>
          </div>
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
            <h4 style={{fontFamily: `'Cereal', sans-serif`, fontWeight: 700}}>E-waste is one of the fastest growing waste streams across the world.</h4>
            <p className="lead description text-left">
              We know the pace of our consumption has real social and environmental costs. 
              And we know people are frustrated with the throwaway culture around them.
              But we can do something about it.
            </p>
            <div className="row m-25" style={{height: '16vh'}}>
              <div className="col-sm-3 d-flex flex-column justify-content-center">
              <span style={{fontFamily:`'Cereal', sans-serif`, fontWeight: 700, fontSize: '2em'}}>Repair</span>
              </div>
              <div className="col-sm-9 d-flex flex-column justify-content-around text-left">
                  <div className="d-flex">
                    <i className="fas fa-check fa-2x" style={{color: '#71D6A8', marginRight: '12pt'}}></i>
                    <span style={{fontFamily:`'Cereal', sans-serif`, fontSize: '1.2em'}}>Has an immediate impact</span>
                  </div>
                  <div className="d-flex">
                    <i className="fas fa-check fa-2x" style={{color: '#71D6A8', marginRight: '12pt'}}></i>
                    <span style={{fontFamily:`'Cereal', sans-serif`, fontSize: '1.2em'}}>Creates a safe learning environment</span>
                  </div>
                  <div className="d-flex">
                    <i className="fas fa-check fa-2x" style={{color: '#71D6A8', marginRight: '12pt'}}></i>
                    <span style={{fontFamily:`'Cereal', sans-serif`, fontSize: '1.2em'}}>Helps in the fight for more sustainable products in the market</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax"></div>
    </section>
    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7 levitated">
            <img className="img-fluid mb-3 mb-lg-0" src="/static/assets/images/hong_kong.jpg" alt=""/>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4 className="emphasis">Why Repair?</h4>
              <p className="text-black-50 mb-0">This idea stemmed from the notion that people in Hong Kong are, generally speaking, quite affable towards new technologies, but maybe too much so. </p>
              <br/>
              <p className="text-black-50 mb-0">While most people are interested in the latest and greatest, and wish to implement these technologies in their everyday lives, most of them go on a yearly tech purchasing spree without it being a real necessity.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-start no-gutters mb-5 mb-lg-0">
          <div className="col-lg-12">
            <h3 className="emphasis">Overconsumption of consumer electronics is a widespread problem in Hong Kong</h3>
            <p className="lead description">
            &emsp;While society-wide action must be carried out to fix this problem, we can still do our little bit, starting with our own community. 
              What REMAKE is trying to do is a minor action focused on the <i>mid- to end-stage</i> of consumer
              electronics’ lifecycle, but which has been shown to have major implications throughout this and
              other industries: <strong>repairing</strong>. 
            </p>
          </div>
          
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0 levitated">
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-center align-items-center" style={{background: 'url(/static/assets/images/demo-image-02.jpg)', backgroundSize: 'cover', flexDirection:'column', height: '100%', padding: '24px'}}>
              <h4 className="text-white emphasis levitated-text">We believe that</h4>
              <div className="d-flex align-items-center">
                <i className="fas fa-exclamation-triangle fa-2x text-amber mr-3"></i>
                <span className="levitated-text text-white" style={{fontFamily:`'Cereal', sans-serif`, fontSize: '1.15em'}}>A lack of understanding surrounding Waste Electrical and Electronic Equipment (WEEE)and its effects</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-exclamation-triangle fa-2x text-amber mr-3"></i>
                <span className="levitated-text text-white" style={{fontFamily:`'Cereal', sans-serif`, fontSize: '1.15em'}}>The overtly unfriendly third-party repair policies of most of Silicon Valley’s companies, and</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-exclamation-triangle fa-2x text-amber mr-3"></i>
                <span className="levitated-text text-white" style={{fontFamily:`'Cereal', sans-serif`, fontSize: '1.15em'}}>Hong Kong’s social context built around consumerism</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <p className="mb-0 text-white-50"> ― are largely to blame for the situation Hong Kong has seen itself in, not only in terms of WEEE, but in overall waste.</p>
                  <br/>
                  <p className="mb-0 text-white-50">Yet, repairing, if done correctly and with the proper supervision, can be easy, fun, cheap and a great opportunity for the public to learn more about their own devices. As popularly promoted by iFixit, a wiki-based site that teaches people how to fix almost anything</p>
                  <hr className="d-none d-lg-block mb-0 ml-0"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <blockquote className="blockquote text-center mt-3">
          <p className="mb-0" style={{fontFamily:`'Cereal', sans-serif`, fontWeight: 700, fontSize: '1.6em'}}>Repair saves you money. It saves the environment. And it connects us to our things.</p>
          <footer className="blockquote-footer blockquote-source">Repair is Noble from <cite title="Source Title">ifixit.org</cite></footer>
        </blockquote>

        <div className="row justify-content-center no-gutters levitated">
          <div className="col-lg-6">
            <div className="d-flex justify-content-around align-items-center" style={{background: 'url(/static/assets/images/fix-electronics.jpg)', backgroundSize: 'cover', height: '100%', padding: '24px'}}>
              <div>
                <div className="d-flex justify-content-center mx-auto action-circular-bg action-bg-accent-blue">
                  <img src="/static/assets/images/repair.svg" width="44"/>
                </div>
                <h5 className="emphasis levitated-text mt-3">Repairing</h5>
              </div>
              <div>
                <div className="d-flex justify-content-center mx-auto action-circular-bg action-bg-accent-jade">
                  <img src="/static/assets/images/teach.svg" width="54"/>
                </div>
                <h5 className="emphasis levitated-text mt-3">Teaching</h5>
              </div>
              <div>
                <div className="d-flex justify-content-center mx-auto action-circular-bg action-bg-accent-magenta">
                  <img src="/static/assets/images/learn.svg" width="44"/>
                </div>
                <h5 className="emphasis levitated-text mt-3">Learning</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white emphasis text-right">We plan to change the landscape by</h4>
                  <hr className="d-none d-lg-block mb-0 mr-0"/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="fas fa-hands-helping fa-3x mb-2 text-white"></i>
            <h2 className="text-white mb-5 levitated-text">Have a dead iPhone lying inside your bedside table?</h2>
            <h2 className="text-white description levitated-text">Bring it over and we will help you fix it!</h2>
            <div className="row mt-3">
              <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center" style={{background: 'white', width: '128px', height: '128px', borderRadius: '64px'}}>
                  <img src="/static/assets/images/repair_cost.jpg" width="88"/>
                </div>
              </div>
              <div className="col-sm-12 col-md-8">
                <p className="text-white description levitated-text" style={{textAlign: 'left'}}>
                  We are a free community repair, and that’s how we’re going to stay: Free. We will never charge you for our service, and we will try our best to cover the replaced part itself.
                  Sometime, however, we would need you to help out, too:<br/>
                  💵 Screen and battery replacements are covered up to $500 HKD <br/>
                  💵 For any other repair, we will cover up to 10% of the replacement part <br/>
                  💡 Each session has a limited budget; first come, first served.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Team/>
  </Layout>
)

export default Home

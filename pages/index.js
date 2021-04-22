import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import Header from '../components/header'
import Team from '../components/team'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    const player = new Plyr('#player', {
      controls: []
    });
    ScrollReveal().reveal('.stats', {
      duration: 900,
      distance: '40px',
      easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      origin: 'bottom',
      interval: 150
    })
  }

  static async getInitialProps() {
    const res = await fetch('https://restarters.net/api/group/73/stats')
    const stats = await res.json()
    return { stats }
  }

  render() {
    return (
      <Layout>
        <Header />
        <section id="about" className="about-section text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto mb-4">
                <div className="about-header">
                  <div className="mx-auto h-50">
                    <div className="circular-background-orange mx-auto">
                      <img src="/static/assets/images/advocate.svg" width="48"/>
                    </div>
                  </div>
                  <p className="lead description">
                    REMAKE is a free community-based repair project that holds <strong>Repair Parties</strong> at universities around the world with a fun, collaborative spirit.
                    We thrive on skill-sharing and collaborative learning to fix technology and our relationship with it!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                <img className="ewaste" src="/static/assets/images/ewaste.png" style={{width: '70%'}}/>
              </div>
              <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
                <h4 style={{fontFamily: `'Cereal', sans-serif`, fontWeight: 700}}>E-waste is one of the fastest growing waste streams across the world.</h4><br/>
                <p className="lead description text-left">
                  We know the pace of our consumption has real social and environmental costs. 
                  And we know people are motivated to do something about it.
                  In this mission, repair is a tool.
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
                      <span style={{fontFamily:`'Cereal', sans-serif`, fontSize: '1.2em'}}>Helps in the fight for more sustainable products in the market</span><br/><br/>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax d-flex flex-column justify-content-center" style={{marginTop: '100px'}}>
            <div className="row">
              <div className="col-sm-4 text-white stats">
                <h2 className="description">Participants</h2>
                <h1 style={{fontWeight: 700}}>{this.props.stats.num_participants}</h1>
              </div>
              <div className="col-sm-4 text-white stats">
                <h2 className="description">CO&#x2082; Emissions Prevented</h2>
                <h1 style={{fontWeight: 700}}>{`${this.props.stats.kg_co2_diverted} KG`}</h1>
              </div>
              <div className="col-sm-4 text-white stats">
                <h2 className="description">Waste Prevented</h2>
                <h1 style={{fontWeight: 700}}>{`${this.props.stats.kg_waste_diverted} KG`}</h1>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="projects-section bg-light">
          <div className="container">
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <div className="col-xl-8 col-lg-7 levitated">
              <video poster="/static/assets/images/cover.jpg" id="player" playsinline controls autoPlay muted loop>
                <source src="/static/assets/video/propaganda.mp4" type="video/mp4" />
              </video>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="featured-text text-center text-lg-left">
                  <h4 className="emphasis">Why Repair?</h4>
                  <p className="text-black-50 mb-0">Technology has become essential in our everyday lives. We rely on it to enable us to produce our most creative, innovative and impactful work. </p>
                  <br/>
                  <p className="text-black-50 mb-0">However, our work should not and need not be carried out at the expense of the environment. We have the opportunity to make sure we use technology responsibly, and that includes repairing it. </p>
                </div>
              </div>
            </div>
    
            <div className="row justify-content-start no-gutters mb-5 mb-lg-0">
              <div className="col-lg-12">
                <h3 className="emphasis text-center">Technology and sustainability, the perfect match. </h3>
                <p className="lead description text-justify" style={{marginBottom: '30px'}}>
                &emsp;Earth needs us to make the best use of the resources we have available. Together, we each can do our little bit, starting with our own community. 
                  REMAKE focuses on the <i>mid- to end-stage</i> of consumer
                  electronics’ lifecycle, a small action with strong effects throughout this and
                  partner industries: <strong>repairing</strong>.
                </p>
              </div>
              
            </div>
            <div className="row justify-content-center no-gutters mb-5 mb-lg-0 levitated">
              <div className="col-lg-6">
                <div className="d-flex flex-column justify-content-center align-items-center" style={{background: 'url(/static/assets/images/demo-image-02.jpg)', backgroundSize: 'cover', flexDirection:'column', height: '100%', padding: '24px'}}>
                  <h4 className="text-white emphasis levitated-text">We believe that</h4>
                  <div className="d-flex align-items-center">
                    <i></i>
                    <span className="levitated-text text-white" style={{fontFamily:`'Cereal', sans-serif`, fontSize: '1.15em'}}>Communities represent the centre-stage where the biggest change can occur,</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-exclamation-triangle fa-2x text-amber mr-3"></i>
                    <span className="levitated-text text-white" style={{fontFamily:`'Cereal', sans-serif`, fontSize: '1.15em'}}>repair is a means to an end, a vehicle for community building, and </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-exclamation-triangle fa-2x text-amber mr-3"></i>
                    <span className="levitated-text text-white" style={{fontFamily:`'Cereal', sans-serif`, fontSize: '1.15em'}}>an opportunity for our youth to gain agency over the future they want for themselves.</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <p className="mb-0 text-white-50"> The momentum necessary to create a greener, more sustainable society needs to be driven by people in their communities. REMAKE, like many others, just provides the venue for them. </p>
                      <br/>
                      <p className="mb-0 text-white-50">With the help of our technicians, people can learn how to repair and, in doing so, discover how it can be easy, fun, cheap and a great opportunity to learn more about our technology. As popularly promoted by iFixit, a wiki-based site that teaches people how to fix almost anything</p>
                      <hr className="d-none d-lg-block mb-0 ml-0"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <blockquote className="blockquote text-center mt-3">
              <p className="mb-0" style={{fontFamily:`'Cereal', sans-serif`, fontWeight: 700, fontSize: '1.6em', marginTop: '80px'}}>Repair saves you money. It saves the environment. And it connects us to our things.</p>
              <footer className="blockquote-footer blockquote-source">Repair is Noble from <cite title="Source Title">ifixit.org</cite></footer>
            </blockquote>
    
            <div className="row justify-content-center no-gutters levitated">
              <div className="col-lg-6">
                <div className="d-flex justify-content-around align-items-center" style={{background: 'url(/static/assets/images/fix-electronics.jpg)', backgroundSize: 'cover', height: '100%', padding: '24px'}}>
                  <div>
                    <div className="d-flex justify-content-center mx-auto action-circular-bg action-bg-accent-graphite">
                      <img src="/static/assets/images/hours.svg" width="48"/>
                    </div>
                    <h5 className="levitated-text mt-3">Hours Volunteered</h5>
                    <h1 style={{fontWeight: 700}}>{this.props.stats.num_hours_volunteered}</h1>
                  </div>
                  <div>
                    <div className="d-flex justify-content-center mx-auto action-circular-bg action-bg-accent-orange">
                      <img src="/static/assets/images/event.svg" width="40"/>
                    </div>
                    <h5 className="levitated-text mt-3">Total Events</h5>
                    <h1 className="mx-auto" style={{fontWeight: 700}}>{this.props.stats.num_parties}</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <h4 className="text-white emphasis text-right">We plan to change the landscape by</h4>
                      <hr className="d-none d-lg-block mb-0 mr-0"/>
                      <div className="row d-flex justify-content-around mt-3">
                      <div>
                        <div className="d-flex justify-content-center mx-auto action-circular-bg action-bg-accent-blue">
                          <img src="/static/assets/images/repair.svg" width="44"/>
                        </div>
                        <h5 className="emphasis levitated-text mt-3 text-white">Repairing</h5>
                      </div>
                      <div>
                        <div className="d-flex justify-content-center mx-auto action-circular-bg action-bg-accent-jade">
                          <img src="/static/assets/images/teach.svg" width="54"/>
                        </div>
                        <h5 className="emphasis levitated-text mt-3 text-white">Teaching</h5>
                      </div>
                      <div>
                        <div className="d-flex justify-content-center mx-auto action-circular-bg action-bg-accent-magenta">
                          <img src="/static/assets/images/learn.svg" width="44"/>
                        </div>
                        <h5 className="emphasis levitated-text mt-3 text-white">Lobbying</h5>
                      </div>
                      </div>
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
              <div className="col-md-10 col-lg-9 mx-auto text-center">
                <i className="fas fa-hands-helping fa-3x mb-2 text-white"></i>
                <h2 className="text-white mb-2 levitated-text">Have a dead phone lying in your bedside table?</h2>
                <h2 className="text-white description levitated-text">Bring it over and we will help you fix it!</h2><br/>
                <div className="row mt-3">
                  <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center" style={{background: 'white', width: '128px', height: '128px', borderRadius: '64px'}}>
                      <img src="/static/assets/images/repair_cost.jpg" width="88"/>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <p className="text-white description levitated-text" style={{textAlign: 'left', backgroundColor: 'rgba(166, 162, 162, 0.65)', padding: '24px', borderRadius: '10px'}}>
                      We are a free repair community, and that’s how we’re going to stay: Free. We will never charge you for our service, and we will try our best to cover the replaced part itself.
                      Why not help us help you? (Referral scheme only available at the HKUST Branch):<br/><br/>
                      💵 If you bring a friend to a Repair Party and they place an order with us, you get 30% off the replacement part. <br/><br/>
                      👫 Your friend? They get 10% off - sweet deal. <br/><br/>
                      💡 And if your friend brings another friend, the 10% becomes 30% and the new friend gets 10%. Spread the love.
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
  }
}

export default Home

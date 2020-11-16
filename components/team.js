import React, { Component } from 'react'

const team = [
  { 
    name: 'Fernando García Albero',
    bio: [
      `Founder`,
      `Now a public policy master's student, I have been fixing stuff since I was a teenager.`,
      'Strongly passionate about society, environment and technology and finding ways to produce impactful change in the world other than by going vegan.'
    ],
    avatar: '/static/assets/images/fernando.jpg' },
  { 
    name: 'Nupur Dhawan',
    bio: [
      'UCL Branch Coordinator',
      'With ample work experience in consultancy, I have now deciced to learn more about NGO work in sustainability.',
      'I am thrilled to see how much this community has achieved to date, and I am excited to be part of this journey',
      'Find me around UCL anytime!'
    ],
    avatar: '/static/assets/images/D3C2E839-EC50-41B1-94EA-3C18A10878F4.jpeg' },
  { 
    name: 'Johnson Chong',
    bio: [
      'HKUST Branch Coordinator',
      'Year 3 Computer Engineering local student and baseball addict.',
      'I am enthusiastic about anything that makes the Earth a better place for everyone.',
      'Go ahead and send me anything fixable other than phones, anything meaning anything. I’ll gladly fix it for you, if I can…'
    ],
    avatar: '/static/assets/images/Johnson.jpg'}
]

const contacts = [
  { icon: 'fab fa-instagram', link: 'instagr.am/remake.repair/' },
  { icon: 'fab fa-facebook', link: 'facebook.com/remakerepair' },
  { icon: 'fas fa-wrench', link: 'therestartproject.org/groups/remake-repair-parties'}
]

const Contacts = () => (
  <div className="social d-flex justify-content-center">
    {contacts.map((contact, i) => (
      <a href={`https://${contact.link}`} key={i} className="mx-2">
        <i className={contact.icon}></i>
      </a>
    ))}
  </div>
)

const Members = () => (
  <div className="row">
    {
      team.map((member, i) => (
        <div key={i} className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <img src={member.avatar} height="180" alt={member.name} className="rounded-circle"/>
              <div className="small text-black-50 mt-3">{member.name}</div>
              {
                member.bio.map((paragraph, j) => (
                  <p className={`${j===0?'font-weight-bold':''}`} key={j}>{paragraph}</p>
                ))
              }
            </div>
          </div>
        </div>
      ))
    }
  </div>
)

export default class Team extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="contact-section bg-black">
        <div className="container">
          <h2 className="text-white text-center mb-3" id="team">Our team</h2>
          <Members/>
          <Contacts/>
        </div>
      </section>
    )
  }
}

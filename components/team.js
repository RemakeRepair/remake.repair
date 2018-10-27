import React, { Component } from 'react'

const team = [
  { 
    name: 'Fernando García Albero',
    bio: [
      'Been fixing things since a teenager, yet I still can’t manage to fix my own relationships (_call me ;)_).',
      'With a strong alternative-oriented music taste and a full-time pun maker job, I refuse to drown in the mainstream.',
      'All in all, a gwei lou majoring in GCS a.k.a. Goodest Cantonese Swearing'
    ],
    avatar: '/static/assets/images/fernando.jpg' },
  { 
    name: 'Mashiat Lamisa',
    bio: [
      'Year 2 ISD student with a Michael Scott like sense of humour (or the lack thereof….).',
      'Super enthusiastic about connecting technology with the human side of things to create sustainable, welfare-driven systems.',
      'Love all things indie, all things tech and have a strong belief that existence is a social construct. Here to learn and share the fantastic art of repairing.'
    ],
    avatar: '/static/assets/images/mashiat.jpg' },
  { 
    name: 'Or Ka Lai',
    bio: [
      'A local year-2 EVMT student who loves Twenty One Pilots.',
      'Passionate about sustainability and figuring out ways to save the Earth other than banning straws.',
      'A novice in repairing, trying not to hurt myself (or you…)'
    ],
    avatar: '/static/assets/images/okl.jpeg'
  }
]

const contacts = [
  { icon: 'fas fa-comments', link: 'spectrum.chat/remake' },
  { icon: 'fab fa-facebook-messenger', link: 'm.me/remakerepair' },
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
                  <p key={j}>{paragraph}</p>
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
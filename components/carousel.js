import React , { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      let nextIndex = this.state.currentIndex+1;
      if (nextIndex >= this.props.titles.length) {
        nextIndex = 0;
      }
      this.setState({currentIndex: nextIndex})
    }, 1750)
  }

  render() {
    return (
      <TransitionGroup style={{ display: 'inline-block', position: 'relative' }}>
        {[
          <CSSTransition
            key={this.state.currentIndex}
            in={true}
            timeout={300}
            appear
            enter
            classNames="carousel"
          >
            <span>{this.props.titles[this.state.currentIndex]}</span>
          </CSSTransition>
        ]}
        <style jsx>{`
        .carousel-enter {
          opacity: 0.01;
          transform: translateY(-20%);
        }
        .carousel-enter-active {
          opacity: 1;
          transform: translateY(0%);
          transition: all 300ms ease;
        }
        .carousel-exit {
          position: absolute;
          left: 0;
          top: 0;
          opacity: 1;
          transform: translateY(0%);
        }
        .carousel-exit-active {
          opacity: 0.01;
          transform: translateY(50%);
          transition: all 300ms ease;
        }
          `}</style>
      </TransitionGroup>
    )
  }
}
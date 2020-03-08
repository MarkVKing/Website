import PropTypes from 'prop-types'
import React, { Component } from 'react'
import MarksPicture from '../images/Mark2.jpg'
import Posts from './Posts'

class Main extends Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="AboutMe"
          className={`${this.props.article === 'aboutMe' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={MarksPicture} alt="Mark V King" />
            <blockquote>
              <h3>
                How many quadriplegics does it take to live a full and
                productive life?
              </h3>
              <p>Just the one.</p>
              <h3>How many fully-able people does it take?</h3>
              <p>Also just the one. But you have to want to do it. </p>
            </blockquote>
          </span>

          <p>
            Here’s the thing about being a C-1 quadriplegic. It’s not the whole
            I-can’t-use-my-body-and-I-need-
            a-machine-to-breathe-and-an-assistant-to-poop part. It’s not the
            whole utter lack of privacy or personal space that comes with
            needing round-the-clock care in case something goes wrong and I
            might die part. It’s not even the “Wow, sitting in the same chair
            for 30 years even if it’s pretty high-tech and moves on its own gets
            really boring sometimes” part.
          </p>
          <p>
            It’s the pressure. We’re all born with this pressure to do
            something. To grow up and kick ass at a job, maybe raise a few great
            kids, leave the world a little better than we found it. To make
            money or write a poem or run a little restaurant people talk about
            when new people move into town. Hell, maybe just to party hard
            enough that your friends smile thinking about you a few years down
            the road.
          </p>
          <p>
            We all have that pressure, all the time. And it doesn’t stop when
            suddenly you can’t use your arms, legs, privates or lungs. Sure,
            people are nice about it. Nobody expects you to go cure cancer or
            get married and have three-point-five kids behind a white picket
            fence in the suburbs. Not even you expect you to go win the
            Nationals in Argentine Tango (thanks a lot{' '}
            <a href="http://fourhourworkweek.com/blog/">Tim Ferriss</a>).
          </p>
          <p>
            But the pressure’s still there. The pressure to have been something
            more. There’s a sense of loss that comes with it once your physical
            ability to do a lot of that is gone, but the pressure remains.
          </p>
          <p>
            It can be easy to give up under that combination of loss and
            pressure, to listen to the excuses and amount to nothing but a skid
            mark on the toilet paper roll of history. That’s true whether you’re
            a quadriplegic or a fully-able person who’s met his or her own share
            of troubles along the way. My body is in a bad way, but I was lucky
            with the family I was born into and with the friends I’ve made on my
            own. That’s a blessing I know not everybody else has.
          </p>
          <p>
            That blessing, combined with some traits my parents taught me from
            when I was still young and able, have combined to let me live
            something approaching a normal life. I’ve travelled, been married,
            read, gone to concerts, made friends, lost friends, gotten involved
            and maybe changed the world a little bit for the better. I hope that
            hearing my story might inspire a few people — able bodied, disabled,
            or someplace in between — to do more than they believe they can.{' '}
          </p>
          <p>So, here’s my story.</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'resources' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resources</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <h3>Resources for disabled people</h3>
          <ul>
            <li>
              <a href="https://www.oregon.gov/dhs/spd/Pages/ODCindex.aspx">
                Oregon Disabilities Commission
              </a>
            </li>
            <li>
              <a href="https://www.oregon.gov/dhs/spd/Pages/GCSSindex.aspx">
                Governor’s Commission on Senior Services
              </a>
            </li>
            <li>
              <a href="https://www.oregon.gov/dhs/silc/pages/index.aspx">
                Centers for Independent Living/State Independent Living Council
              </a>
            </li>
            <li>
              <a href="https://www.o4ad.org/">
                Oregon Association of Area Agencies on Aging and Disabilities
              </a>
            </li>
            <li>
              <a href="https://droregon.org/"></a>Disability Rights of Oregon
            </li>
            <li>
              <a href="https://www.leadingageoregon.org/">LeadingAge Oregon </a>
            </li>
            <li>
              <a href="https://multco.us/ads">
                Multnomah County Aging and Disability Services
              </a>
            </li>
            <li>
              <a href="https://www.mda.org/">
                Muscular Dystrophy Association – Antonia
              </a>
            </li>
            <li>
              <a href="https://www.nationalmssociety.org/">
                National Multiple Sclerosis Society
              </a>
            </li>
            <li>
              <a href="https://www.ohsu.edu/xd/research/centers-institutes/neurology/parkinson-center/">
                Parkinson Center of Oregon
              </a>
            </li>
            <li>
              <a href="http://parkinsonsresources.org/">
                Parkinson’s Resources of Oregon
              </a>
            </li>
            <li>
              <a href="http://www.ucpaorwa.org/">
                United Cerebral Palsy of Oregon and SW Washington
              </a>
            </li>
            <li>
              <a href="http://www.ocdd.org/">
                Oregon Council on Developmental Disabilities
              </a>
            </li>
            <li>
              <a href="https://ossaweb.wordpress.com/">
                Oregon Support Services Association
              </a>
            </li>
          </ul>
          {/* 
          <h3 className="WIP">Resources for their families</h3>
          <ul>NOTHING HERE</ul>
          <h3 className="WIP">General knowledge and education</h3>
          <ul>NOTHING HERE</ul>
          <h3 className="WIP">Other stuff I like</h3>
          <ul>NOTHING HERE</ul> */}
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h2 className="major">Contact</h2>
            <form>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="special"
                    onClick={event => {
                      //Note to self, clean this up later... Was a bit of a bitch to get this working.
                      event.preventDefault()
                      console.log('Running form script')
                      const scriptURL = 'https://script.google.com/macros/s/AKfycbwcUuB8Amjom_ZqOODnRHKaK-NEv07_IZdSfkZx0VLO3UKn7MpF/exec'
                      const form = new FormData()
                      const inputs = document.querySelector('form').querySelectorAll('input')
                      const text = document.querySelector('form').querySelector('textarea').value
                      form.append('name', inputs[0].value)
                      form.append('email', inputs[1].value)
                      form.append('message', text)
                      console.log(form.entries())
                      fetch(scriptURL, {
                        method: 'POST',
                        body: form,
                      })
                        .then(response => console.log('Success!', response))
                        .catch(error => console.error('Error!', error.message))
                    }}
                  />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
            </form>
            <ul className="icons">
              <li>
                <a
                  href="https://twitter.com/markvking1 "
                  className="icon fa-twitter"
                >
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100001608105144"
                  className="icon fa-facebook"
                >
                  <span className="label">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
          {close}
        </article>

        <article
          id="blog"
          className={`${this.props.article === 'blog' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Posts></Posts>

          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

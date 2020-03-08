import React from 'react'
import PropTypes from 'prop-types'
import Disqus from 'disqus-react'

const disqusShortname = 'testprototype'

const Comments = (identifier, url, title, language) => (
  <div>
    <div id="disqus_thread">
      {/* <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                        </Disqus.CommentCount> */}
      <p>BLOGS GOES HERE - PEE IN PROGRESS - BLOGS GOES HERE</p>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={{
            identifier: identifier,
            url: url,
            title: title,
            language: language
        }}
      />
    </div>
  </div>
)

export default Comments

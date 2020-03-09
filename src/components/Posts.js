import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Disqus from 'disqus-react'
import Parser from 'html-react-parser'
import Sanitize from 'sanitize-html'

// Alternatively, import specific members:
// import { DiscussionEmbed, CommentCount, CommentEmbed } from 'disqus-react';
const disqusShortname = 'markvking'

const Posts = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost {
          nodes {
            content
            excerpt
            title
            link
            wordpress_id
          }
        }
      }
    `}
    render={data => {
      const mostRecentPost = data.allWordpressPost.nodes[0]
      let disqusConfig = {
        identifier: mostRecentPost.link,
        url: mostRecentPost.link,
        title: mostRecentPost.title,
        language: `en`,
      }

      function disqusReset(newIdentifier, newUrl, newTitle, newLanguage) {
        //The leftovers of many attempts to get Disqus working... No luck. Disqus still refuse to put comments in their own threads based on the identifier.
        //UPDATE: I have no idea why this bit was not working until after I reset my computer... Each posts now gets their own comment sections!
        //HERE BE DRAGONS - Don't change anything in this function! Just believe in the magic!
        disqusConfig.shortname = disqusShortname
        disqusConfig.identifier = newIdentifier
        disqusConfig.url = newUrl
        disqusConfig.title = newTitle
        disqusConfig.language = newLanguage
        console.log(window.DISQUS.reset)
        window.DISQUS.reset({
          reload: true,
          config: function() {
            this.page.identifier = disqusConfig.identifier
            this.page.url = disqusConfig.url
          },
        })
      }

      return (
        <>
          <div className="postsContainor noSelectOutline">
            <div className="posts">
              {data.allWordpressPost.nodes.map(post => (
                <div
                  key={post.wordpress_id}
                  id={post.wordpress_id}
                  className="post"
                  onClick={() => {
                    disqusReset(post.link, post.link, post.title, `en`)
                    document.getElementById('content').innerHTML =
                      `<h1>` +
                      post.title +
                      '</h1>' +
                      Sanitize(post.content, {
                        allowedTags: Sanitize.defaults.allowedTags.concat([
                          'iframe',
                          'video',
                          'img',
                          'div',
                        ]),
                        allowedAttributes: {
                          a: ['href', 'name', 'target'],
                          // We don't currently allow img itself by default, but this
                          // would make sense if we did
                          img: ['src'],
                          iframe: ['src'],
                        },
                      })
                  }}
                >
                  <h4>{Parser(post.title)}</h4>
                  <div className="excerpt">{Parser(post.excerpt)}</div>
                </div>
              ))}
            </div>
            <div id="mainPost">
              <div id="content">
                {Parser(
                  `<h1>` +
                  data.allWordpressPost.nodes[0].title +
                    '</h1>' +
                    Sanitize(data.allWordpressPost.nodes[0].content, {
                      allowedTags: Sanitize.defaults.allowedTags.concat([
                        'iframe',
                        'video',
                        'img',
                        'div',
                      ]),
                      allowedAttributes: {
                        a: ['href', 'name', 'target'],
                        // We don't currently allow img itself by default, but this
                        // would make sense if we did
                        img: ['src'],
                        iframe: ['src'],
                      },
                    })
                )}
              </div>
              <div id="disqus_thread">
                {/* <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                        </Disqus.CommentCount> */}
                <p>BLOGS GOES HERE - PEE IN PROGRESS - BLOGS GOES HERE</p>
                <Disqus.DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </div>
            </div>
          </div>
        </>
      )
    }}
  />
)

export default Posts

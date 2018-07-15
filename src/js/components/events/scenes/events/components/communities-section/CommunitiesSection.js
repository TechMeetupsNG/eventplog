import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// internal
import Sidebar from 'js/components/shared/sidebar'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'
import Button from 'js/components/shared/button'

export const generateTitle = (community) => (
  <Link to={`/communities/${community.id}/`}>
    {community.name}
  </Link>
)

export const generateDescription = (interest) => (
  `${interest || 'Generic'} community`
)

export const generateMeta = (community) => (
  `${community.no_of_followers} followers`
)

const CommunitiesSection = ({ communities, followCommunity }) => {
  if (communities.loading) {
    return <Loading />
  }
  if (communities.error) {
    return <Error msg={communities.error} />
  }
  return (
    <Sidebar title="Communities suggestions">
      {communities && communities.map(({featured_image, ...community}) => {
          const title = generateTitle(community);
          const description = generateDescription(community.interest)
          const meta = generateMeta(community)
          const btn = community.following
                        ? {}
                        : {onClick: () => {followCommunity(community)}, text: 'Follow'}
          return <Sidebar.Card key={community.id} {...{title, description, featured_image, btn, meta}} />
        }
      )}
    </Sidebar>
  )
}

export default CommunitiesSection
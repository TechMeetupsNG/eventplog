import React from 'react'
import { Link } from 'react-router-dom'


// internal
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'
import Pagination from 'js/components/shared/pagination'
import { pluralize, genCommunityLink } from 'js/utils'

export const generateTitle = (community = {}) => (
  <Link to={genCommunityLink(community)}>
    {community.name}
  </Link>
)

export const generateMeta = (community = {}) => (
  <ul>
    <li>
      {community.no_of_followers} {pluralize('follower', community.no_of_followers)}
    </li>
    <li>
      {community.no_of_upcoming_events} upcoming {pluralize('event', community.no_of_upcoming_events)}
    </li>
    <li>
      <span className="meta-label">Interests</span>: {community.interests && community.interests.map(interest => <span className="hashtag">{interest}</span> )}
    </li>
  </ul>
)

const CommunitySection = ({
  title,
  showCTA = true,
  communities = {data: [], meta: {}},
  getCommunities,
  noRecordsMsg,
  followCommunity,
}) => {

  const {loading, error, data = [], meta = {}} = communities;

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error msg={communities.error} />
  }

  return (
    <ContentPanel title={title}>
      {data && data.map(({description, featured_image, ...community}) => {
          const title = generateTitle(community)
          const meta = generateMeta(community)
          const titleLink = genCommunityLink(community)
          return (
            <ContentPanel.Card
              key={community.id}
              {...{title, description, featured_image, meta}}
              showButton={showCTA && !community.following}
              titleLink={titleLink}
              btn={{onClick: () => followCommunity(community), text: 'Follow'}} />
          )
        }
      )}
      {data && data.length < 1 && <p className="no-records-msg">{noRecordsMsg || "This hall for communities seem empty ..."}</p>}
      {
        meta && meta.total_pages && data.length > 0
          ? <Pagination totalPages={meta.total_pages}
                        activePage={meta.current_page}
                        onPageChange={getCommunities} />
          : ''
      }
    </ContentPanel>
  )
}

export default CommunitySection
import React from 'react'
import styled from 'styled-components'
import { Form, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'
import Pagination from 'js/components/shared/pagination'
import { pluralize, genEventLink } from 'js/utils'
import Sponsor from '../sponsorship-offer-item'
import CustomSponsorshipOfferForm from 'js/components/sponsorships/scenes/custom-sponsorship-offer-item'
import { TextArea, Input, Button } from 'js/components/shared'

const SponsorsList = ({
  title,
  sponsorship_offer_items,
  attendEvent,
  getSponsors,
  handleAddToCart,
  handleRemoveFromCart,
  currentUser,
  cart,
  allowNext,
  className = ''
}) => {
  const {loading, error, data = [], meta = {}} = sponsorship_offer_items;
  const shouldDisplayData = (!loading && !error && data);

  return (
    <ContentPanel className={className} title={title}>
      {loading && <Loading />}
      {false && error && <Loading.Error msg={sponsorship_offer_items.error} />}
      {shouldDisplayData && data.map(sponsorship_offer_item =>
         <Sponsor {...{sponsorship_offer_item, attendEvent, allowNext,
                        currentUser, cart, handleAddToCart, handleRemoveFromCart}} />
      )}

      {shouldDisplayData && data.length < 1 &&
        <div>
          <p>
            No sponsorship package has been added yet.
          </p>
        </div>
      }

      <div className="pagination-wrapper" style={{marginBottom: '6rem'}}>
      {
        meta && meta.total_pages && (data.length > 0 || meta.current_page > 1)
          ? <Pagination totalPages={meta.total_pages}
                        activePage={meta.current_page}
                        onPageChange={getSponsors} />
          : ''
      }
      </div>

      {process.env.REACT_APP_CUSTOM_SPONSORSHIP_OFFER_ENABLED &&
        <ContentPanel className="dark-purple custom-sponsor-form" title="Make a custom offer">
          <CustomSponsorshipOfferForm />
        </ContentPanel>
      }

    </ContentPanel>
  )
}

export default SponsorsList
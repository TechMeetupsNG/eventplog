import React from 'react'
import styled from 'styled-components'

//========== INTERNAL ===========
import BannerPage from 'js/components/shared/banner-page'
import createLoader from 'js/components/shared/loading/createLoadable'
import SteppedComponents from 'js/components/shared/stepped-components'
import { genEventLink } from 'js/utils'
import { Button } from 'js/components/shared'

const SponsorshipOffer = createLoader(() =>
  import('../sponsorship-offer' /* webpackChunckName: "SponsorshipOffer"*/))

const SponsorshipPartner = createLoader(() =>
  import('../sponsorship-partner' /* webpackChunckName: "SponsorshipPartner"*/))

const SponsorshipReview = createLoader(() =>
  import('../sponsorship-review' /* webpackChunckName: "SponsorshipReview"*/))

const SponsorshipPayment = createLoader(() =>
  import('../sponsorship-payment' /* webpackChunckName: "SponsorshipPayment"*/))

const generateTitle = (event) => (
  <span>
    {event.title}
    {event && event.id &&
      <div>
        <Button.Link inverted
                     target="_blank"
                     className="btn"
                     to={genEventLink(event)}>
          View Event Page
        </Button.Link>
      </div>
    }
  </span>
)
const PartnerSteps = ({ event }) => (
  <BannerPage title={generateTitle(event)}
              bannerImage={event.featured_image}>
    <SponsorshipOffer event={event} />
  </BannerPage>
)

/*
 <SteppedComponents loginRequired
 lastStep={{link: '/', title: 'Back to home'}}
 components={[
 {title: 'Select package(s) to sponsor', component: SponsorshipOffer},
 {title: 'Set organization and conditions', component: SponsorshipPartner},
 {title: 'Review sponsorship order', component: SponsorshipReview},
 {title: 'Make Payment', component: SponsorshipPayment},
 ]}
 />
 */
export default PartnerSteps

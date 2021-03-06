import React from 'react';
import NewSponsorshipOfferItem, {
  sponsorshipTypeOptions,
  getOriginalCost,
  PLATFORM_COST
} from '../NewSponsorshipOfferItem';
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import PlogMarkdownEditor from 'js/components/shared/plog-markdown-editor'
import Button from 'js/components/shared/button'
import Select from 'js/components/shared/select'
import Loading from 'js/components/shared/loading'
import variables from 'js/styles/theme/variables'
import { shallow } from 'enzyme'

describe('NewSponsorshipOfferItem', () => {
  const props = {
    event: {id: 3},
    sponsorship_offer_item: {
      title: 'An awesome title',
      sponsorship_type: 'talk',
      benefits: 'A short summary',
      amount: '2300',
      slots_available: 4,
      user: {id: 1, email: 'some@one.com'}
    },
    theme: variables,
    user: {id: 1},
    currentUser: {id: 1},
  }

  const wrapper = shallow( <NewSponsorshipOfferItem {...props} /> );

  it('should render correctly', () => {

    // expect(wrapper).toMatchSnapshot()

    expect(wrapper.find(Input).length).toEqual(3);
    expect(wrapper.find(PlogMarkdownEditor).length).toEqual(1);
    expect(wrapper.find(Select).length).toEqual(1);
  })

  describe('when rendering the buttons', () => {
    it('shows only the save button when the sponsorship_offer_item id does not exist', () => {
      expect(wrapper.find(Button).length).toEqual(1);
      expect(wrapper.find(Button).at(0).props().children).toEqual('Save');
    })

    it('shows only the save button when the sponsorship_offer_item id exists', () => {
      const modifiedProps = {...props, sponsorship_offer_item: {...props.sponsorship_offer_item, id: 1} }
      const existingSponsorshipOfferItemWrapper = shallow( <NewSponsorshipOfferItem {...modifiedProps} /> );

      expect(existingSponsorshipOfferItemWrapper.find(Button).length).toEqual(2);
      expect(existingSponsorshipOfferItemWrapper.find(Button).at(0).props().children).toEqual('Save');
      expect(existingSponsorshipOfferItemWrapper.find(Button).at(1).props().children).toEqual('Delete');
    })
  })

  describe('when rendering the form fields', () => {
    it('renders the email input correctly', () => {
      expect(wrapper.find(Input).at(0).props().name).toEqual('title')
      expect(wrapper.find(Input).at(0).props().value).toEqual(props.sponsorship_offer_item.title)
    })

    it('renders the title input correctly', () => {
      expect(wrapper.find(PlogMarkdownEditor).at(0).props().name).toEqual('benefits')
      expect(wrapper.find(PlogMarkdownEditor).at(0).props().value).toEqual(props.sponsorship_offer_item.benefits)
    })

    it('renders the sponsorship_offer_item type select field correctly', () => {
      expect(wrapper.find(Select).at(0).props().name).toEqual('sponsorship_type')
      expect(wrapper.find(Select).at(0).props().value).toEqual(props.sponsorship_offer_item.sponsorship_type)
      expect(wrapper.find(Select).at(0).props().options).toEqual(sponsorshipTypeOptions)
    })

    it('renders the amount input correctly', () => {
      expect(wrapper.find(Input).at(1).props().name).toEqual('amount')
      expect(wrapper.find(Input).at(1).props().value).toEqual(getOriginalCost(props.sponsorship_offer_item.amount))
    })

    it('renders the slots available input correctly', () => {
      expect(wrapper.find(Input).at(2).props().name).toEqual('slots_available')
      expect(wrapper.find(Input).at(2).props().value).toEqual(props.sponsorship_offer_item.slots_available)
    })
  })

  describe('getOriginalCost()', () => {
    const originalCost = 1000
    const amount = originalCost + (originalCost * PLATFORM_COST)
    expect(getOriginalCost(amount, 0)).toEqual(originalCost.toFixed(2))
  })
});
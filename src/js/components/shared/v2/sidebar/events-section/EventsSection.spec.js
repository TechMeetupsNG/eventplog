
import React from 'react';
import EventsSection, {
  generateTitle,
  generateDescription,
  generateMeta
} from './EventsSection';
import { shallow } from 'enzyme';

import Sidebar from 'js/components/shared/v2/sidebar'
import data from 'js/mock-api/data'

describe('Sidebar > EventsSection', () => {
  const { events } = data

  it('should render correctly', () => {
    const wrapper = shallow( <EventsSection events={events} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(Sidebar).length).toEqual(1);
    expect(wrapper.find(Sidebar.Card).length).toEqual(events.data.length);
  })

  it('should pass the right props to children', () => {
    const wrapper = shallow( <EventsSection events={events} />)

    const sidebarCardInstances = wrapper.find(Sidebar.Card)

    const event = events.data[0]
    expect(sidebarCardInstances.at(0).props().title).toEqual(generateTitle(event, event.community))
    expect(sidebarCardInstances.at(0).props().description).toEqual(generateDescription(event.community))
    expect(sidebarCardInstances.at(0).props().featured_image).toEqual(event.featured_image)
    expect(sidebarCardInstances.at(0).props().meta).toEqual(generateMeta(event))
  })
});
import React from 'react'
import { Table, Icon, Menu, Message } from 'semantic-ui-react'
import styled from 'styled-components';
import PageHeader from 'js/components/shared/PageHeader';
import Loading from 'js/components/shared/loading'
import Pagination from 'js/components/shared/pagination'
import GuestRow from './guest-row'

const StyledTable = styled.div`
  padding: 20px 0;
  
  .page-header {
    margin-bottom: 20px;
  }
  
`

const GuestsList = ({
  guests = {},
  getGuests,
  success,
  handleSearch,
  showChildrenSuccess,
}) => {
  const { data = [], meta = {}, loading, error }  = guests
  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />
  const startingIndex = meta.per_page * (meta.current_page - 1)
  return (
    <StyledTable>
      {success && <Message success
                           header='Success!'
                           content={success} />}

      <PageHeader title="Guests" handleSearch={handleSearch} />
      <p>Total no. of guests: {meta && meta.total_count}</p>
      <Table celled unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>S/N</Table.HeaderCell>
            <Table.HeaderCell>Full Name</Table.HeaderCell>
            <Table.HeaderCell>Checked In</Table.HeaderCell>
            <Table.HeaderCell>Feedback</Table.HeaderCell>
            <Table.HeaderCell> </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data && data.map((guest, index) =>
            <GuestRow key={guest.id}
                      guest={guest}
                      index={index + startingIndex}
                      showChildrenSuccess={showChildrenSuccess}
            />
          )}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='5'>
              <Menu floated='right' pagination>
                {
                  meta && meta.total_pages && data.length > 0
                    ? <Pagination totalPages={meta.total_pages}
                                  activePage={meta.current_page}
                                  onPageChange={getGuests} />
                    : ''
                }
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </StyledTable>
  )
}

export default GuestsList
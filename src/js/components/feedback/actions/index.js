import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'
import mockFeedbackApi from 'js/mock-api/feedback-api'

export const mockGetFeedbackReport = (eventId, user) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.FEEDBACK_REPORT_INDEX_START })

    return mockFeedbackApi.create(eventId).then(res => {
      dispatch({type: actionTypes.FEEDBACK_REPORT_INDEX_COMPLETE, payload: {...user}})
      return res;
    })
  }
}

export const getFeedbackReport = (eventId) => {
  let actions = baseActions({
    requestType: actionTypes.FEEDBACK_REPORT_SHOW_START,
    receiveType: actionTypes.FEEDBACK_REPORT_SHOW_COMPLETE,
    failType: actionTypes.FEEDBACK_REPORT_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: {},
    errorMessage: 'Something prevented retrieving a feedback report',
    caller: 'new event',
    route: `/api/v1/web/events/${eventId}/feedback_reports/0`,
    requestMethod: 'GET'
  })
}

export const updateFeedbackReport = (feedback_report) => {
  let actions = baseActions({
    requestType: actionTypes.FEEDBACK_REPORT_UPDATE_START,
    receiveType: actionTypes.FEEDBACK_REPORT_UPDATE_COMPLETE,
    failType: actionTypes.FEEDBACK_REPORT_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: feedback_report,
    errorMessage: 'Something prevented updating a feedback report',
    caller: 'update feedback report',
    route: `/api/v1/web/feedback_reports/${feedback_report.id}`,
    requestMethod: 'PATCH'
  })
}

export const submitFeedback = (feedback) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_FEEDBACK_CREATE_START,
    receiveType: actionTypes.EVENT_FEEDBACK_CREATE_COMPLETE,
    failType: actionTypes.EVENT_FEEDBACK_CREATE_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: feedback,
    errorMessage: 'Something prevented submitting this feedback',
    caller: 'new event',
    route: `/api/v1/web/events/${feedback.event_id}/feedback_responses`,
    requestMethod: 'POST'
  })
}

export const getFeedbackResponses = (params) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_FEEDBACK_RESPONSE_INDEX_START,
    receiveType: actionTypes.EVENT_FEEDBACK_RESPONSE_INDEX_COMPLETE,
    failType: actionTypes.EVENT_FEEDBACK_RESPONSE_INDEX_FAIL
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving feedback responses.',
    caller: 'GET index feedback responses',
    route: `/api/v1/web/events/${params.event_id}/feedback_responses`,
    requestMethod: 'GET'
  })
}
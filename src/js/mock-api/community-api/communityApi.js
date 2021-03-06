import delay from '../delay'
import data from './data'

class CommunityApi {
  static index = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, delay)
    })

  static create = (leadData) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, {id: 2, ...leadData})
    })

  static update = (leadData) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, {id: 1, ...leadData})
    })

  static show = (communityId) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, data.communities.find(c => c.id == communityId))
    })
}

export default CommunityApi
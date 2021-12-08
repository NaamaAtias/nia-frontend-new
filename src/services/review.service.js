import { storageService } from './async-storage.service'
import {userService} from './user.service'

export const reviewService = {
  add,
  query,
  remove
}

function query() {
  return storageService.query('review')
}

function remove(reviewId) {
  return storageService.delete('review', reviewId)

}
async function add(review) {
  review.byUser = userService.getLoggedinUser()
  review.aboutUser = await userService.getById(review.aboutUserId)
  const addedReview = storageService.post('review', review)
  return addedReview
}

// This IIFE functions for Dev purposes 
// It allows testing of real time updates (such as sockets) by listening to storage events
(async () => {
  var reviews = await storageService.query('review')

  // Dev Helper: Listens to when localStorage changes in OTHER browser
  window.addEventListener('storage', async () => {
    console.log('Storage updated');
    const freshReviews = await storageService.query('review')
    if (freshReviews.length === reviews.length + 1 ){
      console.log('Review Added - localStorage updated from another browser')
    }
    reviews = freshReviews
  });
})

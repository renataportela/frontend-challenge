import React from 'react'

import { Box } from '/components/ui'
import { colors } from '/tokens'

const stars = [1,2,3,4,5]

function ReviewStars({ review }) {
  return (
    <Box data-testid="review">
      {stars.map(currentStar => (
        <StarSvg
          key={currentStar}
          isFilled={review > 0 && currentStar <= review}
        />
      ))}
    </Box>
  )
}

function StarSvg({ isFilled = false }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M12 18l-5.26 2.765a1 1 0 01-1.45-1.054l1.004-5.857-4.256-4.148A1 1 0 012.592 8l5.881-.854 2.63-5.329a1 1 0 011.794 0l2.63 5.329 5.88.854a1 1 0 01.555 1.706l-4.256 4.148 1.005 5.857a1 1 0 01-1.451 1.054L12 18z"
          fill={isFilled ? colors.yellow500 : colors.grey300}
        />
      </g>
    </svg>
  )
}

export default ReviewStars

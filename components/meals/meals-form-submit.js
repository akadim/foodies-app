'use client'

import { useFormStatus } from 'react-dom'

const MealsFormSubmit = () => {
  const { peding } = useFormStatus()
  return (
    <button type='submit' disabled={peding}>
      {peding ? 'Submitting...' : 'Share Meal'}
    </button>
  )
}

export default MealsFormSubmit

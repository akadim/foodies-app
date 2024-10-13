'use server'

import { redirect } from 'next/navigation'
import { saveMeal } from './meals'
import { revalidatePath } from 'next/cache'

const isInvalidText = text => {
  return !text || text.trim() === ''
}

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  }

  if (
    isInvalidText(meal.text) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.image) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input.'
    }
  }

  await saveMeal(meal)
  revalidatePath('/meals')
  redirect('/meals')
}

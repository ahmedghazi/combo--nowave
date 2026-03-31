import {defineField} from 'sanity'
import {BiCarousel} from 'react-icons/bi'

export default defineField({
  name: 'sliderHeroVideoUI',
  title: 'Slider Hero Video UI',
  type: 'object',
  icon: BiCarousel,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'items',
      description: 'Slider',
      type: 'array',
      of: [
        {
          type: 'heroVideo',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'items.0.image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        subtitle: 'Slider Hero Video UI',
        media: media,
      }
    },
  },
})

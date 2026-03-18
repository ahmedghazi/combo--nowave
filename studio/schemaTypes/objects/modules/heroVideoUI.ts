import {defineField} from 'sanity'
import {baseLanguage} from '../../locale/supportedLanguages'
import {GoVideo} from 'react-icons/go'

export default defineField({
  name: 'heroVideoUI',
  title: 'Hero Video UI',
  type: 'object',
  icon: GoVideo,
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      description: 'Module title (displayed only in the admin)',
    }),
    defineField({
      name: 'videoLandscape',
      description: 'video fullscreen Landscape',
      type: 'mux.video',
    }),
    defineField({
      name: 'videoPortrait',
      description: 'video fullscreen Portrait',
      type: 'mux.video',
    }),
    defineField({
      name: 'image',
      type: 'image',
      description: 'Image placeholder while video is loading, or fallback',
    }),
    defineField({
      name: 'brand',
      type: 'string',
    }),
    defineField({
      name: 'talent',
      type: 'reference',
      to: [{type: 'talent'}],
    }),
    defineField({
      name: 'date',
      type: 'date',
    }),
  ],

  preview: {
    select: {
      image: 'image',
      title: `title.${baseLanguage}`,
    },
    prepare(selection) {
      const {title, image} = selection
      return {
        title: title,
        subtitle: 'Hero Video UI',
        media: image,
      }
    },
  },
})

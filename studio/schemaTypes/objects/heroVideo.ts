// import {FiImage} from 'react-icons/fi'
import {defineField} from 'sanity'
import {baseLanguage} from '../locale/supportedLanguages'
import {GoVideo} from 'react-icons/go'

export default defineField({
  name: 'heroVideo',
  title: 'Hero Video',
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
      title: `title.${baseLanguage}`,
      media: 'image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
        subtitle: 'Hero Video',
      }
    },
  },
})

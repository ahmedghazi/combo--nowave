import {defineField} from 'sanity'
import {baseLanguage} from '../../locale/supportedLanguages'
import {MdOutlineTitle} from 'react-icons/md'

export default defineField({
  name: 'titleUI',
  title: 'Title UI',
  type: 'object',
  icon: MdOutlineTitle,
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      description: 'Module title (displayed only in the admin)',
    }),
    defineField({
      name: 'backgroundColor',
      type: 'string',
      description: 'Couleur de fond',
    }),
    defineField({
      name: 'foregroundColor',
      type: 'string',
      description: 'Couleur de texte',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Title UI',
      }
    },
  },
})

import {baseLanguage} from '../../locale/supportedLanguages'
import {defineField} from 'sanity'
import {MdGroups2} from 'react-icons/md'

export default {
  name: 'listTalentsUI',
  title: 'list Talents UI',
  type: 'object',
  icon: MdGroups2,
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      title: 'Titre',
    }),
    defineField({
      name: 'gridSize',
      type: 'number',
      initialValue: 3,
      description: 'Items par ligne, par défaut 3',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'talent'}]}],
    }),
    defineField({
      name: 'cta',
      type: 'linkInternal',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      media: 'items.0.imageCover.image',
    },
    prepare(selection: {title: string; media: any}) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
        subtitle: 'List Talents UI',
      }
    },
  },
}

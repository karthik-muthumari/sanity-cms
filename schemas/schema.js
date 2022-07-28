// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name'
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image'
        }
      ]
    },
    {
      name: 'blog',
      type: 'document',
      title: 'Blog',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle'
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug'
        },
        {
          name: 'author',
          type: 'reference',
          to: [{type: 'author'}]
        },
        {
          name: 'dob',
          type: 'datetime',
          title: 'Date of birth',
          validation: Rule => Rule.required()
        },
      ]
    }
  ]),
})

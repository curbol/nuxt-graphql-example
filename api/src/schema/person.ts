import { objectType, extendType } from 'nexus'

const defaultOptions = {
  filtering: true,
  ordering: true,
  pagination: false,
}

const Query = extendType({
  type: 'Query',
  definition(t) {
    t.crud.people(defaultOptions)
    t.float('random', {
      description: 'Random number',
      resolve(root, args, ctx) {
        return Math.random()
      },
    })
  },
})

const Person = objectType({
  name: 'Person',
  definition(t) {
    t.model.id()
    t.model.name()
  },
})

export default [Query, Person]

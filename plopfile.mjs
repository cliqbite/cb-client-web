// validate plop input
const isNotEmptyFor = (fieldName) => (value) =>
  String(value).length > 0 ? true : fieldName + ' is required!'

const prompts = [
  // get name of module
  {
    type: 'input',
    name: 'name',
    message: 'module name',
    validate: isNotEmptyFor('name')
  },
  // get type of file generation
  {
    type: 'list',
    name: 'template_type',
    message: 'choose template',
    default: 'component',
    choices: [
      { name: 'Component', value: 'components' },
      { name: 'Elemental Component', value: 'components/ui' },
      { name: 'Page', value: 'page' }
    ],
    loop: true
  }
]

const actions = (data) => {
  const component_actions = [
    {
      type: 'add',
      path: `src/${data.template_type}/{{name}}/{{camelCase name}}.tsx`,
      templateFile: 'plop-templates/component.template.hbs'
    },
    {
      type: 'add',
      path: `src/${data.template_type}/{{name}}/style.module.scss`,
      templateFile: 'plop-templates/style.template.hbs'
    },
    {
      type: 'add',
      path: `src/${data.template_type}/{{name}}/{{name}}.types.ts`,
      templateFile: 'plop-templates/types.template.hbs'
    }
  ]

  const page_actions = [
    {
      type: 'add',
      path: 'src/app/{{name}}/page.tsx',
      templateFile: 'plop-templates/page.template.hbs'
    },
    {
      type: 'add',
      path: 'src/app/{{name}}/view.tsx',
      templateFile: 'plop-templates/view.template.hbs'
    },
    {
      type: 'add',
      path: 'src/app/{{name}}/page.module.scss',
      templateFile: 'plop-templates/style.template.hbs'
    }
  ]

  const action_sequence = new Map([
    ['components', component_actions],
    ['components/ui', component_actions],
    ['page', page_actions]
  ])

  if (!action_sequence.has(data?.template_type))
    throw Error('invalid module template type')

  return action_sequence.get(data.template_type)
}

export default function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts,
    actions
  })
}

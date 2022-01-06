export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61d65e1f1f0fd024cd044b9c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-b4iisjo9',
                  apiId: '4316b74a-9cc0-492e-8af2-8f2f0f1f8115'
                },
                {
                  buildHookId: '61d65e20c4da380fec856a53',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t5jayt3h',
                  apiId: '5f281e89-f0fc-4e31-9904-1ea44d344b71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BenjaminLevy/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t5jayt3h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

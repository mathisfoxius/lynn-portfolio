export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6095031f562ceb101520f3aa',
                  title: 'Sanity Studio',
                  name: 'lynn-portfolio-studio',
                  apiId: 'b811a2b8-ca8f-43fc-a67f-1c56b973b031'
                },
                {
                  buildHookId: '6095031fc277e31854f0b32f',
                  title: 'Portfolio Website',
                  name: 'lynn-portfolio-web',
                  apiId: '69eea4f8-52a6-40f4-871c-157dbabede4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mathisfoxius/lynn-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://lynn-portfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

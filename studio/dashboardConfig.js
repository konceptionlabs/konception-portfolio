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
                  buildHookId: '5d50d2c31109a87f9a35dc8a',
                  title: 'Sanity Studio',
                  name: 'konception-portfolio-studio',
                  apiId: '8282de9b-dabe-483f-b8d2-083ec2e3c3c0'
                },
                {
                  buildHookId: '5d50d2c36fdf74f7a323a41c',
                  title: 'Portfolio Website',
                  name: 'konception-portfolio',
                  apiId: '46d27194-a612-4a04-aab2-568ac37ad1e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/konceptionlabs/konception-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://konception-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}

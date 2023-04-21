// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Кирило',
    lastname: 'Якубов',
    address: '742 Evergreen Terrace, UA 58003',
  },

  job: {
    position: 'Junior Fullstack JS Developer',
    salary: '$600/mo',
  },
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkDin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
        experience in development. Whenever I start to
        work on a new project I learn the domain and try
        to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other Experience',
        text: `Pet project for parsing sport betting data from
        different platforms ( odds ) and sport statistics
        ( tournament position, goals etc), analyzing by
        simple mathematics models and preparing
        probability for such events like: money line -
        first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
}),
  // ================================================================

  //              ↙ тут вводимо шлях (PATH) до сторінки
  router.get('/skills', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
      page: {
        title: 'Resume | Skills',
      },

      header,

      main: {
        skills: [
          {
            name: 'HTML',
            points: 8,
            isTop: true,
          },
          {
            name: 'Handlebars',
            points: 3,
            isTop: false,
          },
          {
            name: 'VS Code & NPM',
            points: 6,
          },
          {
            name: 'Git & Terminal',
            points: 10,
            isTop: true,
          },
          {
            name: 'ReactJS',
            points: 0,
          },
          {
            name: 'PHP',
            points: null,
          },
        ],

        hobbies: [
          {
            name: 'Nature',
            isMain: true,
          },
          {
            name: 'Movies',
            isMain: false,
          },
          {
            name: 'Guitar',
            isMain: true,
          },
        ],
      },

      footer,
    })
  }),
  // ================================================================

  //              ↙ тут вводимо шлях (PATH) до сторінки
  router.get('/education', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
      page: {
        title: 'Resume | Education',
      },

      header,

      main: {
        educations: [
          {
            name: 'Phoenix University',
            isEnd: false,
          },
          {
            name: 'BCF Academy',
            isEnd: true,
          },
          {
            name: 'NJ City University',
            isEnd: true,
          },
          {
            name: 'BC College',
            isEnd: true,
          },
        ],

        certificates: [
          {
            name: 'Associate in Arts',
            id: '2543',
          },
          {
            name: 'Bachelors in Information Technology',
            id: '3378',
          },
          {
            name: 'NJ DFS FI License ',
            id: '1223',
          },
        ],
      },

      footer,
    })
  }),
  // ================================================================

  //              ↙ тут вводимо шлях (PATH) до сторінки
  router.get('/work', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('work', {
      layout: 'big',

      page: {
        title: 'Resume | Work',
      },

      header,

      main: {
        work: [
          {
            position: 'Junior Fullstack Developer',
            company: {
              name: 'IT BRAINS',
              url: null,
            },
            duration: {
              from: '10.10.2022',
              to: null,
            },
            projectAmount: 3,

            projects: [
              {
                name: 'Resume',
                url: 'https://resume.com.ua/',
                about: `Classroom Instruction-Based App simulating a navigatable student resume.`,
                stackAmount: 3,
                stack: [
                  {
                    name: 'React,js',
                  },
                  {
                    name: 'HTML / CSS',
                  },
                  {
                    name: 'Node.js',
                  },
                ],

                awardAmount: 2,
                awards: [
                  {
                    name: `JavaScript Async Master Award - 
                    is a distinguished honor bestowed upon developers 
                    who have demonstrated exceptional proficiency in 
                    handling asynchronous operations in JavaScript.`,
                  },
                  {
                    name: `The HTML5 Semantics Champion Award - 
                    honors individuals or teams who have employed 
                    HTML5's advanced semantic features, such as 
                    <article>, <nav>, <header>, <footer>, and <aside>, 
                    to build websites that are not only visually appealing 
                    but also highly functional and accessible to users and 
                    search engines alike. `,
                  },
                ],
              },
            ],
          },
        ],
      },

      footer,
    })
  }),
  //              ↙ тут вводимо шлях (PATH) до сторінки
  router.get('/person', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('person', {
      layout: 'person',

      person: {
        name: 'Emma Johnson',
        age: 32,
        gender: 'Female',
        address: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zip: '10001',
          country: 'USA',
        },
        education: [
          {
            degree: 'Bachelor of Science',
            major: 'Computer Science',
            university:
              'Massachusetts Institute of Technology',
            graduationYear: 2012,
          },
        ],
        workExperience: [
          {
            company: 'Google',
            title: 'Software Engineer',
            startDate: '2012-06-01',
            endDate: '2016-12-31',
            responsibilities: [
              'Developed new features for Google Maps',
              'Worked on improving search algorithms',
            ],
            year_founded: 1990,
            industry: 'Technology',
            employees: [
              {
                name: 'John Smith',
                position: 'CEO',
                department: 'Executive',
                projects: [
                  {
                    name: 'Project Alpha',
                    description:
                      'Developing new software platform',
                    status: 'In Progress',
                    teams: [
                      {
                        team_name: 'Awesome Team',
                        team_leader: {
                          name: 'John Smith',
                          title: 'Team Leader',
                          email: 'john.smith@example.com',
                        },
                        team_members: [
                          {
                            name: 'Alice Johnson',
                            title: 'Software Engineer',
                            email:
                              'alice.johnson@example.com',
                            skills: [
                              'Java',
                              'Python',
                              'SQL',
                            ],
                            projects: [
                              {
                                name: 'Project A',
                                description:
                                  'Lorem ipsum dolor sit amet',
                                technologies: [
                                  'Java',
                                  'Spring Framework',
                                ],
                                team_members: [
                                  {
                                    name: 'Bob Lee',
                                    title:
                                      'Software Engineer',
                                  },
                                  {
                                    name: 'Cindy Chen',
                                    title: 'UI Designer',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    })
  })
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router

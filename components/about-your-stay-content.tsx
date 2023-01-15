

import React from "react";

const posts = [
    {
      title: 'Diner à Sa Platgeta',
      href: '#',
      category: { name: 'Article', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: 'Sept 1, 2023',
      datetime: '2023-09-01 21:00:00',
      locationUrl: 'https://goo.gl/maps/8xVrPJYV1TjcdtAq8',
      jsonAddToCal: {
        "name":"Reminder to star the add to calendar button repo",
        "description":"Check out the maybe easiest way to include add to calendar buttons to your website at:<br>→ [url]https://github.com/add2cal/add-to-calendar-button[/url]",
        "startDate":"2023-02-14",
        "endDate":"2023-02-14",
        "startTime":"10:15",
        "endTime":"23:30",
        "location":"World Wide Web",
        "options":[
            "Apple",
            "Google",
            "iCal",
            "Microsoft365",
            "MicrosoftTeams",
            "Outlook.com",
            "Yahoo"
        ],
        "timeZone":"Europe/Berlin",
        "iCalFileName":"Reminder-Event"
    },
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      category: { name: 'Video', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      locationUrl: 'https://goo.gl/maps/Y4YC9dukA9RwK6gA7',
      jsonAddToCal: {
        "name":"Reminder to star the add to calendar button repo",
        "description":"Check out the maybe easiest way to include add to calendar buttons to your website at:<br>→ [url]https://github.com/add2cal/add-to-calendar-button[/url]",
        "startDate":"2023-02-14",
        "endDate":"2023-02-14",
        "startTime":"10:15",
        "endTime":"23:30",
        "location":"World Wide Web",
        "options":[
            "Apple",
            "Google",
            "iCal",
            "Microsoft365",
            "MicrosoftTeams",
            "Outlook.com",
            "Yahoo"
        ],
        "timeZone":"Europe/Berlin",
        "iCalFileName":"Reminder-Event"
    },
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Improve your customer experience',
      href: '#',
      category: { name: 'Case Study', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      locationUrl: 'https://goo.gl/maps/DrHbjT5AFZp2eorS8',
      jsonAddToCal: {
            "name":"Reminder to star the add to calendar button repo",
            "description":"Check out the maybe easiest way to include add to calendar buttons to your website at:<br>→ [url]https://github.com/add2cal/add-to-calendar-button[/url]",
            "startDate":"2023-02-14",
            "endDate":"2023-02-14",
            "startTime":"10:15",
            "endTime":"23:30",
            "location":"World Wide Web",
            "options":[
                "Apple",
                "Google",
                "iCal",
                "Microsoft365",
                "MicrosoftTeams",
                "Outlook.com",
                "Yahoo"
            ],
            "timeZone":"Europe/Berlin",
            "iCalFileName":"Reminder-Event"
        },
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  

const iOutput = (i) => {
let out = ""
if(i % 2==0){

    //The number is even
    }
    else {
    
    out += "-reverse"
    }
    return out
}


export default function AboutYourStayContent() {
    return (
        <div className="relative bg-opacity-0 px-6 pt-10 pb-20 lg:px-8 lg:pt-10 lg:pb-28">

        <div className="relative mx-auto max-w-7xl">

            <div className="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-1">
            {posts.map((post, i) => {
                const tmp = iOutput(i)
                const clName = "flex flex-row" + tmp + " overflow-hidden rounded-lg shadow-lg"
                console.log(clName)
                return (
                    <div key={post.title} className={clName}>
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex-1">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={post.datetime}>{post.datetime}</time>
                                            <span aria-hidden="true">&middot;</span>
                                            <a href={post.locationUrl}>Lieu</a>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-3 text-base text-gray-500">{post.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        </div>
    )
}

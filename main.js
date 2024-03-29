function randomColor () {
    const colors = ['#1543', '#968', '#833', '#681', '#543', '#3918', '#3360']
    const randValue = Math.floor(Math.random() * Math.floor(6))
    return colors[randValue]
}

function handleLoad () {
    // loading the data
    const masterData = dataFeed()
    masterData.section_name.map((list, index) => {
        const wrapper = document.querySelector('.wrapper')
        const sectionWrapper = document.querySelector('.sectionWrapper')
        const sections = document.createElement('div')
        const parIndex = index + 1
        sections.setAttribute('tabindex', parIndex * 100)
        sections.classList.add('sections')
        // Creating the title
        const title = document.createElement('h5')
        title.innerHTML = list.title
        sections.appendChild(title)
        // creating the scroller
        const scroller = document.createElement('div')
        scroller.classList.add('scroller')
        const tabindex = parIndex * 10
        list.data.map((child, index) => {
            // creating the name
            const name = document.createElement('div')
            name.setAttribute('tabindex', index + tabindex)
            name.style.backgroundColor = randomColor()
            name.classList.add('name')

            // Listen to Click/ select event
            name.addEventListener('click', (e) => {
                e.stopPropagation()
                e.target.focus()
                window.alert(`Title: ${child.name}.`)

            })

            // Listen to focus event
            name.addEventListener('focus', (e) => {
                const description = document.querySelector('#description')
                description.innerHTML = `<h2>Title: ${child.name}.</h2>`
                description.innerHTML += ` Story in brief: ${child.story !== '' ? child.story : 'Sorry no story to display.'}`

            })

            // Listen to hover event
            name.addEventListener('mouseover', (e) => {
                const description = document.querySelector('#description')
                description.innerHTML = `<h2>Title: ${child.name}.</h2>`
                description.innerHTML += ` Story in brief: ${child.story !== '' ? child.story : 'Sorry no story to display.'}`

            })

      
            const image = document.createElement('img')
            const url = child.poster_url.replace(/'\'/g, '')
            image.setAttribute('src', url)
            image.style.width = '140px'
            image.style.height = '120px'

            name.appendChild(image)
            scroller.appendChild(name)
        })
        sections.appendChild(scroller)
        sectionWrapper.appendChild(sections)

        // on load setting the focus to the first block
        onLoadSectionFocus()
    })


function onLoadSectionFocus () {
  const sections = document.querySelectorAll('.sections')
  sections[0].focus()
  localStorage.setItem('lastFocus', sections[0].tabIndex)
}

const scrollers = document.querySelectorAll('.scroller')
scrollers.forEach(scroller => {
    scroller.addEventListener('click', (e) => {
        e.target.focus()
    })
})

// listen key events
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) {
    setTileFocus(e, 37)
    e.preventDefault()
  } else if (e.keyCode === 38) {
    setSectionFocus(e, 38)
    e.preventDefault()
  } else if (e.keyCode === 39) {
    setTileFocus(e, 39)
    e.preventDefault()
  } else if (e.keyCode === 40) {
    setSectionFocus(e, 40)
    e.preventDefault()
  }
})

// handle row focus
function setSectionFocus (e, key) {
  if (!document.activeElement.classList.contains('sections')) {
    const last = document.querySelector(`[tabindex ='${localStorage.getItem('lastFocus')}']`)
    last.focus()
  }
  if (key === 40 && e.target.nextSibling && e.target.nextSibling.classList.contains('sections')) {
    e.target.nextSibling.focus()
    localStorage.setItem('lastFocus', e.target.nextSibling.tabIndex)
  } else if (key === 38 && e.target.previousSibling && e.target.previousSibling.classList && e.target.previousSibling.classList.contains('sections')) {
    e.target.previousSibling.focus()
    localStorage.setItem('lastFocus', e.target.previousSibling.tabIndex)
  }
}

// handle tile focus
function setTileFocus (e, key) {
  if (document.activeElement.classList.contains('sections')) {
    const tiles = document.activeElement.querySelectorAll('.name')
    tiles[0].focus()
  }
  if (key === 37 && e.target.previousSibling && e.target.previousSibling.classList.contains('name')) {
    e.target.previousSibling.focus()
  } else if (key === 39 && e.target.nextSibling && e.target.nextSibling.classList && e.target.nextSibling.classList.contains('name')) {
    e.target.nextSibling.focus()
  }
}

}
function dataFeed () {
    const data = {
        "code": 200,
        "status": "OK",
        "banner_section_list": [
          {
            "image_path": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/studio_banner\/39538\/original\/0LibLqi_1560508655.jpg",
            "banner_url": "",
            "banner_permalink": "",
            "banner_type": "0",
            "other_sub_type": "",
            "web_link": "",
            "banner_text": "",
            "content_types_id": "",
            "title": ""
          },
          {
            "image_path": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/studio_banner\/39538\/original\/2015_avengers_2_age_of_ultron_1560508794.jpg",
            "banner_url": "",
            "banner_permalink": "",
            "banner_type": "0",
            "other_sub_type": "",
            "web_link": "",
            "banner_text": "",
            "content_types_id": "",
            "title": ""
          },
          {
            "image_path": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/studio_banner\/39538\/original\/avengers-endgame-3203x1872-avengers-4-hd-16872_1560508852.jpg",
            "banner_url": "",
            "banner_permalink": "",
            "banner_type": "0",
            "other_sub_type": "",
            "web_link": "",
            "banner_text": "",
            "content_types_id": "",
            "title": ""
          },
          {
            "image_path": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/studio_banner\/39538\/original\/The-Lord-Of-The-Rings-Banner-1-1_1560509110.jpg",
            "banner_url": "",
            "banner_permalink": "",
            "banner_type": "0",
            "other_sub_type": "",
            "web_link": "",
            "banner_text": "",
            "content_types_id": "",
            "title": ""
          },
          {
            "image_path": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/studio_banner\/39538\/original\/wp3891863_1560509222.jpg",
            "banner_url": "",
            "banner_permalink": "",
            "banner_type": "0",
            "other_sub_type": "",
            "web_link": "",
            "banner_text": "",
            "content_types_id": "",
            "title": ""
          },
          {
            "image_path": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/studio_banner\/39538\/original\/491326_1560836584.jpg",
            "banner_url": "",
            "banner_permalink": "",
            "banner_type": "0",
            "other_sub_type": "",
            "web_link": "",
            "banner_text": "",
            "content_types_id": "",
            "title": ""
          },
          {
            "image_path": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/studio_banner\/39538\/original\/Hd-Wallpaper-Of-Cartoon-Movies-Brave-Full-Pics-Princess-Merida-Animation-Disney-Computer_1560836641.jpg",
            "banner_url": "",
            "banner_permalink": "",
            "banner_type": "0",
            "other_sub_type": "",
            "web_link": "",
            "banner_text": "",
            "content_types_id": "",
            "title": ""
          }
        ],
        "banner_text": "",
        "is_featured": 1,
        "section_count": 3,
        "section_name": [
          {
            "studio_id": "39538",
            "language_id": "20",
            "title": "Feature Content",
            "section_id": "8284",
            "section_type": "0",
            "total": "8",
            "data": [
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "351a37308483dd219dbf4249c41c02b4",
                "movie_id": "179675",
                "movie_stream_id": "368297",
                "muvi_uniq_id": "39df14b382167d69d9bd50555ec03f12",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "hook-up-song-making-student-of-the-year-2-tiger-shroff-alia-vishal-and-shekhar-neha",
                "name": "Hook Up Song - Making | Student Of The Year 2 | Tiger Shroff & Alia | Vishal and Shekhar | Neha",
                "full_movie": "Hook_Up_Song___Making___Student_Of_The_Year_2___Tiger_Shroff___Alia___Vishal_and_Shekhar___Neha.mp4",
                "story": "Lorem Ipsum",
                "genre": [
                  "DRAMA"
                ],
                "censor_rating": "",
                "release_date": "2019-06-12",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:01:02",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/295048\/standard\/335a4472e146763440a3929ea745c1cc_1560502241.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/351a37308483dd219dbf4249c41c02b4",
                "viewStatus": {
                  "viewcount": "122",
                  "uniq_view_count": "2"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/295049\/original\/275056545a19106b4067618a9efad05f.jpeg",
                "banner": "",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "63fafc041e2c665af906f73ac78bcb9f",
                "movie_id": "174612",
                "movie_stream_id": "361260",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Hulk",
                "full_movie": "Hook_Up_Song___Making___Student_Of_The_Year_2___Tiger_Shroff___Alia___Vishal_and_Shekhar___Neha.mp4",
                "story": "The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "02:13:37",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/285686\/episode\/106955_1558173838.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/63fafc041e2c665af906f73ac78bcb9f",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296272\/original\/106972.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "a478f0c72eb5e66bf42ba627693638a7",
                "movie_id": "174612",
                "movie_stream_id": "360807",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Avengers Series",
                "full_movie": "",
                "story": "The Avengers premiered at Hollywood's El Capitan Theatre on April 11, 2012, and was released in the United States on May 4, 2012. The film received praise for Whedon's direction and screenplay, visual effects, action sequences, acting, and musical score, and garnered numerous awards and nominations including Academy Award and BAFTA nominations for achievements in visual effects. It set or tied numerous box office records, including the biggest opening weekend in the United States and Canada. The Avengers grossed over $1.5 billion worldwide and became the third-highest-grossing film of all time, as well as the highest-grossing film of 2012. It is the first Marvel production to generate $1 billion in ticket sales. In 2017, it was featured as one of the 100 greatest films of all time in Empire magazine's poll of The 100 Greatest Movies.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "2019-05-16",
                "content_types_id": "3",
                "is_converted": "0",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284944\/standard\/avengers-endgame-3203x1872-avengers-4-hd-16872_1557989132.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/a478f0c72eb5e66bf42ba627693638a7",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284945\/original\/avengers-endgame-3203x1872-avengers-4-hd-16872.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "b8abffd465f927c80ec0367f51523b8e",
                "movie_id": "174612",
                "movie_stream_id": "360837",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Captain America",
                "full_movie": "",
                "story": "After Steve Rogers decides to volunteer as a guinea pig in an experiment, his weak body is fully enhanced. A secret Nazi organisation tries to exploit the technology and he must stand against them.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:01:09",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284983\/episode\/the_avengers_captain_america_1557991204.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/b8abffd465f927c80ec0367f51523b8e",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284984\/original\/the_avengers_captain_america.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 0
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "180732cc22616812884dcd703d39f36c",
                "movie_id": "180264",
                "movie_stream_id": "369180",
                "muvi_uniq_id": "2772397a515ccee83bdd8916299dafa6",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "brave-girl",
                "name": "Brave Girl",
                "full_movie": "Brave___Best_Scenes.mp4",
                "story": "Merida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\n\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\n",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "2019-06-18",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:27:42",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296281\/standard\/brave-2012-movie-cartoon-background-tablet--1-_1560835124.jpeg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/180732cc22616812884dcd703d39f36c",
                "viewStatus": {
                  "viewcount": "141",
                  "uniq_view_count": "2"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296282\/original\/4.jpeg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296283\/original\/2_1560835274.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "d207f871140f6ba7faf13430e829dcc9",
                "movie_id": "180269",
                "movie_stream_id": "369186",
                "muvi_uniq_id": "e71dc50197646ea25b01ec4772a978fc",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "the-frozen",
                "name": "The Frozen",
                "full_movie": "Disney_s_Frozen_Official_Trailer.mp4",
                "story": "Frozen is a 2013 American 3D computer-animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures. The 53rd Disney animated feature film, it is inspired by Hans Christian Andersen's fairy tale \"The Snow Queen\".",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "2019-06-04",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:02:32",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296292\/standard\/1_1560836188.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/d207f871140f6ba7faf13430e829dcc9",
                "viewStatus": {
                  "viewcount": "25",
                  "uniq_view_count": "2"
                },
                "custom_meta_data": "",
                "rating": "3.5",
                "review": "1",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296293\/original\/491326.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296294\/original\/downlod_1560836317.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "d325e143b8411b5766969dd9dff5d687",
                "movie_id": "185534",
                "movie_stream_id": "377182",
                "muvi_uniq_id": "43a4e3d9d1a3fa4b2bb466b3d5b6cc86",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "bekhayali-acoustic-dhvani-bhanushali-version-soft-rock-sachet-parampara-kabir-singh",
                "name": "Bekhayali Acoustic ¦ Dhvani Bhanushali Version (Soft Rock) Sachet-Parampara ¦ Kabir Singh",
                "full_movie": "Bekhayali_Acoustic___Dhvani_Bhanushali_Version__Soft_Rock__Sachet_Parampara___Kabir_Singh.mp4",
                "story": "Lorem Ipsum",
                "genre": [
                  "DRAMA"
                ],
                "censor_rating": "",
                "release_date": "2019-06-06",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:03:09",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/cms.muvi.com\/img\/no-image.png",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/d325e143b8411b5766969dd9dff5d687",
                "viewStatus": {
                  "viewcount": "60",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "",
                "banner": "",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "c5708f447186d5fad2f97017e9db0c57",
                "movie_id": "180274",
                "movie_stream_id": "369192",
                "muvi_uniq_id": "9fb162483cdea411e79e899cf9bb71cc",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "the-frozen-ii",
                "name": "The Frozen II",
                "full_movie": "Frozen_2_Official_Trailer.mp4",
                "story": "Elsa the Snow Queen and her sister Anna embark on an adventure far away from the kingdom of Arendelle. They are joined by friends, Kristoff, Olaf, and Sven.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "",
                "release_date": "2019-06-19",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:01:53",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296303\/standard\/Frozen-2-HD-Wallpapers-39645_1560838100.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/c5708f447186d5fad2f97017e9db0c57",
                "viewStatus": {
                  "viewcount": "2",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296304\/original\/Frozen-2-HD-Wallpapers-39645.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296306\/original\/wp3968983_1560838341.jpg",
                "is_media_published": 1
              }
            ]
          },
          {
            "studio_id": "39538",
            "language_id": "20",
            "title": "Auto Generated",
            "section_id": "9225",
            "section_type": "0",
            "total": "17",
            "data": [
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "a478f0c72eb5e66bf42ba627693638a7",
                "movie_id": "174612",
                "movie_stream_id": "360807",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Avengers Series",
                "full_movie": "",
                "story": "The Avengers premiered at Hollywood's El Capitan Theatre on April 11, 2012, and was released in the United States on May 4, 2012. The film received praise for Whedon's direction and screenplay, visual effects, action sequences, acting, and musical score, and garnered numerous awards and nominations including Academy Award and BAFTA nominations for achievements in visual effects. It set or tied numerous box office records, including the biggest opening weekend in the United States and Canada. The Avengers grossed over $1.5 billion worldwide and became the third-highest-grossing film of all time, as well as the highest-grossing film of 2012. It is the first Marvel production to generate $1 billion in ticket sales. In 2017, it was featured as one of the 100 greatest films of all time in Empire magazine's poll of The 100 Greatest Movies.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "2019-05-16",
                "content_types_id": "3",
                "is_converted": "0",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284944\/standard\/avengers-endgame-3203x1872-avengers-4-hd-16872_1557989132.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/a478f0c72eb5e66bf42ba627693638a7",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284945\/original\/avengers-endgame-3203x1872-avengers-4-hd-16872.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "883aa850dc8fb83c3549aa27ca886ee5",
                "movie_id": "174612",
                "movie_stream_id": "360814",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Thor and Loki",
                "full_movie": "",
                "story": "Thor is exiled by his father Odin, the King of Asgard, to the Earth to live among mortals. When he lands on Earth, his trusted weapon Mjolnir is discovered and captured by S.H.I.E.L.D.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:02:26",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284952\/episode\/2-1510756205110_1557988475.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/883aa850dc8fb83c3549aa27ca886ee5",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284953\/original\/thor-wallpapers-60311-6711000.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "c1fe507e667040871e8d59608c0bc074",
                "movie_id": "174612",
                "movie_stream_id": "360824",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Hawkeye",
                "full_movie": "",
                "story": "Hawkeye is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Don Heck, the character first appeared as a villain in Tales of Suspense and later joined the Avengers in The Avengers. He has been a prominent member of the team ever since.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:02:24",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284962\/episode\/hawkeye_in_the_avengers_1557988854.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/c1fe507e667040871e8d59608c0bc074",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284963\/original\/hawkeye_in_the_avengers.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "b8abffd465f927c80ec0367f51523b8e",
                "movie_id": "174612",
                "movie_stream_id": "360837",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Captain America",
                "full_movie": "",
                "story": "After Steve Rogers decides to volunteer as a guinea pig in an experiment, his weak body is fully enhanced. A secret Nazi organisation tries to exploit the technology and he must stand against them.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:01:09",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284983\/episode\/the_avengers_captain_america_1557991204.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/b8abffd465f927c80ec0367f51523b8e",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284984\/original\/the_avengers_captain_america.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 0
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "63fafc041e2c665af906f73ac78bcb9f",
                "movie_id": "174612",
                "movie_stream_id": "361260",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Hulk",
                "full_movie": "",
                "story": "The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "02:13:37",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/285686\/episode\/106955_1558173838.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/63fafc041e2c665af906f73ac78bcb9f",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296272\/original\/106972.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "b338333011ccf04454a2289a2932dc3e",
                "movie_id": "176529",
                "movie_stream_id": "364167",
                "muvi_uniq_id": "51b1310a17d16ac87c0b5a2bcc77a25f",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "england-v-pakistan-4th-odi-2019-highlights",
                "name": "England v Pakistan 4th ODI 2019 - Highlights",
                "full_movie": "Brilliant_Stokes___Roy_Guide_England_to_Series_Win___England_v_Pakistan_4th_ODI_2019___Highlights.mp4",
                "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor augue nulla, vel pulvinar elit sodales vel. Etiam auctor varius ligula, in viverra mi tincidunt eu. Suspendisse in laoreet est. Morbi ultrices faucibus justo, a iaculis erat dapibus vel. Donec pellentesque nibh est. Nam efficitur lacus elit. Ut pretium lectus non dignissim rutrum. Curabitur ac luctus elit. Etiam consectetur commodo eros id varius. Donec egestas maximus arcu nec rutrum. Cras laoreet sollicitudin odio vitae malesuada. Curabitur ut semper lacus.\r\n\r\nInteger ullamcorper, nunc at porta egestas, ex lacus faucibus turpis, id egestas dui ex eget arcu. Aliquam eget blandit ex. Etiam nibh dui, malesuada eu elementum et, facilisis non est. Maecenas et bibendum odio, in fermentum sem. Suspendisse cursus feugiat hendrerit. Quisque tristique sem ut nisi scelerisque laoreet. In semper dignissim ante, ac mattis nunc vehicula a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum quis dapibus dui. Nulla facilisis sem metus, mollis lacinia diam vestibulum ac. Integer commodo est eget sollicitudin aliquam. Maecenas vel dui nunc. Vivamus faucibus augue ac cursus porttitor.\r\n\r\nNullam vel elit vel felis tincidunt facilisis. Proin et condimentum ligula, vitae viverra ipsum. Sed facilisis urna ut erat pulvinar lobortis. Vestibulum gravida quam non lectus pulvinar, a volutpat purus tempus. Curabitur lacus mi, tempus id tempus in, molestie quis leo. Donec justo ligula, porttitor ut mattis nec, vehicula vitae eros. Nullam dapibus massa id ultricies tempor. Aliquam elementum diam vel pulvinar aliquam. Mauris et elit a dolor fringilla consectetur vel ullamcorper eros. Vivamus eget metus ac eros interdum luctus vel vitae ante. Integer laoreet id mi blandit viverra. Aenean nec est sollicitudin, venenatis leo vel, feugiat neque.",
                "genre": [
                  "DOCUMENTARY"
                ],
                "censor_rating": "",
                "release_date": "2019-05-27",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:05:21",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289412\/standard\/cricket_1559049840.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/b338333011ccf04454a2289a2932dc3e",
                "viewStatus": {
                  "viewcount": "654",
                  "uniq_view_count": "4"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289413\/original\/cricket2.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296372\/original\/1600x900-wallpaper-31_1560850099.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "158eb259b2f3782c442a932bb7d76b19",
                "movie_id": "176745",
                "movie_stream_id": "364466",
                "muvi_uniq_id": "a872b5beb3c6143a90d1eff13159f48d",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "the-big-bang-theory",
                "name": "The Big Bang Theory",
                "full_movie": "",
                "story": "A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.",
                "genre": [
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "2007-01-01",
                "content_types_id": "3",
                "is_converted": "0",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289830\/standard\/tbbt_1559137760.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/158eb259b2f3782c442a932bb7d76b19",
                "viewStatus": {
                  "viewcount": "301",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289831\/original\/tbbt.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289840\/original\/tbbt_1559138003.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "455dcbe971b6368bfce15f56a95f0743",
                "movie_id": "176745",
                "movie_stream_id": "364472",
                "muvi_uniq_id": "a872b5beb3c6143a90d1eff13159f48d",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "the-big-bang-theory",
                "name": "The Decision Reverberation",
                "full_movie": "",
                "story": "Koothrappali is worried people won't take him seriously in his own field after publishing a paper that suggests he may have discovered alien life; Leonard wants to be the principal investigator on a plasma physics study.",
                "genre": [
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:19:07",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289841\/episode\/tbbt2_1559138175.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/455dcbe971b6368bfce15f56a95f0743",
                "viewStatus": {
                  "viewcount": "301",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289842\/original\/tbbt2.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289840\/original\/tbbt_1559138003.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "ec0d87b55e22c5625ce4c93097c9b252",
                "movie_id": "174612",
                "movie_stream_id": "367623",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Captain Marvel",
                "full_movie": "",
                "story": "Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:02:18",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/294136\/episode\/captain_marvel_poster_1688.1537366019_1560257405.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/ec0d87b55e22c5625ce4c93097c9b252",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/294851\/original\/download.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "61a93c029ab9e32bf9ee2ef76782f98c",
                "movie_id": "174612",
                "movie_stream_id": "367636",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Black Widow",
                "full_movie": "",
                "story": "Natasha Alianovna Romanova, colloquial: Black Widow is a fictional superhero appearing in American comic books published by Marvel Comics. Created by editor and plotter Stan Lee, scripter Don Rico, and artist Don Heck, the character debuted in Tales of Suspense ",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/294154\/episode\/69369_v9_bb_1560261142.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/61a93c029ab9e32bf9ee2ef76782f98c",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/294152\/original\/download--1-.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "2e844989c1b83c297159bb9f354b3669",
                "movie_id": "174495",
                "movie_stream_id": "360600",
                "muvi_uniq_id": "fc06ef1343a77ebe7675c1344e47dadc",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "the-martian-3",
                "name": "Martian Episode 1",
                "full_movie": "",
                "story": "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
                "genre": "",
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284625\/episode\/chudaku-2.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/2e844989c1b83c297159bb9f354b3669",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296321\/original\/6983664-cute-nature.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284624\/original\/banner.jpg",
                "is_media_published": 1
              }
            ]
          },
          {
            "studio_id": "39538",
            "language_id": "20",
            "title": "Testing Purpose",
            "section_id": "10898",
            "section_type": "0",
            "total": "27",
            "data": [
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "f0bb9e2cc06fed5f0c5ede028dd154ce",
                "movie_id": "179194",
                "movie_stream_id": "367622",
                "muvi_uniq_id": "30256b210cd1c8d7b36b74fb7f1719ff",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "demo-livestream",
                "name": "Demo livestream",
                "full_movie": "",
                "story": "Testing purpose only",
                "genre": "",
                "censor_rating": "",
                "release_date": "2019-06-01",
                "content_types_id": "4",
                "is_converted": "0",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296371\/episode\/Chemistry_197592_1560849919.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/f0bb9e2cc06fed5f0c5ede028dd154ce",
                "viewStatus": {
                  "viewcount": "1",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/294134\/original\/chem3.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296370\/original\/header_AdobeStock_142533655_1560849898.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "95f37685cd9893ede407fec3537c710a",
                "movie_id": "174492",
                "movie_stream_id": "360596",
                "muvi_uniq_id": "776a0979b67ef6b0fd349e82a3b4da6a",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "sicario-3",
                "name": "Sicario",
                "full_movie": "small.mp4",
                "story": "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
                "genre": "",
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284618\/standard\/3.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/95f37685cd9893ede407fec3537c710a",
                "viewStatus": {
                  "viewcount": "1",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296343\/original\/691866.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284619\/original\/banner.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "e0477715bb3705ddc165b41d38224b9a",
                "movie_id": "174493",
                "movie_stream_id": "360597",
                "muvi_uniq_id": "06a9c935fd333af996e40ff6833a40df",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "the-last-witch-hunter-2",
                "name": "The Last Witch Hunter",
                "full_movie": "Achayans_Malayalam_Movie_Official_Trailer___Jayaram__Unni_Mukundan__Prakash_Raj___Amala_Paul.mp4",
                "story": "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
                "genre": "",
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284620\/standard\/5.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/e0477715bb3705ddc165b41d38224b9a",
                "viewStatus": {
                  "viewcount": "1",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296368\/original\/0b8b1a87-da41-4727-ba72-d6c05fc70e60.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284621\/original\/banner.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "ba59b01b842da42314eb2ebf7c231553",
                "movie_id": "174494",
                "movie_stream_id": "360598",
                "muvi_uniq_id": "290ed5af5e877f64030082290293ca48",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "test-12",
                "name": "Test",
                "full_movie": "Test.mp4",
                "story": "testing",
                "genre": "",
                "censor_rating": "&nbsp;",
                "release_date": "2016-07-01",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284622\/standard\/pixels_2015_movie_posters_05_1522237760.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/ba59b01b842da42314eb2ebf7c231553",
                "viewStatus": {
                  "viewcount": "1",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296323\/original\/mtHN9DI.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296322\/original\/ThinkstockPhotos-658148844_1560841437.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "2e844989c1b83c297159bb9f354b3669",
                "movie_id": "174495",
                "movie_stream_id": "360600",
                "muvi_uniq_id": "fc06ef1343a77ebe7675c1344e47dadc",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "the-martian-3",
                "name": "Martian Episode 1",
                "full_movie": "Test.mp4",
                "story": "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
                "genre": "",
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284625\/episode\/chudaku-2.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/2e844989c1b83c297159bb9f354b3669",
                "viewStatus": {
                  "viewcount": "1",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296321\/original\/6983664-cute-nature.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284624\/original\/banner.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "56cdf155b17bd96d76b7c83482b7ff76",
                "movie_id": "174510",
                "movie_stream_id": "360619",
                "muvi_uniq_id": "8b950025ff91a89a1361ad28a5804c6c",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "the-avengers",
                "name": "The Avengers",
                "full_movie": "Marvel_Studios__Avengers__Infinity_War_Official_Trailer.mp4",
                "story": "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.[N 1] It is the sixth film in the Marvel Cinematic Universe (MCU). The film was written and directed by Joss Whedon and features an ensemble cast that includes Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the titular Avengers team, alongside Tom Hiddleston, Clark Gregg, Cobie Smulders, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury, director of the spy agency S.H.I.E.L.D., recruits Tony Stark, Steve Rogers, Bruce Banner, and Thor to form a team that must stop Thor's brother Loki from subjugating Earth.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "2012-04-11",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:02:24",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284675\/standard\/71P-7T5n60L._SX425__1557915894.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/56cdf155b17bd96d76b7c83482b7ff76",
                "viewStatus": {
                  "viewcount": "1",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284672\/original\/Square_Enix_Avengers_games_original_story.jpg.optimal.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284673\/original\/wp3891863_1557914425.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "a478f0c72eb5e66bf42ba627693638a7",
                "movie_id": "174612",
                "movie_stream_id": "360807",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Avengers Series",
                "full_movie": "",
                "story": "The Avengers premiered at Hollywood's El Capitan Theatre on April 11, 2012, and was released in the United States on May 4, 2012. The film received praise for Whedon's direction and screenplay, visual effects, action sequences, acting, and musical score, and garnered numerous awards and nominations including Academy Award and BAFTA nominations for achievements in visual effects. It set or tied numerous box office records, including the biggest opening weekend in the United States and Canada. The Avengers grossed over $1.5 billion worldwide and became the third-highest-grossing film of all time, as well as the highest-grossing film of 2012. It is the first Marvel production to generate $1 billion in ticket sales. In 2017, it was featured as one of the 100 greatest films of all time in Empire magazine's poll of The 100 Greatest Movies.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "2019-05-16",
                "content_types_id": "3",
                "is_converted": "0",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284944\/standard\/avengers-endgame-3203x1872-avengers-4-hd-16872_1557989132.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/a478f0c72eb5e66bf42ba627693638a7",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284945\/original\/avengers-endgame-3203x1872-avengers-4-hd-16872.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "883aa850dc8fb83c3549aa27ca886ee5",
                "movie_id": "174612",
                "movie_stream_id": "360814",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Thor and Loki",
                "full_movie": "",
                "story": "Thor is exiled by his father Odin, the King of Asgard, to the Earth to live among mortals. When he lands on Earth, his trusted weapon Mjolnir is discovered and captured by S.H.I.E.L.D.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:02:26",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284952\/episode\/2-1510756205110_1557988475.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/883aa850dc8fb83c3549aa27ca886ee5",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284953\/original\/thor-wallpapers-60311-6711000.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "c1fe507e667040871e8d59608c0bc074",
                "movie_id": "174612",
                "movie_stream_id": "360824",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Hawkeye",
                "full_movie": "",
                "story": "Hawkeye is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Don Heck, the character first appeared as a villain in Tales of Suspense and later joined the Avengers in The Avengers. He has been a prominent member of the team ever since.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:02:24",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284962\/episode\/hawkeye_in_the_avengers_1557988854.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/c1fe507e667040871e8d59608c0bc074",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284963\/original\/hawkeye_in_the_avengers.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "b8abffd465f927c80ec0367f51523b8e",
                "movie_id": "174612",
                "movie_stream_id": "360837",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Captain America",
                "full_movie": "",
                "story": "After Steve Rogers decides to volunteer as a guinea pig in an experiment, his weak body is fully enhanced. A secret Nazi organisation tries to exploit the technology and he must stand against them.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:01:09",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284983\/episode\/the_avengers_captain_america_1557991204.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/b8abffd465f927c80ec0367f51523b8e",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284984\/original\/the_avengers_captain_america.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 0
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "63fafc041e2c665af906f73ac78bcb9f",
                "movie_id": "174612",
                "movie_stream_id": "361260",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Hulk",
                "full_movie": "",
                "story": "The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "02:13:37",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/285686\/episode\/106955_1558173838.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/63fafc041e2c665af906f73ac78bcb9f",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296272\/original\/106972.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "b338333011ccf04454a2289a2932dc3e",
                "movie_id": "176529",
                "movie_stream_id": "364167",
                "muvi_uniq_id": "51b1310a17d16ac87c0b5a2bcc77a25f",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "england-v-pakistan-4th-odi-2019-highlights",
                "name": "England v Pakistan 4th ODI 2019 - Highlights",
                "full_movie": "Brilliant_Stokes___Roy_Guide_England_to_Series_Win___England_v_Pakistan_4th_ODI_2019___Highlights.mp4",
                "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor augue nulla, vel pulvinar elit sodales vel. Etiam auctor varius ligula, in viverra mi tincidunt eu. Suspendisse in laoreet est. Morbi ultrices faucibus justo, a iaculis erat dapibus vel. Donec pellentesque nibh est. Nam efficitur lacus elit. Ut pretium lectus non dignissim rutrum. Curabitur ac luctus elit. Etiam consectetur commodo eros id varius. Donec egestas maximus arcu nec rutrum. Cras laoreet sollicitudin odio vitae malesuada. Curabitur ut semper lacus.\r\n\r\nInteger ullamcorper, nunc at porta egestas, ex lacus faucibus turpis, id egestas dui ex eget arcu. Aliquam eget blandit ex. Etiam nibh dui, malesuada eu elementum et, facilisis non est. Maecenas et bibendum odio, in fermentum sem. Suspendisse cursus feugiat hendrerit. Quisque tristique sem ut nisi scelerisque laoreet. In semper dignissim ante, ac mattis nunc vehicula a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum quis dapibus dui. Nulla facilisis sem metus, mollis lacinia diam vestibulum ac. Integer commodo est eget sollicitudin aliquam. Maecenas vel dui nunc. Vivamus faucibus augue ac cursus porttitor.\r\n\r\nNullam vel elit vel felis tincidunt facilisis. Proin et condimentum ligula, vitae viverra ipsum. Sed facilisis urna ut erat pulvinar lobortis. Vestibulum gravida quam non lectus pulvinar, a volutpat purus tempus. Curabitur lacus mi, tempus id tempus in, molestie quis leo. Donec justo ligula, porttitor ut mattis nec, vehicula vitae eros. Nullam dapibus massa id ultricies tempor. Aliquam elementum diam vel pulvinar aliquam. Mauris et elit a dolor fringilla consectetur vel ullamcorper eros. Vivamus eget metus ac eros interdum luctus vel vitae ante. Integer laoreet id mi blandit viverra. Aenean nec est sollicitudin, venenatis leo vel, feugiat neque.",
                "genre": [
                  "DOCUMENTARY"
                ],
                "censor_rating": "",
                "release_date": "2019-05-27",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:05:21",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289412\/standard\/cricket_1559049840.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/b338333011ccf04454a2289a2932dc3e",
                "viewStatus": {
                  "viewcount": "654",
                  "uniq_view_count": "4"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289413\/original\/cricket2.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296372\/original\/1600x900-wallpaper-31_1560850099.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "158eb259b2f3782c442a932bb7d76b19",
                "movie_id": "176745",
                "movie_stream_id": "364466",
                "muvi_uniq_id": "a872b5beb3c6143a90d1eff13159f48d",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "the-big-bang-theory",
                "name": "The Big Bang Theory",
                "full_movie": "",
                "story": "A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.",
                "genre": [
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "2007-01-01",
                "content_types_id": "3",
                "is_converted": "0",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289830\/standard\/tbbt_1559137760.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/158eb259b2f3782c442a932bb7d76b19",
                "viewStatus": {
                  "viewcount": "301",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289831\/original\/tbbt.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289840\/original\/tbbt_1559138003.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "455dcbe971b6368bfce15f56a95f0743",
                "movie_id": "176745",
                "movie_stream_id": "364472",
                "muvi_uniq_id": "a872b5beb3c6143a90d1eff13159f48d",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "the-big-bang-theory",
                "name": "The Decision Reverberation",
                "full_movie": "",
                "story": "Koothrappali is worried people won't take him seriously in his own field after publishing a paper that suggests he may have discovered alien life; Leonard wants to be the principal investigator on a plasma physics study.",
                "genre": [
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:19:07",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289841\/episode\/tbbt2_1559138175.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/455dcbe971b6368bfce15f56a95f0743",
                "viewStatus": {
                  "viewcount": "301",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289842\/original\/tbbt2.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/289840\/original\/tbbt_1559138003.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "ec0d87b55e22c5625ce4c93097c9b252",
                "movie_id": "174612",
                "movie_stream_id": "367623",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Captain Marvel",
                "full_movie": "",
                "story": "Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:02:18",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/294136\/episode\/captain_marvel_poster_1688.1537366019_1560257405.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/ec0d87b55e22c5625ce4c93097c9b252",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/294851\/original\/download.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "351a37308483dd219dbf4249c41c02b4",
                "movie_id": "179675",
                "movie_stream_id": "368297",
                "muvi_uniq_id": "39df14b382167d69d9bd50555ec03f12",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "hook-up-song-making-student-of-the-year-2-tiger-shroff-alia-vishal-and-shekhar-neha",
                "name": "Hook Up Song - Making | Student Of The Year 2 | Tiger Shroff & Alia | Vishal and Shekhar | Neha",
                "full_movie": "Hook_Up_Song___Making___Student_Of_The_Year_2___Tiger_Shroff___Alia___Vishal_and_Shekhar___Neha.mp4",
                "story": "Lorem Ipsum",
                "genre": [
                  "DRAMA"
                ],
                "censor_rating": "",
                "release_date": "2019-06-12",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:01:02",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/295048\/standard\/335a4472e146763440a3929ea745c1cc_1560502241.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/351a37308483dd219dbf4249c41c02b4",
                "viewStatus": {
                  "viewcount": "122",
                  "uniq_view_count": "2"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/295049\/original\/275056545a19106b4067618a9efad05f.jpeg",
                "banner": "",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "180732cc22616812884dcd703d39f36c",
                "movie_id": "180264",
                "movie_stream_id": "369180",
                "muvi_uniq_id": "2772397a515ccee83bdd8916299dafa6",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "brave-girl",
                "name": "Brave Girl",
                "full_movie": "Brave___Best_Scenes.mp4",
                "story": "Merida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\n\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\nMerida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.\r\n",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "2019-06-18",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:27:42",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296281\/standard\/brave-2012-movie-cartoon-background-tablet--1-_1560835124.jpeg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/180732cc22616812884dcd703d39f36c",
                "viewStatus": {
                  "viewcount": "141",
                  "uniq_view_count": "2"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296282\/original\/4.jpeg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296283\/original\/2_1560835274.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "d207f871140f6ba7faf13430e829dcc9",
                "movie_id": "180269",
                "movie_stream_id": "369186",
                "muvi_uniq_id": "e71dc50197646ea25b01ec4772a978fc",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "the-frozen",
                "name": "The Frozen",
                "full_movie": "Disney_s_Frozen_Official_Trailer.mp4",
                "story": "Frozen is a 2013 American 3D computer-animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures. The 53rd Disney animated feature film, it is inspired by Hans Christian Andersen's fairy tale \"The Snow Queen\".",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "2019-06-04",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:02:32",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296292\/standard\/1_1560836188.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/d207f871140f6ba7faf13430e829dcc9",
                "viewStatus": {
                  "viewcount": "25",
                  "uniq_view_count": "2"
                },
                "custom_meta_data": "",
                "rating": "3.5",
                "review": "1",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296293\/original\/491326.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296294\/original\/downlod_1560836317.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "c5708f447186d5fad2f97017e9db0c57",
                "movie_id": "180274",
                "movie_stream_id": "369192",
                "muvi_uniq_id": "9fb162483cdea411e79e899cf9bb71cc",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "the-frozen-ii",
                "name": "The Frozen II",
                "full_movie": "Frozen_2_Official_Trailer.mp4",
                "story": "Elsa the Snow Queen and her sister Anna embark on an adventure far away from the kingdom of Arendelle. They are joined by friends, Kristoff, Olaf, and Sven.",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "",
                "release_date": "2019-06-19",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:01:53",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296303\/standard\/Frozen-2-HD-Wallpapers-39645_1560838100.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/c5708f447186d5fad2f97017e9db0c57",
                "viewStatus": {
                  "viewcount": "2",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296304\/original\/Frozen-2-HD-Wallpapers-39645.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/296306\/original\/wp3968983_1560838341.jpg",
                "is_media_published": 1
              },
              {
                "is_episode": "0",
                "movie_stream_uniq_id": "d325e143b8411b5766969dd9dff5d687",
                "movie_id": "185534",
                "movie_stream_id": "377182",
                "muvi_uniq_id": "43a4e3d9d1a3fa4b2bb466b3d5b6cc86",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "bekhayali-acoustic-dhvani-bhanushali-version-soft-rock-sachet-parampara-kabir-singh",
                "name": "Bekhayali Acoustic ¦ Dhvani Bhanushali Version (Soft Rock) Sachet-Parampara ¦ Kabir Singh",
                "full_movie": "Bekhayali_Acoustic___Dhvani_Bhanushali_Version__Soft_Rock__Sachet_Parampara___Kabir_Singh.mp4",
                "story": "Lorem Ipsum",
                "genre": [
                  "DRAMA"
                ],
                "censor_rating": "",
                "release_date": "2019-06-06",
                "content_types_id": "1",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "00:03:09",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/cms.muvi.com\/img\/no-image.png",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/d325e143b8411b5766969dd9dff5d687",
                "viewStatus": {
                  "viewcount": "60",
                  "uniq_view_count": "1"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "",
                "banner": "",
                "is_media_published": 1
              },
              {
                "is_episode": "1",
                "movie_stream_uniq_id": "61a93c029ab9e32bf9ee2ef76782f98c",
                "movie_id": "174612",
                "movie_stream_id": "367636",
                "muvi_uniq_id": "551c0c01be07a9d302206bd5505c1143",
                "content_type_id": "",
                "ppv_plan_id": "0",
                "permalink": "avengers1",
                "name": "Black Widow",
                "full_movie": "Bekhayali_Acoustic___Dhvani_Bhanushali_Version__Soft_Rock__Sachet_Parampara___Kabir_Singh.mp4",
                "story": "Natasha Alianovna Romanova, colloquial: Black Widow is a fictional superhero appearing in American comic books published by Marvel Comics. Created by editor and plotter Stan Lee, scripter Don Rico, and artist Don Heck, the character debuted in Tales of Suspense ",
                "genre": [
                  "ACTION",
                  "DRAMA",
                  "COMEDY"
                ],
                "censor_rating": "&nbsp;",
                "release_date": "",
                "content_types_id": "3",
                "is_converted": "1",
                "last_updated_date": "",
                "video_duration": "",
                "movieid": "",
                "geocategory_id": "",
                "category_id": "",
                "studio_id": "39538",
                "country_code": "",
                "ip": "",
                "poster_url": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/294154\/episode\/69369_v9_bb_1560261142.jpg",
                "isFreeContent": 0,
                "embeddedUrl": "http:\/\/tvmobplaynondrm.muvi.com\/embed\/61a93c029ab9e32bf9ee2ef76782f98c",
                "viewStatus": {
                  "viewcount": "105",
                  "uniq_view_count": "3"
                },
                "custom_meta_data": "",
                "rating": 0,
                "review": "0",
                "posterForTv": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/294152\/original\/download--1-.jpg",
                "banner": "https:\/\/d2sal5lpzsf102.cloudfront.net\/39538\/public\/public\/system\/posters\/284947\/original\/wp3891863_1557987004.jpg",
                "is_media_published": 1
              }
            ]
          }
        ]
      }
      return data
}

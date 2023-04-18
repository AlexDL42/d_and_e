
import {posts} from '../public/assets/maps-data';

import cn from 'classnames'



const ContentCardMaps = (props) => {
    console.log(props)
  const { post, flip, toCal, learnMore, fullH, ...extra } = props

  console.log(post)

  return (
    <div key={post.title} className= {cn('', {
        'maps-card': fullH,
      })}>
        <div className="flex-shrink-0 relative">
            <img className="img-maps-card" src={post.imageUrl} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6  bg-slate-200">
            <div className="relative flex-1">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex-1">
                        <p className="text-xl font-semibold text-gray-900 text-center">{post.title}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default function MapsContent() {
    return (
        <div className="pc-container-0">

        <div className="pc-container-1">

            <div className="pc-container-2">
            {posts.map((post, i) => {
                return (
                    <ContentCardMaps post={post} fullH={true} />
                )
            })}
            </div>
        </div>
        </div>
    )
}
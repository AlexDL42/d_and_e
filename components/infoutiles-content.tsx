
import {posts} from '../public/assets/infoutiles-data';

import cn from 'classnames'



const ContentCardInfoUtiles = (props) => {
    console.log(props)
  const { post, flip, toCal, learnMore, fullH, ...extra } = props

  console.log(post)

  return (
    <div key={post.title} className= {cn('', {
        'iu-card': fullH,
      })}>
        <div className="flex-shrink-0 relative">
            <img className="img-iu-card" src={post.imageUrl} alt="" />
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


export default function InfoUtilesContent() {
    return (
        <div className="pc-container-0">

        <div className="pc-container-1">

            <div className="pc-container-2">
            {posts.map((post, i) => {
                return (
                    <ContentCardInfoUtiles post={post} fullH={true} />
                )
            })}
            </div>
        </div>
        </div>
    )
}
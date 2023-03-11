import { formatDateShort } from '../lib/utils'
import { LocationButton } from './location-button'
import { AddToCal } from './add-to-cal-button'

import cn from 'classnames'



const ContentCard = (props) => {
    console.log(props)
  const { post, flip, toCal, learnMore, ...extra } = props

  console.log(post)

  return (
    <div key={post.title} className= {cn('', {
        'post-card': !flip,
        'post-card-reverse': flip,
      })}>
        <div className="flex-shrink-0 relative">
            <img className="img-post-card" src={post.imageUrl} alt="" />
            {toCal ? 
                <div className="bg-white border-b-2 border-l-2 border-black border-opacity-50 p-2 absolute top-0 right-0 w-20 font-bold flex text-center">{formatDateShort(post.startDate)}</div>
            :
                null
            }
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="relative flex-1">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex-1">
                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={post.startTime}>{post.startTime}</time>
                        </div>
                    </div>
                    <LocationButton className='atcb' href={post.locationUrl}/>

                    {toCal ? 
                        <AddToCal v={{'post': post, 'label': ' '}}/>
                    :
                        null
                    }
                    
                </div>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>

                {learnMore ? 
                    <div className="py-4 flex-0 text-base text-gray-500 absolute bottom-0">
                        <a href={post.ref} className="hover:underline">En Savoir Plus...</a>
                    </div>
                    
                :
                    null
                }
            </div>
        </div>
    </div>
  )
}

export default ContentCard

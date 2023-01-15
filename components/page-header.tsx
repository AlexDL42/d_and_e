import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
}

const PageHeader = ({ title }: Props) => {
  return (
    <div className="flex justify-center my-20 pt-10 bg-white bg-opacity-50 text-blue-600">
      <PostTitle>{title}</PostTitle>
    </div>
  )
}

export default PageHeader

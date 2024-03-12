import {Post} from '@/types/forum'
import PostCard from '@/components/forum/PostCard.tsx'

const PostList = ({posts} : {posts: Post[]}) => (
    <ul>
        {posts.map((post) => (
            <li key={post._id} className={'flex--col gap-5 p-3'}>
                <PostCard post={post}/>
            </li>
        ))}
    </ul>
)


export default PostList

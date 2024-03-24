import {Post as PostType} from '@/types/forum'
import Tag from '@/components/forum/Tag.tsx'
import Metric from '@/components/shared/ui/Metric.tsx'
import {toRelative, toShortNumber} from '@/lib/utils.ts'
import {Button} from '@/components/ui/button.tsx'
import Icon from '@/components/shared/ui/Icon.tsx'
import {Link} from '@tanstack/react-router'
import UserLabel from '@/components/shared/ui/UserLabel.tsx'

type Props = {
    post: PostType
}

const Post = ({post: {title, body, author, tags, createdAt, votes, replies, views}}: Props) => (
    <div className={'flex--col gap-5 p-3'}>
        <div className={'flex flex-row items-center gap-2.5'}>
            <Link to={'/forum'}>
                <Button className={'rounded-full bg-slate-500 p-2'}>
                    <Icon name={'arrow-left'} size={25}/>
                </Button>
            </Link>
            <div className={'flex--col'}>
                <Link to={'/forum/profile/$authorId'} params={{authorId: author._id}}>
                    <UserLabel user={author}/>
                </Link>
                <p>{toRelative(createdAt)}</p>
            </div>
        </div>
        <h3 className={'text-lg font-bold'}>{title}</h3>
        <p>{body}</p>
        <div className={'flex flex-row items-center gap-2.5'}>
            <Metric
                image={'like'}
                title={''}
                value={toShortNumber(votes.positive)}
                textStyles={''}
            />

            <Metric
                image={'dislike'}
                title={''}
                value={toShortNumber(votes.negative)}
                textStyles={''}
            />

            <Metric
                image={'message'}
                title={''}
                value={toShortNumber(replies.length)}
                textStyles={''}
            />

            <Metric
                image={'eye'}
                title={''}
                value={toShortNumber(views)}
                textStyles={''}
            />
        </div>
        <div className={'flex flex-row gap-3'}>
            {tags.map(tag => (
                <Tag key={tag._id} tag={tag}/>
            ))}
        </div>
    </div>
)


export default Post


import Link from "next/link";
import {posts} from '../public/assets/home'
import {caseIsEven} from "../lib/utils";

import ContentCard from "./content-card";


export default function HomeContent() {

    const handleSubmit = async (event) => {
        event.preventDefault()

        const song = event.target[0].value
        const out = {
            'mailType': 'music',
            song,
        }
        const res = await fetch(`api/mailer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(out),
        })

    }

    return (
        <div key='home-content' className="hc-container-0">
            <div className="hc-container-1">
                <div className="hc-container-2">
                    {posts.map((post, i) => {
                        const clName = caseIsEven({'num': i, 'returnEven': "post-card", 'returnOdd': "post-card-reverse"})
                        return (
                            <>{post.title=='Musique' ? 
                                <ContentCard key={post.title} post={post} flip={false} />
                                :
                                <Link href={post.ref}>
                                    <div key={post.title} className={clName}>
                                        <div className="flex-shrink-0 relative">
                                            <img className="img-post-card" src={post.imageUrl} alt="" />
                                        </div>
                                        <div className="relative flex flex-1 flex-col items-between bg-white p-6">
                                            <div className="flex-1 flex-col justify-between">
                                                <div className="flex flex-row justify-between items-center">
                                                    <div className="flex-1">
                                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                                    </div>
                                                </div>
                                                <div className="my-3 flex-1 grow text-base text-gray-500">{post.description}</div>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            }</>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


import {posts} from '../public/assets/events';
import ContentCard from "./content-card";


export default function PlanningContent() {
    return (
        <div className="pc-container-0">

        <div className="pc-container-1">

            <div className="pc-container-2">
            {posts.map((post, i) => {
                return (
                    <ContentCard post={post} flip={false} toCal={true} learnMore={false}/>
                )
            })}
            </div>
        </div>
        </div>
    )
}
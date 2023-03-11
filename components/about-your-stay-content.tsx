
import 'add-to-calendar-button/assets/css/atcb.css';
import {posts} from '../public/assets/about-your-stay';
import ContentCard from "./content-card";

export default function AboutYourStayContent() {
    return (
        <div className="aysc-container-0">

        <div className="aysc-container-1">

            <div className="aysc-container-2">
            {posts.map((post, i) => {

                const flip = (i % 2 == 0) ? false : true 
                return (
                  <ContentCard post={post} flip={flip} toCal={false} learnMore={true} />
                )
            })}
            </div>
        </div>
        </div>
    )
}

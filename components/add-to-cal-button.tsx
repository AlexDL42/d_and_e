import { useEffect } from 'react';
import { atcb_init } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';

export const AddToCal = (props: any) => {
    useEffect( () => { atcb_init() }, []);

    const jsonAddToCal = {
        "name": props.v.post.title,
        "description": props.v.post.description.props.children.toString(),
        "startDate": props.v.post.startDate,
        "endDate": props.v.post.endDate,
        "startTime": props.v.post.startTime,
        "endTime": props.v.post.endTime,
        "location": props.v.post.location,
        "options":[
            "Apple",
            "Google",
            "iCal",
            "Microsoft365",
            "MicrosoftTeams",
            "Outlook.com",
            "Yahoo"
        ],
        "timeZone":"Europe/Madrid",
        "iCalFileName":"Reminder-Event"
    }
    return (
        <div className='atcb' style={{display: 'none'}}>
            {JSON.stringify({...jsonAddToCal, 'label': props.v.label})}
        </div>
    )
}
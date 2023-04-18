
import { AddToCalendarButton } from 'add-to-calendar-button-react';

export const AddToCal = (props: any) => {

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
        "iCalFileName":"Reminder-Event",
        "hideTextLabelButton": true
    }
    return (
        <AddToCalendarButton
            {...jsonAddToCal}
        ></AddToCalendarButton>
    )
}
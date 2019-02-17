import * as React from 'react';

export default class CalendarDays extends React.Component {
    render() {
        return (
            <div className="days row">
                <div className="col col-center">Sunday</div>
                <div className="col col-center">Monday</div>
                <div className="col col-center">Tuesday</div>
                <div className="col col-center">Wednesday</div>
                <div className="col col-center">Thursday</div>
                <div className="col col-center">Friday</div>
                <div className="col col-center">Saturday</div>
            </div>
        );
    }
}
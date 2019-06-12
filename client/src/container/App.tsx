import * as React from "react";
import MonthCalendar from '../components/monthly/MonthCalendar';
import "./App.css";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header>
                    <div id="logo">
                        <span className="icon">date_range</span>
                        <span>
                            <b>Scheduler</b>
                        </span>
                    </div>
                </header>
                <main>
                    <MonthCalendar />
                </main>
            </div>
        );
    }
}
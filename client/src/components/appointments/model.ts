export interface IAppointment {
    day: Date;
}

export interface ITableData {
    id: number;
    organiser: string;
    attendee: string;
    agenda: string;
    start_time: string;
    end_time: string;
}
export interface IAppointments {
    day: Date;
    todayData: ITableData[];
}
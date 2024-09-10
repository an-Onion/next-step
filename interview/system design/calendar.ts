type CalendarStore = {
    events: Map<string, TEvent[]>;
    eventsConflicts: IntervalTree<TEvent>;
    clientState: Map<string, CalendarClientState>;
}

class IntervalTree<T> {
    
}

type TEvent = {
    id: string;
    start: Date;
    end: Date;
    title: string;
    description: string;
    location: string;
    participants: UserInfo[];
}

type CalendarClientState = {
    mode: 'year' | 'month' | 'day'; 
    configuration: {
        language: string;
        timezone: string;
        format: string;
    }
}

type UserInfo = {
    id: string;
    name: string;
    email: string;
    phone: string;
}

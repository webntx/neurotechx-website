declare module 'rss-parser' {
    export default class Parser {
        constructor(options?: any);
        parseURL(url: string): Promise<any>;
    }
}

declare module 'ical.js' {
    export function parse(input: string): any;
    export class Component {
        constructor(jcal: any);
        getAllSubcomponents(name: string): any[];
    }
    export class Event {
        constructor(component: any);
        uid: string;
        summary: string;
        startDate: any;
        endDate: any;
        location: string;
        description: string;
    }
}

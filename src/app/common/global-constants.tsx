import {IReportData} from "../../types";

export const reportFirst: IReportData = {
    header: [
        {id: "project_name", type: "string", caption: "Project name"},
        {id: "total_by_project", type: "float", caption: "Total by project"},
        {id: "project_type", type: "string", caption: "Project type", align: "center"},
        {id: "jan", type: "float", caption: "Jan"},
        {id: "feb", type: "float", caption: "Feb"},
        {id: "march", type: "float", caption: "March"},
    ],
    data: [
        ["Mimesis", 1024.3, "commercial", 2048.2, 4096.0, 45634],
        ["Mako", 2345.1, "internal", 3465.3, {d: 12.5, color: "selected"}, 123.23],
        ["Mako", 2345.1, "internal", 3465.3, {d: 567.434, color: "selected"}, 875.4],
        ["Edelweiss", 54.4, "commercial", 564.8, 4652.3, 8354.4]
    ]
}

export const reportSecond: IReportData = {
    header: [
        {id: "project_name", type: "string", caption: "Project name"},
        {id: "total_by_project", type: "float", caption: "Total by project"},
        {id: "project_type", type: "string", caption: "Project type", align: "right"},
        {id: "may", type: "float", caption: "May", align: "left"},
        {id: "delivery", type: "boolean", caption: "Status Delivery"},
    ],
    data: [
        ["Mimesis", 1024.3, "commercial", 2048.2, false],
        ["Mako", 2345.1, "internal", 3465.3, true],
        ["Edelweiss", 54.4, "commercial", 564.8, false],
        ["Edelweiss_1", 54.456, "commercial", 564.8, true],
        ["Edelweiss_2", 54.456, "commercial", 8000,  true],
    ]
}

export const reportThird: IReportData = {
    header: [
        {id: "project_name", type: "string", caption: "Project name"},
        {id: "total_by_project", type: "float", caption: "Total by project", align: 'left'},
        {id: "project_type", type: "string", caption: "Project type", align: "center"},
        {id: "june", type: "float", caption: "June"},
        {id: "july", type: "float", caption: "July"},
    ],
    data: [
        ["Mimesis", 1024.3, "commercial", 2048.2, 4096.0],
        ["Mako", 2345.1, "internal", 3465.3, {d: 16.5, color: "selected"}],
        ["Edelweiss", 54.4, "commercial", 564.8, 4652.3],
        ["Edelweiss_1", 54.456, "commercial", 564.8, 4652.3],
        ["Edelweiss_2", 54.456, "commercial", 8000, 4652.3],
    ]
}


export const data = [
    {id: 1, report_name: 'First report', data: reportFirst},
    {id: 2, report_name: 'Second report', data: reportSecond},
    {id: 3, report_name: 'Third report', data: reportThird},
];
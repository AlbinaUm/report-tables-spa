import {IReportData} from "../../types";

export const reportFirst: IReportData = {
    header: [
        {id: "project_name", type: "string", caption: "Project name"},
        {id: "total_by_project", type: "float", caption: "Total by project"},
        {id: "project_type", type: "string", caption: "Project type", align: "center"},
        {id: "jan", type: "float", caption: "Jan"},
        {id: "feb", type: "float", caption: "Feb"},
    ],
    data: [
        ["Mimesis", 1024.3, "commercial", 2048.2, 4096.0],
        ["Mako", 2345.1, "internal", 3465.3, {d: 12.5, color: "selected"}],
        ["Mako", 2345.1, "internal", 3465.3, {d: 567.434, color: "selected"}],
        ["Edelweiss", 54.4, "commercial", 564.8, 4652.3]
    ]
}

export const reportSecond: IReportData = {
    header: [
        {id: "project_name", type: "string", caption: "Project name"},
        {id: "total_by_project", type: "float", caption: "Total by project"},
        {id: "project_type", type: "string", caption: "Project type", align: "center"},
        {id: "jan", type: "float", caption: "Jan"},
        {id: "feb", type: "float", caption: "Feb"},
    ],
    data: [
        ["Mimesis", 1024.3, "commercial", 2048.2, 4096.0],
        ["Mako", 2345.1, "internal", 3465.3, {d: 16.5, color: "selected"}],
        ["Edelweiss", 54.4, "commercial", 564.8, 4652.3],
        ["Edelweiss", 54.456, "commercial", 564.8, 4652.3],
    ]
}
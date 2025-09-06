// Schedule data and HTML generation for a static TypeScript project

function formatDate(dateStr: string): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = new Date(dateStr);
  if (isNaN(d as any)) return dateStr;
  const day = d.getDate().toString().padStart(2, "0");
  const mon = months[d.getMonth()];
  const yr = d.getFullYear().toString().slice(-2);
  return `${day}-${mon}-${yr}`;
}

interface ScheduleRow {
  week: number | null;
  date: string;
  note: string;
}

interface Semester {
  name: string;
  weeks: ScheduleRow[];
}

const regularSemesters: Semester[] = [
  {
    name: "Semester 1",
    weeks: [
      { week: 1, date: "2025-08-17", note: "First day of school" },
      { week: 2, date: "2025-08-24", note: "" },
      { week: null, date: "2025-08-31", note: "Holiday- Labor day" },
      { week: 3, date: "2025-09-07", note: "" },
      { week: 4, date: "2025-09-14", note: "Test 1 - Project" },
      { week: null, date: "2025-09-21", note: "Holiday- No Facility available" },
      { week: null, date: "2025-09-28", note: "Holiday- No Facility available" },
      { week: 5, date: "2025-10-05", note: "" },
      { week: 6, date: "2025-10-12", note: "" },
      { week: 7, date: "2025-10-19", note: "" },
      { week: 8, date: "2025-10-26", note: "Test 2" },
      { week: 9, date: "2025-11-02", note: "" },
      { week: 10, date: "2025-11-09", note: "" },
      { week: 11, date: "2025-11-16", note: "" },
      { week: null, date: "2025-11-23", note: "Holiday - Thanksgiving" },
      { week: null, date: "2025-11-30", note: "Holiday - Thanksgiving" },
      { week: 12, date: "2025-12-07", note: "Test 3 - Term 1 ends" },
      { week: 13, date: "2025-12-14", note: "Term 2 starts" },
      { week: null, date: "2025-12-21", note: "Holiday - Christmas" },
      { week: null, date: "2025-12-28", note: "Holiday - New year" },
      { week: 14, date: "2026-01-04", note: "" },
      { week: 15, date: "2026-01-11", note: "" },
      { week: 16, date: "2026-01-18", note: "Test 4 - Project 2" },
    ],
  },
  {
    name: "Semester 2",
    weeks: [
      { week: 17, date: "2026-01-25", note: "" },
      { week: 18, date: "2026-02-01", note: "" },
      { week: 19, date: "2026-02-08", note: "" },
      { week: 20, date: "2026-02-15", note: "Test 5. Term 2 ends" },
      { week: 21, date: "2026-02-22", note: "Term 3 starts" },
      { week: 22, date: "2026-03-01", note: "" },
      { week: 23, date: "2026-03-08", note: "" },
      { week: 24, date: "2026-03-15", note: "Test 6" },
      { week: 25, date: "2026-03-22", note: "" },
      { week: 26, date: "2026-03-29", note: "" },
      { week: null, date: "2026-04-05", note: "Holiday - Spring break" },
      { week: 27, date: "2026-04-12", note: "" },
      { week: 28, date: "2026-04-19", note: "Test 7" },
      { week: 29, date: "2026-04-26", note: "" },
      { week: 30, date: "2026-05-03", note: "" },
      { week: 31, date: "2026-05-10", note: "" },
      { week: 32, date: "2026-05-17", note: "Test - Final Exam" },
      { week: null, date: "2026-05-24", note: "Graduation day and Annual day" },
    ],
  },
];

const hscpSemesters: Semester[] = [
  {
    name: "Semester 1",
    weeks: [
      { week: 1, date: "2025-08-16", note: "Book distribution" },
      { week: 2, date: "2025-08-17", note: "First day of school / HSCP Semester 1 begins" },
      { week: 3, date: "2025-08-31", note: "Holiday / Labor Day" },
      { week: 4, date: "2025-09-14", note: "Test 1 (Project)" },
      { week: 5, date: "2025-09-21", note: "Holiday / Facility not available" },
      { week: 6, date: "2025-09-28", note: "Holiday / Facility not available" },
      { week: 7, date: "2025-10-26", note: "Test 2" },
      { week: 8, date: "2025-11-23", note: "Holiday / Thanksgiving" },
      { week: 9, date: "2025-11-30", note: "Holiday / Thanksgiving" },
      { week: 10, date: "2025-12-07", note: "Test 3" },
      { week: 11, date: "2025-12-21", note: "Holiday - Christmas" },
      { week: 12, date: "2025-12-28", note: "Holiday - New Year" },
      { week: 13, date: "2026-01-18", note: "Test 4 (Project) / End of Semester 1" },
    ],
  },
  {
    name: "Semester 2",
    weeks: [
      { week: 1, date: "2026-01-25", note: "Semester 2 begins" },
      { week: 2, date: "2026-02-15", note: "Test 5" },
      { week: 3, date: "2026-03-15", note: "Test 6" },
      { week: 4, date: "2026-04-05", note: "Holiday / Spring break" },
      { week: 5, date: "2026-04-19", note: "Test 7" },
      { week: 6, date: "2026-05-17", note: "Final Exam" },
      { week: 7, date: "2026-05-24", note: "Graduation Day / Annual Day" },
    ],
  },
];

function generateScheduleTable(weeks: ScheduleRow[]): string {
  return `
    <table class="schedule-table">
      <thead>
        <tr>
          <th>Week</th>
          <th>Date</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        ${weeks.map(row => `
          <tr>
            <td>${row.week !== null ? row.week : "—"}</td>
            <td>${formatDate(row.date)}</td>
            <td>${row.note || "—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function generateScheduleSection(title: string, timing: string, semesters: Semester[], color: string): string {
  return `
    <section class="schedule-section ${color}">
      <h2>${title}</h2>
      <div class="timing">Timing: <span>${timing}</span></div>
      ${semesters.map(sem => `
        <div class="semester">
          <h3>${sem.name}</h3>
          ${generateScheduleTable(sem.weeks)}
        </div>
      `).join("")}
    </section>
  `;
}

export function renderSchedulePage(): string {
  return `
    <html>
      <head>
        <title>School Schedule</title>
        <style>
          body { font-family: sans-serif; background: #f8fafc; margin: 0; padding: 0; }
          .container { max-width: 900px; margin: 2rem auto; background: #fff; border-radius: 1rem; box-shadow: 0 2px 8px #0001; padding: 2rem; }
          h1 { text-align: center; color: #312e81; }
          .schedule-section { margin-bottom: 2rem; padding: 1rem; border-radius: 0.75rem; }
          .schedule-section.blue { border: 2px solid #3b82f6; background: #eff6ff; }
          .schedule-section.indigo { border: 2px solid #6366f1; background: #eef2ff; }
          .timing { margin-bottom: 1rem; font-weight: 500; }
          .timing span { color: #2563eb; }
          .semester { margin-bottom: 1.5rem; }
          .semester h3 { color: #1e40af; margin-bottom: 0.5rem; }
          .schedule-table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
          .schedule-table th, .schedule-table td { border: 1px solid #d1d5db; padding: 0.5rem 1rem; text-align: center; }
          .schedule-table th { background: #dbeafe; color: #1e293b; }
          .schedule-table tr:nth-child(even) { background: #f1f5f9; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>School Schedule</h1>
          ${generateScheduleSection("Regular Classes", "Sundays, 9:50 AM – 11:30 AM", regularSemesters, "blue")}
          ${generateScheduleSection("HSCP Classes", "Sundays, 8:30 AM – 1:00 PM", hscpSemesters, "indigo")}
        </div>
      </body>
    </html>
  `;
}

// To use: import { renderSchedulePage } from './page'; then write the output to an .html file or serve it as needed.

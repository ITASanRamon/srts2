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


interface Term {
  name: string;
  weeks: ScheduleRow[];
}

const regularTerms: Term[] = [
  {
    name: "Term 1",
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
    ],
  },
  {
    name: "Term 2",
    weeks: [
      { week: 13, date: "2025-12-14", note: "Term 2 starts" },
      { week: null, date: "2025-12-21", note: "Holiday - Christmas" },
      { week: null, date: "2025-12-28", note: "Holiday - New year" },
      { week: 14, date: "2026-01-04", note: "" },
      { week: 15, date: "2026-01-11", note: "" },
      { week: 16, date: "2026-01-18", note: "Test 4 - Project 2" },
      { week: 17, date: "2026-01-25", note: "" },
      { week: 18, date: "2026-02-01", note: "" },
      { week: 19, date: "2026-02-08", note: "" },
      { week: 20, date: "2026-02-15", note: "Test 5. Term 2 ends" },
    ],
  },
  {
    name: "Term 3",
    weeks: [
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

const hscpSemesters = [
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

function generateScheduleSection(title: string, timing: string, items: { name: string, weeks: ScheduleRow[] }[], color: string): string {
  return `
    <section class="schedule-section ${color}">
      <h2>${title}</h2>
      <div class="timing">Timing: <span>${timing}</span></div>
      ${items.map(item => `
        <div class="semester">
          <h3>${item.name}</h3>
          ${generateScheduleTable(item.weeks)}
        </div>
      `).join("")}
    </section>
  `;
}


// To use: import { renderSchedulePage } from './page'; then write the output to an .html file or serve it as needed.

function ScheduleTable({ weeks }: { weeks: ScheduleRow[] }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md mb-4">
      <table className="min-w-full text-sm text-left text-gray-700 bg-white">
        <thead>
          <tr>
            <th className="px-4 py-3 bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900 font-bold uppercase tracking-wider rounded-tl-lg">Week</th>
            <th className="px-4 py-3 bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900 font-bold uppercase tracking-wider">Date</th>
            <th className="px-4 py-3 bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900 font-bold uppercase tracking-wider rounded-tr-lg">Note</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((row, idx) => (
            <tr
              key={idx}
              className={
                idx % 2 === 0
                  ? "bg-gradient-to-r from-slate-50 to-blue-50 hover:bg-blue-100 transition"
                  : "bg-white hover:bg-blue-50 transition"
              }
            >
              <td className="px-4 py-2 font-semibold text-center border-b border-gray-200">{row.week ?? ''}</td>
              <td className="px-4 py-2 text-center border-b border-gray-200">{formatDate(row.date)}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.note || <span className="text-gray-400 italic">—</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ScheduleSection({ title, timing, items, color, id, label }: { title: string, timing: string, items: { name: string, weeks: ScheduleRow[] }[], color: string, id?: string, label?: string }) {
  const sectionColor = color === 'blue' ? 'border-blue-500 bg-blue-50' : 'border-indigo-500 bg-indigo-50';
  return (
    <section id={id} className={`schedule-section mb-8 p-4 rounded-xl border-2 ${sectionColor}`}>
      <div className="timing font-semibold mb-2">
        {title}: <span>{timing}</span>
      </div>
      {items.map((item) => (
        <div className="semester mb-6" key={item.name}>
          <h3 className="text-lg font-bold text-blue-900 mb-2">{label ? label : item.name}</h3>
          <ScheduleTable weeks={item.weeks} />
        </div>
      ))}
    </section>
  );
}

import Header from "../components/Header";

export default function SchedulePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-indigo-50">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-8">
        <div className="container max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-indigo-900 mb-6 text-center">School Schedule</h1>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#regular-schedule" className="text-blue-700 underline font-semibold hover:text-blue-900">Regular Schedule</a>
            <a href="#hscp-schedule" className="text-indigo-700 underline font-semibold hover:text-indigo-900">HSCP Schedule</a>
          </div>
          <ScheduleSection
            title="Regular Classes"
            timing="Sundays, 9:50 AM – 11:30 AM"
            items={regularTerms}
            color="blue"
            id="regular-schedule"
            label="Term"
          />
          <ScheduleSection
            title="HSCP Classes"
            timing="Sundays, 8:30 AM – 1:00 PM"
            items={hscpSemesters}
            color="indigo"
            id="hscp-schedule"
            label="Semester"
          />
        </div>
      </main>
    </div>
  );
}

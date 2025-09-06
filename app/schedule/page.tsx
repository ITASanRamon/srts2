import Header from "../components/Header";
import { useState } from "react";

function formatDate(dateStr) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr; // fallback for non-ISO dates
  const day = d.getDate().toString().padStart(2, "0");
  const mon = months[d.getMonth()];
  const yr = d.getFullYear().toString().slice(-2);
  return `${day}-${mon}-${yr}`;
}

const regularSemesters = [
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

function CollapsibleSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-4 border rounded-lg bg-white/80 shadow">
      <button
        className="w-full flex justify-between items-center px-4 py-3 text-lg font-semibold text-left text-blue-900 hover:bg-blue-50 focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="ml-2">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}

function ScheduleTable({ weeks }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm bg-white">
        <thead className="bg-gradient-to-r from-blue-100 to-indigo-100">
          <tr>
            <th className="px-4 py-2 border-b text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Week</th>
            <th className="px-4 py-2 border-b text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
            <th className="px-4 py-2 border-b text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Note</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50/60"}>
              <td className="px-4 py-2 border-b text-center">{row.week !== null ? row.week : "—"}</td>
              <td className="px-4 py-2 border-b text-center">{formatDate(row.date)}</td>
              <td className={"px-4 py-2 border-b" + (row.note ? " text-blue-700" : " text-gray-500")}>{row.note || <span className="italic text-gray-400">—</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-indigo-50">
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-extrabold mb-10 text-center text-indigo-900 tracking-tight">School Schedule</h1>
        {/* Regular Classes Section */}
        <section className="mb-12">
          <div className="rounded-xl shadow-lg bg-white/80 border border-blue-200 p-6 mb-4">
            <h2 className="text-2xl font-bold mb-2 text-blue-800 flex items-center gap-2">
              <span className="inline-block w-2 h-6 bg-blue-400 rounded-sm"></span>
              Regular Classes
            </h2>
            <div className="mb-4 text-base text-gray-700 font-medium">Timing: <span className="text-blue-700">Sundays, 9:50 AM – 11:30 AM</span></div>
            {regularSemesters.map((sem, i) => (
              <CollapsibleSection key={sem.name} title={sem.name} defaultOpen={i === 0}>
                <ScheduleTable weeks={sem.weeks} />
              </CollapsibleSection>
            ))}
          </div>
        </section>
        {/* HSCP Classes Section */}
        <section>
          <div className="rounded-xl shadow-lg bg-white/80 border border-indigo-200 p-6 mb-4">
            <h2 className="text-2xl font-bold mb-2 text-indigo-800 flex items-center gap-2">
              <span className="inline-block w-2 h-6 bg-indigo-400 rounded-sm"></span>
              HSCP Classes
            </h2>
            <div className="mb-4 text-base text-gray-700 font-medium">Timing: <span className="text-indigo-700">Sundays, 8:30 AM – 1:00 PM</span></div>
            {hscpSemesters.map((sem, i) => (
              <CollapsibleSection key={sem.name} title={sem.name} defaultOpen={i === 0}>
                <ScheduleTable weeks={sem.weeks} />
              </CollapsibleSection>
            ))}
            <div className="mb-2 font-semibold text-indigo-900 mt-4">Semester Summary:</div>
            <ul className="list-disc ml-6 text-sm mb-2 text-indigo-800">
              <li>Semester 1: Aug 17 2025 to Jan 18th 2025 - 16 classes</li>
              <li>Semester 2: Jan 25th 2025 to May 17th 2025 - 16 classes</li>
              <li>Working Days: 32 (includes project & reviews)</li>
              <li>Holidays: 8</li>
              <li>Projects & Reviews: 8</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

const schedule = [
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
];

import Header from "../components/Header";

export default function SchedulePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-indigo-50">
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">School Schedule</h1>
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded">
          <div className="mb-2">
            <span className="font-semibold">Regular Classes:</span> Sundays, 9:50 AM – 11:30 AM
          </div>
          <div>
            <span className="font-semibold">HSCP Classes:</span> Sundays, 8:30 AM – 1:00 PM
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-indigo-700">HSCP Calendar</h2>
          <div className="mb-2 font-semibold">Semester 1:</div>
          <ul className="list-disc ml-6 mb-4 text-sm">
            <li>Aug 16th: Book distribution</li>
            <li>Aug 17th: First day of school / HSCP Semester 1 begins</li>
            <li>Aug 31st: Holiday / Labor Day</li>
            <li>Sept 14th: Test 1 (Project)</li>
            <li>Sept 21st: Holiday / Facility not available</li>
            <li>Sept 28th: Holiday / Facility not available</li>
            <li>Oct 26th: Test 2</li>
            <li>Nov 23rd: Holiday / Thanksgiving</li>
            <li>Nov 30th: Holiday / Thanksgiving</li>
            <li>Dec 7th: Test 3</li>
            <li>Dec 21st: Holiday - Christmas</li>
            <li>Dec 28th: Holiday - New Year</li>
            <li>Jan 18th: Test 4 (Project) / End of Semester 1</li>
          </ul>
          <div className="mb-2 font-semibold">Semester 2:</div>
          <ul className="list-disc ml-6 mb-4 text-sm">
            <li>Jan 25th: Semester 2 begins</li>
            <li>Feb 15th: Test 5</li>
            <li>Mar 15th: Test 6</li>
            <li>Apr 5th: Holiday / Spring break</li>
            <li>Apr 19th: Test 7</li>
            <li>May 17th: Final Exam</li>
            <li>May 24th: Graduation Day / Annual Day</li>
          </ul>
          <div className="mb-2 font-semibold">Semester Dates:</div>
          <ul className="list-disc ml-6 text-sm">
            <li>Semester 1: Aug 17 2025 to Jan 18th 2025 - 16 classes</li>
            <li>Semester 2: Jan 25th 2025 to May 17th 2025 - 16 classes</li>
            <li>Working Days: 32 (includes project & reviews)</li>
            <li>Holidays: 8</li>
            <li>Projects & Reviews: 8</li>
          </ul>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gradient-to-r from-blue-100 to-indigo-100">
              <tr>
                <th className="px-6 py-3 border-b text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Week</th>
                <th className="px-6 py-3 border-b text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 border-b text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Note</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, idx) => (
                <tr key={idx} className={
                  (idx % 2 === 0 ? "bg-white" : "bg-gray-50") +
                  (row.note ? " font-medium" : "")
                }>
                  <td className="px-6 py-3 border-b text-center">{row.week}</td>
                  <td className="px-6 py-3 border-b text-center">{row.date}</td>
                  <td className={
                    "px-6 py-3 border-b" + (row.note ? " text-blue-700" : " text-gray-500")
                  }>
                    {row.note || <span className="italic text-gray-400">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}


import Image from "next/image";

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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-indigo-50">
      <header className="bg-gradient-to-r from-purple-900 to-blue-700 text-white py-8 px-4 text-center shadow-md">
        <div className="flex flex-col items-center gap-2">
          <Image src="/tamil_school_logo.svg" alt="San Ramon Tamil School Logo" width={80} height={80} className="rounded-lg shadow" />
          <h1 className="text-3xl font-bold tracking-wide">San Ramon Tamil School</h1>
        </div>
        <nav className="mt-6">
          <ul className="flex flex-wrap justify-center gap-6 text-lg font-medium">
            <li><a href="#mission" className="hover:underline">Mission</a></li>
            <li><a href="#our-school" className="hover:underline">Our School</a></li>
            <li><a href="#school-registration" className="hover:underline">School Registration</a></li>
            <li><a href="#hscp-registration" className="hover:underline">HSCP Registration</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10 space-y-12">
        <section id="mission">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">Mission</h2>
          <p className="text-lg text-gray-700">
            San Ramon Tamil School (SRTS) is dedicated to teaching the Tamil language and promoting Tamil culture to students of all ages and proficiency levels—from beginners to advanced learners. Our comprehensive program emphasizes fluency in reading, writing, and speaking Tamil, while also fostering a deep appreciation for Tamil literature, history, and traditions. Through interactive lessons and vibrant cultural events, we strive to create a supportive and inspiring environment where students can connect with their heritage and thrive.
          </p>
        </section>

        <section id="our-school">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Our School</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow p-6 w-72 flex flex-col items-center">
              <Image src="/ITA_logo.png" alt="International Tamil Academy Logo" width={100} height={100} className="mb-3 rounded" />
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded mb-2 font-medium">We are affiliated to International Tamil Academy (ITA) whose mission is to teach Tamil language to the Diaspora Children and Youth.</div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow p-6 w-72 flex flex-col items-center">
              <Image src="/volunteer.png" alt="Volunteer Illustration" width={100} height={100} className="mb-3 rounded" />
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded mb-2 font-medium">Our school is entirely run by dedicated volunteers. Parents generously contribute their time, talents, and energy to help our community thrive.</div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow p-6 w-72 flex flex-col items-center">
              <Image src="/nonprofit.jpg" alt="Non-Profit Heart Graphic" width={100} height={100} className="mb-3 rounded" />
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded mb-2 font-medium">SRTS is a Non-Profit Organization, registered in the state of California.</div>
            </div>
          </div>
        </section>

        <section id="school-registration">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">School Registration</h2>
          <a href="https://www.catamilacademy.org/registration.html" className="inline-block bg-blue-700 text-white px-6 py-2 rounded shadow hover:bg-blue-800 transition">Register for School</a>
        </section>

        <section id="hscp-registration">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">HSCP Registration</h2>
          <a href="https://catamilacademy.org/CreditProgram.html" className="inline-block bg-purple-700 text-white px-6 py-2 rounded shadow hover:bg-purple-800 transition">Register for HSCP</a>
        </section>

        <section id="location-schedule">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">Location & Schedule</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Dougherty Valley High School</strong><br />
            10550 Albion Road, San Ramon, CA 94582<br />
            Classes are held every Sunday from 10:00 AM to 11:30 AM.
          </p>
        </section>

        <section id="schedule">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">Schedule</h2>
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
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">Contact Us</h2>
          <p className="text-lg text-gray-700">
            Email: <a href="mailto:info@sanramontamilschool.org" className="text-blue-700 underline">info@sanramontamilschool.org</a>
          </p>
        </section>
      </main>

      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>&copy; 2025 San Ramon Tamil School. All rights reserved.</p>
      </footer>
    </div>
  );
}

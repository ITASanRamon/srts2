
import Image from "next/image";

const schedule = [
  { week: 1, date: "2025-08-16", note: "Book Distribution" },
  { week: 1, date: "2025-08-17", note: "First Day of School" },
  { week: 2, date: "2025-08-24", note: "" },
  { week: 3, date: "2025-08-31", note: "No School (Labor Day Holiday)" },
  { week: 4, date: "2025-09-07", note: "Monthly Test" },
  { week: 5, date: "2025-09-14", note: "" },
  { week: 6, date: "2025-09-21", note: "" },
  { week: 7, date: "2025-09-28", note: "" },
  { week: 8, date: "2025-10-05", note: "Monthly Test" },
  { week: 9, date: "2025-10-12", note: "" },
  { week: 10, date: "2025-10-19", note: "" },
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
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-2 border">Week</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Note</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, idx) => (
                  <tr key={idx} className="even:bg-gray-50">
                    <td className="px-4 py-2 border text-center">{row.week}</td>
                    <td className="px-4 py-2 border text-center">{row.date}</td>
                    <td className="px-4 py-2 border">{row.note}</td>
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

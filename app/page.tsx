
import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-indigo-50">
      <Header />

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

        {/* Schedule section moved to /schedule page */}

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

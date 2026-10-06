import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { FaPen } from 'react-icons/fa'

function AdminSettings() {
  return (
    <div className="flex flex-col">

      <AdminHeader />

        <div className="flex-1 md:grid md:grid-cols-5">
        <div className="col-span-1">
          <AdminSidebar />
        </div>

       <div className="col-span-4 p-10">

  <h1 className="text-3xl font-bold text-center mt-5 mb-8">
    Settings
  </h1>

  {/* Main Settings Content */}
  <div className="md:grid md:grid-cols-2 gap-10 items-start">

    {/* LEFT SIDE - INFORMATION */}
    <div>
      <h2 className="text-xl mb-5 font-bold">
        Welcome, Admin 👋
      </h2>

      <p className="text-justify">
        This is your personal administration space where you can manage
        your account details, system preferences, and platform roles with
        ease. From here, you can update essential information such as your
        username, password, contact details, and notification preferences —
        ensuring your access remains secure and personalized.
      </p>

      <h4 className="text-lg my-5 font-bold">
        🔧 What You Can Manage in This Section:
      </h4>

      <ul className="space-y-2">
        <li>✏️ Update personal details (name, email, role, profile picture)</li>
        <li>🔐 Change or reset your password</li>
        <li>📢 Configure notification and alert preferences</li>
        <li>👥 Manage permissions based on assigned access level</li>
        <li>🧩 Customize dashboard visibility and layout</li>
      </ul>

      <p className="my-5 text-justify">
        Your profile settings help ensure your administrative tools work
        the way you need them to — securely, efficiently, and with
        complete control. Thank you for keeping the platform organized
        and running smoothly. Continue managing, updating, and improving
        the system — one step at a time. 🚀📚
      </p>
    </div>


    {/* RIGHT SIDE - EDIT PROFILE */}
    <div className="flex flex-col items-center bg-blue-100 rounded-2xl">

      {/* Profile Image */}
      <div className="relative mb-10">

        <label htmlFor="userProfile" className="cursor-pointer">
          <input
            type="file"
            id="userProfile"
            hidden
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyh9ZR7j2Oi5JHGSIe2mt2cgeVlwQb4mXg3kXIaPgEJQ&s=10"
            alt="User"
            className="w-40 h-40 object-cover rounded-full border-4 border-gray-200"
          />
        </label>

        {/* Edit Button */}
        <button
          className="absolute bottom-0 right-0 bg-black text-white p-3 rounded"
        >
          <FaPen />
        </button>

      </div>


      {/* Username */}
      <div className="w-full mb-3">
        <input
          type="text"
          placeholder="Username"
          className="w-full border border-gray-200 rounded p-3"
        />
      </div>

      {/* New Password */}
      <div className="w-full mb-3">
        <input
          type="password"
          placeholder="New password"
          className="w-full border border-gray-200 rounded p-3"
        />
      </div>

      {/* Confirm Password */}
      <div className="w-full mb-3">
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full border border-gray-200 rounded p-3"
        />
      </div>


      {/* Buttons */}
      <div className="flex justify-end w-full mt-2">
        <button className="bg-yellow-400 text-white px-5 py-3 rounded mr-2">
          Reset
        </button>

        <button className="bg-green-700 text-white px-5 py-3 rounded">
          Update
        </button>
      </div>

    </div>

  </div>

    </div>
    </div>
    </div>
  )
}

export default AdminSettings
import React from 'react'
import { Link } from 'react-router-dom'
import { FaChartBar, FaDatabase } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'

function AdminSidebar() {
  return (
    <div className="bg-blue-100 h-full py-10">

      {/* Image */}
      <div className="flex justify-center">
        <img className="rounded-full" style={{width:'150px',height:'150px'} }
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyh9ZR7j2Oi5JHGSIe2mt2cgeVlwQb4mXg3kXIaPgEJQ&s=10"
          alt="Admin Profile"
        />
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold my-5 text-center">
        NAME
      </h3>

      {/* Links */}
      <div className="mt-10 flex flex-col items-center">

        <div className="mt-3">
          <Link
            to="/admin"
            className="flex items-center"
          >
            <FaChartBar className="me-2" />
            Dashboard
          </Link>
        </div>

        <div className="mt-3">
          <Link
            to="/admin/resources"
            className="flex items-center"
          >
            <FaDatabase className="me-2" />
            Collections
          </Link>
        </div>

        <div className="mt-3">
          <Link
            to="/admin/settings"
            className="flex items-center"
          >
            <FaGear className="me-2" />
            Settings
          </Link>
        </div>

      </div>

    </div>
  )
}

export default AdminSidebar
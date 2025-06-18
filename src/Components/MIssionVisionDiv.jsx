import React from 'react'
import { missionVision } from '../PageData/data'

const MissionVisionDiv = () => {
  return (
     <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {missionVision.map((item, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-inner">
              <img
                src={item.img || "https://via.placeholder.com/300"}
                alt={item.title + " image"}
                className="w-full h-2/4 object-cover rounded-t-lg mb-2"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300";
                  console.error("Mission image failed to load:", e.target.src);
                }}
              />
              <h5 className="text-xl font-semibold text-teal-700 mb-2">{item.title}</h5>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}          
          </div>
  )
}

export default MissionVisionDiv
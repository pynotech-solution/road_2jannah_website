import React from 'react'

const MIssionVisionDiv = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
              <img
                src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1750036911/494051333_9489761157727065_7600707138854965521_n_wfs2yf.jpg"
                alt="Vision Outreach"
                className="w-full h-2/4 object-cover rounded-t-lg mb-2"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300";
                  console.error("Vision image failed to load:", e.target.src);
                }}
              />
              <h5 className="text-lg font-semibold text-teal-700 mb-2">Vision Statement</h5>
              <p className="text-gray-700">Our Vision is to make the community a place of hope and transform lives through community outreach programmes.</p>
            </div>
  )
}

export default MIssionVisionDiv
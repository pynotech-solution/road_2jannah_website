function Focus() {
  return (
    <div id="focus" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-4">Our Focus</h2>
      <p className="text-center text-gray-700 mb-8">At Road2Jannah Foundation, we channel our efforts into key areas...</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Education for Rural Youth" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Education for Rural Youth</h3>
            <p className="text-gray-700 text-sm">We provide learning materials and tutoring to rural youth...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Healthcare for Underserved Families" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Healthcare for Underserved Families</h3>
            <p className="text-gray-700 text-sm">Our healthcare camps offer medical checkups and medicines...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1529390079861-0edd4c12bf9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Economic Empowerment" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Economic Empowerment</h3>
            <p className="text-gray-700 text-sm">Through programs like Medwuma Pa, we provide grants and training...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Focus;
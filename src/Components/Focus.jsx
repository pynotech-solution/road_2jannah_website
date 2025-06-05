function Focus() {
  return (
    <div id="focus" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-4">Our Focus</h2>
      <p className="text-center text-gray-700 mb-8">At Road2Jannah Foundation, we channel our efforts into key areas...</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494207187_9504517676251413_1910426553169373340_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHtYQrXMmkGigaYSIUpy8Tl6zmbAVFEe6vrOZsBUUR7q-eUQcjq2cJ3KZc9GAru1Bu9_cUVQNz-0Fd1iG06f2cm&_nc_ohc=tASGAlpXRDAQ7kNvwFVu73M&_nc_oc=Adm-2U3WgEpBqpDxRWMOlvO8hHaxzVASAX8WX74SBM3rcvsS5uT_A6WsUddG86qnbQU&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=3soGMgF9wR7GZ-IEsXVKJQ&oh=00_AfNc7F0YMWsFi4B6bFh7T0jPiKXK2GzdB1G7Kh6whK1GgA&oe=6847FE07" alt="Education for Rural Youth" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Education for Rural Youth</h3>
            <p className="text-gray-700 text-sm">We provide learning materials and tutoring to rural youth...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Community Help" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Community Help</h3>
            <p className="text-gray-700 text-sm">We support community initiatives with resources and volunteer efforts...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://web.facebook.com/photo/?fbid=7737309449638920&set=pcb.1137495754023869&__cft__[0]=AZUTuED-hYkAPWIG0FOt5Bo0rnXMYVCvz98k64szSyIvKbxlnbFM_KPaq3OEvLHWupDql6I7FpxyF-t7iY_GUN05aBA3Qb3GPPNnXK_03mMRGLhPrfq1bMTnWYAgXqF3BnTEL6zZi4XoCHUAmlFs5bwZGhDup8FVKDjTwCi9jmNTCFu5qm660w4loG8u8gmXB5W1XDNl3zYAzLajnHyaJrHB&__tn__=*b0H-R" alt="Economic Empowerment" className="w-full h-48 object-cover" />
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
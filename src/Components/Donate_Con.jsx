function Donate_Con({ openDonationModal }) {
  return (
    <div id="donate" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-4">Donate Now</h2>
      <div className="border-t border-teal-800 w-16 mx-auto mb-6"></div>
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Your generous contributions help us deliver iftar meals to over 1,000 families during Ramadan, empower rural youth with educational resources, and provide healthcare camps for underserved communities, ensuring care and support reach those in need.
          </p>
          <div className="text-center">
            <button onClick={openDonationModal} className="bg-teal-800 text-white py-2 px-6 rounded-lg hover:bg-teal-700">Make a Donation</button>
          </div>
        </div>
        <div>
          <img src="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/496940432_9621165381253308_5638857211374510766_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHoD6FckslT8lnzbi9AlpdBjpzEvfjxzXiOnMS9-PHNeMh4K_3HXwUiu7SNAf2XaDR_-ElfTLd6ffp_xc6OGC-u&_nc_ohc=v6mAellPu4oQ7kNvwGECHJm&_nc_oc=AdmYrrfDSg88vKwtaP7Nj0Yb2Ej3vKQc_7wU-nb1BjdiCCcHUGSS-h9roBh8Ks--QbA&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=ox7ZhqW_IttcmguMQDLHiA&oh=00_AfPUjuOfwBn_75z9uZt6r7mi06jYwyhXNYkgrNwEsel7Mw&oe=6847F384" alt="Donate Now Community Support" className="w-full h-96 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Donate_Con
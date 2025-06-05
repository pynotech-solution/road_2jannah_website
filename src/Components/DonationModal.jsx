function DonationModal({ isDonationModalOpen, closeDonationModal, copyToClipboard, copyMoMoToClipboard, copySuccess, copyMoMoSuccess }) {
  if (!isDonationModalOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeDonationModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeDonationModal} className="absolute top-2 right-2 text-teal-800 hover:text-teal-600 hover:scale-110 transition duration-300 text-xl">×</button>
        <h3 className="text-2xl font-bold text-teal-800 mb-4 text-center">Donation Details</h3>
        <div className="border-t border-teal-800 w-16 mx-auto mb-4"></div>
        <p className="text-gray-700 text-lg text-center">Please make your donation to the following accounts:</p>
        <div className="bg-teal-50 p-4 rounded-md mt-4 text-center">
          <p className="text-gray-700 text-lg font-semibold">Bank Account Number:  600-024-209-865</p>
          <p className="text-gray-700 text-lg">Branch:SG Ghana, Lapaz</p>
          <p className="text-gray-700 text-lg">Account Name: Road 2 Jannah Foundation LBG</p>
          <button onClick={copyToClipboard} className="mt-2 bg-teal-800 text-white py-1 px-3 rounded hover:bg-teal-700 focus:outline-none">{copySuccess ? 'Copied!' : 'Copy to Clipboard'}</button>
        </div>
        <div className="bg-teal-50 p-4 rounded-md mt-4 text-center">
          <p className="text-gray-700 text-lg font-semibold">MoMo Account Number: 024-252-4634</p>
          <p className="text-gray-700 text-lg font-semibold">Merchant No : 059-855-5082</p>
          <p className="text-gray-700 text-lg">Network: MTN</p>
          <p className="text-gray-700 text-lg">Account Name: Road 2 Jannah Foundation</p>
          <button onClick={copyMoMoToClipboard} className="mt-2 bg-teal-800 text-white py-1 px-3 rounded hover:bg-teal-700 focus:outline-none">{copyMoMoSuccess ? 'Copied!' : 'Copy to Clipboard'}</button>
        </div>
        <div className="mt-4 text-center">
          {/* <p className="text-gray-700 text-lg">Bank: STANDARD CHARTERED GHANA</p>
          <p className="text-gray-700 text-lg">SWIFT Code: ECOCGHAC</p> */}
        </div>
        <p className="text-gray-600 text-sm mt-4 text-center">Thank you for your support! Your contribution will help us continue our mission.</p>
      </div>
    </div>
  );
}

export default DonationModal;
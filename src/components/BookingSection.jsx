export function BookingSection() {
  return (
    <section
      id="booking-section"
      className="py-32 px-3 xs:px-4 sm:px-6 lg:px-8 bg-cream-50"
    >
      <div className="max-w-sm xs:max-w-md sm:max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bordeaux-900 mb-6">
            Jetzt Ihren Termin buchen
          </h2>
          <p className="text-lg text-bordeaux-700 max-w-2xl mx-auto">
            Buchen Sie Ihren Termin bequem über Doctolib. Die
            Kosten für die Beratung betragen 20 Euro.
          </p>
        </div>

        {/* Doctolib Booking Options */}
        <div className="bg-white rounded-lg shadow-medium p-8 border-t-4 border-bordeaux-500">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Appointment Booking */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-bordeaux-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-bordeaux-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-bordeaux-900 mb-3">Termin buchen</h3>
                <p className="text-bordeaux-700 mb-6">
                  Wählen Sie einen verfügbaren Termin für Ihre Beratung
                </p>
              </div>
              <a
                href="https://www.doctolib.de/praktischer-arzt/berlin/funda-kircil?utm_campaign=website-button&utm_source=funda-kircil-website-button&utm_medium=referral&utm_content=option-8&utm_term=funda-kircil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-bordeaux-500 hover:bg-bordeaux-600 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Jetzt Termin buchen
              </a>
            </div>

            {/* Message to Practice */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-bordeaux-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-bordeaux-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-bordeaux-900 mb-3">Nachricht senden</h3>
                <p className="text-bordeaux-700 mb-6">
                  Senden Sie eine Nachricht direkt an unsere Praxis
                </p>
              </div>
              <a
                href="https://www.doctolib.de/praktischer-arzt/berlin/funda-kircil/patient-request?utm_campaign=website-button&utm_source=funda-kircil/patient-request-website-button&utm_medium=referral&utm_content=option-8&utm_term=funda-kircil/patient-request"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white border-2 border-bordeaux-500 text-bordeaux-500 hover:bg-bordeaux-50 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Nachricht senden
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-sm text-bordeaux-500">
            Termine werden über die sichere Doctolib-Plattform verwaltet.
          </p>
        </div>
      </div>

      {/* Doctolib Floating Widget */}
      <nav className="doctolib-widget" id="doctolib-nav" aria-label="Doctolib Schnellzugriff">
        <a href="#maincontent" className="skip-link" style={{position:'absolute',left:'-9999px',top:'auto',width:'1px',height:'1px',overflow:'hidden'}}>Zum Hauptinhalt springen</a>
        <img src="https://www.doctolib.de/external_button/doctolib-white-transparent.png" alt="Doctolib Logo"/>
        <a href="https://www.doctolib.de/praktischer-arzt/berlin/funda-kircil?utm_campaign=website-button&utm_source=funda-kircil-website-button&utm_medium=referral&utm_content=option-8&utm_term=funda-kircil" target="_blank" rel="noopener noreferrer" aria-label="Termin über Doctolib buchen">Termin</a>
        <a href="https://www.doctolib.de/praktischer-arzt/berlin/funda-kircil/patient-request?utm_campaign=website-button&utm_source=funda-kircil/patient-request-website-button&utm_medium=referral&utm_content=option-8&utm_term=funda-kircil/patient-request" target="_blank" rel="noopener noreferrer" aria-label="Nachricht an Praxis über Doctolib senden">Nachricht</a>
      </nav>
    </section>
  );
}

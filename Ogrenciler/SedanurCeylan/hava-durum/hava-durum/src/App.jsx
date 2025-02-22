import React, { useState, useEffect } from 'react';

const App = () => {

  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    console.log("Mount aşamasında useEffect çalıştı", { city, date, weather, error, loading });
  }, []);


  useEffect(() => {
    console.log("Şehir Güncellendi:", city);
  }, [city]);


  useEffect(() => {
    console.log("tARİH  GÜNCELLENDİ:", date);
  }, [date]);


  useEffect(() => {
    console.log("Weather updated:", weather);
  }, [weather]);


  const formatDate = (d) => {
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { city, date });
    
    if (!city || !date) {
      console.log("Şehir veya tarih boş");
      setError('Lütfen şehir ve tarih bilgilerini girin.');
      setWeather(null);
      return;
    }
    
    setLoading(true);
    setError(null);
    setWeather(null);
    const chosenDate = new Date(date);
    const dateStr = formatDate(chosenDate);

    const apiKey = 'JBUEN5LF8SDGDCCXY8484J8MG';
    const location = encodeURIComponent(city);
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${dateStr}/${dateStr}?unitGroup=metric&key=${apiKey}&contentType=json`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('API hatası: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        if (data.days && data.days.length > 0) {
      
          setWeather(data.days[0]);
          setError(null);
        } else {
          setError('Belirtilen tarih için veri bulunamadı.');
          setWeather(null);
        }
      })
      .catch((err) => {
        setError('Bir hata oluştu: ' + err.message);
        setWeather(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <div className="app-container">
      <div className="form-container">
        <h1 className="mb-4">Hava Durumu</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="city">Şehir:</label>
            <input
              type="text"
              id="city"
              className="form-control"
              placeholder="Şehir adı girin"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="date">Tarih:</label>
            <input
              type="date"
              id="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Yükleniyor...' : 'Gönder'}
          </button>
        </form>

        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}

        {weather && (
          <div className="weather-result mt-3" role="alert">
            <div className="weather-icon">
              {/* İsteğe bağlı: Font Awesome veya başka bir ikon kütüphanesi kullanabilirsiniz */}
              <i className="fas fa-sun"></i>
            </div>
            <div className="weather-info">
              <p>
                <strong>Tarih:</strong> {weather.datetime}
              </p>
              <p>
                <strong>Sıcaklık:</strong> {weather.temp} °C
              </p>
              <p>
                <strong>Hava Durumu:</strong> {weather.conditions}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

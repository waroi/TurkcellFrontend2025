import React, { useEffect, useState } from "react";
import Leagues from "../service/sportsLeagueService"; // Mevcut Leagues servisinizin yolunu ayarlamanız gerekir

const SportsLeagues = () => {
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("");
  const [results, setResults] = useState([]);
  const [standings, setStandings] = useState([]);
  const [activeTab, setActiveTab] = useState("results");

  useEffect(() => {
    const fetchLeagues = async () => {
      const response = await Leagues.getLeaguageList();
      if (response.success && response.result.length > 0) {
        setLeagues(response.result);
        setSelectedLeague(response.result[0].key);
      }
    };
    fetchLeagues();
  }, []);

  useEffect(() => {
    if (selectedLeague) {
      const fetchLeagueData = async () => {
        const resultsResponse = await Leagues.getLeaguageResult({
          league: selectedLeague,
        });
        if (resultsResponse.success) {
          setResults(resultsResponse.result);
        }
        const fixtureResponse = await Leagues.getLeaguageFikstur({
          league: selectedLeague,
        });
        if (fixtureResponse.success) {
          setStandings(fixtureResponse.result);
        }
      };

      fetchLeagueData();
    }
  }, [selectedLeague]);

  const handleLeagueChange = (e) => {
    setSelectedLeague(e.target.value);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const currentDate = new Date();

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const getSelectedLeagueName = () => {
    const league = leagues.find((l) => l.key === selectedLeague);
    return league ? league.league : "";
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Futbol Ligleri</h2>
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <select
            className="form-select"
            value={selectedLeague}
            onChange={handleLeagueChange}
          >
            {leagues.map((league) => (
              <option key={league.key} value={league.key}>
                {league.league}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h3 className="text-center mb-4">{getSelectedLeagueName()}</h3>

      <ul className="nav nav-tabs mb-4 justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "results" ? "active" : ""}`}
            onClick={() => toggleTab("results")}
          >
            Bu Haftaki Maclar
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "standings" ? "active" : ""}`}
            onClick={() => toggleTab("standings")}
          >
            Puan Durumu
          </button>
        </li>
      </ul>

      <div className="tab-content">
        <div className={`tab-pane ${activeTab === "results" ? "active" : ""}`}>
          {results.length > 0 ? (
            <div className="row">
              {results.map((match, index) => {
                const matchDate = new Date(match.date);
                const isMatchPlayed = matchDate < currentDate; // Maç tarihi geçti mi?

                return (
                  <div key={index} className="col-md-6 mb-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <strong className="text-primary">{match.home}</strong>
                          <span className="badge bg-dark">
                            {isMatchPlayed ? match.skor : "Oynanamadı"}
                          </span>
                          <strong className="text-danger">{match.away}</strong>
                        </div>
                        <div className="text-center text-muted small">
                          {formatDate(match.date)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="alert alert-info">
              Bu lig için sonuç bulunamadı.
            </div>
          )}
        </div>

        <div
          className={`tab-pane ${activeTab === "standings" ? "active" : ""}`}
        >
          {standings.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Sıra</th>
                    <th>Takım</th>
                    <th>O</th>
                    <th>G</th>
                    <th>M</th>
                    <th>P</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((team, index) => (
                    <tr key={index}>
                      <td>{team.rank}</td>
                      <td>
                        <strong>{team.team}</strong>
                      </td>
                      <td>{team.play}</td>
                      <td>{team.win}</td>
                      <td>{team.lose}</td>
                      <td>
                        <strong>{team.point}</strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="alert alert-info">
              Bu lig için puan durumu bulunamadı.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SportsLeagues;

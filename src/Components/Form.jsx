

const Form=()=>{
    return(
        <div className="min-h-screen w-auto flex overflow-hidden flex-col">
        <header>
          <Header></Header>
        </header>

        <div className="flex flex-grow justify-between">
          <div className="w-3/4 p-6 flex-grow">
            <Main
              loading={loading}
              response={response}
              handleSubmit={handleLeadSubmit}
              handleChange={handleLeadChange}
              email={email}
            />
          </div>
          <div className="w-1/4 p-6">
            <form className="formContainer" onSubmit={handleSubmit}>
              <label htmlFor="destinationCountry">Destination Country</label>
              <input
                type="text"
                placeholder="e.g. San Francisco/USA, Paris/France, Istanbul/Turkey, etc."
                id="destinationCountry"
                name="destinationCountry"
                value={values.destinationCountry}
                onChange={handleChange}
                required
              />
              <div>
                <label htmlFor="topDestinations">🔥Top Destionations:</label>
                <div className="button">
                  {topLocations.map((location) => (
                    <div
                      key={location.value}
                      onClick={() => handleLocationClick(location)}
                    >
                      {location.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <label htmlFor="budget">
                    Budget
                    <p
                      style={{
                        display: "inline-block",
                        color: "#666",
                        fontSize: "10px",
                      }}
                    >
                      (with currency)
                    </p>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. $1000 USD, 1000 EUR, etc."
                    id="budget"
                    name="budget"
                    value={values.budget}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tripDuration">
                    Trip Duration
                    <p
                      style={{
                        display: "inline-block",
                        color: "#666",
                        fontSize: "10px",
                      }}
                    >
                      (in days)
                    </p>
                  </label>
                  <input
                    type="number"
                    id="tripDuration"
                    name="tripDuration"
                    value={values.tripDuration}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <label htmlFor="interests">Interests</label>
              <div className="flex items-center flex-wrap p-2 ">
                {options.interestsNew.map((interest, index) => (
                  <div
                    key={index}
                    className={
                      selectedInterests.includes(interest?.name)
                        ? "selected"
                        : ""
                    }
                    onClick={() => {
                      handleInterestClick(interest.name);
                    }}
                    value={interest}
                  >
                    <span aria-label="emoji">{interest.emoji}</span>
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="accommodationType">Accommodation</label>
                  <select
                    id="accommodationType"
                    name="accommodationType"
                    value={values.accommodationType}
                    onChange={handleChange}
                  >
                    {options.accommodationTypes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="travelStyle">Travel Style</label>
                  <select
                    id="travelStyle"
                    name="travelStyle"
                    value={values.travelStyle}
                    onChange={handleChange}
                  >
                    {options.travelStyles.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <label htmlFor="transportationType">
                Transportation Type
                <p
                  style={{
                    display: "inline-block",
                    fontSize: "10px",

                    color: "#666",
                  }}
                >
                  (e.g. car, train, bus, etc.)
                </p>
              </label>
              <input
                type="text"
                id="transportationType"
                name="transportationType"
                value={values.transportationType}
                onChange={handleChange}
                required
              />

              <label htmlFor="activityType">
                Activity Type
                <p
                  style={{
                    display: "inline-block",
                    fontSize: "10px",

                    color: "#666",
                  }}
                >
                  (select multiple options)
                </p>
              </label>
              <select
                id="activityType"
                name="activityType"
                multiple
                value={values.activityType}
                onChange={handleMultiSelectChange}
              >
                {options.activityTypes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <label htmlFor="cuisineType">Cuisine Type</label>
              <div className="flex flex-wrap">
                {options.cuisineTypes.map((cuisineType) => (
                  <div
                    multiple
                    value={values.cuisineType}
                    onChange={handleMultiSelectChange}
                    key={cuisineType.name}
                    className={
                      selectedCuisineTypes.includes(cuisineType.name)
                        ? "selected"
                        : ""
                    }
                    onClick={() => {
                      handleCuisineTypeClick(cuisineType.name);
                    }}
                  >
                    <span role="img" aria-label={cuisineType.name}>
                      {cuisineType.emoji}
                    </span>

                    <br />

                    <span>{cuisineType.name}</span>
                  </div>
                ))}
              </div>

              <div>
                <label>Language</label>
                <div className="flex flex-wrap">
                  {options.languages.map((option) => (
                    <option
                      key={option.value}
                      onClick={() => {
                        handleLanguageClick(option);
                      }}
                      value={values.language}
                      className={
                        selectedLanguage === option.value ? "selected" : ""
                      }
                    >
                      <span role="img" aria-label={option.label}>
                        {option.icon}
                      </span>
                    </option>
                  ))}
                </div>
              </div>
              <GenerateButton
                loading={loading}
                type="submit"
                disabled={loading}
                className={loading ? "loading" : ""}
              ></GenerateButton>
            </form>
          </div>
        </div>
        <div className="fixed bottom-0 w-full bg-white p-4">
          <div className="container mx-auto">
            <Link to="/" className="text-lg font-bold text-blue-500">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

    )
}
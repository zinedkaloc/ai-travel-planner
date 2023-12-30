
import React, { useState } from "react";
import { options, topLocations } from "./Components/Data";
import GenerateButton  from "./Components/Button"
import Main from "./Components/Main";

const defaultValues = {
  destinationCountry: "",
  budget: "250 USD",
  travelStyle: options.travelStyles[0],
  interestsNew: [],
  accommodationType: options.accommodationTypes[0],
  transportationType: "Bus",
  activityType: [options.activityTypes[0]],
  cuisineType: options.cuisineTypes[0],
  tripDuration: "3",
  language: options.languages[0].value,
};

const AITravelPlanner = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [values, setValues] = useState(defaultValues);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedCuisineTypes, setSelectedCuisineTypes] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(
    options.languages[0]
  );

  const handleCuisineTypeClick = (cuisineType) => {
    if (selectedCuisineTypes.includes(cuisineType)) {
      setSelectedCuisineTypes(
        selectedCuisineTypes.filter((item) => item !== cuisineType)
      );
      setValues((prevState) => ({
        ...prevState,
        cuisineType: selectedCuisineTypes.filter(
          (item) => item !== cuisineType
        ),
      }));
    } else {
      if (selectedCuisineTypes.length >= 3) {
        setSelectedCuisineTypes((prevSelectedCuisineTypes) => {
          const newSelectedCuisineTypes = [
            ...prevSelectedCuisineTypes.slice(1),
            cuisineType,
          ];
          setValues((prevState) => ({
            ...prevState,
            cuisineType: newSelectedCuisineTypes,
          }));
          return newSelectedCuisineTypes;
        });
      } else {
        setSelectedCuisineTypes((prevSelectedCuisineTypes) => {
          const newSelectedCuisineTypes = [
            ...prevSelectedCuisineTypes,
            cuisineType,
          ];
          setValues((prevState) => ({
            ...prevState,
            cuisineType: newSelectedCuisineTypes,
          }));
          return newSelectedCuisineTypes;
        });
      }
    }
  };

  const handleInterestClick = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      if (selectedInterests.length >= 3) {
        setSelectedInterests((prevSelectedInterests) => {
          const newSelectedInterests = [
            ...prevSelectedInterests.slice(1),
            interest,
          ];
          setValues((prevState) => ({
            ...prevState,
            interestsNew: newSelectedInterests,
          }));
          return newSelectedInterests;
        });
      } else {
        setSelectedInterests((prevSelectedInterests) => {
          const newSelectedInterests = [...prevSelectedInterests, interest];
          setValues((prevState) => ({
            ...prevState,
            interestsNew: newSelectedInterests,
          }));
          return newSelectedInterests;
        });
      }
    }
  };
  // TODO: Add a function to handle the language, cuisine type and interest selection
  /* const handleSelect = (option, field, maxSelect) => {
    let selectedValues = values[field] || [];

    if (selectedValues.includes(option)) {
      // Remove the option from the selected values
      selectedValues = selectedValues.filter((value) => value !== option);
    } else {
      // Add the option to the selected values
      if (selectedValues.length >= maxSelect) {
        // Remove the first selected value if the maximum number of options is reached
        selectedValues.shift();
      }
      selectedValues.push(option);
    }

    // Update the form state
    setValues((prevState) => ({
      ...prevState,
      [field]: selectedValues,
    }));
  }; */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLocationClick = (location) => {
    setValues((prevState) => ({
      ...prevState,
      destinationCountry: location.name,
    }));
  };

  const handleMultiSelectChange = (e) => {
    const { name, options } = e.target;
    console.log(name,options);
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        console.log(options[i].value);
        selectedOptions.push(options[i].value);
      }
    }
    setValues((prevState) => ({
      ...prevState,
      [name]: selectedOptions,
    }));
  };

  const handleLanguageClick = (option) => {
    setSelectedLanguage(option.value);

    setValues((prevState) => ({
      ...prevState,
      language: option.label,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let prompt = `Generate a personalized travel itinerary for a trip to ${values.destinationCountry} with a budget of ${values.budget}. The traveler is interested in a ${values.travelStyle} vacation and enjoys ${values.interestsNew}. They are looking for ${values.accommodationType} accommodations and prefer ${values.transportationType} transportation. The itinerary should include ${values.activityType || ''} activities and ${values.cuisineType} dining options. Please provide a detailed itinerary with daily recommendations for ${values.tripDuration} days, including suggested destinations, activities, and dining options. The itinerary should be written in ${values.language}. `;
    console.log(prompt);
    fetch("https://travelai-91rf.onrender.com/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt, city: values.destinationCountry }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data.response.choices[0].message.content);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  const [email, setEmail] = useState("");

  const handleLeadSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    };
    fetch(
      "https://c4-na.altogic.com/e:6431cdd646d52b27d865c9da/lead",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    setEmail("");
  };

  const handleLeadChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className="container flex w-full h-screen justify-between ">
      <div className="w-3/4 p-6">
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
            <div >
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
                    selectedInterests.includes(interest?.name) ? "selected" : ""
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
    </>
  );
};

export default AITravelPlanner;

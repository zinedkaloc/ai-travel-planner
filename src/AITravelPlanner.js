import React, { useState } from "react";
import { options, topLocations } from "./Options";
import { Container, CuisineType, CuisineTypesContainer, FormContainer, FormGroup, FormRow, Input, InterestEmoji, InterestItemNew, InterestName, InterestsContainerNew, Label, LanguageOption, LanguageRow, LanguageSelectorContainer, Panel, PinButton, Select, TopLocationContainer } from "./Style";
import { Main } from "./Main";
import { GenerateButton } from "./GenerateButton";
import { defaultValues } from "./App";

export const AITravelPlanner = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
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
  const handleSelect = (option, field, maxSelect) => {
    let selectedValues = values[field] || [];

    if (selectedValues.includes(option)) {
      // Remove the option from the selected values
      selectedValues = selectedValues.filter((value) => value !== option);
    } else {
      //Add the option to the selected values
      if (selectedValues.length >= maxSelect) {
        //  Remove the first selected value if the maximum number of options is reached
        selectedValues.shift();
      }
      selectedValues.push(option);
    }

    //Update the form state
    setValues((prevState) => ({
      ...prevState,
      [field]: selectedValues,
    }));
  };

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
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
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
    let prompt = `Generate a personalized travel itinerary for a trip to ${values.destinationCountry} with a budget of ${values.budget}. The traveler is interested in a ${values.travelStyle} vacation and enjoys ${values.interestsNew}. They are looking for ${values.accommodationType} accommodations and prefer ${values.transportationType} transportation. The itinerary should include ${values.activityType} activities and ${values.cuisineType} dining options. Please provide a detailed itinerary with daily recommendations for ${values.tripDuration} days, including suggested destinations, activities, and dining options. The itinerary should be written in ${values.language}. `;
    fetch("https://travel-ai-vert.vercel.app/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data.response.choices[0].message.content);
        setLoading(false);
        setImages(data.images);
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
      <Container>
        <Main
          loading={loading}
          images={images}
          response={response}
          handleSubmit={handleLeadSubmit}
          handleChange={handleLeadChange}
          email={email} />
        <Panel>
          <FormContainer onSubmit={handleSubmit}>
            <Label htmlFor="destinationCountry">Destination Country</Label>
            <Input
              type="text"
              placeholder="e.g. San Francisco/USA, Paris/France, Istanbul/Turkey, etc."
              id="destinationCountry"
              name="destinationCountry"
              value={values.destinationCountry}
              onChange={handleChange}
              required />
            <TopLocationContainer>
              <Label htmlFor="topDestinations">🔥Top Destionations:</Label>
              {topLocations.map((location) => (
                <PinButton
                  key={location.value}
                  onClick={() => handleLocationClick(location)}
                >
                  {location.name}
                </PinButton>
              ))}
            </TopLocationContainer>
            <FormRow>
              <FormGroup>
                <Label htmlFor="budget">
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
                </Label>
                <Input
                  type="text"
                  placeholder="e.g. $1000 USD, 1000 EUR, etc."
                  id="budget"
                  name="budget"
                  value={values.budget}
                  onChange={handleChange}
                  required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="tripDuration">
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
                </Label>
                <Input
                  type="number"
                  id="tripDuration"
                  name="tripDuration"
                  value={values.tripDuration}
                  onChange={handleChange}
                  required />
              </FormGroup>
            </FormRow>
            <Label htmlFor="interests">Interests</Label>
            <InterestsContainerNew>
              {options.interestsNew.map((interest, index) => (
                <InterestItemNew
                  key={index}
                  className={selectedInterests.includes(interest.name) ? "selected" : ""}
                  onClick={() => {
                    handleInterestClick(interest.name);
                  }}
                  value={interest}
                >
                  <InterestEmoji aria-label="emoji">
                    {interest.emoji}
                  </InterestEmoji>
                  <InterestName>{interest.name}</InterestName>
                </InterestItemNew>
              ))}
            </InterestsContainerNew>

            <FormRow>
              <FormGroup>
                <Label htmlFor="accommodationType">Accommodation</Label>
                <Select
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
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="travelStyle">Travel Style</Label>
                <Select
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
                </Select>
              </FormGroup>
            </FormRow>

            <Label htmlFor="transportationType">
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
            </Label>
            <Input
              type="text"
              id="transportationType"
              name="transportationType"
              value={values.transportationType}
              onChange={handleChange}
              required />

            <Label htmlFor="activityType">
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
            </Label>
            <Select
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
            </Select>
            <Label htmlFor="cuisineType">Cuisine Type</Label>
            <CuisineTypesContainer>
              {options.cuisineTypes.map((cuisineType) => (
                <CuisineType
                  multiple
                  value={values.cuisineType}
                  onChange={handleMultiSelectChange}
                  key={cuisineType.name}
                  className={selectedCuisineTypes.includes(cuisineType.name)
                    ? "selected"
                    : ""}
                  onClick={() => {
                    handleCuisineTypeClick(cuisineType.name);
                  }}
                >
                  <span role="img" aria-label={cuisineType.name}>
                    {cuisineType.emoji}
                  </span>

                  <br />

                  <span>{cuisineType.name}</span>
                </CuisineType>
              ))}
            </CuisineTypesContainer>

            <LanguageSelectorContainer>
              <Label>Language</Label>
              <LanguageRow>
                {options.languages.map((option) => (
                  <LanguageOption
                    key={option.value}
                    onClick={() => {
                      handleLanguageClick(option);
                    }}
                    value={values.language}
                    className={selectedLanguage === option.value ? "selected" : ""}
                  >
                    <span role="img" aria-label={option.label}>
                      {option.icon}
                    </span>
                  </LanguageOption>
                ))}
              </LanguageRow>
            </LanguageSelectorContainer>
            <GenerateButton
              loading={loading}
              type="submit"
              disabled={loading}
              className={loading ? "loading" : ""}
            ></GenerateButton>
          </FormContainer>
        </Panel>
      </Container>
    </>
  );
};

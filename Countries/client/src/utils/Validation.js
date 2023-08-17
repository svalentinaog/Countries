export default function Validation(recordingData) {
  const errors = {};

  if (!/^[A-Za-z\s]+$/.test(recordingData.name)) {
    errors.name = "Invalid name. ";
  }

  if (!recordingData.name) {
    errors.name = "Please enter a name.";
  } else if (recordingData.name.length > 15) {
    errors.name = "Name is too long. Maximum 15 characters allowed.";
  }

  if (
    !recordingData.difficulty ||
    recordingData.difficulty < 0 ||
    recordingData.difficulty > 5
  ) {
    errors.difficulty =
      "Difficulty value must be a positive number between 1 and 5.";
  }

  if (
    !recordingData.duration ||
    recordingData.duration < 0 ||
    recordingData.duration > 24
  ) {
    errors.duration =
      "Duration value must be a positive number between 1 and 24.";
  }

  if (!recordingData.season) {
    errors.season = "Please enter a season.";
  }

  if (!recordingData.countryId || recordingData.countryId.length === 0) {
    errors.countryId = "Please select at least one type.";
  }
  return errors;
}

/*
  SEASONS:
  
  Summer
  Autumn 
  Winter 
  Spring

  Verano
  Otoño
  Invierno
  Primavera
  */

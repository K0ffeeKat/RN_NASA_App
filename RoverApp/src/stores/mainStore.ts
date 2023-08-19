import { makeAutoObservable } from "mobx";
import axios from "axios";

class Store {

  selectedCamera = ''

  selectedDate = ''

  error = ''

  listOfCameras = [
    { label: 'Front Hazard Avoidance Camera', value: 'FHAZ' },
    { label: 'Rear Hazard Avoidance Camera', value: 'RHAZ' },
    { label: 'Mast Camera', value: 'MAST' },
    { label: 'Chemistry and Camera Complex', value: 'CHEMCAM' },
    { label: 'Mars Hand Lens Imager', value: 'MAHLI' },
    { label: 'Mars Descent Imager', value: 'MARDI' },
    { label: 'Navigation Camera', value: 'NAVCAM' }
  ]

  allPhotos = []

  currentPhoto = []

  constructor() {
    makeAutoObservable(this)
  }

  async fetchPhotos() {
    try {
      const res = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?', {
        params: {
          earth_date: this.selectedDate,
          camera: this.selectedCamera,
          api_key: 'fHl6IibqR0J2lrjSfMKzUrVIDf960immKaNseAIV'
        }
      })
    } catch (error) {
      this.setError(error)
    }
  }

  setError = (error: any) => {
    this.error = error
  }

}

export const MainStore = new Store()
import { makeAutoObservable } from "mobx";
import axios from "axios";
import moment from "moment";

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

  constructor() {
    makeAutoObservable(this)
  }

  fetchPhotos = () => {
    const API_URL: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?'

    axios.get(API_URL, {
      params: {
        earth_date: this.selectedDate,
        camera: this.selectedCamera,
        api_key: 'fHl6IibqR0J2lrjSfMKzUrVIDf960immKaNseAIV'
      }
    })
    .then(response => this.allPhotos = response.data.photos)
    .then(console.log(this.allPhotos))
    .catch(error => this.setError(error))
  }

  setError = (error: any) => {
    this.error = error.response
  }

  setSelectedDate = (date: string) => {
    this.selectedDate = moment(date).format('YYYY-MM-DD')
    console.log(this.selectedDate)
  }

  setSelectedCamera = (camera: string) => {
    this.selectedCamera = camera
    console.log(this.selectedCamera)
  }

}

export const MainStore = new Store()
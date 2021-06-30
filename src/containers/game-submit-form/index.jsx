import Input from '../../components/input-field';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Checkbox from '../../components/checkbox';
import FileUpload from '../../components/file-upload';
import axios from 'axios';
import './styles.css';
import { Select } from '../../components/select-field';
import { GAME_CATEGORIES_LIST, GAME_TYPES_LIST } from '../../data/lists';
import ClipLoader from "react-spinners/ClipLoader";


const GameSubmitForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [ displaySuccess, setDisplaySuccess ] = useState(false);
  const [ displayError, setDisplayError ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  // When the form is valid, this method gets called
  const onSubmit = async(data) => {
    let images = []; // stores our array of ImageUpload objects
    let files = data.images; // grab all files from the form data from the react-form hook
    setDisplaySuccess(false);
    setDisplayError(false);
    setLoading(true);

    // Upload all images and get their public URLs from cloud storage
    for (let i = 0; i < files.length; i++) {
       const image = await uploadPhoto(files[i]);
       images.push(image);
    }
    uploadGameItem(data, images);
  }

  // Uploads a Game Item to the DB, resets the form
  const uploadGameItem = async(formData, images) => { 
    const gameItemAPIUrl = `${process.env.REACT_APP_API_SERVER}/api/game`;
    formData.tags = formatTags(formData.tags); // convert to an array of tags

    const formWithImages = {...formData, images};
    try {
      await axios.post(gameItemAPIUrl, formWithImages);
      
      // Reset form and scroll to top
      setLoading(false);
      reset();
      window.scrollTo(0, 0);
      setDisplaySuccess(true);

    } catch(error) {
      window.scrollTo(0, 0);
      setLoading(false);
      setDisplayError(true);
    }
  }

  // Uploads a single photo to the DB, returns imageURL
  const uploadPhoto = async(photo) => {
    const imageUploadAPIUrl = `${process.env.REACT_APP_API_SERVER}/api/upload`
    const formData = new FormData();
    let imageUrl = '';
    formData.append('file', photo);
    try {
      const response = await axios.post(imageUploadAPIUrl, formData);
      imageUrl = response.data;
    } catch(error) {
      console.error (error);
    }
    return imageUrl;
  }
  
  // Formats the tags into an array
  const formatTags = (tags) => {
    let arrayOfTags = tags.split(","); // convert to an array of tags
    return arrayOfTags.map (tag => tag.trim() );
  }

  // Closes success banner
  const closeSuccessBanner = () => {
    setDisplaySuccess(false);
  }

  // Closes error banner
  const closeErrorBanner = () => {
    setDisplayError(false);
  }

  return (
    <>
    {displayError && <div className="form-banner form-banner-error" onClick={closeErrorBanner}>There was a technical error, please try again!</div>}
    {displaySuccess && <div className="form-banner form-banner-success" onClick={closeSuccessBanner}>The game listing was successfully submitted!</div>}
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form-title">Submit a Game Stream!</h1>
      <p className="form-description">Fill out this form to post your stream into the Unity app for users to watch. How exciting?!</p>
      
      <Select options={GAME_TYPES_LIST} name="type" label="Type" errors={errors} register={register} required />
      <Select options={GAME_CATEGORIES_LIST} name="category" label="Category" errors={errors} register={register} required />
      <Input type="text" name="title" label="Title" errors={errors} register={register} required />
      <Input type="text" name="subtitle" label="Subtitle" errors={errors} register={register} required />
      <Input type="text" name="description" label="Description" errors={errors} register={register} required />
      <Input type="text" name="author" label="Author" errors={errors} register={register} required />
      <Input type="text" name="tags" label="Tags (comma separated)" errors={errors} register={register} required />
      <Input type="number" name="duration" label="Duration (seconds)" errors={errors} register={register} required />
      <Input type="text" name="replayBundleUrlJson" label="Watch URL" errors={errors} register={register} required />
      <Input type="number" name="version" label="Version" errors={errors} register={register} required />

      <FileUpload name="images" label="Images (accepted formats: png, jpg)" errors={errors} register={register} required />
      
      <Checkbox name="isDownloadable" label="is able to be downloaded" register={register} />
      <Checkbox name="isStreamable" label="is streamable" register={register}/>

      <ClipLoader color="000" loading={loading} size={150} />
      <input type="submit" value="Submit" />
    </form>
    </>
  );
};

export default GameSubmitForm;
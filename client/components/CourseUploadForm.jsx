import React, { useState } from 'react';
import api from '../services/api';

const CourseUploadForm = () => {
    const [image, setImage] = useState(null);
    const [imagePath, setImagePath] = useState('');

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', image);

        const res = await api.post('/upload', formData);
        setImagePath(res.data.imagePath);
    };

    return (
        <div>
            <input type="file" onChange={e => setImage(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
            {imagePath && <img src={imagePath} alt="Course" width={100} />}
            </div>
    )
}

export default CourseUploadForm
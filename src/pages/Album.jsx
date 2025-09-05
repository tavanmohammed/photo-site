import React from "react";
import { useParams } from "react-router-dom";

const albums = {
  wed1: [
    "/images/wed1.jpg",
    "/images/wed1a.jpg",
    "/images/wed1b.jpg",
    "/images/wed1c.jpg",
    "/images/wed1d.jpg",
    "/images/wed1e.jpg",
    "/images/wed1f.jpg",
    "/images/wed1g.jpg",
    "/images/wed1h.jpg",
    "/images/wed1i.jpg",
    "/images/wed1j.jpg",
    "/images/wed1k.jpg",
    "/images/wed1l.jpg",
    "/images/wed1m.jpg",
    "/images/wed1n.jpg",
    "/images/wed1o.jpg",
  ],
  wed2: [
    "/images/wed2.jpg",
    "/images/wed2b.jpg",
    "/images/wed2c.jpg",
    "/images/wed2d.jpg",
    "/images/wed2e.jpg",
    "/images/wed2f.jpg",
    "/images/wed2g.jpg",
    "/images/wed2h.jpg",
    "/images/wed2i.jpg",
    "/images/wed2j.jpg",
    "/images/wed2k.jpg",
    "/images/wed2l.jpg",
    "/images/wed2m.jpg",


  ],
  wed3: [
    "/images/wed3.jpg",
    "/images/wed3a.jpg",
    "/images/wed3b.jpg",
    "/images/wed3c.jpg",
    "/images/wed3d.jpg",
    "/images/wed3e.jpg",
    "/images/wed3f.jpg",
    "/images/wed3g.jpg",
    "/images/wed3h.jpg",
    "/images/wed3i.jpg",
    "/images/wed3j.jpg",
    "/images/wed3k.jpg",
    "/images/wed3l.jpg",
    "/images/wed3m.jpg",
    "/images/wed3n.jpg",
    "/images/wed3o.jpg",
    "/images/wed3p.jpg",
    
  ],
  wed4: [
    "/images/wed4.jpg",   
    "/images/wed4a.jpg",
    "/images/wed4b.jpg",
    "/images/wed4c.jpg",
    "/images/wed4d.jpg",
  ],
  wed5: [
    "/images/wed5.jpg",
    "/images/wed5a.jpg",
    "/images/wed5b.jpg",
  ],
  model1: [
    "/images/model1.jpg",
    "/images/model1a.jpg",
    "/images/model1b.jpg",
    "/images/model1c.jpg",
    "/images/model1d.jpg",
    "/images/model1e.jpg",
    "/images/model1f.jpg",
    "/images/model1g.jpg",
    "/images/model1h.jpg",
    "/images/model1i.jpg",
    "/images/model1j.jpg",
  ],
  business1: [
    "/images/real1.jpg",
    "/images/real1a.jpg",
    "/images/real1b.jpg",
    "/images/real1c.jpg",
    "/images/real1d.jpg",
    "/images/real1e.jpg",
  ],

  business2: [
    "/images/real2.jpg",
    "/images/real2a.jpg",
    "/images/real2b.jpg",
    "/images/real2c.jpg",
    "/images/real2d.jpg",
    
  ],

  business3: [
    "/images/real3.jpg",
    "/images/real3a.jpg",
    "/images/real3b.jpg",
    "/images/real3c.jpg",

  ],
  
};




const AlbumPage = () => {
  const { albumId } = useParams();
  console.log("Album ID from URL:", albumId);
  const photos = albums[albumId];
if (!photos) {
  console.error("No album found for:", albumId);
}


  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 font-[Philosopher]">
        Album: {albumId}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Album ${albumId} ${index}`}
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};


export default AlbumPage;

import React from 'react'

const Gallery = (props) => {
  const { gallery } = props
  return (
    <div className="content">
      <section className="grid">
        {gallery.map( (image, index) => (
          <div
            key={image.id}
          >
            <img
              src={image.urls.small}
              alt={image.description}
            />
          </div>
        ))}
      </section>
    </div>
  )
}
export default Gallery
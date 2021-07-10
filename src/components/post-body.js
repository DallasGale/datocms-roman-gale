import React from "react";
import Image from "gatsby-image";
import { StructuredText } from "react-datocms";

export default function PostBody({ content, gallery }) {
  console.log("gallery", gallery)
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-blue">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            if (record.__typename === "DatoCmsImageBlock") {
              return <Image fluid={record.image.fluid} />;
            }

            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />

        {
           gallery !== null  && (
            <div class="gallery">
              {
                gallery.map((img) => {
                  return (
                    <div className="gallery__item">
                      <Image fluid={img.fluid} />
                    </div>
                  )
                 })
              }
            </div>
           )
           }

      </div>
    </div>
  );
}

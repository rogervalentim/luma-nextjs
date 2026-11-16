"use client";

interface CollageImage {
  src: string;
  ratio: string;
  alt: string;
  className?: string;
}

interface CollageColumn {
  id: string;
  className: string;
  images: CollageImage[];
}

const columns: CollageColumn[] = [
  {
    id: "col-1",
    className: "items-end pt-[calc(var(--stage-width)*0.155)]",
    images: [
      {
        src: "/community-group/community-1.png",
        ratio: "102.722 / 154.083",
        alt: "International student smiling outdoors",
        className: "w-[74.42%] rounded-none",
      },
      {
        src: "/community-group/community-2.png",
        ratio: "138.033 / 207.049",
        alt: "Teacher assisting a student during class",
        className: "w-full",
      },
    ],
  },
  {
    id: "col-2",
    className: "pt-[calc(var(--stage-width)*0.025)]",
    images: [
      {
        src: "/community-group/community-3.png",
        ratio: "102.722 / 170.134",
        alt: "Student studying with books",
        className: "w-full",
      },
      {
        src: "/community-group/community-4.png",
        ratio: "102.722 / 172.541",
        alt: "Portrait of a smiling teacher",
        className: "w-full",
      },
      {
        src: "/community-group/community-5.png",
        ratio: "102.722 / 128.403",
        alt: "Students collaborating on a project",
        className: "w-full",
      },
    ],
  },
  {
    id: "col-3",
    className: "pt-[calc(var(--stage-width)*0.055)]",
    images: [
      {
        src: "/community-group/community-6.png",
        ratio: "102.722 / 137.23",
        alt: "Student taking notes in a notebook",
        className: "w-full",
      },
      {
        src: "/community-group/community-7.png",
        ratio: "102.722 / 138.033",
        alt: "Educator explaining a concept",
        className: "w-full",
      },
      {
        src: "/community-group/community-8.png",
        ratio: "102.722 / 154.083",
        alt: "Student holding a laptop",
        className: "w-full",
      },
    ],
  },
  {
    id: "col-4",
    className: "justify-center h-full pt-[calc(var(--stage-width)*0.02)]",
    images: [
      {
        src: "/community-group/community-9.png",
        ratio: "128.403 / 204.642",
        alt: "Group of international students talking",
        className: "w-full",
      },
      {
        src: "/community-group/community-10.png",
        ratio: "102.722 / 132.415",
        alt: "Student smiling in the library",
        className: "w-[80%]",
      },
    ],
  },
];

const baseImageWrapperClasses = "rounded-[calc(var(--stage-width)*0.00772)]";

const imgShadowClasses =
  "block size-full object-cover drop-shadow-[0_calc(var(--stage-width)*0.00617)_calc(var(--stage-width)*0.00926)_rgb(0_0_0/10%)] drop-shadow-[0_0_calc(var(--stage-width)*0.00617)_rgb(0_0_0/7%)]";

export function CommunityCollage() {
  return (
    <div
      role="region"
      aria-label="Learning experiences"
      className="relative grid w-(--stage-width) shrink-0 aspect-520/523 grid-cols-[26.545%_19.754%_19.754%_24.693%] gap-x-[3.077%] items-start [--stage-width:min(520px,calc(100vw-32px))]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 z-0 aspect-square w-[96.154%] -translate-x-1/2 rounded-full bg-primary-blue-light"
      />

      {columns.map((column, columnIndex) => (
        <div
          key={column.id}
          className={`relative z-1 flex min-w-0 flex-col gap-[calc(var(--stage-width)*0.02469)] ${column.className}`}
        >
          {column.images.map((image, imageIndex) => (
            <div
              key={image.src}
              style={{ aspectRatio: image.ratio }}
              className={`${baseImageWrapperClasses} ${image.className ?? ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                data-slot={`${columnIndex + 1}-${imageIndex + 1}`}
                className={imgShadowClasses}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

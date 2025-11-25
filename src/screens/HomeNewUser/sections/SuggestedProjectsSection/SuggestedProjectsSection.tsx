import { MapPinIcon, StarIcon, UsersIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const coursesData = [
  {
    title: "Digital Strategy 101",
    rating: 4.5,
    tags: ["SEO Basics", "Content Marketing"],
    image: "/frame-33.png",
  },
  {
    title: "Digital Marketing",
    rating: 4.0,
    tags: ["SEM Basics", "Data Analytics"],
    image: "/frame-33-1.png",
  },
];

const projectsData = [
  {
    title: "Flow- Finance management",
    location: "Online",
    members: "4/7 Members",
    tags: ["Marketing", "UX", "CSE"],
    image: "/frame-123.png",
  },
  {
    title: "AI Concepts and Strategy",
    location: "Online",
    members: "2/7 Members",
    tags: ["Marketing", "IT", "UX"],
    image: "/frame-124.png",
  },
  {
    title: "FinFlow The Student Wallet",
    location: "Online",
    members: "3/6 Members",
    tags: ["Marketing", "UX", "AI/ML"],
    image: null,
  },
];

export const SuggestedProjectsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-6 p-2.5 w-full max-w-[400px] mx-auto">
      <header className="flex items-center justify-between w-full">
        <h2 className="font-title-large font-[number:var(--title-large-font-weight)] text-[#01517d] text-[length:var(--title-large-font-size)] tracking-[var(--title-large-letter-spacing)] leading-[var(--title-large-line-height)] [font-style:var(--title-large-font-style)]">
          Courses
        </h2>
        <button className="font-label-large font-[number:var(--label-large-font-weight)] text-[#01517d] text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] [font-style:var(--label-large-font-style)]">
          See All
        </button>
      </header>

      <div className="flex flex-col gap-6 w-full">
        {coursesData.map((course, index) => (
          <Card key={index} className="border-none shadow-none bg-transparent">
            <CardContent className="p-0 flex gap-5">
              <div className="flex-1 flex flex-col gap-3">
                <h3 className="font-label-large font-[number:var(--label-large-font-weight)] text-black text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] [font-style:var(--label-large-font-style)]">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2.5">
                  {[...Array(4)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-3 h-3 fill-current text-yellow-400"
                    />
                  ))}
                  <StarIcon className="w-3 h-3 text-gray-300" />
                  <span className="font-body-small font-[number:var(--body-small-font-weight)] text-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                    {course.rating}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {course.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="rounded-[10px] border-[#01517d] px-[15px] py-[5px] h-8 font-label-large font-[number:var(--label-large-font-weight)] text-black text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] [font-style:var(--label-large-font-style)]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div
                className="w-[120px] h-[114px] rounded-[15px] border border-solid border-[#01517d] bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${course.image})` }}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <header className="flex items-center justify-between w-full">
        <h2 className="font-title-large font-[number:var(--title-large-font-weight)] text-[#01517d] text-[length:var(--title-large-font-size)] tracking-[var(--title-large-letter-spacing)] leading-[var(--title-large-line-height)] [font-style:var(--title-large-font-style)]">
          Suggested Projects
        </h2>
        <button className="font-body-small font-[number:var(--body-small-font-weight)] text-[#01517d] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
          See All
        </button>
      </header>

      <div className="flex flex-col gap-6 w-full">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className="rounded-[20px] overflow-hidden border border-solid border-[#c2e0f0] shadow-none"
          >
            <CardContent className="p-0">
              <div
                className={`w-full h-[164px] bg-cover bg-center ${
                  !project.image ? "bg-[#c2e0f0]" : ""
                }`}
                style={
                  project.image
                    ? { backgroundImage: `url(${project.image})` }
                    : {}
                }
              />

              <div className="bg-white p-3.5 flex flex-col gap-3">
                <h3 className="font-label-large font-[number:var(--label-large-font-weight)] text-black text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] [font-style:var(--label-large-font-style)]">
                  {project.title}
                </h3>

                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-6 h-6" />
                    <span className="font-body-medium font-[number:var(--body-medium-font-weight)] text-black text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                      {project.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <UsersIcon className="w-6 h-6" />
                    <span className="font-body-medium font-[number:var(--body-medium-font-weight)] text-black text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                      {project.members}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-5 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="rounded-[10px] border-[#01517d] px-[15px] py-[5px] h-8 [font-family:'Inter',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
